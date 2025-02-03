## What is Prototype in JavaScript?

- Prototype is a built-in mechanism that allows object to inherit properties and methods from other objects.
- Every JS object has an internal property called [[Prototype]] (often referred to as **proto**) - which points to another object that is its prototype object.
- The prototype itself is an object that can have its own prototype, forming an **prototype chain**.
- When the property or method is not found on an object, JS will looks up the prototype chain to find the property or method until it finds it or reaches null.

```js
const person = {
  greet: function () {
    console.log("Hello");
  },
};

const user = Object.create(person);
user.greet(); // Hello
```

## What is Prototype-based Inheritance?

- Prototype inheritance (or prototypal inheritance) allows objects to inherit properties and methods from other objects via their prototype.
- In JavaScript, objects do not copy properties/methods. Instead, they reference their prototype.
- This inheritance works by linking objects together rather than copying data.

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

function Dog(breed, name) {
  this.breed = breed;
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

const buddy = new Dog("Labrador", "Buddy");
buddy.speak(); // "Buddy makes a noise."
```
