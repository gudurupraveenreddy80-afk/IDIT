# Playwright Test Automation

This repository contains Playwright browser tests for web applications used for learning and QA automation practice.

## Test coverage

The suite includes:

- **OrangeHRM login tests** (`tests/orange.spec.js`)
  - Valid login
  - Invalid password
  - Invalid username
  - Invalid credentials
  - Blank credentials
  - Employee creation using generated names
- **IDIT login tests** (`tests/Login.spec.js`)
  - Login and navigation to Sessions
  - Login navigation verification
  - One skipped test case
- **Playwright smoke tests** (`tests/example.spec.js`)
  - Playwright documentation page title
  - Get Started navigation
- **EMP add test file** (`tests/EMPadd.spec.js`)
  - Currently empty

## Prerequisites

- Node.js (LTS recommended)
- npm
- Internet access for the external test applications

## Installation

```powershell
npm ci
npx playwright install
```

On Linux or CI, install browser system dependencies with:

```bash
npx playwright install --with-deps
```

## Running tests

Run the complete suite:

```powershell
npx playwright test
```

Run one test file:

```powershell
npx playwright test tests/orange.spec.js
```

Run a single test by title:

```powershell
npx playwright test -g "login valid credentials"
```

Run tests in headed mode:

```powershell
npx playwright test --headed
```

Open Playwright UI mode:

```powershell
npx playwright show-report
npx playwright test --ui
```

## Configuration

The test configuration is in `playwright.config.js`.

- Test directory: `tests`
- Default timeout: 60 seconds
- Expect timeout: 100 seconds
- Local workers: 3
- CI workers: 1
- CI retries: 2
- Local retries: 1
- Browser project: Chromium/Desktop Chrome
- Viewport: 2400 x 2400
- Headless mode: enabled
- Traces: recorded
- Screenshots: enabled
- Videos: enabled
- HTML and list reporters: enabled

## Test data

JSON files in `testdata/` provide credentials for tests:

- `login1.json` - OrangeHRM login credentials
- `Login.json` - IDIT login values

Test data may contain environment-specific credentials. Keep real credentials out of source control and prefer environment variables or a secure secret store for sensitive values.

## Project structure

```text
.github/workflows/    GitHub Actions Playwright workflow
testdata/             JSON test data
tests/                Playwright test specifications
playwright.config.js  Playwright configuration
package.json          Project dependencies
package-lock.json     Locked npm dependencies
playwright-report/    Generated HTML report
test-results/         Generated traces, screenshots, and videos
```

Generated folders (`node_modules`, `playwright-report`, `test-results`, and reports) are excluded through `.gitignore`.

## HTML reports

After a test run, open the report with:

```powershell
npx playwright show-report
```

The report is generated in `playwright-report/`.

## Continuous integration

GitHub Actions runs the suite for pushes and pull requests targeting `main` or `master`.

The workflow:

1. Checks out the repository
2. Sets up the Node.js LTS version
3. Runs `npm ci`
4. Installs Chromium and Linux dependencies
5. Runs `npx playwright test`
6. Uploads `playwright-report/` as an artifact
