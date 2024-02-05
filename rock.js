
// Function to get computer choice between 1 and 3
let computerSelection = function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// console.log(computerChoice());

let playerSelection = prompt("Please enter your choice:\nFor rock input 0,\npaper input 1,\nand scissor input 2: ", "");

