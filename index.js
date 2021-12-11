let playerScore = 0;
let computerScore = 0;

// This function creates a random computer selection from the given three options.

function computerPlay() {
    const gameOptions = ["Rock", "Paper", "Scissors"];
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

// This connects the button clicks to the computerPlay and playRound functions.
document.getElementById('rock').onclick = playRound;
document.getElementById('paper').onclick = playRound;
document.getElementById('scissors').onclick = playRound;
document.getElementById('reset').onclick = restartGame;

//This is the game function.
function playRound() {
    let playerSelection = this.id;
    let computerSelection = computerPlay();
    console.log("User: " + playerSelection)
    console.log("Computer: " + computerSelection)

        if (playerSelection == "rock" && computerSelection == "Scissors"){
            playerScore += 1;
            document.getElementById("results").innerHTML = (`You win! Rock beats scissors. Player: ${playerScore} Computer: ${computerScore}`);
        } else if  (playerSelection == "rock" && computerSelection == "Paper"){
            computerScore += 1;
            document.getElementById("results").innerHTML = (`You lose! Paper beats rock.  Player: ${playerScore} Computer: ${computerScore}`);
        } else if (playerSelection == "scissors" && computerSelection == "Rock"){
            computerScore += 1;
            document.getElementById("results").innerHTML = (`You lose! Rock beats scissors. Player: ${playerScore} Computer: ${computerScore}`);
        } else if (playerSelection == "scissors" && computerSelection == "Paper"){
            playerScore += 1;
            document.getElementById("results").innerHTML = (`You win! Scissors beats paper.  Player: ${playerScore} Computer: ${computerScore}`);
        } else if (playerSelection == "paper" && computerSelection == "Rock"){
            playerScore += 1;
            document.getElementById("results").innerHTML = (`You win! Paper beats rock.  Player: ${playerScore} Computer: ${computerScore}`);
        } else if (playerSelection == "paper" && computerSelection == "Scissors"){
            computerScore += 1;
            document.getElementById("results").innerHTML = (`You lose! Scissors beat paper.  Player: ${playerScore} Computer: ${computerScore}`);
        } else {
            document.getElementById("results").innerHTML = (`You tied!`)
        }
        
        winner();

//Winner function should update "gameover" div with a message when playerScore or computerScore reaches 5.
//It should also call endGame to disable buttons and update "results" div. 

            function winner() {
                if (playerScore === 5) {
                endGame()
                document.getElementById("gameOver").innerHTML = (`You win! Player: ${playerScore}. Computer: ${computerScore}`)
                } else if (computerScore === 5) {
                endGame()
                document.getElementById("gameOver").innerHTML = (`You lose. Player: ${playerScore} Computer: ${computerScore}`)
                } else document.getElementById("gameOver").innerHTML = (`Keep Playing!`)
            
            function endGame() {
                  document.getElementById("rock").disabled = true;
                  document.getElementById("paper").disabled = true;
                  document.getElementById("scissors").disabled = true;
                  document.getElementById("results").innerHTML = (" ");
            }
         
    } 
}

function restartGame() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("results").innerHTML = ("Rock Paper Scissors");
    document.getElementById("gameOver").innerHTML = ("Who Will Prevail?");

    playerScore = 0;
    computerScore = 0;

}