const rock = document.getElementById('image-rock');
const paper = document.getElementById('image-paper');
const scissors = document.getElementById('image-scissors');

if (!rock || !paper || !scissors) {
    console.error("Um ou mais elementos não foram encontrados no DOM.");
}

function toPlay(user) {
    if (user === "rock") {
        console.log("User escolheu pedra");
    } else if (user === "paper") {
        console.log("Usuario escolheu papel");
    } else if (user === "scissors") {
        console.log("Usuário escolheu tesoura");
    } else {
        console.error("Escolha inválida");
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const ramdom = Math.floor(Math.random() * choices.length);
    return choices[ramdom];
}

function compareChoices(user, computer) {
    if (user === computer) {
        
    }
}
window.toPlay = toPlay;