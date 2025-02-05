class MyClass {
  #privateField; // Private field (truly private)
  _protectedField; // Convention for protected fields

  constructor(publicField, privateField, protectedField) {
    this.publicField = publicField; // Public field
    this.#privateField = privateField; // Private field using #
    this._protectedField = protectedField; // "Protected" convention
  }

  publicMethod() {
    return `Public field: ${this.publicField}`;
  }

  #privateMethod() {
    // Private method using #
    return `Private field: ${this.#privateField}`;
  }

  _protectedMethod() {
    // "Protected" convention (accessible in subclasses)
    return `Protected field: ${this._protectedField}`;
  }

  accessProtectedMethod() {
    return this._protectedMethod(); // ✅ Accessible within the class
  }
}

class SubClass extends MyClass {
  getProtectedField() {
    return this._protectedField; // ✅ Accessible in subclass
  }
}

const myObject = new MyClass("Public data", "Private data", "Protected data");

console.log(myObject.publicField); // ✅ "Public data"
console.log(myObject.publicMethod()); // ✅ "Public field: Public data"
console.log(myObject.accessProtectedMethod()); // ✅ "Protected field: Protected data"

const subObject = new SubClass("Public", "Private", "Protected");
console.log(subObject.getProtectedField()); // ✅ "Protected data"

// ❌ Errors
// console.log(myObject.#privateField); // ❌ SyntaxError (true private field)
// console.log(myObject._protectedField); // ❌ Still accessible but conventionally "protected"
// console.log(myObject.#privateMethod()); // ❌ SyntaxError (true private method)
