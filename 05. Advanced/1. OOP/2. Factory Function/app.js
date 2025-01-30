/* 

    Factory Function: A function that returns an object.
    It's a design pattern which provides an alternative way to create objects compared to using constructors and the new keyword.

*/

// Do this way - you will have to create a thousands of objects just for each person. This sucks because you have to mannually edit each person as their name and age changes. This is not good.

const person1 = {
  name: "John Doe",
  age: 25,
  fullname: function () {
    return `${this.name} is ${this.age} years old`;
  },
};

const person2 = {
  name: "John Max",
  age: 25,
  fullname: function () {
    return `${this.name} is ${this.age} years old`;
  },
};

const person3 = {
  name: "Alex Doe",
  age: 25,
  fullname: function () {
    return `${this.name} is ${this.age} years old`;
  },
};

// So JS introduced the Factory Function, which is a function that returns an object. This is a better way to create objects.

function factoryCreatePerson(firstName, lastName, age, job) {
  return {
    firstName,
    lastName,
    age,
    job,
    fullname: function () {
      return `${this.firstName} is ${this.age} years old`;
    },
  };
}

const alex = factoryCreatePerson("Alex", "Doe", 25, "Developer");
const john = factoryCreatePerson("John", "Max", 25, "Weatherman");
const max = factoryCreatePerson("Max", "Doe", 25, "Designer");

alex.fullname(); // Alex is 25 years old
john.fullname(); // John is 25 years old
max.fullname(); // Max is 25 years old

// Car Factory
function factoryCreateCar(type, model, brand, year, color) {
  return {
    type,
    model,
    brand,
    year,
    color,
    drive: function () {
      console.log(`${this.brand} ${this.model} is driving!`);
    },
    honk: function () {
      console.log("Beep beep!");
    },
  };
}

const honda = factoryCreateCar("Sedan", "Civic", "Honda", 2022, "Red");
const toyota = factoryCreateCar("SUV", "Corolla", "Toyota", 2022, "Blue");
