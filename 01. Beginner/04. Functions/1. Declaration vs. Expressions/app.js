/* 
    Function is a block of code that performs a specific task
    Function makes code reusable, we can declare once and use multiple time
    Function makes programming easier, as we can divide our code into smaller parts
    DRY = Don't Repeat Yourself

    function name (parameters) {
        // code block
    }
*/

// -------------------------------
// declaring a function named greet()
function greet() {
  console.log("Hello there");
}

greet(); // calling function

// -------------------------------
function sayHello(username) {
  console.log(`Hello ${username}`);
}

sayHello("HuXn"); // calling function
// -------------------------------
// The return statement can be used to return the value to a function call.
function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
  // console.log("Hello World"); NOTHING
}

const result = add(10, 20);
console.log(result);
// -------------------------------
// Challenges

// 1. Create function name (myFunction)
// 2. This function will take 2 parameters
// 3. Any number we pass as argument it will multiply that number.
// 4. As argument pass your favorite numbers.
// 5. log the value.

function myFunction(num1, num2) {
  return num1 * num2;
}

let answer = myFunction(2, 3);
console.log(answer); // 6

// ------------------------
// Function Declaration
function sayHello(username) {
  console.log(`Hello ${username}`);
}

sayHello("HuXn");

// Function Expressions
greetings("Doe"); // Error:
const greetings = function (user) {
  console.log(`Hello ${user}`);
};

// Difference between Function Declaration and Function Expression
// Function Declaration is hoisted, Function Expression is not hoisted
// Hoisted? -> When a function is declared, it is moved to the top of the current scope

// ------------------------
// Arrow Function
const sayHello = (username) => {
  console.log(`Hello ${username}`);
};

// Arrow Function Expression
const sayHello = (user) => {
  console.log(`Hello ${user}`);
};

// Difference between Arrow Function and Arrow Function Expression
// Arrow Function Expression is not hoisted

// ------------------------

