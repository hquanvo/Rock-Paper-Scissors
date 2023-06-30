const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let cpuChoice;
let cpuScore;
let playerChoice;
let playerScore;

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
    if (playerChoice === cpuChoice) return "It's a tie!";
    else if ((playerChoice === "rock" && cpuChoice === "paper") || 
    (playerChoice === "paper" && cpuChoice === "scissors") || (playerChoice === "scissors" && cpuChoice === "rock")) {
        cpuScore++;
        return "You lost this round!";
    } else if ((playerChoice === "rock" && cpuChoice === "scissors") || 
    (playerChoice === "paper" && cpuChoice === "rock") || (playerChoice === "scissors" && cpuChoice === "paper")) {
        playerScore++;
        return "You won this round!";
    }
}

function startUp() {
    // init vars
    playerScore = 0;
    cpuScore = 0;

    const message = document.getElementById("message");
    const para = document.createElement('p');
    const rock = document.getElementById("rock-btn");
    const paper = document.getElementById("paper-btn");
    const scissors = document.getElementById("scissors-btn");

    para.textContent = "Welcome to Rock Paper Scissors! Play against a computer by clicking on any of the button below. First to 5 win!";
    message.appendChild(para);

    updateScoreBoard();

    rock.addEventListener('click', () => {handleClick('rock')});
    paper.addEventListener('click', () => {handleClick('paper')});
    scissors.addEventListener('click', () => {handleClick('scissors')});
}

function updateScoreBoard() {
    const player = document.querySelector("#playerScore");
    player.textContent = "Player Score: " + playerScore;
    const cpu = document.querySelector("#cpuScore");
    cpu.textContent = "Computer Score: " + cpuScore;
}

function handleClick(playerChoice) {
    const message = document.querySelector("#message p");
    cpuChoice = getComputerChoice();
    message.textContent = "You played " + playerChoice + " and the CPU played " + cpuChoice + ". "
    message.textContent = message.textContent + playRound(playerChoice, cpuChoice);
    updateScoreBoard();

    if (playerScore === 5 || cpuScore === 5) {
        handleGameOver();
    }
}

function handleGameOver() {
    const message = document.getElementById("message");
    const restartBtn = document.createElement("button");
    const para = document.createElement("p");
    restartBtn.id = "restart-button";
    restartBtn.textContent = "Restart";
    para.id = "gameOver";
    message.appendChild(para);
    
    if (playerScore === 5) {
        para.textContent = "You win! Click the restart button to try again!";
    } else {
        para.textContent = "Unfortunately, you lost! Click the restart button to try again!";
    }
    const container = document.querySelector("#container");
    container.appendChild(restartBtn);
    document.getElementById("rock-btn").disabled = true;
    document.getElementById("paper-btn").disabled = true;
    document.getElementById("scissors-btn").disabled = true;
    restartBtn.addEventListener('click', handleRestart);
}

function handleRestart() {
    const restartBtn = document.getElementById("restart-button");
    document.getElementById("rock-btn").disabled = false;
    document.getElementById("paper-btn").disabled = false;
    document.getElementById("scissors-btn").disabled = false;
    document.getElementById("container").removeChild(restartBtn);
    document.getElementById("message").textContent = '';

    const para = document.createElement('p');
    para.textContent = "Welcome to Rock Paper Scissors! Play against a computer by clicking on any of the button below. First to 5 win!";
    message.appendChild(para);

    playerScore = 0;
    cpuScore = 0;
    updateScoreBoard();
}

startUp();
