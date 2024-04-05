let rpsArray = ['rock','paper','scissors'];

/**
 * Clear the decks
 * Reset game counters
 */
let computerScore = 0;
let userScore = 0;
let computerRPS = "";
let userRPS = "";

console.log(computerGuess());
console.log(userGuess());

/**
 * Computer guess
 */
function computerGuess() {
    let guess = (Math.floor(Math.random() * 3));
    console.log("computer: " + guess);
    return (rpsArray[guess]);
}

/**
 * User guess
 */
function userGuess() {
    let guess = (Math.floor(Math.random() * 3));
    console.log("user: " + guess);
    return (rpsArray[guess]);
}
