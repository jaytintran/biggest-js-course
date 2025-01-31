/* 

    The Object.create() method creates a new object, using an exisiting object as the prototype of the newly created object.

*/

let person = {
  greet: function () {
    console.log(`Hello, my name is ${this.name} ${this.lastName}`);
  },
};

const jay = Object.create(person);
jay.name = "Jay";
jay.lastName = "Tin";
jay.greet(); // "Hello, my name is Jay Tin"

let john = Object.create(person, {
  name: { value: "John" },
  lastName: { value: "Doe" },
});

john.greet(); // "Hello, my name is John Doe"
