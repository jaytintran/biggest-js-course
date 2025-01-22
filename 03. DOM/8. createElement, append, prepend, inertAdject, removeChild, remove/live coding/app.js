/* 
DOM Manipulation Methods 
These methods allow you to dynamically create, modify, or remove elements in the DOM.
*/

// ------------------------------------

// createElement()
/*
Creates a new HTML element.
*/
const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div!";
console.log(newDiv); // Logs: <div>I am a new div!</div>

// ------------------------------------

// appendChild()
/*
Adds a new child element to a parent element as the last child.
*/
const parentElement = document.querySelector("body");
parentElement.appendChild(newDiv); // Adds the newDiv to the body

// ------------------------------------

// append()
/*
Adds text nodes or elements to a parent as the last child. 
It’s more flexible than appendChild() because it allows adding multiple elements or text nodes.
*/
const anotherDiv = document.createElement("div");
anotherDiv.textContent = "I am another div!";
parentElement.append("Some text before the div. ", anotherDiv);

// ------------------------------------

// prepend()
/*
Adds elements or text to a parent as the first child.
*/
const firstDiv = document.createElement("div");
firstDiv.textContent = "I am the first div!";
parentElement.prepend(firstDiv); // Adds firstDiv as the first child of body

// ------------------------------------

// insertBefore()
/*
Inserts a new element before an existing child of a parent element.
*/
const newParagraph = document.createElement("p");
newParagraph.textContent = "I am a new paragraph!";
parentElement.insertBefore(newParagraph, newDiv); // Adds newParagraph before newDiv

// ------------------------------------

// insertAdjacentElement()
/*
Inserts an element at a specific position relative to another element.
Positions:
- 'beforebegin': Before the element itself
- 'afterbegin': Just inside the element, before its first child
- 'beforeend': Just inside the element, after its last child
- 'afterend': After the element itself
*/
const adjacentDiv = document.createElement("div");
adjacentDiv.textContent = "I am inserted with insertAdjacentElement!";
newDiv.insertAdjacentElement("afterend", adjacentDiv); // Inserts after newDiv

// ------------------------------------

// removeChild()
/*
Removes a specified child element from its parent.
*/
parentElement.removeChild(newParagraph); // Removes the newParagraph element

// ------------------------------------

// remove()
/*
Removes the element directly.
*/
adjacentDiv.remove(); // Removes the adjacentDiv element

// ------------------------------------

// Summary:
/*
1. `createElement()`: Creates a new element.
2. `appendChild()`: Adds an element as the last child of a parent.
3. `append()`: Adds multiple elements or text nodes as the last child.
4. `prepend()`: Adds elements or text as the first child.
5. `insertBefore()`: Adds an element before a specific child.
6. `insertAdjacentElement()`: Adds an element relative to another element.
7. `removeChild()`: Removes a child from its parent.
8. `remove()`: Removes the element itself.
*/
