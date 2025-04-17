# Fancy Text Formatter Product Requirements Document (PRD)

## Change Log
| Date       | Description                        |
|------------|------------------------------------|
| 2025-04-16 | Successfully migrated the project from Vite to Next.js using GPT-4.1. |
| 2025-02-04 | First-time use of Cursor + Claude 3.5 to validate ideas and implementation. |

## 1. Background
On social media and messaging platforms, users often want to highlight their text using special effects such as bold, italic, serif, or sans-serif styles. Most platforms do not support rich text editing, so Unicode special characters are used to achieve these effects. Fancy Text Formatter provides a convenient web tool for generating stylized English text with various font effects.

## 2. Product Goals
- Provide a simple and user-friendly web tool to convert regular English text into stylized text with different effects (Bold, Italic, Serif, Sans, and all four combinations).
- Support one-click copy for easy sharing on platforms like WhatsApp, Twitter, Facebook, etc.
- Ensure accurate conversion, a modern interface, and smooth user experience.
- Be extensible for more styles in the future.

## 3. Tech Stack
- **Next.js** (with React, App Router) for frontend and routing
- **TypeScript** for type safety and maintainability
- **CSS3** (pure CSS, no external UI libraries) for styling
- **Unicode text transformation** (custom logic for text effects)
- **Vercel** for deployment

## 4. Core Features
1. **Text Input**: Users can input up to 2000 characters of English text (with live character count and max limit enforced).
2. **Style Conversion**: Automatically generate four stylized results:
   - Bold Serif
   - Bold Sans
   - Italic Serif
   - Italic Sans
3. **Character Support**: Only English letters and numbers are converted; all other characters (including Chinese, punctuation, spaces, and newlines) are preserved exactly as input.
4. **One-Click Copy**: Each result area has a copy button to copy the stylized text to the clipboard, with a modern feedback indicator (animated checkmark).
5. **Live Character Count**: Display the current character count and maximum limit below the input box.
6. **User Feedback**: Show friendly messages for empty input or copy failures (console error for copy failure).
7. **Modern UI/UX**: Apple-inspired, colorful gradients, soft cards, dashed borders, and elegant typography.
8. **Extensibility**: The system is designed to easily add more styles in the future.

## 5. UI Layout & Visual Design
- **Header**: Sticky, colorful gradient bar with bold title.
- **Background**: Soft, multi-stop pastel gradient (Apple-inspired).
- **Input Area**: Centered card with matching width to result cards, modern padding, and live character count.
- **Result Grid**: 2x2 grid layout displaying four result cards:
  - Each card has a title bar (light blue/gray), a dashed border around the content, and a modern copy button.
  - Card backgrounds are white, with soft blue/purple accents and subtle shadows.
  - Copy feedback uses a blue checkmark icon.
- **Responsiveness**: Layout and font choices ensure usability on both desktop and mobile.

## 6. User Stories
- As a social media user, I want to quickly generate stylized English text so I can stand out in my posts or messages.
- As a marketer, I want to copy the generated text with one click to improve my workflow.
- As a general user, I want a clean and intuitive interface that requires no learning curve.
- As a user, I want the app to look beautiful and modern, with a touch of color and elegance.

## 7. Acceptance Criteria
- [x] The input box supports up to 2000 characters; input beyond this limit is not accepted.
- [x] After clicking the "Generate" button, four result areas display the converted text in Bold Serif, Bold Sans, Italic Serif, and Italic Sans styles.
- [x] Each result area has a copy button that copies the text to the clipboard and shows a success message (animated checkmark).
- [x] If the input is empty and the user clicks "Generate", a friendly warning is shown (future improvement: UI message).
- [x] The tool supports English letters and numbers for stylization; all other characters are preserved exactly as input.
- [x] The UI is clean, modern, colorful, and works on all major browsers.
- [x] The system is designed to allow easy addition of new styles in the future.
- [x] The app is deployed and works on Vercel.

## 8. Final Implementation Notes
- **Unicode Limitation**: Italic styles for numbers are not available in Unicode, so numbers remain unchanged in italic styles.
- **Copy Feedback**: Uses a modern blue checkmark icon for success, with error logging for failures.
- **Apple-Inspired Design**: The app uses gradients, pastel colors, and soft cards for a visually appealing, modern look.
- **No external UI libraries**: All styling is custom and uses pure CSS/inline styles for full control.

## 9. Testing & Coverage
- **Unit Testing**: The project uses Jest, React Testing Library, and ts-jest for unit testing.
- **Test Location**: All test files are placed in the `tests/` directory, separate from source code.
- **Coverage**: As of now, the core text transformation logic (`fancyText.ts`) is covered 100% by unit tests.
- **How to Run**:
  - Run all tests: `npm test`
  - Run with coverage: `npm run test:coverage`
  - View detailed HTML coverage report: open `coverage/lcov-report/index.html` after running coverage.
- **Recommendation**: Add more tests for UI components and future features to maintain high coverage.

---

**Status:** All core features and design goals have been implemented as described above.
