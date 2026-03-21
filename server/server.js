const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Load posts
const getPosts = () => {
    const data = fs.readFileSync('./server/posts.json');
    return JSON.parse(data);
};

// Save posts
const savePosts = (posts) => {
    fs.writeFileSync('./server/posts.json', JSON.stringify(posts, null, 2));
};

// Get all posts
app.get('/api/posts', (req, res) => {
    res.json(getPosts());
});

// Get single post
app.get('/api/posts/:id', (req, res) => {
    const posts = getPosts();
    const post = posts.find(p => p.id == req.params.id);
    res.json(post);
});

// Create post
app.post('/api/posts', (req, res) => {
    const posts = getPosts();
    const newPost = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content
    };

    posts.push(newPost);
    savePosts(posts);

    res.json(newPost);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});