/* 
    Scope in JavaScript refers to the accessibility or visibility of variables and functions in different parts of your code.
    It determines where variables can be accessed or modified.

    There are 3 types of scope in JS:
    1. Block Scope
    2. Function Scope
    3. Global Scope

*/

// ----------------------------

// Block Scope
/*

Variables declared with `let` and `const` are block-scoped. This means they are only accessible within the block (inside curly braces `{}`) in which they are defined.

*/

{
  let a = 10;
  const b = 20;
  console.log(a, b); // Accessible here
}
// console.log(a, b); // Error: a and b are not defined outside the block

// Example:
if (true) {
  let x = 5;
  const y = 10;
  console.log(x, y); // Accessible inside the block
}
// console.log(x, y); // Error: x and y are not accessible outside the block

// ----------------------------

// Function Scope
/*

  Variables declared with `var` are function-scoped, meaning they are accessible only within the function where they are defined. 
  `let` and `const` inside functions are also function-scoped.

*/

function exampleFunction() {
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a, b, c); // Accessible inside the function
}
exampleFunction();
// console.log(a, b, c); // Error: a, b, and c are not defined outside the function

// ----------------------------

// Global Scope
/*

  Variables declared outside any function or block are in the global scope. They can be accessed anywhere in the program.

  */

var globalVar = "I am global";
let globalLet = "I am also global";
const globalConst = "I am globally constant";

console.log(globalVar); // Accessible globally
console.log(globalLet); // Accessible globally
console.log(globalConst); // Accessible globally

// Example:
function accessGlobal() {
  console.log(globalVar); // Accessible inside the function
  console.log(globalLet); // Accessible inside the function
  console.log(globalConst); // Accessible inside the function
}
accessGlobal();

// ----------------------------

// Lexical Scope
/*

  Lexical scope refers to the fact that a function's scope is determined by its physical location in the source code.
  Inner functions have access to variables in their outer scope.

  A function can access variables defined in its outer scope.
  But the reverse is not true: the outer function cannot access variables inside an inner function.

*/
function outerFunction() {
  let outerVar = "I'm in outer scope";

  function innerFunction() {
    console.log(outerVar); // Accessible because of lexical scope
  }

  innerFunction();
}
outerFunction();
