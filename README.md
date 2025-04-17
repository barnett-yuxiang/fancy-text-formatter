# Fancy Text Formatter

[![codecov](https://codecov.io/gh/barnett-yuxiang/fancy-text-formatter/graph/badge.svg?token=DtyVbAJw8q)](https://codecov.io/gh/barnett-yuxiang/fancy-text-formatter)

A modern web tool to convert English text into stylish Unicode fonts (Bold Serif, Bold Sans, Italic Serif, Italic Sans) with a beautiful, Apple-inspired UI.

## Features
- Convert English letters and numbers to four stylized Unicode formats
- Preserve all other characters (Chinese, punctuation, spaces, newlines)
- One-click copy for each result, with animated feedback
- Live character count (max 2000)
- Responsive, modern, colorful UI (no external UI libraries)

## Tech Stack
- Next.js (App Router, React, TypeScript)
- Pure CSS (custom, no UI libraries)
- Unicode text transformation logic
- Deployed on Vercel

## Deployment
This project is automatically deployed on [Vercel](https://vercel.com/).

To run locally:
```bash
npm install
npm run dev
```

## Running Tests & Coverage

This project uses **Jest** with **React Testing Library** and **ts-jest** for unit testing.

- All test files are located in the `tests/` directory.
- To run tests:
  ```bash
  npm test
  ```
- To run tests with coverage:
  ```bash
  npm run test:coverage
  ```
- To view a detailed coverage report, open `coverage/lcov-report/index.html` in your browser after running the coverage command.

## Test Coverage
- 100% coverage for the core text transformation logic (`fancyText.ts`).
- You are encouraged to add more tests for UI components and other logic in the `tests/` directory.

---

**Author:** barnett-yuxiang
