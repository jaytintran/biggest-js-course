function getPersonInfo({ name, age }) {
  const infos = { name, age };
  console.log(infos);
  console.log(name, age);
}

const person = { name: "Jane Hannet", age: 20 };

getPersonInfo(person);

// ------------------------------------

function showMenu({
  title = undefined,
  width: w = 100,
  height: h = 100,
  items: [item1, item2],
}) {
  console.log(title, w, h, item1, items);
}

const breakfastMenu = {
  title: "Breakfast Menu",
  width: 100,
  height: 200,
  items: ["Egg", "Bacon", "Toast"],
};

showMenu(breakfastMenu); // Breakfast Menu 100 200 Egg Bacon Toast

// ------------------------------------

/*
You can destructure arrays or objects directly in function parameters.
*/
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayUser({ name: "Alice", age: 25 }); // Name: Alice, Age: 25

function sum([a, b]) {
  return a + b;
}
console.log(sum([5, 10])); // 15
