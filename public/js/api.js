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
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

async function updatePost(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

async function deletePost(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
  return res.json();
}