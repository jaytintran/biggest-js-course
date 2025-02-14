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

// ------

// function callbackHell(callback) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = "Inside (callback hell) function";
//       console.log(data);
//       resolve(data);
//     }, 1000);
//   });
// }

// function firstFunc(data, callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processedData = `${data} - Processed First`;
//       console.log("Inside (firstFunc) Function");
//       resolve(processedData);
//     }, 1500);
//   });
// }

// function secondFunc(data, callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processedData = `${data} - Processed Second`;
//       console.log("Inside (secondFunc) Function");
//       resolve(processedData);
//     }, 2000);
//   });
// }

// callbackHell()
//   .then((data) => {
//     firstFunc(data);
//   })
//   .then((processedData) => {
//     secondFunc(processedData);
//   })
//   .then((processedData2) => {
//     console.log(`Final result of all functions: ${processedData2}`);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
