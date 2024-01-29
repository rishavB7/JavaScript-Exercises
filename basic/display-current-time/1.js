// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const date = new Date();
const day = date.getDay();
const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let hour = date.getHours();
hour = hour > 12 ? hour - 12 : hour;
let am_pm = hour >= 12 ? "am" : "pm";

let min = date.getMinutes();
let sec = date.getSeconds();

let timeformate = `${hour} ${am_pm} : ${min} : ${sec}`;

console.log(`Today is: ${dayName[day]}`);
console.log(`Current time is: ${timeformate}`);