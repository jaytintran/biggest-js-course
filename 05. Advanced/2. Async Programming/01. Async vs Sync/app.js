// ******************** SYNCHRONOUS CODE ********************

// Synchronous code runs in the order it appears in the script, 
// blocking the subsequent code execution until the current one finishes.

// Here we define a function 'myFunc' that will run synchronously when called.
function myFunc() {
    console.log("Inside function"); // This will execute immediately when the function is called.
  }
  
  // The following will execute synchronously, one after the other.
  console.log("Start");  // Prints "Start" first
  myFunc();              // Calls the 'myFunc' function, which prints "Inside function"
  console.log("End");    // Prints "End" last, but it waits for 'myFunc' to complete
  
  // Expected Output:
  // Start
  // Inside function
  // End
  
  // ******************** ASYNCHRONOUS CODE ********************
  
  // Asynchronous code allows some code to run while waiting for a task to complete 
  // (like reading a file, fetching data from a server, or timers), 
  // enabling the next task to start without waiting for the previous one.
  
  console.log("Start"); // Prints "Start" first
  
  // The `setTimeout` function schedules a task (in this case, logging a message) 
  // to execute after a specified amount of time (2 seconds).
  setTimeout(() => {
    console.log("Inside SetTimeout"); // This will print after a delay of 2000ms (2 seconds).
  }, 2000); 
  
  console.log("End"); // Prints "End" immediately, even before the timeout callback.
  
  // Expected Output:
  // Start
  // End
  // Inside SetTimeout (after 2 seconds)
  
  // ******************** Explanation of Sync vs Async ********************
  
  // In the synchronous example:
  // - The execution flow is **blocked**. Each line is executed in the exact order.
  // - 'myFunc' must complete before 'console.log("End")' is executed.
  
  // In the asynchronous example:
  // - The `setTimeout` function is **non-blocking**. The JavaScript engine doesn't wait for it.
  // - The 'Start' and 'End' are logged first, and after 2 seconds, the callback in `setTimeout` is executed.
  // - While waiting for the timer to expire, other code can execute without delay.
  
  // Important Notes:
  // - **Synchronous** code is simple and predictable but can be inefficient in scenarios where there are long-running tasks (like network requests or timers).
  // - **Asynchronous** code is more efficient when dealing with I/O tasks (like reading a file, making API calls, etc.) because it allows other code to execute while waiting for the task to complete.
  
  