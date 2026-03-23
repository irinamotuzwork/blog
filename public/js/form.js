const form = document.getElementById('post-form');

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function init() {
  if (id) {
    const post = await getPost(id);
    document.getElementById('title').value = post.title;
    document.getElementById('content').value = post.content;
  }
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    title: document.getElementById('title').value,
    content: document.getElementById('content').value
  };

  if (id) {
    await updatePost(id, data);
  } else {
    await createPost(data);
  }

  window.location.href = 'index.html';
});

init();