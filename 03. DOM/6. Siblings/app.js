let firstLi = document.querySelector("li");

console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);

let ul = document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2].textContent);

console.log(firstLi.nextElementSibling);
console.log(firstLi.previousElementSibling);
