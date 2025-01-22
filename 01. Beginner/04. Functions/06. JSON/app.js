// JSON

/* 
    JSON stands for JavaScript Object Notation. It's a lightweight data format that is used to exchange data between different programming languages.
    It's a text-based format that represents data as a collection of key-value pairs.
    JSON is often used in web development to transfer data between the server and the client.
    JSON is a subset of JavaScript, so you can use it to represent JavaScript objects.
*/

/* 
    In JavaScript, JSON is represented as a string, and it closely resembles JavaScript object literal notation. 
    It consists of key-value pairs, where keys must be strings, and values can be strings, numbers, booleans, arrays, or nested objects. 
    The key-value pairs are separated by commas, and the entire JSON object is enclosed in curly braces {}.

    JavaScript provides methods to work with JSON data:
        JSON.stringify(): Converts a JavaScript object into a JSON string.
        JSON.parse(): Parses a JSON string and returns a JavaScript object.

*/

const person = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  isSubscribed: true,
  hobbies: ["Reading", "Running", "Cooking"],
  address: {
    city: "New York",
    zipCode: "10001",
  },
};

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(person);

console.log(jsonString);
/* Output:
    {
      "name":"John Doe",
      "age":30,
      "email":"john@example.com",
      "isSubscribed":true,
      "hobbies":["Reading","Running","Cooking"],
      "address":{"city":"New York","zipCode":"10001"}
    }
  */

// Parse JSON string back to JavaScript object
const parsedObject = JSON.parse(jsonString);

console.log(parsedObject.name); // Output: "John Doe"
console.log(parsedObject.hobbies); // Output: ["Reading", "Running", "Cooking"]

// Common Use Case: Sending Data to a Server
/*
When sending data to a server, it is typically converted to JSON string format.
*/
const requestData = JSON.stringify({
  username: "john_doe",
  password: "123456",
});
console.log(requestData); // Output: {"username":"john_doe","password":"123456"}

// ----------------------------

// Common Use Case: Receiving Data from a Server
/*
When receiving data from a server, it is usually in JSON format and needs to be parsed.
*/
const responseData = `{
    "status": "success",
    "data": {
        "id": 1,
        "username": "john_doe"
    }
}`;
const parsedResponse = JSON.parse(responseData);
console.log(parsedResponse);
// Output: { status: 'success', data: { id: 1, username: 'john_doe' } }
