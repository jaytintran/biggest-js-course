// ---------- REST OPERATOR ----------

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
// It provides a way to represent variadic functions in JavaScript.

// Rest vs. Spread
// Spread is a function that takes in an iterable and expands it into individual elements.
// Rest is a function that takes in an indefinite number of arguments and converts them into an array.

/* 
Spread (...): Breaks things apart (e.g., expand arrays/objects).
Rest (...): Combines things together (e.g., gather remaining values).
*/

// Collects multiple elements into a single array or gathers the "rest" of the properties of an object into a new variable.

// --------------------------------------

/* 

  Use Cases of the Spread Operator:
  - Combine arrays.
  - Copy arrays.
  - Pass array elements as arguments. Here Spread is passed directly into the function when invoked, as an argument.

*/

// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

const arrCopy = [...arr1]; // [1, 2, 3]

// Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

const objCopy = { ...obj1 }; // { a: 1, b: 2 }

// Function arguments
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// --------------------------------------

/* 

  Use Cases of the Rest Operator:
  - Function Parameters: Accepts an indefinite number of arguments. Here Rest is passed as a parameter.
  - Array Destructuring: Gathers the rest of the elements.
  - Object Destructuring: Collects remaining properties.

*/

// Function Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Array Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Object Destructuring
const obj = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, ...remaining } = obj;
console.log(a); // 1
console.log(b); // 2
console.log(remaining); // { c: 3, d: 4 }

// --------------------------------------

// function user(userData) {
//   console.log(userData);
// }

// user("Jay", "24"); // Nothing happens

function user(...userData) {
  console.log(userData);
}

user("Jay", "24"); // ["Jay", "24"]

function introduce(name, age, ...hobbies) {
  console.log(`Hi, my name is ${name}.`);
  console.log(`I'm ${age} years old and I love doing: ${hobbies}.`);
}

introduce("John", 24, "Reading", "Running", "Cooking", "Coding"); // Hi, my name is John. I'm 24 years old and I love doing: Reading, Running, Cooking, Coding
