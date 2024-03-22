
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playGame(e.target.id);
    })
});

let computerScore = 0;
let playerScore = 0;

function playGame(playerInput) {

    if (computerScore < 5 & playerScore < 5) {

        // function to randomly get number from 0 to 2, to use as index from choiceArray
        function getComputerChoice() {
            return Math.floor(Math.random() * 3);
        }

        const choiceArray = ["rock", "paper", "scissors"];

        let computerSelection = choiceArray[getComputerChoice()];

        let playerSelection = choiceArray[playerInput];

        let div = document.querySelector('div');
        let paragraphResult = document.createElement('p');

        if (computerSelection == "rock") {
            switch (playerSelection) {
                case "rock":
                    paragraphResult.textContent = "It is a draw. Rock = Rock!";
                    div.appendChild(paragraphResult);
                    break;
                case "paper":
                    paragraphResult.textContent = "You win! Paper beats rock!";
                    div.appendChild(paragraphResult);
                    playerScore++;
                    break;
                case "scissors":
                    paragraphResult.textContent = "You loose! Rock beats scissors!";
                    div.appendChild(paragraphResult);
                    computerScore++;
                    break;
            }
        } else if (computerSelection == "paper") {
            switch (playerSelection) {
                case "rock":
                    paragraphResult.textContent = "You loose! Paper beats rock!";
                    div.appendChild(paragraphResult);
                    computerScore++;
                    break;
                case "paper":
                    paragraphResult.textContent = "It is a draw. Paper = Paper!";
                    div.appendChild(paragraphResult);
                    break;
                case "scissors":
                    paragraphResult.textContent = "You win! Scissors beats paper!";
                    div.appendChild(paragraphResult);
                    playerScore++;
                    break;
            }
        } else if (computerSelection == "scissors") {
            switch (playerSelection) {
                case "rock":
                    paragraphResult.textContent = "You win! Rock beats scissors!";
                    div.appendChild(paragraphResult);
                    playerScore++;
                    break;
                case "paper":
                    paragraphResult.textContent = "You loose! Scissors beats paper!";
                    div.appendChild(paragraphResult);
                    computerScore++;
                    break;
                case "scissors":
                    paragraphResult.textContent = "It is a draw. Scissors = Scissors!";
                    div.appendChild(paragraphResult);
                    break;
            }
        }
        return computerScore;
        return playerScore;
    }
    else {
        const finalScoreDiv = document.querySelector('#finalResult');
        const finalScoreP = document.createElement('p');

        if (computerScore > playerScore) {
            finalScoreP.textContent = `You loose! Computer wins ${computerScore} : ${playerScore}.`
            finalScoreDiv.appendChild(finalScoreP);
        } else {
            (computerScore < playerScore)
            finalScoreP.textContent = `You win! ${playerScore} : ${computerScore} `;
            finalScoreDiv.appendChild(finalScoreP);
        }
    }
}
