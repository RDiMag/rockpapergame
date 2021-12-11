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

function playRound() {
    var playerSelection = this.id;
    var computerSelection = computerPlay();
    console.log("User: " + playerSelection)
    console.log("Computer: " + computerSelection)

function game() {
    let computerSelection = computerPlay();

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "Scissors"){
                playerScore += 1;
                console.log(`You win! Rock beats scissors. Player: ${playerScore} Computer: ${computerScore}`);
            } else if  (playerSelection == "rock" && computerSelection == "Paper"){
                computerScore += 1;
                console.log(`You lose! Paper beats rock.  Player: ${playerScore} Computer: ${computerScore}`);
            } else if (playerSelection == "scissors" && computerSelection == "Rock"){
                computerScore += 1;
                console.log(`You lose! Rock beats scissors. Player: ${playerScore} Computer: ${computerScore}`);
            } else if (playerSelection == "scissors" && computerSelection == "Paper"){
                playerScore += 1;
                console.log(`You win! Scissors beats paper.  Player: ${playerScore} Computer: ${computerScore}`);
            } else if (playerSelection == "paper" && computerSelection == "Rock"){
                playerScore += 1;
                console.log(`You win! Paper beats rock.  Player: ${playerScore} Computer: ${computerScore}`);
            } else if (playerSelection == "paper" && computerSelection == "Scissors"){
                computerScore += 1;
                console.log(`You lose! Scissors beat paper.  Player: ${playerScore} Computer: ${computerScore}`);
            } else console.log(`You tied!  Player: ${playerScore} Computer: ${computerScore}`);
        }
    console.log(playRound(playerSelection, computerSelection));
    
    function winner() {
        if (playerScore > computerScore) {
        console.log(`You win! Player: ${playerScore}. Computer: ${computerScore}.`)
        } else if (playerScore < computerScore) {
        console.log(`You lose. Player: ${playerScore} Computer: ${computerScore}.`)
        } else console.log('You tied! Player: ${playerScore}. Computer: ${computerScore}.')
    }
}
}


