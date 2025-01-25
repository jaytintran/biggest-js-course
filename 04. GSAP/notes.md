### What is GSAP?

GSAP (GreenSock Animation Platform) is a JS library for creating high performance animations that works seamlessly across all devices.

### Key Features:

1. Animate DOM elements, SVGs, and even JavaScript objects.
2. Control animations with timelines, delays, durations, and easing.
3. Built-in support for smooth transitions and complex effects.

### Installation

Include GSAP in your project:

1. CDN: Add this script tag in your HTML file:
   `
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
   `
2. NPM: Run `npm install gsap` in your project folder, then import it in your JS file:
   `import gsap from "gsap";`

### Basics

```js
const box = document.querySelector(".box");

// Animate the `.box` element
// Moves it 200px to the right and changes opacity to 0.5 over 1 second

gsap.to(box, { duration: 1, x: 200, opacity: 0.5 });
```
