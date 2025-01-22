const currentTime = new Date();

const year = currentTime.getFullYear();
const month = currentTime.getMonth() + 1;
const day = currentTime.getDate();
const weekday = currentTime.getDay();
const hour = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

console.log(year, month, day, weekday, hour, minutes, seconds);

currentTime.setDate(currentTime.getDate() + 1);
console.log(currentTime.toDateString());
console.log(currentTime.toLocaleString());
console.log(currentTime.toISOString());
