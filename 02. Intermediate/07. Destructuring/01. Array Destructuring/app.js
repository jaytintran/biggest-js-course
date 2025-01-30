// ------------- ARRAY DESTRUCTURING -------------

// Destructuring allows us to "unpack" values from data-structures (Arrays, objects) into separate distinct variables.

const helloIn5Languages = ["hi", "bonjour", "guten tag", "ciao", "xin chao"];
const [a, b, c, d, f] = helloIn5Languages;
console.log(a, b, c, d, f); // hi, bonjour, guten tag, ciao, xin chao

// Skipping Elements
const [first, , , , last] = helloIn5Languages;
console.log(first, last); // hi, xin chao

// Using Rest Operator
const [firstLang, ...rest] = helloIn5Languages;
console.log(first, rest); // hi, [ 'bonjour', 'guten tag', 'ciao', 'xin chao' ]

// Default Values
let var1, var2;
[var1 = 1, var2 = 2] = [a, b];
console.log(var1, var2); // hi, bonjour

// Parsing an Array Returned from a Function
function getArray() {
  return [1, 2, 3, 4];
}
const [a1, a2, a3, a4] = getArray();
console.log(a1, a2, a3, a4); // 1, 2, 3, 4

// Ignoring Some Returned Values
const [b1, b2, , b4] = getArray();
console.log(b1, b2, b4); // 1, 2, 4

// Challenge
const colors = ["red", "orange", "yellow", "green"];
let color1, color2, color3;
[color1, color2, color3] = colors;
console.log(color1, color2, color3); // red, orange, yellow

// Nested Array Destructuring
const actors = [
  ["Tom", "Hanks"],
  ["Brad", "Pitt"],
];

const [[actor1, actor2], [actor3, actor4]] = actors;
