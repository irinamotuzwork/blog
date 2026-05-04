# My Personal Blog – QA Automation Portfolio

## Project Overview
This project is a full-stack blog application designed to showcase production-grade QA Engineering practices. It validates application quality across **UI, API, and End-to-End layers** using a unified Playwright framework, with a focus on **modular test architecture, reliability, and CI/CD integration**.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Backend** | Node.js, Express.js |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Automation** | Playwright (UI + API + E2E), TypeScript-ready |
| **Design Pattern** | Page Object Model (POM) |
| **CI/CD** | GitHub Actions |
| **Reporting** | Playwright HTML Reporter, Trace Viewer |

---

## Core Features
- **Full CRUD Operations:** Create, Read, Update, and Delete blog posts.
- **Dynamic Routing:** Seamless navigation for post details.
- **Robust Error Handling:** Custom 404 pages and server-side validation.
- **UI State Management:** Handling of loading states, empty feeds, and error banners.

---

## API Endpoints

| Method | Endpoint | Description | Expected Status |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/posts` | Retrieve all posts | 200 OK |
| `GET` | `/api/posts/:id` | Retrieve single post | 200 OK |
| `POST` | `/api/posts` | Create new post | 201 Created |
| `PUT` | `/api/posts/:id` | Update existing post | 200 OK |
| `DELETE` | `/api/posts/:id` | Delete post | 204 No Content |

---

## QA Strategy & Engineering Decisions

### 1. Test Pyramid Implementation
- **API Tests:** High-speed validation of business logic and data integrity.
- **UI Tests:** Validation of critical user journeys and visual consistency.
- **E2E Tests:** Verification of the complete system flow from the frontend to the database.

### 2. Framework Design
- **Unified Framework:** One tool (Playwright) for both API and UI testing to reduce context switching.
- **Page Object Model (POM):** Decouples test logic from UI locators for high maintainability.
- **Isolation & Idempotency:** Each test is independent with its own data setup; no "leaky" state between runs.
- **API-Driven Setup:** Uses API calls to set up or tear down data for UI tests, significantly increasing execution speed.

### 3. CI/CD & Observability
- **GitHub Actions:** Automated regression suite triggered on every `Push` or `Pull Request`.
- **Failure Analysis:** Automated collection of **Traces, Screenshots, and Video** artifacts for rapid debugging.
- **Cross-Browser Testing:** Validation across Chromium, Firefox, and WebKit (Safari).

---

## AI-Assisted Quality Engineering
This project integrates AI tools into the development lifecycle to:
- **Scenario Discovery:** Using LLMs to brainstorm complex edge cases and boundary values.
- **Locator Optimization:** Leveraging AI to identify more resilient CSS/XPath selectors.
- **Code Refactoring:** Ensuring clean, DRY (Don't Repeat Yourself) code within the automation suite.

---

## Manual Testing Checklist

### Functional & Edge Cases
- [ ] CRUD persistence after page refresh.
- [ ] Form validation (empty fields, whitespace, special characters).
- [ ] API failure handling (simulating offline/500 scenarios).

### UI/UX & Accessibility
- [ ] Responsive design (Mobile, Tablet, Desktop).
- [ ] Keyboard navigation support.
- [ ] Basic accessibility checks (ARIA labels, color contrast).

---

## How to Run

### 1. Setup
```bash
# Clone repository
git clone [https://github.com/irinamotuzwork/blog.git](https://github.com/irinamotuzwork/blog.git)
cd blog

# Install dependencies
npm install

# Install Playwright Browsers
npx playwright install

---

