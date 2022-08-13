
let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let computerChoice =  choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("What do you pick: Rock, Papers, or Scissors:");
    return playerChoice;
}