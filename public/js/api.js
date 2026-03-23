const BASE_URL = 'http://localhost:3000/api/posts';

async function getPosts() {
  const res = await fetch(BASE_URL);
  return res.json();
}

async function getPost(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}

async function createPost(data) {
  await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}

async function updatePost(id, data) {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}

async function deletePost(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
}