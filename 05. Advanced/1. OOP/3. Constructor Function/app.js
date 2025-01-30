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
