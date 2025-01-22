/* 
  Map is a built-in data structure introduced in (ES6) that allows you to store key-value pairs where both the keys and values can be of any data type. 
  It is similar to an object, but with a few key differences:
    -> Keys can be of any data type: Unlike objects, where keys are limited to strings and symbols, Map allows you to use any data type as keys, including numbers, booleans, objects, and even other Map instances.
    -> Maintains insertion order: Map preserves the order of key-value pairs as they were inserted, while object keys may not be guaranteed to be in a specific order.
    -> Iteration: Map provides built-in methods for easy iteration over its elements.

    The syntax to create a Map is as follows: const myMap = new Map();

    You can also initialize a Map with an array of key-value pairs using the Map constructor:
    const myMap = new Map([
        [key1, value1],
        [key2, value2],
    ]);

    Map provides various methods for managing and accessing its elements, such as set(), get(), has(), delete(), clear(), and more.

    Map Methods:
    -> set(key, value): Adds a new key-value pair to the map.
    -> get(key): Retrieves the value associated with a given key.
    -> has(key): Checks if a key exists in the map.
    -> delete(key): Removes a key-value pair from the map.
    -> clear(): Removes all key-value pairs from the map.

    Map is a powerful data structure in JavaScript, and it provides a flexible and efficient way to manage key-value data with various data types as keys.

*/

const theMap = new Map();

const keyOne = "string";
const keyTwo = {};
const keyThree = function () {};

theMap.set(keyOne, "valueOne");
theMap.set(keyTwo, "valueTwo");
theMap.set(keyThree, "valueThree");
// console.log(theMap.keys());
// console.log(theMap.values());
// console.log(theMap.delete(keyTwo));
// console.log(theMap.keys());
console.log(theMap.size);

// Iterating over the Map
for (let [key, value] of theMap) {
  console.log(`${key} -> ${value}`);
}

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

// Exercise
const mapExample = new Map();
mapExample.set("a", 1);
mapExample.set("b", 2);
mapExample.set("c", 3);

console.log(mapExample.get("a")); // 1
console.log(mapExample.size); // 3
console.log(mapExample.delete("b"));
console.log(mapExample.size); // 2
