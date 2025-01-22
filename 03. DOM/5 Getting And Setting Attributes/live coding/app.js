// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const hyperlink = document.querySelector("a");
console.log(hyperlink.href);
console.log((hyperlink.href = "https://google.com"));

const input = document.querySelector("input");
console.log(input.value);
console.log((input.value = "Hello World!"));
console.log(input.type);

console.log(hyperlink.setAttribute("href", "https://google.com.vn"));
console.log(input.getAttribute("placeholder"));
