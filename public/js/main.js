const container = document.getElementById('posts-container');

async function loadPosts() {
  const posts = await getPosts();

  container.innerHTML = posts.map(post => `
    <div class="post">
      <h2>${post.title}</h2>
      <p>${post.content.substring(0, 100)}...</p>
      <a href="post.html?id=${post.id}">Read more</a>
    </div>
  `).join('');
}

loadPosts();