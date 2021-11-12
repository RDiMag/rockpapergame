// This function creates a random computer selection from the given three options.
function computerPlay() {
    const gameOptions = ["Rock", "Paper", "Scissors"];
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

// This prompt requests and stores data for the player's choice.
// var playerSelection = prompt("Choose Your Fighter: Rock, Paper, or Scissors?");
// var computerSelection = computerPlay();

// This function allows for one round of play and returns a string based on the user input vs. computer input.

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection == "rock" && computerSelection == "Scissors"){
//             return "You win! Rock beats scissors.";
//         } else if  (playerSelection == "rock" && computerSelection == "Paper"){
//             return "You lose! Paper beats rock.";
//         } else if (playerSelection == "scissors" && computerSelection == "Rock"){
//             return "You lose! Rock beats scissors.";
//         } else if (playerSelection == "scissors" && computerSelection == "Paper"){
//             return "You win! Scissors beat paper.";
//         } else if (playerSelection == "paper" && computerSelection == "Rock"){
//             return "You win! Paper beats rock.";
//         } else if (playerSelection == "paper" && computerSelection == "Scissors"){
//             return "You lose! Scissors beat paper.";
//         } else return "You tied!";
// }


// This function will contain the function playRound and run it 5 times.
// It must return a message each game, and a message listing the winner at the end.

for (let i = 0; i < 5; i++) {
    game(); 
}

let gameRound = 0;


function game(gameRound) {
    var playerSelection = prompt("Choose Your Fighter: Rock, Paper, or Scissors?");
    var computerSelection = computerPlay();
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerSelection, playerScore, computerScore) {
        if (playerSelection == "rock" && computerSelection == "Scissors"){
                return "You win! Rock beats scissors." + ++playerScore;
            } else if  (playerSelection == "rock" && computerSelection == "Paper"){
                return "You lose! Paper beats rock." + ++computerScore;
            } else if (playerSelection == "scissors" && computerSelection == "Rock"){
                return "You lose! Rock beats scissors." + ++computerScore;
            } else if (playerSelection == "scissors" && computerSelection == "Paper"){
                return "You win! Scissors beat paper." + ++playerScore;
            } else if (playerSelection == "paper" && computerSelection == "Rock"){
                return "You win! Paper beats rock." + ++playerScore;
            } else if (playerSelection == "paper" && computerSelection == "Scissors"){
                return "You lose! Scissors beat paper." + ++computerScore;
            } else return "You tied!";
    } 
    
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore);
    console.log(computerScore);
}



