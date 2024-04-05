let rpsArray = ['rock','scissors','paper'];

/**
 * Clear the decks
 * Reset game counters
 */
let computerScore = 0;
let userScore = 0;
let computerRPS = "";
let userRPS = "";

console.log (computerGuess ());

/**
 * Computer guess
 */
function computerGuess() {
    let guess = (Math.floor(Math.random() * 3));
    console.log("computer: " + guess);
    return (rpsArray[guess]);
}