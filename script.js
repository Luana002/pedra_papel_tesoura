const rock = document.getElementById('image-rock');
const paper = document.getElementById('image-paper');
const scissors = document.getElementById('image-scissors');
const computerImg = document.getElementById('computerImage');

const texts = document.getElementById('text'); // Essa função mostra o resultado depois.
texts.classList.remove('show');

texts.addEventListener('click', () => {
    location.reload();
});

const playAgainButton = document.getElementById('playAgain'); // Essa função mostra o botão.
playAgainButton.classList.remove('show');

playAgainButton.addEventListener('click', () => {
    location.reload();
});

function toPlay(user) {  //Uma função que mostra o que o usuário escolheu e adiciona o botão de jogar novamente.
    console.log(`Usuário escolheu ${user}`);
    const computer = getComputerChoice();
    compareChoices(user, computer);

    playAgainButton.classList.add('show'); 

    texts.classList.remove('d-none'); 
}

function getComputerChoice() { // Função para o computador escolhe  pedra, papel e tesoura.
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function updateImage(choice, result) { //Aqui mostra as imegens quando o computador perde ou ganha.
    computerImg.src = "./imagens/computador2.png";

    const imageComputer = {
        rock_win: "./imagens/pedraGanhou.png",
        paper_win: "./imagens/papelGanhou.png",
        scissors_win: "./imagens/tesouraGanhou.png",
        rock_lose: "./imagens/pedraPerdeu.png",
        paper_lose: "./imagens/papelPerdeu.png",
        scissors_lose: "./imagens/tesouraPerdeu.png",
    };

    const key = `${choice}_${result}`;
    if (imageComputer[key]) {
        setTimeout(() => {
            computerImg.src = imageComputer[key];
        }, 100); 
    } else {
        console.error("Imagem não encontrada para a chave:", key);
    }
}

function compareChoices(user, computer) {
    let result;
    if (user === computer) {
        texts.innerHTML = "Ninguem venceu!";
        result = "none";
    } else if (user === "rock" && computer === "paper") {
        texts.innerHTML = "Você perdeu!";
        result = "win";
    } else if (user === "paper" && computer === "scissors") {
        texts.innerHTML = "Você perdeu!";
        result = "win";
    } else if (user === "rock" && computer === "scissors") {
        texts.innerHTML = "Você ganhou!";
        result = "lose";
    } else {
        texts.innerHTML = "Você ganhou!";
        result = "lose";
    } 

    updateImage(computer, result);

    console.log(`Usuário: ${user} | Computador: ${computer}`);
}

window.toPlay = toPlay;
window.getComputerChoice = getComputerChoice;
window.compareChoices = compareChoices;

//rock.addEventListener('click', () => toPlay('rock'));
//paper.addEventListener('click', () => toPlay('paper'));
//scissors.addEventListener('click', () => toPlay('scissors'));