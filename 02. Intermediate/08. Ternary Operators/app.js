/* 
    - It's a shorthand for writing conditional statements in a single line, which is more concise and short.
    - Syntax: condition ? trueValue : falseValue

*/

let password = 2;

function passwordChecker(ps) {
  // if (ps === 8) {
  //     return "Strong Password"
  // } else {
  //     return "Password should be 8 characters"
  // }

  return ps === 8 ? "Strong Password" : "Password should be 8 characters";
}

console.log(passwordChecker(password));

// ------------------------------

let age = 15;
let result = age >= 18 ? (result = "Eligible") : (result = "Not Eligible");

// Example 3: Using Ternary with Functions
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(4)); // Output: Even
console.log(checkEvenOdd(7)); // Output: Odd

// Example 8: Short-Circuiting with Logical Operators (Alternative to Ternary)
const username = "John";
console.log(username || "Guest"); // Output: John

// Equivalent Ternary
const displayName = username ? username : "Guest";
console.log(displayName); // Output: John
