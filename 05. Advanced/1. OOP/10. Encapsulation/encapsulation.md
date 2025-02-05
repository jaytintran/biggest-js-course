## Encapsulation

- Encapsulation is the concept of bundling data (properties) and methods (functions) together within an object allowing the object to access and control its internal data and behaviors.
- It also refers to hiding the implementation details of an object and only expose the interfaces to interact with the object.
- In JS we achieve Encapsulation by using conventions like: closures, symbol, and naming conventions to simulate private members and expose public interfaces.

## Ways to Implement

### 1. Using Closures (Function Scope)

- Before ES6, JS used closures to simulate private members inside constructor function.

```js
function Person(name, age) {
  this.name = name; // Public property
  let _age = age; // Private property

  // Public method that can access and modify private property
  this.getAge = () => _age;
  this.setAge = (newAge) => {
    if (newAge > 0) _age = newAge;
  };
}

const person = new Person("John", 30);
console.log(person.getAge()); // ✅ 30
person.setAge(40);
console.log(person.getAge()); // ✅ 40
console.log(person._age); // ❌ Undefined (private variable)
```

👉 Here, \_age is not directly accessible but can be retrieved using getAge() and modified using setAge().

### Using ES6 # Private Fields

- With ES6, JavaScript introduced private fields using the # syntax inside classes.

```js
class Person {
  #age; // Private field

  constructor(name, age) {
    this.name = name; // Public property
    this.#age = age; // Private field
  }

  getAge() {
    return this.#age;
  }

  setAge(newAge) {
    if (newAge > 0) this.#age = newAge;
  }
}

const person = new Person("Bob", 28);
console.log(person.name); // ✅ "Bob"
console.log(person.getAge()); // ✅ 28
person.setAge(35);
console.log(person.getAge()); // ✅ 35

console.log(person.#age); // ❌ SyntaxError: Private field is not accessible
```

### Using Setters & Getters

- Another approach is using getter and setter methods to control access.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    let _age = age; // Private variable using closure

    this.getAge = () => _age;
    this.setAge = (newAge) => {
      if (newAge > 0) _age = newAge;
    };
  }
}

const person = new Person("Charlie", 32);
console.log(person.getAge()); // ✅ 32
person.setAge(40);
console.log(person.getAge()); // ✅ 40

console.log(person._age); // ❌ Undefined (private variable)
```

## 🔑 Key Takeaways

✅ Encapsulation hides internal implementation details.
✅ Prevents direct access to private data.
✅ Uses closures, # private fields, or getters & setters to control access.
✅ Improves security, maintainability, and data integrity.
