/** @type {import('@playwright/test').PlaywrightTestConfig} */
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  /* Browser / test options */
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Auto start your server before tests */
  webServer: {
    command: 'node server.js',
    port: 3000,
    reuseExistingServer: true,
  },
});