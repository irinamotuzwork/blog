// server.js
// Production-ready Node.js + Express backend for blog API

const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// ----------------------------
// Middleware
// ----------------------------
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

// ----------------------------
// File Path
// ----------------------------
const filePath = path.join(__dirname, 'server', 'posts.json');

// ----------------------------
// Utility Functions
// ----------------------------

// Read posts safely
const getPosts = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        // File not found or invalid JSON → return empty array
        return [];
    }
};

// Save posts safely
const savePosts = async (posts) => {
    await fs.writeFile(filePath, JSON.stringify(posts, null, 2));
};

// Validate input
const validatePost = (title, content) => {
    if (!title || typeof title !== 'string') return "Valid title required";
    if (!content || typeof content !== 'string') return "Valid content required";
    return null;
};

// ----------------------------
// Routes
// ----------------------------

// GET all posts
app.get('/api/posts', async (req, res, next) => {
    try {
        const posts = await getPosts();
        res.json(posts);
    } catch (err) {
        next(err);
    }
});

// GET single post
app.get('/api/posts/:id', async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const posts = await getPosts();

        const post = posts.find(p => p.id === id);

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.json(post);
    } catch (err) {
        next(err);
    }
});

// CREATE post
app.post('/api/posts', async (req, res, next) => {
    try {
        const { title, content } = req.body;

        const error = validatePost(title, content);
        if (error) {
            return res.status(400).json({ error });
        }

        const posts = await getPosts();

        const newPost = {
            id: Date.now(),
            title,
            content,
            createdAt: new Date().toISOString()
        };

        posts.push(newPost);
        await savePosts(posts);

        res.status(201).json(newPost);
    } catch (err) {
        next(err);
    }
});

// UPDATE post
app.put('/api/posts/:id', async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const { title, content } = req.body;

        const posts = await getPosts();
        const post = posts.find(p => p.id === id);

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        // Partial update
        if (title !== undefined) {
            if (typeof title !== 'string') {
                return res.status(400).json({ error: "Invalid title" });
            }
            post.title = title;
        }

        if (content !== undefined) {
            if (typeof content !== 'string') {
                return res.status(400).json({ error: "Invalid content" });
            }
            post.content = content;
        }

        post.updatedAt = new Date().toISOString();

        await savePosts(posts);
        res.json(post);
    } catch (err) {
        next(err);
    }
});

// DELETE post
app.delete('/api/posts/:id', async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const posts = await getPosts();

        const filtered = posts.filter(p => p.id !== id);

        if (filtered.length === posts.length) {
            return res.status(404).json({ error: "Post not found" });
        }

        await savePosts(filtered);
        res.json({ message: "Post deleted" });
    } catch (err) {
        next(err);
    }
});

// ----------------------------
// Error Handling Middleware
// ----------------------------
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// ----------------------------
// Start Server
// ----------------------------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});