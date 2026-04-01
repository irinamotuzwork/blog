cat > pages/BlogPage.js << 'EOF'
class BlogPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }
}

module.exports = { BlogPage };
EOF