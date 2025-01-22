// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)

const twitter = document.querySelector("a");
console.log(twitter.getAttribute("href"));

const udemy = document.querySelector(".a-two");
console.log(udemy.setAttribute("href", "https://udemy.com"));
