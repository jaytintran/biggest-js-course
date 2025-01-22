/*
HTML Structure:
<div class="example4">Visible text <span style="display: none;">Hidden text</span></div>
*/
let element4 = document.querySelector(".example4");

console.log("innerText:", element4.innerText); // "Visible text"
console.log("textContent:", element4.textContent); // "Visible text Hidden text"
console.log("innerHTML:", element4.innerHTML); // "Visible text <span style=\"display: none;\">Hidden text</span>"

// ----------------------------

// Summary:
/*
1. innerText: Gets/sets visible text content (respects CSS styles like `display: none`).
2. textContent: Gets/sets all text content (ignores CSS styles).
3. innerHTML: Gets/sets HTML content as a string (including nested elements).
*/
