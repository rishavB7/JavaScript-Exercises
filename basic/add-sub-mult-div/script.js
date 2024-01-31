const num1 = document.getElementById("myInput1");
const num2 = document.getElementById("myInput2");
const result = document.getElementById("result");
let cal;

function add() {
    cal = Number(num1.value) + Number(num2.value);
    result.textContent = `The result is: ${cal}`
}
function subtract() {
    cal = Number(num1.value) - Number(num2.value);
    result.textContent = `The result is: ${cal}`
}
function multiply() {
    cal = Number(num1.value) * Number(num2.value);
    result.textContent = `The result is: ${cal}`
}
function divide() {
    cal = (Number(num1.value) / Number(num2.value)).toFixed(2);
    result.textContent = `The result is: ${cal}`
}
