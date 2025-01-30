console.log(window); // Window {window: Window, self: Window, ...}
console.log(this); // Window {window: Window, self: Window, ...}
console.log(windown === this); // true

window.firstName = "John";
console.log(this.firstName); // John

// -----

function sayHi() {
  return this;
}

const res = sayHi();
console.log(res); // Window {window: Window, self: Window, ...}

// -----

const obj = {
  username: "John Doe",
  age: 25,
  fullname: function () {
    return `${this.username} is ${this.age} years old`; // This returns it's owner - the object itself
  },
};

console.log(obj.fullname()); // John Doe is 25 years old

// -----

const obj2 = {
  username: "John Doe",
  age: 25,
  fullname: () => {
    return this; // This returns the global object - the window
  },
};

// ------

const person = {
  fullName: "Tin Tran",
  age: 24,
  greetRegular: function () {
    console.log(
      `Hello, my name is ${this.fullName}, and I am ${this.age} years old.`
    );
  },
  greetArrow: () => {
    console.log(`Hello, my name is ${this.fullName}, ${this.age} years old.`);
  },
};
