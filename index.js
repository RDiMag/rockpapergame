const gameOptions = ["Rock", "Paper", "Scissors"];

function computerPlay(gameOptions) {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

console.log(computerPlay);

