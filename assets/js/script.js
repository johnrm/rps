/**
 * Reset game counters
 */
let rpsArray = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let userScore = 0;
let computerRPS = "";
let userRPS = "";
let winner = "";

// Wait for DOM to load before running.
// Get button elements and add event listeners.
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            //Computer guesses
            computerRPS = computerGuess();
            //User guesses
            userRPS = this.getAttribute("data-card");
            pickWinner();
            showCards();
            updateScore();
            if ((userScore === 5) || (computerScore === 5)) {
                console.log("Game Over!");
                userScore = 0;
                computerScore = 0;
            }
        }
        )
    }
});

/**
 * Computer guess
 */
function computerGuess() {
    let guess = (Math.floor(Math.random() * 3));
    console.log("computer: " + guess);
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
        winner = "Computer wins!";
        computerScore += 1;
    } else if (
        ((userRPS === "rock" && computerRPS === "scissors")) ||
        ((userRPS === "scissors" && computerRPS === "paper")) ||
        ((userRPS === "paper" && computerRPS === "rock"))) {
        console.log("User wins!");
        winner = "User wins!";
        userScore += 1;
    } else {
        console.log("Its a draw!");
        winner = "Its a draw!";
    }
    console.log("Computer " + computerScore + " - User " + userScore);
    console.log("Winner::::" + winner);
    console.log("");
}

/**
 * Show cards
 */
function showCards() {
    //Computer card
    tempCard = document.getElementsByTagName('img')[0];
    console.log("Winner:--:" + winner);
    if (winner === "User wins!") {
        tempCard.src = `assets/images/${"no" + computerRPS}.jpg`;
    } else {
        tempCard.src = `assets/images/${computerRPS}.jpg`;
    };
    //User card
    tempCard = document.getElementsByTagName('img')[1];
    if (winner === "Computer wins!") {
        tempCard.src = `assets/images/${"no" + userRPS}.jpg`;
    } else {
        tempCard.src = `assets/images/${userRPS}.jpg`;
    };
}

/**
 * Update scoreboard
 */
function updateScore() {
    let gameStatus = document.getElementById('play');
    console.log(gameStatus);
    gameStatus.innerHTML = (winner);
    console.log(winner);
    let liveComputerScore = document.getElementById('computerScore');
    liveComputerScore.innerHTML = parseInt(computerScore)
    let liveUserScore = document.getElementById('userScore');
    liveUserScore.innerHTML = parseInt(userScore);
}