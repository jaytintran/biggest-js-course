/* 
Objects in JavaScript:
Objects are collections of key-value pairs. 
They are used to represent real-world entities and organize data.
*/

// Object Basics
/*
    Syntax: 
    let object = {
        key1: value1,
        key2: value2,
        key3: value3
    };

    Example:
*/
let person = {
  name: "John Doe",
  age: 30,
  job: "Developer",
  isMarried: false,
};

console.log(person); // Full object
console.log(person.name); // Accessing properties: John Doe
console.log(person["age"]); // Alternative way: 30

// Add a new property
person.country = "USA";
console.log(person);

// Update a property
person.age = 31;
console.log(person);

// Delete a property
delete person.isMarried;
console.log(person);

// --------------------------------------

// Object Methods
/*
    Object methods are functions defined inside an object.
*/
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2023,
  start: function () {
    console.log(`${this.brand} ${this.model} is starting...`);
  },
  getAge: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.year;
  },
};

car.start(); // Toyota Corolla is starting...
console.log("Car Age:", car.getAge(), "years");
// --------------------------------------

// Iterating Over Objects
/*
    Use these methods to loop through object properties:
    1. for-in loop
    2. Object.keys()
    3. Object.values()
    4. Object.entries()
*/

// 1. for-in Loop
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 2. Object.keys() -> Array of keys
console.log(Object.keys(person)); // ["name", "age", "job", "country"]

// 3. Object.values() -> Array of values
console.log(Object.values(person)); // ["John Doe", 31, "Developer", "USA"]

// 4. Object.entries() -> Array of [key, value] pairs
console.log(Object.entries(person));
/*
[
  ["name", "John Doe"],
  ["age", 31],
  ["job", "Developer"],
  ["country", "USA"]
]
*/

// --------------------------------------

// Destructuring Objects
/*
    Extract values from objects into variables.
*/
let user = {
  username: "johndoe",
  email: "john@example.com",
  role: "admin",
};

// Destructuring
let { username, email, role } = user;

console.log(username); // johndoe
console.log(email); // john@example.com
console.log(role); // admin

// Renaming while destructuring
let { username: userName } = user;
console.log(userName); // johndoe

// Default values while destructuring
let { password = "default123" } = user;
console.log(password); // default123

// --------------------------------------

// Nested Objects
/*
    Objects can contain other objects.
*/
let company = {
  companyName: "TechCorp",
  location: {
    city: "San Francisco",
    country: "USA",
  },
  employees: [
    { name: "Alice", position: "Manager" },
    { name: "Bob", position: "Developer" },
  ],
};

console.log(company.location.city); // San Francisco
console.log(company.employees[0].name); // Alice

// Loop through employees
company.employees.forEach((employee) => {
  console.log(`${employee.name} is a ${employee.position}`);
});

// --------------------------------------

// Object Spread and Rest
/*
    Spread Operator (...) -> Copy or merge objects.
    Rest Operator -> Collect remaining properties.
*/

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

// Spread to merge objects
let merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }

// Rest to collect remaining properties
let { a, ...rest } = merged;
console.log(a); // 1
console.log(rest); // { b: 3, c: 4 }

// --------------------------------------

// Object.freeze() and Object.seal()
/*
    freeze() -> Prevent adding, removing, or modifying properties.
    seal() -> Prevent adding/removing but allows modification.
*/

let settings = { theme: "dark", version: "1.0" };

// Object.freeze()
Object.freeze(settings);
settings.theme = "light"; // Cannot change
settings.language = "English"; // Cannot add
console.log(settings); // { theme: "dark", version: "1.0" }

// Object.seal()
let config = { debug: true };
Object.seal(config);
config.debug = false; // Allowed
delete config.debug; // Not allowed
console.log(config); // { debug: false }

// --------------------------------------

// Object Short Syntax (ES6)
/*
    When key and variable name are the same.
*/
let title = "Developer";
let experience = 5;

let profile = { title, experience };
console.log(profile); // { title: "Developer", experience: 5 }

// --------------------------------------

// Challenge 1: Count the Properties in an Object
let challengeObj = {
  a: 1,
  b: 2,
  c: 3,
};

let propertyCount = Object.keys(challengeObj).length;
console.log("Challenge 1 - Property Count:", propertyCount); // 3

// Challenge 2: Check if a Property Exists
let hasProperty = "b" in challengeObj;
console.log("Challenge 2 - Has Property 'b':", hasProperty); // true

// Challenge 3: Merge Two Objects
let objA = { x: 10, y: 20 };
let objB = { y: 30, z: 40 };

let mergedObj = { ...objA, ...objB };
console.log("Challenge 3 - Merged Object:", mergedObj); // { x: 10, y: 30, z: 40 }

// Challenge 4: Convert Object to Array
let entries = Object.entries(challengeObj);
console.log("Challenge 4 - Object to Array:", entries);
/*
[
  ["a", 1],
  ["b", 2],
  ["c", 3]
]
*/

// --------------------------------------

// Object Recap
/*
    - Objects are key-value pairs.
    - Use dot or bracket notation to access properties.
    - Object methods: keys(), values(), entries().
    - Destructuring makes code cleaner.
    - Spread operator helps copy/merge objects.
    - freeze() and seal() control object modification.
    - Short syntax saves time when keys and variables match.
*/
