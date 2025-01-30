/* 

    The map() method in JavaScript is used to create a new array by applying a provided function to each element of the original array. 
    It does not modify the original array.

    // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.


    Summary: Creates a new array by applying a function to each element.

    When to Use:
    + When you want to transform each element of an array.
    + To create a new array of the same length with modified elements.
    + When the goal is to compute a value based on each element (e.g., formatting strings, calculations).

    Return Value:
    + Returns a new array.

*/

let numbers = [1, 2, 3, 4, 5];

// So here what's going on, each number in the numbers array is being passed
// --> Into anonymous function that we're passing in,
// --> Whatever this function returns is placed into a new array,
// --> After each elements has being processed that new array is return.
let double = numbers.map((num) => num * 2);
console.log(double);

// ---------------------------------------------

let peoples = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

const results = peoples.map((people) => [people.age, people.name]);
console.log(results);

// ---------------------------------------------

// 1. Create array with random numbers.
const randomNumbers = [65, 44, 12, 4];

// 2. Map over each item in that array, & multiply each item by 10
const multiplied = randomNumbers.map((num) => num * 10);
