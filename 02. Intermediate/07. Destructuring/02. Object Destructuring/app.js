// In object destructuring, the order doesn't matter, but the name does.
// You can extract properties from objects and assign them to variables.

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
  job: "Football Coach",
};

const {
  name,
  job,
  age,
  hobbies: [hobbie1, hobbie2, hobbie3],
  address: { city, zipCode },
} = person;
console.log(name, job, age); // John Doe Football Coach 30
console.log(hobbie1, hobbie2, hobbie3); // Reading Running Cooking

// Renaming Properties
const { name: userName, job: userJob, age: userAge } = person;
console.log(userName, userJob, userAge); // John Doe Football Coach 30

// Object Destructuring with Rest Operator
const { realName, ...rest } = person;
console.log(realName); // John Doe
console.log(rest); // { age: 30, email: 'john@example.com', isSubscribed: true, hobbies: [ 'Reading', 'Running', 'Cooking' ], address: { city: 'New York', zipCode: '10001' }, job: 'Football Coach' }

// Nested Destructuring
const album = {
  title: "The Dark Side of the Moon",
  artist: "Pink Floyd",
  year: 1973,
  genre: "Rock",
  tracks: [
    { title: "Speak to Me", duration: 3.5 },
    { title: "Breathe", duration: 4.5 },
    { title: "On the Run", duration: 3.5 },
  ],
  rating: 4.5,
};

const {
  title,
  artist,
  year,
  genre,
  tracks: [track1, ...restTrack],
  rating,
} = album;
console.log(restTrack); // [ { title: 'Breathe', duration: 4.5 }, { title: 'On the Run', duration: 3.5 } ]
