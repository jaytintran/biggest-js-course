/* 

The fetch() function is a modern and native way to make HTTP requests in JavaScript. 
It provides a Promise-based approach, making it a preferred alternative to older methods like XMLHttpRequest.

When you call fetch(), it starts an asynchronous HTTP request and immediately returns a Promise. This Promise:

Resolves when the request succeeds, returning a Response object.
Rejects only on network errors (e.g., no internet, CORS issues).

*/

// 1st we fetch the file by the syntax: fetch("text.txt")
// 2nd we then use the .then() method with text(): This method returns a Promise, if resolved will return a text body
// 3rd we use .then() with data => console.log(data) - to print the data

const results = document.querySelector(".results");

fetch("text.txt")
  .then((res) => res.text())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

/* This not the best way to approach this because fetch API only rejects on network errors (not other cases) */

/* This is a better approach */
fetch("text.txt")
  .then((res) => {
    if (!res.ok) throw Error(res.statusText);
    return res.text();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Refactored Version
async function renderFile() {
  const response = await fetch("text.txt");
  if (!response.ok) throw Error(response.statusText);
  const data = await response.text();
  results.textContent = data;
}

renderFile();
