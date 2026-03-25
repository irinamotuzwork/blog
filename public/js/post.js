const container = document.getElementById('post-container');

// Extract ID from URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

// Check for valid ID
if (!id) {
  container.innerHTML = "<p>Post not found.</p>";
} else {
  loadPost(id);
}

/**
 * Fetch and render a single post
 * @param {string} id - Post ID from URL
 */
async function loadPost(id) {
  try {
    container.innerHTML = "<p>Loading post...</p>";

    const post = await getPost(id); // Fetch post from API

    if (!post) {
      container.innerHTML = "<p>Post not found.</p>";
      return;
    }

    // Render post content
    container.innerHTML = `
      <h1>${post.title}</h1>
      <p>${post.content}</p>
      <div class="post-actions">
        <button id="delete-btn">Delete</button>
        <a href="create.html?id=${post.id}">Edit</a>
      </div>
    `;

    // Attach delete handler
    document.getElementById('delete-btn').addEventListener('click', () => deleteCurrentPost(id));

  } catch (error) {
    console.error("Error loading post:", error);
    container.innerHTML = "<p>Failed to load post.</p>";
  }
}

/**
 * Delete current post and redirect
 * @param {string} id - Post ID to delete
 */
async function deleteCurrentPost(id) {
  try {
    await deletePost(id); // Call API
    window.location.href = 'index.html';
  } catch (error) {
    console.error("Error deleting post:", error);
    alert("Failed to delete post.");
  }
}