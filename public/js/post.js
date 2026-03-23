const container = document.getElementById('post-container');

// Step 1: Extract ID from URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

// Add this console log to check ID extraction
console.log("Post ID from URL:", id);

async function loadPost() {
  // Step 2: Fetch post from API
  const post = await getPost(id);

  // Optional: Log API response to check step 2
  console.log("API response:", post);

  // Step 3: Render post
  container.innerHTML = `
    <h1>${post.title}</h1>
    <p>${post.content}</p>

    <button onclick="deleteCurrentPost()">Delete</button>
    <a href="create.html?id=${post.id}">Edit</a>
  `;
}


async function deleteCurrentPost() {
  await deletePost(id);
  window.location.href = 'index.html';
}

// Load the post
loadPost();

