## What is Classes?

JavaScript introduced class syntax, which is syntactic sugar over prototype-based inheritance. Replace the old way of creating objects with classes (section 7 - prototypal inheritance).

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  jump() {
    console.log(`${this.name} jumps high!`);
  }
}

const meow = new Cat("Meow", "Persian");
meow.speak(); // "Meow makes a noise."
meow.jump(); // "Meow jumps high!"
```

## Class Methods

Classes can have methods (functions) inside them.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Buddy");
dog.speak(); // "Buddy makes a sound."
```

The speak() method belongs to the prototype of Animal, so all instances share the same function, saving memory.

## Getters & Setters

Classes support getter and setter methods for controlled property access.

```js
class Circle {
  constructor(radius) {
    this._radius = radius; // Using _ to indicate a private variable
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value > 0) {
      this._radius = value;
    } else {
      console.log("Radius must be positive.");
    }
    s;
  }
}

const c1 = new Circle(5);
console.log(c1.radius); // 5

c1.radius = 10;
console.log(c1.radius); // 10

c1.radius = -3; // "Radius must be positive."
```
