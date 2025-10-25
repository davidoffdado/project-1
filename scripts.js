

// funzione getComputerChoice() per giocare una partita a RPS, 
// dove usando math.number il computer sceglie una delle tre
// opzioni e la stampa in console.

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// funzione getHumanChoice() per permettere all'utente di
// inserire la propria scelta tramite prompt e stamparla in console.

/* function getHumanChoice() {
    const userChoice = prompt("Enter rock, paper, or scissors:");
    return userChoice.toLowerCase();
} */

// ora si usano i bottoni nell'HTML per la scelta dell'utente

// event listener per i bottoni
document.getElementById('rock').addEventListener('click', function() {
    const humanChoice = 'rock';
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
});

document.getElementById('paper').addEventListener('click', function() {
    const humanChoice = 'paper';
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
});

document.getElementById('scissors').addEventListener('click', function() {
    const humanChoice = 'scissors';
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
});

let humanScore = 0;
let computerScore = 0;

// funzione playRound() per confrontare le scelte del computer e dell'utente,
// determinare il vincitore della partita e aggiornare i punteggi.

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}       

// funzione playGame() per giocare una serie di 5 partite
// e dichiarare il vincitore finale in base ai punteggi.
/* 
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        console.log('-------------------------');
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer is the overall winner! Better luck next time.");
    } else {
        console.log("The game is a tie overall!");
    }
} */



playRound();