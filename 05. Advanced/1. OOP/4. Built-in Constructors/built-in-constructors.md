JavaScript provides built-in constructors like Object, Array, Function, String, Number, Boolean, Date, RegExp, etc. These constructors allow you to create instances of their respective types.

## 1. Why Use Built-in Constructors?

✅ Ensures Proper Type Creation

- Built-in constructors help create objects with built-in properties and methods.
- Example: Creating an array using new Array() gives access to push(), pop(), etc.

✅ More Explicit and Flexible

- Sometimes, built-in constructors allow more flexibility in creating objects dynamically.

✅ Useful When Type Conversion is Needed

- Example: new String("hello") creates a string object instead of a primitive string.

✅ Allows Object-Oriented Features

- Using constructors allows you to extend built-in prototypes.

## 2. When to Use Built-in Constructors?

| When creating an Object/Array/Dates/Regular Expressions/Object Wrappers.

```js
let person = new Object();
person.name = "Alice";
person.age = 25;

let numbers = new Array(5); // Creates an array with 5 empty slots

let today = new Date();
console.log(today.toDateString());

let pattern = new RegExp("^a.*z$");
console.log(pattern.test("abcdez")); // true

let str = new String("hello");
console.log(typeof str); // "object"
```

| When not to use:
🚫 Avoid new Object(), new Array(), new String(), new Number(), new Boolean() unless necessary.
🚫 Instead, prefer literals ({}, [], "string", 123, true) as they are more efficient.

## 3. Summary

Use built-in constructors when:

- You need dynamic object creation (new Object(), new Array()).
- You're working with dates (new Date()).
- You need a dynamically generated regex (new RegExp()).

Avoid them when:

- Simpler literals ({}, [], "", 123) work just fine.
- You don’t need an object wrapper (new String(), new Number(), new Boolean()).
