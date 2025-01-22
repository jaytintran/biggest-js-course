/*

    // The filter() method is a built-in array method in JavaScript that allows you to create a new array containing elements that pass a certain condition. 
    // It provides a clean and concise way to filter out elements from an array based on a specified criteria.


    Summary: Creates a new array containing only elements that pass a specified condition.

    When to Use:
    + When you need to extract a subset of elements based on a condition.
    + For removing unwanted elements from an array.
    + When creating a new array with only the items that satisfy a specific criterion.

    Return Value:
    + Returns a new array with filtered elements.

*/

const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

const filteredSongs = songs.filter((song) => song.duration > 3);
console.log(filteredSongs);
// [
//   { name: 'Lucky You', duration: 4.34 },
//   { name: 'The Search', duration: 2.33 },
//   { name: 'The Box', duration: 5.23 }
// ]

const computers = [
  { ram: 4, hdd: 100 },
  { ram: 8, hdd: 200 },
  { ram: 16, hdd: 300 },
  { ram: 32, hdd: 400 },
];

console.log(computers.filter((com) => com.ram > 16));

const moreStorages = computers.filter((com) => com.hdd > 200);

const ages = [32, 12, 34, 29, 81, 93];

function onlyAdults(age) {
  return age >= 18;
}

const rest = ages.filter(onlyAdults);
