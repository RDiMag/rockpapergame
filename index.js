// This function creates a random computer selection from the given three options.
function computerPlay() {
    const gameOptions = ["Rock", "Paper", "Scissors"];
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

// This prompt requests and stores data for the player's choice.
var playerSelection = prompt("Choose Your Fighter: Rock, Paper, or Scissors?");

const computerSelection = computerPlay();

// This function allows for one round of play and returns a string based on the user input vs. computer input.

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "Scissors"){
            return "You win! Rock beats scissors.";
        } else if  (playerSelection == "rock" && computerSelection == "Paper"){
            return "You lose! Paper beats rock.";
        } else if (playerSelection == "scissors" && computerSelection == "Rock"){
            return "You lose! Rock beats scissors.";
        } else if (playerSelection == "scissors" && computerSelection == "Paper"){
            return "You win! Scissors beat paper.";
        } else if (playerSelection == "paper" && computerSelection == "Rock"){
            return "You win! Paper beats rock.";
        } else if (playerSelection == "paper" && computerSelection == "Scissors"){
            return "You lose! Scissors beat paper.";
        } else return "You tied!";
}

console.log(playRound(playerSelection, computerSelection));