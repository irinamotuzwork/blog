// API Testing Functionality for Blog

// Helper function to display results
function displayResult(elementId, data, isError = false) {
  const element = document.getElementById(elementId);
  element.innerHTML = '';
  element.className = 'api-result ' + (isError ? 'error' : 'success');
  
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(data, null, 2);
  element.appendChild(pre);
}

// Helper function to clear results
function clearResult(elementId) {
  const element = document.getElementById(elementId);
  element.innerHTML = '';
  element.className = 'api-result';
}

// GET ALL POSTS
document.getElementById('get-all-btn').addEventListener('click', async () => {
  try {
    clearResult('get-all-result');
    const posts = await getPosts();
    displayResult('get-all-result', posts);
  } catch (error) {
    console.error('Error fetching all posts:', error);
    displayResult('get-all-result', { error: 'Failed to fetch posts' }, true);
  }
});

// GET SINGLE POST
document.getElementById('get-single-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    clearResult('get-single-result');
    const id = document.getElementById('get-single-id').value;
    const post = await getPost(id);
    displayResult('get-single-result', post);
  } catch (error) {
    console.error('Error fetching post:', error);
    displayResult('get-single-result', { error: 'Failed to fetch post' }, true);
  }
});

// CREATE POST
document.getElementById('create-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    clearResult('create-result');
    const title = document.getElementById('create-title').value;
    const content = document.getElementById('create-content').value;
    
    const newPost = await createPost({ title, content });
    displayResult('create-result', newPost);
    
    // Clear form
    document.getElementById('create-title').value = '';
    document.getElementById('create-content').value = '';
  } catch (error) {
    console.error('Error creating post:', error);
    displayResult('create-result', { error: 'Failed to create post' }, true);
  }
});

// UPDATE POST
document.getElementById('update-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    clearResult('update-result');
    const id = document.getElementById('update-id').value;
    const title = document.getElementById('update-title').value;
    const content = document.getElementById('update-content').value;
    
    const updateData = {};
    if (title) updateData.title = title;
    if (content) updateData.content = content;
    
    const updatedPost = await updatePost(id, updateData);
    displayResult('update-result', updatedPost);
    
    // Clear form
    document.getElementById('update-id').value = '';
    document.getElementById('update-title').value = '';
    document.getElementById('update-content').value = '';
  } catch (error) {
    console.error('Error updating post:', error);
    displayResult('update-result', { error: 'Failed to update post' }, true);
  }
});

// DELETE POST
document.getElementById('delete-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    clearResult('delete-result');
    const id = document.getElementById('delete-id').value;
    
    const result = await deletePost(id);
    displayResult('delete-result', result);
    
    // Clear form
    document.getElementById('delete-id').value = '';
  } catch (error) {
    console.error('Error deleting post:', error);
    displayResult('delete-result', { error: 'Failed to delete post' }, true);
  }
});
