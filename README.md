# My Personal Blog – QA Portfolio

## Project Overview
- Full-stack blog built with Node/Express (backend) + HTML/CSS/JS (frontend)
- Features CRUD posts, navigation, and optional login/comments
- Designed for manual + automated QA testing

## Features
- Create, read, update, delete posts
- Post navigation & empty states
- Optional: login/auth, comments, search/pagination

## Automation
- UI tests using Playwright: homepage load, navigation, post creation, invalid inputs
- API tests using Playwright: CRUD endpoints, response validation, edge cases
- End-to-end tests: create post via API → verify in UI

## Test Strategy
- Automated vs manual coverage
- High-risk areas and critical flows
- Test pyramid (UI/API/manual)
- Release criteria

## CI/CD
- GitHub Actions runs UI + API tests on every push
- Test results output included

## How to Run
1. Clone repo
2. Install dependencies:
```bash
npm install
npx playwright install