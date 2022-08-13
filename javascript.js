
let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let computerChoice =  choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("What do you pick: Rock, Papers, or Scissors:");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

