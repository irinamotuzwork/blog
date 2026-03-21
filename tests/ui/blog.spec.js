const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toHaveText('My Blog');
});

test('posts are visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const posts = await page.locator('.post').count();
  expect(posts).toBeGreaterThan(0);
});