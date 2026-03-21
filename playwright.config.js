/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  testDir: './tests',
  webServer: {
    command: 'node server/server.js',
    port: 3000,
    reuseExistingServer: true,
  },
};