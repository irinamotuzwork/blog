const API = 'http://localhost:3000/api/posts';

// Load posts
async function loadPosts() {
    const res = await fetch(API);
    const posts = await res.json();

    const container = document.getElementById('posts');
    container.innerHTML = '';

    posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content.substring(0, 100)}...</p>
            <a href="post.html?id=${post.id}">Read more</a>
        `;
        container.appendChild(div);
    });
}

// Create post
async function createPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
    });

    loadPosts();
}

loadPosts();