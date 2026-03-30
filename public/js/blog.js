// Blog Page Functionality

// Load and display all posts
async function loadPosts() {
  const container = document.getElementById('posts-container');
  
  try {
    const posts = await getPosts();
    
    if (posts.length === 0) {
      container.innerHTML = '<p class="no-posts">No posts yet. Be the first to create one!</p>';
      return;
    }
    
    container.innerHTML = posts.map(post => `
      <article class="post-card">
        <h3 class="post-title">${escapeHtml(post.title)}</h3>
        <p class="post-content">${escapeHtml(post.content)}</p>
        <div class="post-meta">
          <span class="post-id">Post #${post.id}</span>
        </div>
      </article>
    `).join('');
    
  } catch (error) {
    console.error('Error loading posts:', error);
    container.innerHTML = '<p class="error-message">Failed to load posts. Please try again later.</p>';
  }
}

// Helper function to escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Load posts when page loads
document.addEventListener('DOMContentLoaded', loadPosts);