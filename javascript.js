
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
        result = console.log("It's a tie!");
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        result = "The computer scored a point. Rock beats scissors.";
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper') {
        result = "You scored a point. Paper beats rock.";
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock') {
        result = "The computer scored a point. Paper beats rock.";
    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        result = "You scored a point. Scissors beats paper.";
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        result = "The computer scored a point. Scissors beats paper.";
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        result = "You scored a point. Rock beats scissors.";
    }
    else {
        result = "You can only pick one from: rock, paper, or scissors. Please try again."
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
