## What is Object.create()?

Object.create(proto) is a method in JavaScript that creates a new object and sets its prototype to proto. This allows the new object to inherit properties and methods from the provided prototype.

```js
let newObject = Object.create(proto);
```

- proto: The object that will be the prototype of the new object.
- Returns a new object that inherits from proto.

## Why Use Object.create()?

### 1. Prototype Inheritance (Prototype-based OOP)

- Unlike using constructors or classes, Object.create() allows direct prototype-based inheritance.

```js
let personPrototype = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

let person = Object.create(personPrototype);
person.name = "Alice";
person.greet(); // "Hello, my name is Alice"
```

### 2. Creating Objects Without a Constructor Function or Class

```js
let dog = {
  bark: function () {
    console.log("Woof!");
  },
};

let puppy = Object.create(dog);
puppy.bark(); // "Woof!"
```

### 3. Creating an Object with Custom Properties

```js
let car = {
  drive: function () {
    console.log("Driving...");
  },
};

let tesla = Object.create(car, {
  brand: { value: "Tesla", writable: false },
});

console.log(tesla.brand); // "Tesla"
tesla.drive(); // "Driving..."
```

## When to Use Object.create()?

🔹 When you want to create an object with a specific prototype.
🔹 When you want to avoid using constructors or class syntax.
🔹 When you need a lightweight alternative to classes for inheritance.
🔹 When creating fully isolated objects (e.g., Object.create(null)).```

## When NOT to Use Object.create()?

🚫 If you need more structured OOP, class syntax might be better.
🚫 If you don't need inheritance, use {} (object literals) instead.
🚫 If you need better performance, constructor functions are often faster.
