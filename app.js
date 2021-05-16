const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0,
};

// Play Game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target;
    const computerChoice = getComputerChoice();
}

// Get Computers Choice
function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3 + 1);
    if (rand === 1) {
        return 'rock';
    } else if (rand === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Event Listener on the choice
choices.forEach((choice) => choice.addEventListener('click', play));
