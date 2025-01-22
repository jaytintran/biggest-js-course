// Callback Function
/* 
    When we provide function as an (argument) to other function/argument that function is known as callback function.
    The callback function is executed after the main function has finished its execution.
    callback(function() {...})

    The term "callback" is a general concept that refers to a function passed into another function as an argument.
    A "callback function" is simply the actual function being passed.

    function mainFunction(callback) {
        console.log("Main function starts");
        callback(); // Invoking the callback
        console.log("Main function ends");
    }

    function sayHello() {
        console.log("Hello, this is the callback function!");
    }
*/

/* When to use Callbacks?
    Asynchronous Operations:
        When you need to perform tasks that take time, like fetching data, reading files, or waiting for a timeout.
        Callbacks ensure a function runs after an operation completes.
        Example: setTimeout(), fetch() in browsers, or file handling in Node.js.
    Customizable Behavior:
        When you want to allow dynamic behavior in a function.
        Example: Higher-order functions like map, filter, and forEach take callback functions.
    Error Handling:
        In Error-First Callbacks (common in Node.js), the first argument is reserved for errors, which allows graceful handling of failures.
    Event Handling:
        For handling user interactions or system events.
        Example: Click events, hover events in JavaScript.
    Decoupling Logic:
        To keep code modular, you can pass different callbacks to the same function.

*/

/* 
Callbacks are foundational but can sometimes lead to callback hell (nested callbacks). Modern alternatives include:
    Promises
    Async/Await
*/

// Basic Callback Function
function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});

function greet(name, message, callback) {
  console.log(`Hello ${name}, ${message}`);
  callback(name);
}

function sayGoodBye(name) {
  console.log(`Good Bye ${name}`);
}

greet("John", "Have a nice day", sayGoodBye);

// --------------------------------------

// Using Callbacks for Delays (setTimeout)
/*
    setTimeout takes a callback function and executes it after a delay.
*/
console.log("Start...");

setTimeout(() => {
  console.log("This runs after 2 seconds.");
}, 2000);

console.log("End...");

/*
Output:
Start...
End...
This runs after 2 seconds.
*/

// Challenge
function showCallFunc(callback) {
  const value = 10;
  callback(value);
}

showCallFunc(function (value) {
  console.log(value);
});
