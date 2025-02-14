/* 
    What is Async Func?

    Async functions are special functions that are designed to operate asynchronously, meaning that it can perform tasks in the background while other code continues to execute.

    Async funtions are marked with the async keyword - this keyword turns a normal function into an async function.

    The await operator is used to wait for a Promise. It can only be used within an async function.
*/

function fetchDataFromSever() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server");
    }, 2000);
  });
}

async function asyncFetchData() {
  try {
    const data = await fetchDataFromSever();
    // const respose = JSON.parse(data);
    console.log(data);
    console.log("Remaing tasks");
  } catch (error) {
    console.log(error);
  }
}

// -------------------------------------

function callBackHell() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside (callback hell) function";
      console.log(data);
    }, 1000);
  });
}

function firstFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed First`;
      console.log("Inside (firstFunc) Function");
      resolve(processedData);
    }, 1000);
  });
}

function secondFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed Second`;
      console.log("Inside (secondFunc) Function.");
      resolve(processedData);
    }, 1500);
  });
}

async function processedData() {
  try {
    const data = await callBackHell();
    const processedData1 = await firstFunc(data);
    const processedData2 = await secondFunc(processedData1);
    console.log(`Final result of all functions: ${processedData2}`);
  } catch (err) {
    console.log(err);
  }
}

// ------------------------------------- Challenge

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

async function showUserData() {
  try {
    const name = await getUserDataFromDB("John Doe");
    const hobbies = await getUserHobbies(name);
    console.log(`User ${name} has hobbies: ${hobbies.join(", ")}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

showUserData();
