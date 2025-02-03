/* 

    Prototypal Inheritance is a mechanism in JS that allows objects to inherit properties and methods from other objects, creating a hierarchy of objects.

    It's a fundamental concept in JS and it is based on the concept of prototype model.

    In prototypal inheritance, objects can serve as prototypes for other objects. When a new object is created, it can inherit properties and methods from the prototype object.

    All of this creates a hierarchy chain of inheritance.

    Inheritance means that one object can inherit properties and methods from another object. Like the child inherits from the parent.
*/

/* 

    In JS, every object has an internal prototype called [[Prototype]] (often referred to as __proto__) - which points to its prototype object.

    When we access a property or method of an object, and that property or method is not found in the object itself, JS looks for it in the prototype object of the object (JS can dig further up the prototype chain if needed) until it finds the property or method or reaches the top of the prototype chain, which usually is Object.prototype.

*/

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};

Animal.prototype.sound = function () {
  console.log(`${this.name} is making a sound`);
};

// We want the Dog prototype to inherit the Animal prototype
function Dog(name, breed) {
  Animal.call(this, name); // inherit the Animal prototype
  this.breed = breed;
}

// The Object.create() method creates a new object, using an exisitng object as the prototype of the newly created object.
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  console.log(`${this.name} is barking`);
};

const dog1 = new Dog("Rex", "Golden Retriever");
dog1.eat(); // Rex is eating
console.log(dog1); // Dog { name: 'Rex', breed: 'Golden Retriever' }

const froggy = new Animal("Frog");
console.log(froggy); // Animal { name: 'Frog' }

/* 

    When we move on to use Classes, we won't need to use Object.create() anymore and all of these syntax will be replaced by classes. For inheritance, we will use extends keyword. For example: the Dog class will inherit from the Animal class, so we have: class Dog extends Animal {}.

    And when we want to add new methods, we just add them to the class. We don't even worry about the prototype anymore.

*/
