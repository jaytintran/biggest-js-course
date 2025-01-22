// The "for...in" loop in JavaScript is used to iterate over the enumerable properties of an object.
// It is a way to loop through the keys (property names) of an object.

// Comparison Between For-In and For-Of
/*
| Feature              | For-In                           | For-Of                      |
|----------------------|----------------------------------|-----------------------------|
| Iterates Over        | Keys of an object               | Values of an iterable       |
| Use Case             | Objects                         | Arrays, strings, maps, sets |
| Suitable for Arrays? | Not recommended                 | Yes                         |
*/

let person1 = {
  name: "John Doe",
  age: 30,
  job: "Developer",
  isMarried: false,
};

for (let key in person1) {
  console.log(`${key}: ${person1[key]}`); // Output: name: John Doe, age: 30, job: Developer, isMarried: false
}

// Here, variable is a variable that will represent each property name (key) during each iteration, and object is the object being looped through.
let list = ["one", "two", "three", "four"];

for (let index in list) {
  console.log(`${index}: ${list[index]}`);
}

// Iterate over "array1" & log the values using for of loop.

const array1 = ["a", "b", "c"];

for (let value of array1) {
  console.log(value);
}

/*
Use the `for-in` loop to iterate over the keys (property names) of an object.
It is typically used for objects but can also work with arrays (not recommended).
*/

// Example 1: Iterating over an object
const person2 = {
  name: "John",
  age: 30,
  job: "Engineer",
};

for (let key in person2) {
  console.log(`${key}: ${person2[key]}`); // Logs each key-value pair
}

// Example 2: Iterating over an array (not recommended for arrays)
const numbers = [10, 20, 30];
for (let index in numbers) {
  console.log(`Index: ${index}, Value: ${numbers[index]}`); // Logs index and value
}
