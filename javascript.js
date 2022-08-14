
let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let computerChoice =  choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("What do you pick: Rock, Paper, or Scissors:");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function play() {

    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();

    if (computerSelection === playerSelection) {
        result = "It's a tie!";
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        result = "You lost! Rock beats scissors.";
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper') {
        result = "You won! Paper beats rock.";
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock') {
        result = "You lost! Paper beats rock.";
    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        result = "You won! Scissors beats paper.";
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        result = "You lost! Scissors beats paper.";
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        result = "You won! Rock beats scissors.";
    }
    else {
        result = console.log("You can only pick one from: rock, paper, or scissors. Please try again.");
        play();
    }
    return result;
}

function game() {

    for(i = 0; i < 5; i++) {
    const output = play();
    console.log(output);
    }
}

game()

