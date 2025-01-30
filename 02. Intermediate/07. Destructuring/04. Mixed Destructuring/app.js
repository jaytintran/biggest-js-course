const data = {
  user: {
    id: 123,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["Reading", "Painting", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};

// Extracting data using object destructuring
const {
  user: {
    name,
    age,
    address: { city, country },
  },
} = data;

console.log(name); // John Doe
console.log(age); // 30
console.log(city); // New York
console.log(country); // USA

// -------------------------------------------------------------

// Mixed Destructuring
/*
You can mix destructuring for objects and arrays.
*/
const mixed = {
  items: [10, 20, 30],
  details: {
    category: "books",
  },
};
const {
  items: [item1, item2],
  details: { category },
} = mixed;
console.log(item1, item2, category); // 10 20 books

// ------------------------------------------------------------

// 1. Array Destructuring: Extract elements from arrays.
// 2. Object Destructuring: Extract properties from objects.
// 3. Nested Destructuring: Extract values from nested arrays/objects.
// 4. Rest Operator: Gather the remaining values.
// 5. Function Parameters: Use destructuring directly in function arguments.
