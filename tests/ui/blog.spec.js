class BlogPage {
  constructor(page) {
    this.page = page;
    this.body = page.locator('body');
  }

  async goto() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }

  async getBodyText() {
    return await this.body.textContent();
  }

  async isBodyVisible() {
    return await this.body.isVisible();
  }
}

module.exports = { BlogPage };