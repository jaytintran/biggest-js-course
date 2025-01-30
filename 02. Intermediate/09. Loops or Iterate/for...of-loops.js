// Comparison Between For-In and For-Of
/*
| Feature              | For-In                           | For-Of                      |
|----------------------|----------------------------------|-----------------------------|
| Iterates Over        | Keys of an object               | Values of an iterable       |
| Use Case             | Objects                         | Arrays, strings, maps, sets |
| Suitable for Arrays? | Not recommended                 | Yes                         |
*/

/* 
    The "for...of" loop in JavaScript is used to iterate over the enumerable properties of an object.

    // The "for...of" loop in JavaScript is a modern iteration statement introduced in ECMAScript 6 (ES6)
    // It provides a concise and easy way to loop over elements in iterable objects like arrays, strings, maps, sets, and more.
    // It allows you to iterate directly over the values of the elements, rather than dealing with their indices or keys, which makes the code more readable and less error-prone.
    // Comparing to the "for...in" loop, the "for...of" loop is more appropriate for iterating over: arrays, strings, maps, sets, and other iterable objects.

    When to use the "for...of" loop:
    - Iterating over arrays, strings, maps, sets, and other iterable objects.
    - When you want to loop over the values of the elements, rather than their indices or keys.
*/

let peoples = ["Han", "Luke", "Leia"];
for (let person of peoples) {
  console.log(person);
}

let string = "HuXn WebDev";
for (let char of string) {
  console.log(char);
}
