// Create a game where you start with any random game Number. Ask the user to keep guessing the game number intil the user enters correct value

let gameNum = 25;

let userNum = prompt("Guess the game number : ");

while(userNum != gameNum) {
    userNum = prompt("You entered the wrong number. Guess again : ");
}

console.log("congratulations, you entered the right number");