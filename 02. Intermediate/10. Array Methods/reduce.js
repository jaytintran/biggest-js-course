/* 
    The reduce method applies a reducer function to each element of the array, accumulating the resulting in a single value.
    It is used to perform calculation or aggregation on an array's elements and simplify the array into a single value.
    The "reducer" method does not execute the function for empty array elements.
    The "reducer" method does not change the original array.

    Syntax:
    array.reduce(function(accumulator/total, currentValue, currentIndexOptional, arrOptional), initialValue)
    
    The reduce method takes 2 arguments:
    - callbackFunction which has 4 parameters:
        + accumulator/total: The accumulated value from the previous iteration. Or the PREIVOUS VALUE of the function
        + currentValue: The current element being processed.
        + currentIndexOptional: The index of the current element (optional).
        + arrOptional: The original array (optional).
    - initialValue: The initial value to use as the starting point of the reduction (optional).

    Return value:
    - The accumulated result after applying the callback function to every elements in the array
*/

// Sum of nums
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 10

// Flattening an array
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flat = nested.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);

console.log(flat); // [1, 2, 3, 4, 5, 6]

const people = [
  {
    name: "HuXn WebDev",
    age: 18,
  },
  {
    name: "Alex Mead",
    age: 29,
  },
  {
    name: "Brain Griffin",
    age: 40,
  },
];

// Filter Method
const oldest = people.filter((person) => person.age > 30);

const oldestPeoples = people.reduce((previous, current) => {
  return current.age > previous.age ? current : previous;
});

const words = [
  "apple",
  "banana",
  "orange",
  "banana",
  "apple",
  "orange",
  "apple",
  "grape",
];

const frequentWords = words.reduce((anObjectAsAccumulator, currentWord) => {
  anObjectAsAccumulator[currentWord] =
    (anObjectAsAccumulator[currentWord] || 0) + 1;
  return anObjectAsAccumulator;
}, {}); // <- An empty object as initial value

/* 
    Before Iteration Starts
    + The anObjectAsAccumulator starts as an empty object: {}.

    Iteration 1: Process "apple"
        Check if "apple" exists in anObjectAsAccumulator:
        + It doesn't exist, so use 0 as the default value.
        Add 1 to the default value:
        + anObjectAsAccumulator["apple"] = 0 + 1
        Result after this step: { apple: 1 }

    Iteration 2: Process "banana" -> banana doesn't exist yet -> 0 + 1 -> { apple: 1, banana: 1 }
    Iteration 3: Process "orange" -> orange doesn't exist yet -> 0 + 1 -> { apple: 1, banana: 1, orange: 1 }
    Iteration 4: Process "banana" -> banana already exists -> 1 + 1 -> { apple: 1, banana: 2, orange: 1 }
    Iteration 5: Process "apple" -> apple already exists -> 1 + 1 -> { apple: 2, banana: 2, orange: 1 }
    Iteration 6: Process "grape" -> grape doesn't exist yet -> 0 + 1 -> { apple: 2, banana: 2, orange: 1, grape: 1 }
    Iteration 7: Process "grape" -> grape already exists -> 1 + 1 -> { apple: 2, banana: 2, orange: 1, grape: 2 }

    Final Result:
    { apple: 2, banana: 2, orange: 1, grape: 2 }

*/

const numbersProducts = [1, 2, 3, 4];
const calculateProduct = function (arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};
