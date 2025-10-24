

// funzione getComputerChoice() per giocare una partita a RPS, 
// dove usando math.number il computer sceglie una delle tre
// opzioni e la stampa in console.

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());