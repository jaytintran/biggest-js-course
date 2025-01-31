/* 

    Constructor Functions in JS are regular functions with the NEW keyword, to create and initialize objects with shared properties and methods.

    They act as a factory/blueprint to create multiple objects with the same structure and behaviors.

*/

function CreateCar(type, model, brand, year, color) {
  this.type = type;
  this.model = model;
  this.brand = brand;
  this.year = year;
  this.color = color;
  this.drive = function () {
    console.log(`${this.brand} ${this.model} is driving!`);
  };
  this.honk = function () {
    console.log("Beep beep!");
  };
  this.info = function () {
    console.log(
      `Type: ${this.type}, Model: ${this.model}, Brand: ${this.brand}, Year: ${this.year}, Color: ${this.color}`
    );
  };
}

/* 

    NEW Keyword:
    1. First create an empty object.
    2. Sets "this" to the empty object.
    3. We then omit the return statement by using "new" keyword

*/

const toyota = new CreateCar("sedan", "Corolla", "Toyota", 2022, "red");
console.log(toyota);

function Book(title, author, pages, year) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.getInfo = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.year}`;
  };
}

const book1 = new Book("Reality Transurfing", "Vadim Zeland", 652, 2016);
const book2 = new Book("The Alchemist", "Paulo Coelho", 208, 1988);
const book3 = new Book(
  "The Subtle Art of Not Giving a F*ck",
  "Mark Manson",
  224,
  2016
);

const book1Info = book1.getInfo();
const book2Info = book2.getInfo();
const book3Info = book3.getInfo();
console.log(book1Info); // Reality Transurfing by Vadim Zeland, 652 pages, 2016
console.log(book2Info);
console.log(book3Info);

// ----

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.getInfo = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}

const person1 = new Person("John", 30, "male");
console.log(person1.person1.name, person1.age, person1.gender);

// ---

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.start = function () {
    console.log(`${this.make} ${this.model} is driving!`);
  };
  this.honk = function () {
    console.log("Beep beep!");
  };
  this.stop = function () {
    console.log(`${this.make} ${this.model} has stopped.`);
  };
}
