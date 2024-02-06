
// Function to get computer choice between 1 and 3
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

const choiceArray = ["rock", "paper", "scissors"];
let computerSelection = choiceArray[getComputerChoice()];
// console.log(computerSelection);

// Function that get's player choice and change the type from string to integer
let playerSelection = prompt("Please enter your choice: ", "");
playerSelection = playerSelection.toLowerCase();

// console.log(playerSelection);

let gameResult;

console.log(gameResult);
function playRound(playerSelection, computerSelection) {
    
    if (computerSelection == "rock") {
        switch (playerSelection) {
            case "rock":
                return gameResult = "draw";
                break;
            case "paper":
                return gameResult = "win";
                break;
            case "scissors":
                return "loose";
                break;
        }
    } else if(computerSelection == "paper") {
        switch (playerSelection) {
            case "rock":
                return gameResult = "loose";
                break;
            case "paper":
                return gameResult = "draw";
                break;
            case "scissors":
                return gameResult = "win";
                break;
        }
    } else if(computerSelection == "scissors") {
        switch (playerSelection) {
            case "rock":
                return gameResult = "win";
                break;
            case "paper":
                return gameResult = "loose";
                break;
            case "scissors":
                return gameResult = "draw";
                break;
        }
        return gameResult;
        // console.log(gameResult);
    }
}

// console.log(playRound(playerSelection, computerSelection));



