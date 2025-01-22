/* 
1. **Accessing Elements:**
   - document.querySelector(selector) // Selects the first element matching the selector
   - document.querySelectorAll(selector) // Selects all elements matching the selector
   - document.getElementById(id) // Selects the element with the given ID
   - document.getElementsByClassName(className) // Selects all elements with the given class
*/

// ************ DOM SELECTORS ************
// 1. getElementsByTagName
const Allh1 = document.getElementsByTagName("h1");
console.log(Allh1);
Allh1[0].style.color = "blue";

// 2. getElementById
const h2 = document.getElementById("main");
console.log(h2);
h2.style.color = "red";

// 3. getElementsByClassName
const h3 = document.getElementsByClassName("cls");
console.log(h3);
h3[0].style.color = "green";

// 4. querySelector
const h4 = document.querySelector(".cls-1");
console.log(h4);
h4.style.color = "yellow";

// 5. querySelectorAll
const allListItems = document.querySelectorAll("li");
console.log(allListItems);
allListItems.forEach((item) => {
  item.style.textDecoration = "line-through";
});
