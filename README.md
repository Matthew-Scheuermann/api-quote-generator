# api-quote-generator

**Advice Generator — Requirements**

**Part 1: Setup** (~5 min)

- Create `index.html`, `style.css`, `script.js` in one folder.
- In `index.html`: link your CSS in the `<head>`, and add `<script src="script.js" defer></script>` near the end of `<body>`.
- Build the raw HTML directly in `index.html`:
  - A `<button>` (something like "Get Advice")
  - One empty element (a `<p>` or `<div>`) to hold the advice text

**Part 2: JavaScript** (~10-15 min)

- In `script.js`, grab your button and your text element with `document.querySelector`.
- Add a click listener to the button.
- Inside it, `fetch` from: `https://api.adviceslip.com/advice`
- Convert the response to JSON.
- The response is shaped like `{ slip: { id: ..., advice: "..." } }` — so pull out `result.slip.advice` and set it into your text element using `.textContent`.
- Wrap the fetch in `try/catch` — if it fails, show a fallback message like "Couldn't load advice, try again."

**Part 3: CSS Polish** (~5-10 min)

- Center everything on the page (flexbox works well).
- Add a background color.
- Style the button and text so it looks like a clean little card — padding, rounded corners, decent font size.
