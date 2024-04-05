/**
 * Clear the decks
 * Reset game counters
 */
let rpsArray = ['rock','paper','scissors'];
let computerScore = 0;
let userScore = 0;
let computerRPS = "";
let userRPS = "";

for (i=0; i<5; i++) {
computerRPS=computerGuess();
console.log(computerRPS);
userRPS=userGuess();
console.log(userRPS);
pickWinner();
/**
 * Update scoreboard
 */
let liveComputerScore = document.getElementById('computerScore');
let liveUserScore = document.getElementById('userScore');
liveComputerScore.innerHTML  = parseInt(computerScore)
liveUserScore.innerHTML = parseInt(userScore);
}

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

/**
 * Pick a Winner
 */
function pickWinner() {
    console.log("Computer guessed " + computerRPS + ".");
    console.log("User guessed " + userRPS + ".");
    if (
        ((computerRPS === "rock") && (userRPS === "scissors")) ||
        ((computerRPS === "scissors") && (userRPS === "paper")) ||
        ((computerRPS === "paper") && (userRPS === "rock"))) {
        console.log("Computer wins!");
        computerScore += 1;
    } else if (
        ((userRPS === "rock" && computerRPS === "scissors")) ||
        ((userRPS === "scissors" && computerRPS === "paper")) ||
        ((userRPS === "paper" && computerRPS === "rock"))) {
        console.log("User wins!");
        userScore += 1;
    } else {
        console.log("Its a draw!");
        //Add score for draw?
        //        computerScore += 1;
        //        userScore += 1;
    }
    console.log("Computer " + computerScore + " - User " + userScore);
    console.log("");
}