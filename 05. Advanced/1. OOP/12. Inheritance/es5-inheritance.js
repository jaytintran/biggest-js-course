// ES5 Code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Method shared among all Person instances
Person.prototype.getInfo = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Subclass constructor inheriting from Person
function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

// Set up prototpe chain for Student to inherit from Person
Student.prototype = Object.create(Person.prototype);

// Method specific to Student instance
Student.prototype.getGrade = function () {
  return `My grade is ${this.grade}.`;
};

// Create instances
const student1 = new Student("John", 20, "A");
const student2 = new Student("Jane", 19, "B");

console.log(student1);
console.log(student1.getInfo());
console.log(student1.getGrade());
