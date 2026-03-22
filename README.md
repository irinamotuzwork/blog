# My Personal Blog – QA Portfolio

[![CI](https://github.com/irinamotuzwork/blog/actions/workflows/main.yml/badge.svg)](https://github.com/irinamotuzwork/blog/actions)

## Project Overview
This is a full-stack blog application built to demonstrate professional QA engineering standards across UI, API, and End-to-End (E2E) testing layers. The project focuses on automated validation, test maintainability, and CI/CD integration.

- **Backend:** Node.js + Express  
- **Frontend:** HTML, CSS, JavaScript  
- **Testing:** Playwright (UI + API + E2E)  
- **Architecture:** Page Object Model (POM) for test scalability  
- **CI/CD:** GitHub Actions  

---

## Table of Contents
- [Tech Stack](#tech-stack)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Automation & QA Strategy](#automation--qa-strategy)
- [Manual Testing Checklist](#manual-testing-checklist)
- [CI/CD & Observability](#cicd--observability)
- [How to Run](#how-to-run)
- [License](#license)
- [Contact Information](#contact-information)

---

## Tech Stack
- **Languages:** JavaScript (ES6+)
- **Frameworks:** Node.js, Express.js
- **Automation:** Playwright
- **CI/CD:** GitHub Actions
- **Reporting:** Playwright HTML Reporter

---

## Features

### Core Features (MVP)
- **Post Management (CRUD):** Full lifecycle of blog posts (Create, Read, Update, Delete).  
- **Navigation:** Dynamic routing for post details and 404 error handling for invalid paths.  
- **UI States:** Validated loading, empty, and error states.  
- **Form Validation:** Client-side and server-side enforcement of required fields.  

---

## API Endpoints
The following endpoints are validated for both functional correctness and schema integrity.

| Method | Endpoint | Description | Expected Success |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/posts` | List all blog posts | `200 OK` |
| **GET** | `/api/posts/:id` | View a single post | `200 OK` |
| **POST** | `/api/posts` | Create a new post | `201 Created` |
| **PUT** | `/api/posts/:id` | Update an existing post | `200 OK` |
| **DELETE** | `/api/posts/:id` | Remove a post | `204 No Content` |

---

## Automation & QA Strategy

### UI Testing (Playwright)
- **Design Pattern:** Implemented using the **Page Object Model (POM)** to decouple test logic from UI selectors, ensuring a maintainable and scalable suite.
- **Coverage:** Validates DOM elements, navigation flow, and CSS-driven UI states (error/empty).
- **Cross-Browser:** Configured to run across Chromium, Firefox, and WebKit to ensure cross-platform compatibility.

### API Testing
- **Contract Testing:** Verifies response structures, headers, and status codes.
- **Negative Testing:** Validates application resilience against invalid IDs, empty payloads, and malformed JSON.

### End-to-End (E2E) Testing
- Validates the "Happy Path": Creating a post via the UI, verifying its existence in the API, and ensuring it persists after a page refresh.

### Test Strategy Highlights
- **Test Pyramid:** High-volume API tests for speed, supported by critical UI and E2E flows.
- **Isolation:** Tests are designed to be independent and idempotent, using fresh data states for each run.
- **Reporting:** Automatic generation of HTML reports for every test run.

---

## Manual Testing Checklist

### Functional & Edge Cases
- [ ] **CRUD:** Verify post persistence after browser restart.
- [ ] **Validation:** Submit forms with whitespace-only strings or special characters.
- [ ] **Resilience:** Verify UI behavior when the backend API is unreachable (Error state handling).

### UI/UX & Accessibility
- [ ] **Responsiveness:** Verify layout integrity on mobile and tablet breakpoints.
- [ ] **Keyboard Nav:** Ensure all buttons/links are reachable and actionable via `Tab` and `Enter`.

---

## CI/CD & Observability
- **Automated Triggers:** GitHub Actions executes the full test suite on every `push` and `pull_request`.
- **Failure Artifacts:** On test failure, the CI pipeline automatically captures and saves **Playwright Traces** and **Video Recordings** as build artifacts for rapid debugging.

---

## How to Run

### 1. Clone Repository
```bash
git clone https://github.com/irinamotuzwork/blog.git
cd blog

# Install dependencies
npm install

# Start the local server
# Keep this terminal window open
npm start

# Run Playwright tests (headless)
npm test

# Open Playwright Report
npx playwright show-report


