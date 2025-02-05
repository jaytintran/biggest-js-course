/* 

    Class modifiers, also known as access modifiers or visibility modifiers, are keywords in OOP that defines the accessibility of class members (properties, methods, and nested classes) from other part of the program.

    They control the level of encapsulation principles by restricting access to certain class members.

    In JavaScript, class modifiers are used in context of classes and objects, JS doesn't have traditional access modifiers like public, private, and protected - like some other languages Java, C++, etc. However we can achieve the same effect using different convention and techniques.

    If we learn about modifiers in JS, it opens a huge gate for us where we can learn about the 4 pillars of OOP:
    1. Encapsulation
    2. Abstraction
    3. Inheritance
    4. Polymorphism
*/

/* 

    Again class modifiers determine the visibility and accessibility of class properties and methods from other part of the code. There're 3 main modifiers in JS:
    1. Public (Default) - Accessible from anywhere
    2. Private - Accessible only inside the class
    3. Protected (not natively supported, but simulated using conventions) - Accessible only inside the class and its subclasses

*/

// Public
/* 
🔹 By default, all class members are public unless explicitly marked as private.
🔹 Public members can be accessed both inside and outside of the class.
*/
class Person {
  constructor(name, age) {
    this.name = name; // Public property
    this.age = age; // Public property
  }

  greet() {
    // Public method
    console.log(`Hi, my name is ${this.name}.`);
  }
}

const person1 = new Person("Alice", 25);
console.log(person1.name); // ✅ Alice (Accessible outside)
person1.greet(); // ✅ Hi, my name is Alice.

// Private
/* 
🔹 Private members are not accessible from outside the class.
🔹 To make a property or method private, prefix it with #.
*/
class BankAccount {
  #balance; // Private property

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance; // Accessible inside the class
  }

  #logTransaction(amount) {
    // Private method
    console.log(`Transaction of ${amount} processed.`);
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#logTransaction(amount);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount("John", 1000);
console.log(myAccount.owner); // ✅ John (public)
console.log(myAccount.getBalance()); // ✅ 1000 (via public method)

console.log(myAccount.#balance); // ❌ Error: Private field '#balance' must be declared in an enclosing class
myAccount.#logTransaction(500); // ❌ Error: Private method

// Protected (Simulated by using underscore convention)
/* 
  JS doesn't have a concept of protected members like C++ or Java. 
  But we can simulate it using underscore convention (_) to indicate that property or method is accessible within the class and its subclasses.
*/

class Employee {
  constructor(name, salary) {
    this.name = name; // Protected property
    this._salary = salary; // Protected property
  }

  _calculateBonus() {
    // Protected method
    return this._salary * 0.1;
  }
}

class Manager extends Employee {
  constructor(name, salary, level) {
    super(name, salary);
    this.level = level;
  }
  getBonus() {
    // Public method
    return this._calculateBonus();
  }
}

const manager = new Manager("Alice", 5000);
console.log(manager.getBonus()); // ✅ 500
console.log(manager._salary); // ⚠️ Works, but should be avoided
console.log(manager._calculateBonus()); // ⚠️ Works, but should be avoided
