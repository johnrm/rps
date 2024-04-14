//Reset game counters
let rpsArray = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let userScore = 0;
let computerRPS = "";
let userRPS = "";
let winner = "";
let tempCard;

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
            playSound ();
            pickWinner();
            showCards();
            updateScore();          
            if ((userScore === 5) || (computerScore === 5)) gameOver();
        }
        );
    }
});

// Computer guess
function computerGuess() {
    let guess = (Math.floor(Math.random() * 3));
    return (rpsArray[guess]);
}

function playSound(){
    var audio = new Audio("assets/sound/640020__nxrt__basic-mouse-click-ui.wav");
    audio.play();
}

// Pick a Winner
function pickWinner() {
    if (computerRPS === userRPS) {
        winner = "Its a draw!";
    } else if (
        ((computerRPS === "rock") && (userRPS === "scissors")) ||
        ((computerRPS === "scissors") && (userRPS === "paper")) ||
        ((computerRPS === "paper") && (userRPS === "rock"))) {
        winner = "Computer wins!";
        computerScore += 1;
    } else {
        winner = "You win!";
        userScore += 1;
    }
}

// Show cards
function showCards() {
    //Computer card
    tempCard = document.getElementsByTagName('img')[0];
    if (winner === "You win!") {
        tempCard.src = `assets/images/${"no" + computerRPS}.webp`;
    } else {
        tempCard.src = `assets/images/${computerRPS}.webp`;
    }
    //User card
    tempCard = document.getElementsByTagName('img')[1];
    if (winner === "Computer wins!") {
        tempCard.src = `assets/images/${"no" + userRPS}.webp`;
    } else {
        tempCard.src = `assets/images/${userRPS}.webp`;
    }
}

// Update scores
function updateScore() {
    let gameStatus = document.getElementById('play');
    gameStatus.innerHTML = (winner);
    let liveComputerScore = document.getElementById('computerScore');
    liveComputerScore.innerHTML = parseInt(computerScore);
    let liveUserScore = document.getElementById('userScore');
    liveUserScore.innerHTML = parseInt(userScore);
}

// Get the modal
var modal = document.getElementById("gameModal");

// Game over
function gameOver() {
    userScore = 0;
    computerScore = 0;
    document.getElementById('game-over').innerHTML = ("Game Over<br>" + winner);
    modal.style.display = "block";
}