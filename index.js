// This function creates a random computer selection from the given three options.
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const gameOptions = ["Rock", "Paper", "Scissors"];
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}


document.getElementById('rock').onclick = playRound, computerPlay;
document.getElementById('paper').onclick = playRound, computerPlay;
document.getElementById('scissors').onclick = playRound, computerPlay;
document.getElementById('reset').onclick = restartGame;


function playRound() {
    var playerSelection = this.id;
    var computerSelection = computerPlay();
    console.log("User: " + playerSelection)
    console.log("Computer: " + computerSelection)

        if (playerSelection == "rock" && computerSelection == "Scissors"){
            playerScore += 1;
            winner();
            document.getElementById("results").innerHTML = (`You win! Rock beats scissors. Player: ${playerScore} Computer: ${computerScore}`);
        } else if  (playerSelection == "rock" && computerSelection == "Paper"){
            computerScore += 1;
            winner();
            document.getElementById("results").innerHTML = (`You lose! Paper beats rock.  Player: ${playerScore} Computer: ${computerScore}`);
        } else if (playerSelection == "scissors" && computerSelection == "Rock"){
            computerScore += 1;
            winner();
            document.getElementById("results").innerHTML = (`You lose! Rock beats scissors. Player: ${playerScore} Computer: ${computerScore}`);
        } else if (playerSelection == "scissors" && computerSelection == "Paper"){
            playerScore += 1;
            winner();
            document.getElementById("results").innerHTML = (`You win! Scissors beats paper.  Player: ${playerScore} Computer: ${computerScore}`);
        } else if (playerSelection == "paper" && computerSelection == "Rock"){
            playerScore += 1;
            document.getElementById("results").innerHTML = (`You win! Paper beats rock.  Player: ${playerScore} Computer: ${computerScore}`);
        } else if (playerSelection == "paper" && computerSelection == "Scissors"){
            computerScore += 1;
            document.getElementById("results").innerHTML = (`You lose! Scissors beat paper.  Player: ${playerScore} Computer: ${computerScore}`);
        } else winner();
            document.getElementById("results").innerHTML = (`You tied!  Player: ${playerScore} Computer: ${computerScore}`);
        
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
                  document.getElementById("results").innerHTML = ("Results:");
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