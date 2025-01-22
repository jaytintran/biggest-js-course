/*
    A higher-order function is a function that does one or both of the following:
    + Takes another function as an argument (callback).
    + Returns a function as its output.

    Callback Function: A function passed as an argument to another function.
    Higher-Order Function: The function that accepts a callback or returns another function.
*/

/* Why use HOF?
    Reusability: Write general-purpose functions and pass different behaviors (functions) to them.
    Abstraction: Separate logic for better code clarity.
    Asynchronous Operations: Handle async tasks using callbacks.
    Array Manipulation: Work on arrays using built-in higher-order functions like map, filter, reduce, etc.
*/

function mainFunction(callback) {
  console.log("Executing the main function");
  callback(); // Invoking the passed function
}

function sayHello() {
  console.log("Hello, I'm the callback function!");
}

mainFunction(sayHello);

/* 
Output:
Executing the main function
Hello, I'm the callback function!
*/

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2); // Returns a function that doubles the input
const triple = multiplier(3); // Returns a function that triples the input

console.log(double(5)); // 10
console.log(triple(5)); // 15
