/* 

What is an Event is JS?

An event is an action happenned by the user interaction with the webpage, web application.

*/

// ----------- BAD WAY-----------

/* 
Assigning a function to the onclick property overwrites any existing event handler. You cannot attach multiple event listeners to the same element using this approach. If another script or code tries to set onclick, the previous handler will be replaced.

The onclick method doesn't provide the flexibility to manage advanced event handling, such as event delegation, custom options, or passive listeners.

The onclick method doesn't provide the flexibility to manage advanced event handling, such as event delegation, custom options, or passive listeners.
*/

const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  console.log("Hello World");
};

// ----------- GREAT WAY-----------

/* 
You can add multiple event listeners to the same element without overwriting existing ones. This is useful for modular and reusable code.
*/

const best = document.querySelector(".best");

best.addEventListener("click", () => {
  console.log("Yellow");
});

// ----------- Event (e) Object -----------
// It's an event object which contains information about perticular event.

const para = document.querySelector(".para");
const inputExample = document.querySelector("input");
const form = document.querySelector("form");

para.addEventListener("click", (e) => {
  console.log(e);
});

inputExample.addEventListener("input", (e) => {
  console.log(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
});
