## What is Abstraction?

- Abstraction is a practice of hiding the complex implementation details and exposing only the necessary to the user. It simplifies the complex systems by providing a clean interface while keeping the inner working hidden.
- In JS, abstraction allows us to define the functionalities/behavior without revealing the inner logic. Making the code easier to understand, modify, and maintain.

## How Abstraction is Implemented

- Abstraction is the process of simplifying a complex system by **breaking them into smaller, managable parts**. It allows us to focus on the essential features of an object and hide the uncessary details.
- In JS, we can abstract away classes to define abstract structures, and then implement them into real objects.

## Why Abstraction is Important

- Hide complexity: users only interact with essential parts
- Security: prevents unauthorized access to internal logic
- Code maintainability: makes code easier to understand, modify, and maintain without breaking the other parts.
- Modularity: separates the implementation from the interface.

## Examples

```js
class BankAccount {
  #balance; // Private field (Hidden from the user)

  constructor(owner, balance) {
    this.owner = owner; // Public property
    this.#balance = balance; // Private property
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Public method to withdraw money (with abstraction)
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew $${amount}. Remaining balance: $${this.#balance}`);
    } else {
      console.log("Insufficient funds or invalid amount.");
    }
  }

  // Public method to get account balance without exposing private field
  getBalance() {
    return `Your balance is $${this.#balance}`;
  }
}

// Creating an account
const myAccount = new BankAccount("Alice", 1000);

console.log(myAccount.owner); // ✅ "Alice"
console.log(myAccount.getBalance()); // ✅ "Your balance is $1000"

myAccount.deposit(500); // ✅ Deposited $500. New balance: $1500
myAccount.withdraw(300); // ✅ Withdrew $300. Remaining balance: $1200
console.log(myAccount.getBalance()); // ✅ "Your balance is $1200"

// Trying to access private field (Will cause an error)
// console.log(myAccount.#balance); // ❌ SyntaxError: Private field is not accessible
```
