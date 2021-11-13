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

// let gameRound = 0;


function playerWin() {
    
}

function game() {
    let playerSelection = prompt("Choose Your Fighter: Rock, Paper, or Scissors?");
    let computerSelection = computerPlay();
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerSelection, playerScore, computerScore) {
        if (playerSelection == "rock" && computerSelection == "Scissors"){
                playerScore = ++playerScore;
                console.log(`You win! Rock beats scissors. Player: ${playerScore} Computer: ${computerScore}`);
            } else if  (playerSelection == "rock" && computerSelection == "Paper"){
                computerScore = ++computerScore;
                console.log(`You lose! Paper beats rock.  Player: ${playerScore} Computer: ${computerScore}`);
            } else if (playerSelection == "scissors" && computerSelection == "Rock"){
                computerScore = ++computerScore;
                console.log(`You lose! Rock beats scissors. Player: ${playerScore} Computer: ${computerScore}`);
            } else if (playerSelection == "scissors" && computerSelection == "Paper"){
                playerScore = ++playerScore;
                console.log(`You win! Scissors beats paper.  Player: ${playerScore} Computer: ${computerScore}`);
            } else if (playerSelection == "paper" && computerSelection == "Rock"){
                playerScore = ++playerScore;
                console.log(`You win! Paper beats rock.  Player: ${playerScore} Computer: ${computerScore}`);
            } else if (playerSelection == "paper" && computerSelection == "Scissors"){
                computerScore = ++computerScore;
                console.log(`You lose! Scissors beat paper.  Player: ${playerScore} Computer: ${computerScore}`);
            } else console.log(`You tied!  Player: ${playerScore} Computer: ${computerScore}`);
        }
    console.log(playRound(playerSelection, computerSelection, playerScore, computerScore));
}



