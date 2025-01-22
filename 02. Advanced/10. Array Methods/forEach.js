// When we call the forEach helper we pass in anonymous callback function,
// This function gets called one time for every element in the array
// Whatever is inside the function that logic happens

/* 
    The forEach method does not return anything; its return value is always undefined.
    It is designed to execute a provided function on each element of the array but does not return a new array or any result.


    Summary: Executes a provided function once for each array element.

    When to Use:
    + To perform a side effect on each element (e.g., logging, updating external variables).
    + When you don't need to return a new array.
    + For iterating over an array where transformation or filtering isn't required.

    Return Value:
    + Does not return anything (undefined).
*/

let colors = ["teal", "blue", "red", "green"];

// for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

colors.forEach((color) => console.log(color));

let words = ["red", "orange", "yellow", "green"];
let capitalizedWords = [];

words.forEach((word) => {
  capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
});

// Exercise: Print the sum
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

const adder = (number) => {
  sum += number;
};

numbers.forEach(adder);
