
//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');
const amarelo = document.querySelector('.amarelo');

//cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    const selectColorAt = number * 600 - 250
    const deselectColorAt = (number * 600) - 100

    number = number * 600;
    setTimeout(() => {
        element.classList.add('selected');
    }, selectColorAt);
    setTimeout(() => {
        element.classList.remove('selected');
    }, deselectColorAt);
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        score++;
        document.querySelector('h1').innerHTML = `Pontuação: ${score}`;
        shuffleOrder();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return verde;
    } else if(color == 1) {
        return vermelho;
    } else if (color == 2) {
        return amarelo;
    } else if (color == 3) {
        return azul;
    }
}


//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo!');
    order = [];
    clickedOrder = [];
    score = 0;
    document.querySelector('h1').innerHTML = `Pontuação: ${score}`;
    shuffleOrder();
}

//eventos de clique para as cores
verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);


//inicio do jogo
playGame();