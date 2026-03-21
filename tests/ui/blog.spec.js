const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  await page.goto('http://localhost:3000', {
    waitUntil: 'domcontentloaded'
  });

  await expect(page.locator('body')).toBeVisible();
});

test('posts are visible', async ({ page }) => {
  await page.goto('http://localhost:3000', {
    waitUntil: 'domcontentloaded'
  });

  // give app a moment to render
  await page.waitForTimeout(1000);

  const content = await page.locator('body').textContent();
  expect(content.length).toBeGreaterThan(0);
});