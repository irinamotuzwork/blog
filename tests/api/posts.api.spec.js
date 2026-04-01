const { test, expect } = require('@playwright/test');

// 1. GET all posts
test('GET /posts', async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}/api/posts`);
  expect(response.ok()).toBeTruthy();

  const posts = await response.json();
  expect(Array.isArray(posts)).toBeTruthy();
});

// 2. POST a new post
test('POST /posts', async ({ request, baseURL }) => {
  const newPost = { title: "Test Post", content: "This is a test." };
  const response = await request.post(`${baseURL}/api/posts`, { data: newPost });

  expect(response.ok()).toBeTruthy();
  const post = await response.json();
  expect(post).toMatchObject({ title: "Test Post", content: "This is a test." });
});

// 3. GET single post
test('GET /posts/:id', async ({ request, baseURL }) => {
  // create a post first
  const createRes = await request.post(`${baseURL}/api/posts`, {
    data: { title: 'Temp', content: 'Temp' }
  });
  const created = await createRes.json();

  // fetch it
  const response = await request.get(`${baseURL}/api/posts/${created.id}`);
  expect(response.ok()).toBeTruthy();

  const post = await response.json();
  expect(post.id).toBe(created.id);
});

// 4. PUT update a post
test('PUT /posts/:id', async ({ request, baseURL }) => {
  const createRes = await request.post(`${baseURL}/api/posts`, {
    data: { title: 'Old', content: 'Old content' }
  });
  const created = await createRes.json();

  const response = await request.put(`${baseURL}/api/posts/${created.id}`, {
    data: { title: 'Updated title' }
  });

  expect(response.ok()).toBeTruthy();

  const updated = await response.json();
  expect(updated.title).toBe('Updated title');
});

// 5. DELETE a post
test('DELETE /posts/:id', async ({ request, baseURL }) => {
  const createRes = await request.post(`${baseURL}/api/posts`, {
    data: { title: 'To delete', content: 'temp' }
  });
  const created = await createRes.json();

  const response = await request.delete(`${baseURL}/api/posts/${created.id}`);
  expect(response.ok()).toBeTruthy();

  // verify deletion
  const check = await request.get(`${baseURL}/api/posts/${created.id}`);
  expect(check.status()).toBe(404);
});