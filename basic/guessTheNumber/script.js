//  Write a JavaScript program where the program takes a random integer between 1 and 10,
//  and the user is then prompted to input a guess number.
//  The program displays a message "Good Work"
//  if the input matches the guess number otherwise "Not matched".

let min = 1;
let max = 100;
let random = Math.floor(Math.random() * max + min);
let running = true;

while (running) {
  let userInput = window.prompt(`Guess the number between ${min}-${max}`);

  if (isNaN(userInput)) {
    window.alert("Enter a valid number");
  } else if (userInput > max || userInput < min) {
    window.alert("Enter a valid number");
  } else {
    if (userInput < random) {
      window.alert("Too Low");
    } else if (userInput > random) {
      window.alert("Too high");
    } else {
      window.alert(`Good Job. The correct answer is ${random}`);
      running = false;
    }
  }
}

// console.log(random);
