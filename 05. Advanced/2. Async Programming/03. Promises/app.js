// ****************** PROMISES CONCEPTS ******************
// A Promise in JavaScript represents an asynchronous operation that may complete in the future.
// It has three states:
// 1️⃣ Pending – Initial state, not yet resolved or rejected.
// 2️⃣ Fulfilled – The operation was successful.
// 3️⃣ Rejected – The operation failed.

// ****************** KEY TAKEAWAYS ******************
// ✅ Promises are useful for handling async tasks in a structured way.
// ✅ `.then()` is used to handle success, `.catch()` for errors, `.finally()` for cleanup.
// ✅ Chaining helps execute sequential operations.
// ✅ `Promise.all()` runs multiple promises in parallel.
// ✅ `Promise.race()` returns the first settled promise (resolved/rejected).

/* 

Promise is a special object in JS represents **a task that will be completed in the future** and either return fulfilled or rejected. It helps to avoid callback hell by providing a cleaner way to handle async operations.

 **Why use Promises?**

- Cleaner, structured approach to async programming.
- Built-in error handling with `.catch()`.

A promise has 3 states: pending (hasn’t completed yet), resolved (fulfilled), rejected (the operation failed)

So there is two part of a Promise: the production part, and the handling part.

**Producing Part:** 

- This is where the asynchronous operation happens.
- When you create a promise, you pass in a function that starts an operation (like fetching data or waiting for a timer)
- And then eventually either calls resolve (if the operation is successful) or reject (if something goes wrong).

**Consuming Part:** 

- This is where you handle the result of that asynchronous operation.
- After the promise has been created, you use methods like .then(), .catch(), or await (in an async function) to specify what should happen when the promise resolves or rejects.
- This part has two routes: either rejected or fulfilled/resolved. Both case follows the protocol chaining of `.then()`, `.catch()`, and `.finally()` in the handling code part.

// The production part
function fetchData () {
	return new Promise((resolve, reject) => {
		 setTimeout(() => {
			 let success = true;
			 if (success) {
				 resolve("Data is fetched successfully")
			 } else {
				 reject("Failed to fetch data")
			 }
		 }, 2000)
	})
}

// The handling/consuming part
fetchData.then(data => console.log(data).catch(error => console.log(error))

*/

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is an even number.`);
    } else {
      reject(`${number} is an odd number.`);
    }
  });
}

const numberToCheck = 7; // odd
// const numberToCheck = 2; // even

checkNumber(numberToCheck)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// ----------------------------------- Challenge

function callbackHell(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside (callback hell) function";
      console.log(data);
      resolve(data);
    }, 1000);
  });
}

function firstFunc(data, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed First`;
      console.log("Inside (firstFunc) Function");
      resolve(processedData);
    }, 1500);
  });
}

function secondFunc(data, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed Second`;
      console.log("Inside (secondFunc) Function");
      resolve(processedData);
    }, 2000);
  });
}

callbackHell()
  .then((data) => {
    firstFunc(data);
  })
  .then((processedData) => {
    secondFunc(processedData);
  })
  .then((processedData2) => {
    console.log(`Final result of all functions: ${processedData2}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// ----------------------------------- Challenge 2
function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Valid Name");
      resolve(name);
    }, 2000);
  });
}

function getUserHobbies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user hobbies...");
      resolve(["Football", "Singing", "Solving Math"]);
    }, 2000);
  });
}

getUserDataFromDB("John Doe")
  .then((name) => {
    return getUserHobbies();
  })
  .then((hobbies) => {
    console.log(`User ${name} has hobbies: ${hobbies.join(", ")}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
