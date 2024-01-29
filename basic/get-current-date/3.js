// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const date = new Date();
const year = date.getFullYear();

let month = date.getMonth() + 1;
month = String(month).padStart(2,0)

let dd = date.getDate();
dd = String(dd).padStart(2,0)

// mm-dd-yyyy
const dateFormat1 = `${month}-${dd}-${year}`;

// mm/dd/yyyy
const dateFormat2 = `${month}/${dd}/${year}`;

// dd-mm-yyyy
const dateFormat3 = `${dd}-${month}-${year}`;

// dd/mm/yyyy
const dateFormat4 = `${dd}/${month}/${year}`;

console.log(`1: ${dateFormat1}`);
console.log(`2: ${dateFormat2}`);
console.log(`3: ${dateFormat3}`);
console.log(`4: ${dateFormat4}`);

