
function playGame() {

    let counter = 0;
    let computerScore = 0;
    let playerScore = 0;

    // loop to repeat function calls 5 time(5 rounds of game)
    while (counter < 5) {
        counter++;

        // function to randomly get number from 0 to 2, to use as index from choiceArray
        function getComputerChoice() {
            return Math.floor(Math.random() * 3);
        }

        const choiceArray = ["rock", "paper", "scissors"];
        let computerSelection = choiceArray[getComputerChoice()];
        console.log(computerSelection);

        let playerSelection = prompt("Please enter your choice: ", "");
        playerSelection = playerSelection.toLowerCase();

        console.log(playerSelection);

        // conditional block that verify the score(increment it) of one game round
        if (computerSelection == "rock") {
            switch (playerSelection) {
                case "rock":
                    console.log("It is a draw. Rock = Rock!")
                    break;
                case "paper":
                    console.log("You win! Paper beats rock!")
                    playerScore++;
                    break;
                case "scissors":
                    console.log("You loose! Rock beats scissors!")
                    computerScore++;
                    break;
            }
        } else if (computerSelection == "paper") {
            switch (playerSelection) {
                case "rock":
                    console.log("You loose! Paper beats rock!");
                    computerScore++;
                    break;
                case "paper":
                    console.log("It is a draw. Paper = Paper!");
                    break;
                case "scissors":
                    console.log("You win! Scissors beats paper!");
                    playerScore++;
                    break;
            }
        } else if (computerSelection == "scissors") {
            switch (playerSelection) {
                case "rock":
                    console.log("You win! Rock beats scissors!");
                    playerScore++;
                    break;
                case "paper":
                    console.log("You loose! Scissors beats paper!");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("It is a draw. Scissors = Scissors!")
                    break;
            }


        }
    }

    // conditional block that chooses the winner and write out the game result 
    if (computerScore > playerScore) {
        console.log(`You loose! Computer ${computerScore} : ${playerScore}.`);
    } else if (computerScore < playerScore) {
        console.log(`You win! ${playerScore} : ${computerScore} `);
    } else {
        console.log(`It is a draw ${computerScore} : ${playerScore}`);
    }
}

playGame();



