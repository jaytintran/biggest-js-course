/* 
    Arrays are used to store multiple values in a single variable.
    They are zero-indexed and can hold different data types.
*/

// Basic Arrays
let fruits = ["apple", "banana", "orange", "mango"];

// Empyty Array
let emptyArray = [];

// Populate The Empty Array
for (let i = 0; i < fruits.length; i++) {
  emptyArray.push(fruits[i]);
}
console.log(emptyArray); // Output: ["apple", "banana", "orange", "mango"]

// String Arrays
const codeSkills = ["HTML", "CSS", "JavaScript", "React", "Node", "Express"];
const activities = [
  "Coding",
  "Gaming",
  "Reading",
  "Cooking & Eating",
  "Training",
  "Sleeping",
];

// Accessing Array Elements
console.log(codeSkills[0]); // Output: "HTML"
console.log(codeSkills[1]); // Output: "CSS"
console.log(codeSkills[2]); // Output: "JavaScript"
console.log(codeSkills[3]); // Output: "React"
console.log(codeSkills[4]); // Output: "Node"
console.log(codeSkills[5]); // Output: "Express"

// Nested Arrays
const nestedArray = [
  "Tin",
  ["HTML", "CSS", "JavaScript"],
  ["React", "Node", "Express"],
];
console.log(nestedArray[1][1]); // Output: "CSS"

// Challenge:
const favSingers = ["Tupac", "50 Cent", "Eminem"];
console.log(favSingers[0]); // Output: "Tupac"
const favNumbers = [3, 6, 9];
const mixedArr = ["HTML", 3, "CSS", 6, "JavaScript", 9, true, [3, 6, 9]];

// Array Methods
/* 
    Common methods to manipulate arrays:
    1. map()
    2. filter()
    3. reduce()
    4. find()
    5. some() / every()
    6. includes()
    7. concat()
    8. join()
    9. reverse()
    10. sort()
    11. push, pop, shift, unshift, splice
*/

// 1. map() -> Transform each element
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]

// 2. filter() -> Return elements that match a condition
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2]

// 3. reduce() -> Accumulate values to a single result
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 6

// 4. find() -> Find the first match
let found = numbers.find((num) => num > 2);
console.log(found); // 3

// 5. some() -> Check if at least one element matches
let hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // true

// 6. includes() -> Check if an array includes a value
console.log(numbers.includes(2)); // true

// 7. concat() -> Merge two arrays
let merged = numbers.concat([7, 8, 9]);
console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 8.sort() -> Sort an array
let sorted = numbers.sort();
console.log(sorted); // [1, 2, 3, 4, 5, 6]

// 9. reverse() -> Reverse an array
let reversed = numbers.reverse();
console.log(reversed); // [6, 5, 4, 3, 2, 1]

// 10. join() -> Convert an array to a string
let joined = numbers.join(", ");
console.log(joined); // "1, 2, 3, 4, 5, 6"

// Jojn to have an URL example
let jsonRandomWebsite = {};

// 11. Adding and Removing Elements
/*
    1. push() -> Add at the end
    2. pop() -> Remove from the end
    3. unshift() -> Add at the beginning
    4. shift() -> Remove from the beginning
    5. splice() -> Remove or replace existing elements and/or add new elements
    6. slice() -> Return a copy of a portion of an array
*/

let numbers = [1, 2, 3];

// Add elements
/* 
    push() -> Add at the end
    unshift() -> Add at the beginning
*/
numbers.push(4); // [1, 2, 3, 4]
numbers.unshift(0); // [0, 1, 2, 3, 4]

// Remove elements
/* 
    pop() -> Remove from the end
    shift() -> Remove from the beginning
*/
numbers.pop(); // [0, 1, 2, 3]
numbers.shift(); // [1, 2, 3]

// Splice - Remove or replace existing elements and/or add new elements
/* 
    Syntax: splice(startIndex, count)
*/
let favRappers = ["Tupac", "50 Cent", "Eminem"];
favRappers.splice(1, 1, "Mobb Deep", "The Notorious B.I.G.");
console.log(favRappers); // ["Tupac", "Mobb Deep", "The Notorious B.I.G.", "Eminem"]

// Slice
/* 
    Syntax: slice(startIndex, endIndex)
*/
let sliced = numbers.slice(1, 4);
console.log(sliced); // [2, 3, 4]
