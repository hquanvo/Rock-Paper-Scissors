const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let cpuChoice;
let cpuScore;
let playerChoice;
let playerScore;
let losingMessage = "You lose!";
let winningMessage = "You win!";

function getComputerChoice() {
    switch((Math.floor(Math.random() * 10)) % 3) {
        case ROCK:
            return "rock";
            break;
        case PAPER:
            return "paper";
            break;
        case SCISSORS:
            return "scissors";
            break;
    }
}

function getPlayerChoice() {
    return prompt("Please enter 'rock', 'paper' or 'scissors'").toLowerCase();
}

function playRound(playerChoice, cpuChoice) {
    if (playerChoice === cpuChoice) return "It's a draw!";
    else if ((playerChoice === "rock" && cpuChoice === "paper") || 
    (playerChoice === "paper" && cpuChoice === "scissors") || 
    (playerChoice === "scissors" && cpuChoice === "rock")) {
        cpuScore++;
        return losingMessage;
    } else if ((playerChoice === "rock" && cpuChoice === "scissors") || 
    (playerChoice === "paper" && cpuChoice === "rock") || 
    (playerChoice === "scissors" && cpuChoice === "paper")) {
        playerScore++;
        return winningMessage;
    } else return "That's not a valid input!";
}

function game() {
    let i = 0;
    cpuScore = 0;
    playerScore = 0;
    while (i != 5) {
        playerChoice = getPlayerChoice();
        cpuChoice = getComputerChoice();
        console.log(playRound(playerChoice, cpuChoice));
        i++;
        console.log("Current score: You: " + playerScore + " , CPU: " + cpuScore);
        if (cpuScore === 3 || playerScore === 3) break;
    }
    (playerScore > cpuScore) ? alert("Congratulations, you win!") 
    : ((playerScore < cpuScore) ? alert("Unfortunately, you lost!") 
    : alert("It's a draw!"));
}

// disabling prompt
// game();