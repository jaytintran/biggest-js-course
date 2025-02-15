/* 

JSON (JavaScript Object Notation) is a lightweight data interchange format that's easy for humans to read and write, and easy for machines to parse and generate. 

It’s commonly used to transmit data between a server and a web application as text. A JSON file or string represents data as a collection of key-value pairs (similar to a JavaScript object), and can contain:
- Strings
- Numbers
- Booleans
- Arrays
- Objects
- Null values

When you make an HTTP request using fetch(), the response body is returned as a raw stream of data, not in the format you expect (like a JavaScript object or array). 
This raw stream is typically in text format, but it needs to be parsed into a usable data structure (like an object or array) for your JavaScript code.

The response.json() method is built-in to the Fetch API and is used to:
1. Parse the raw text (JSON string) from the response.
2. Convert it into a JavaScript object or array, which can then be easily manipulated in your code.

Process Flow:
1. The browser sends an HTTP request (like fetch("data.json")).
2. The server responds with data in a JSON format.
3. The response object (from fetch()) is a stream of raw data.
4. To use that data in your JavaScript, you call response.json(), which:
5. Reads the stream
6. Converts it into a JavaScript object or array (depending on the structure of the JSON data)

Why Not Just Use the Response Directly?
- If you don't use response.json(), you'll be dealing with a raw response stream (or text). 
- That means you would have to manually parse the JSON text, which could be error-prone and inefficient. 
- Using response.json() simplifies that process and gives you a ready-to-use JavaScript object. 
- Without it, the data would remain as a string and wouldn't be usable for operations like accessing specific properties (data.books).

*/

const results = document.querySelector(".results");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  renderBooks();
});

async function fetchBooks() {
  try {
    // Get the response from the server (as a stream)
    const response = await fetch("data.json");
    if (!response.ok) throw new Error(`HTTP Error: ${response.statusText}`);

    // Convert the stream to a usable JavaScript object
    const data = await response.json();

    // Now you can work with the data as a normal JavaScript object
    if (!data.books) throw new Error("Missing 'books' in data");
    return data;
  } catch (error) {
    console.log(error);
    return { books: [] };
  }
}

async function renderBooks() {
  const fetchedData = await fetchBooks();
  // Access the 'books' array from the JSON
  const books = fetchedData.books;

  results.innerHTML = ""; // Clear previous results before appending new ones

  books.forEach((book) => {
    const div = document.createElement("div");
    div.innerHTML = `<h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Year: ${book.year}</p>
    <p>Description: ${book.description}</p>`;
    results.appendChild(div);
  });
}
