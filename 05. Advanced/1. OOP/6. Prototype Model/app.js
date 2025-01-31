/* 

    Every JS object has an anonymous property called prototype.

    Functions & arrays are also objects, and they also have a prototype property.

    The prototype is the parent of that object, prototype property is the object by itself, which has special properties & methods.

*/

/* 

    Every object is associated with another object.
    The object (a) is associated with [[Prototype]] object (b).
    -> Which means an object will inherit all properties of Object.prototype || [[Prototype]] object.

*/

const obj = {};
console.log(obj.__proto__); //

/* 

    In JS every time we create an object, we have that object itself and the prototype object.

    And remember an object can be: object, function, array.

*/

/* 

    We can check the prototype of something in 3 ways:
    1. obj.__proto__
    2. Object.getPrototypeOf(obj)
    3. obj.constructor.prototype

*/

const arr = new Array();
console.log(arr.__proto__);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const jay = new Person("Jay", "Tin");
console.log(jay.__proto__);

// --------------------------
// Changing the built-in method
console.log(Array.prototype);

Array.prototype.pop = function () {
  console.log("pop it babe");
};

const array = [1, 2, 3];
array.pop(); // pop it babe

// --------------------------
// Create a new method on the prototype

String.prototype.hello = function () {
  console.log("Hello, " + this.toUpperCase());
};
console.log("yooo".hello());
