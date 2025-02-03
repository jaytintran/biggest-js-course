/* 

    Classes are a feature introduced in ES6. A class is a blueprint for creating objects, just like a factory producing CARS but with different specifications (e.g., make, model, and color). The blueprint is served for creating cars with shared properties and methods like honking, driving, and parking for example.

    
    JavaScript classes are a blueprint for creating objects. They provide a cleaner and more structured way to implement object-oriented programming (OOP) in JavaScript.
    
    A class is a template used to create multiple objects with shared properties and methods. Under the hood, JavaScript classes are just syntactic sugar over prototype-based inheritance.

    Giải thích: Classes là 

*/

/* 

    Prototype & Prototype-based Inheritance? (Revisited)

    Every object in JS has a hidden property callled [[Prototype]]. Prototype is a built-in property of every object created in JS. The prototype itself is an object, therefore it has its own prototype, then which creates a prototype chain. The prototype chain is the way we can inherit properties and methods from one object to another.
    
    This built-in property (prototype | __proto__) acts as a blueprint containing shared properties and methods that can be inherited from other objects. Prototype-based Inheritance is when an object inherits properties and method from their prototype (another object).

*/

// Class Declaration
class Car {
  constructor(make, model, year, color) {
    // Instans Members
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.printInfo = function () {
      console.log(
        `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`
      );
    };
  }

  // Prototype Members
  honk() {
    console.log("Beep beep!");
  }

  greetDriver() {
    console.log(`Hello, ${this.make} ${this.model} driver!`);
  }
}

const car1 = new Car("Toyota", "Corolla", 2022, "Red");

// Class Inheritance - Tính kế thừa
// Inheritance allows one class to inherit properties and methods from another.

class ElectricCar extends Car {
  chargeBattery() {
    console.log(`${this.make} ${this.model} is charging the battery!`);
  }
}
