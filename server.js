// server.js
// Node.js + Express backend for a simple blog
// Handles CRUD operations for posts stored in JSON file

const express = require('express');
const fs = require('fs');      // for reading/writing JSON file
const cors = require('cors');  // allow cross-origin requests from frontend

const app = express();
const PORT = 3000;

// ----------------------------
// Middleware
// ----------------------------
app.use(cors());                // allow frontend requests from another origin
app.use(express.json());        // parse JSON request bodies
app.use(express.static('public')); // serve static frontend files (HTML, CSS, JS)

// ----------------------------
// Utility Functions
// ----------------------------

// Load posts from JSON file
const getPosts = () => {
    const data = fs.readFileSync('./server/posts.json', 'utf-8');
    return JSON.parse(data);
};

// Save posts to JSON file
const savePosts = (posts) => {
    fs.writeFileSync('./server/posts.json', JSON.stringify(posts, null, 2));
};

// ----------------------------
// Routes: CRUD
// ----------------------------

// GET all posts
app.get('/api/posts', (req, res) => {
    const posts = getPosts();
    res.json(posts);
});

// GET a single post by ID
app.get('/api/posts/:id', (req, res) => {
    const posts = getPosts();
    const post = posts.find(p => p.id == req.params.id);

    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
});

// CREATE a new post
app.post('/api/posts', (req, res) => {
    const posts = getPosts();

    const newPost = {
        id: Date.now(),                  // unique ID based on timestamp
        title: req.body.title,
        content: req.body.content
    };

    posts.push(newPost);
    savePosts(posts);

    res.status(201).json(newPost);       // return created post
});

// UPDATE a post by ID
app.put('/api/posts/:id', (req, res) => {
    const posts = getPosts();
    const post = posts.find(p => p.id == req.params.id);

    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }

    // Update fields
    post.title = req.body.title;
    post.content = req.body.content;

    savePosts(posts);
    res.json(post);
});

// DELETE a post by ID
app.delete('/api/posts/:id', (req, res) => {
    let posts = getPosts();
    const postExists = posts.some(p => p.id == req.params.id);

    if (!postExists) {
        return res.status(404).json({ error: "Post not found" });
    }

    // Filter out the deleted post
    posts = posts.filter(p => p.id != req.params.id);
    savePosts(posts);

    res.json({ message: "Post deleted" });
});

// ----------------------------
// Start Server
// ----------------------------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});