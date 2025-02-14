// ****************** CALLBACK HELL ******************
// Callback Hell (also known as Pyramid of Doom) happens when multiple asynchronous
// operations are nested within each other, making the code hard to read and maintain.

console.log("Start");

// Simulating an API call with nested callbacks (callback hell)
function getUserData(userId, callback) {
  setTimeout(() => {
    console.log(`Fetched user data for user ID: ${userId}`);
    callback(userId);
  }, 1000);
}

function getUserPosts(userId, callback) {
  setTimeout(() => {
    console.log(`Fetched posts for user ID: ${userId}`);
    callback(["Post 1", "Post 2"]);
  }, 1000);
}

function getPostComments(post, callback) {
  setTimeout(() => {
    console.log(`Fetched comments for ${post}`);
    callback(["Comment A", "Comment B"]);
  }, 1000);
}

// ********** CALLBACK HELL EXAMPLE **********
getUserData(1, (userId) => {
  getUserPosts(userId, (posts) => {
    getPostComments(posts[0], (comments) => {
      console.log("Fetched Comments:", comments);
      console.log("End");
    });
  });
});

// The above structure creates a **pyramid** due to nested callbacks.
// This is hard to read, debug, and maintain.

function callbackHell(callback) {
  setTimeout(() => {
    const data = "Inside (callbackHell) Function";
    console.log(data);
    callback(data);
  }, 2000);
}

function firstFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data} - Processed First`;
    console.log("Inside (firstFunc) Function");
    callback(processedData);
  }, 1000);
}

function secondFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data} - Processed Second`;
    console.log("Inside (secondFunc) Function.");
    callback(processedData);
  }, 1500);
}

// Callback Hell
callbackHell((data) => {
  firstFunc(data, (processedData1) => {
    secondFunc(processedData1, (processedData2) => {
      console.log(`Final result of all functions: ${processedData2}`);
    });
  });
});
