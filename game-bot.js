'use strict';

/*----------------------------------*/

/*  P A G E   S C R I P T  */

const modalMenu = document.getElementById('modalMenu');

function openMenu() {
    modalMenu.style.display = 'flex';
}

function closeMenu() {
    modalMenu.style.display = '';
}

/*----------------------------------*/

/*  G A M E   S C R I P T  */

const player1 = 'X';
const bot = 'O';

const gameOver = false;

var playerTurn = player1;

const playerTurnText = document.querySelector('#playerTurn');

function play(buttonClicked) {
    if (playerTurn == player1) {
        document.getElementById(buttonClicked).innerHTML = 'X';
        playerTurnText.innerHTML = 'COMPUTADOR';
        playerTurn = bot;
        winner();
        botPlay();
    }
}

function botPlay() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    const button5 = document.getElementById('button5');
    const button6 = document.getElementById('button6');
    const button7 = document.getElementById('button7');
    const button8 = document.getElementById('button8');
    const button9 = document.getElementById('button9');

    const buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
    var buttonSelected = Math.floor(Math.random() * buttons.length);

    console.log(buttons[buttonSelected]);

    while (buttons[buttonSelected].textContent != '') {
        var buttonSelected = Math.floor(Math.random() * buttons.length);
        console.log(buttons[buttonSelected]);
    }

    buttons[buttonSelected].innerHTML = 'O';

    winner();
    playerTurn = player1;
}

function cleanBoard() {
    var i = 0;
    while (i <= 9) {
        document.getElementsByClassName('buttons')[i].innerHTML = '';
        i++;
    }
}

var player1Score = 0;
var botScore = 0;

const player1ScoreText = document.getElementById('player1ScoreText');
const botScoreText = document.getElementById('botScoreText');

const textResult = document.getElementById('textResult');

function winner() {
    if (
        (button1.textContent == 'X' && button2.textContent == 'X' && button3.textContent == 'X') ||
        (button1.textContent == 'X' && button4.textContent == 'X' && button7.textContent == 'X') ||
        (button1.textContent == 'X' && button5.textContent == 'X' && button9.textContent == 'X') ||
        (button2.textContent == 'X' && button5.textContent == 'X' && button8.textContent == 'X') ||
        (button3.textContent == 'X' && button6.textContent == 'X' && button9.textContent == 'X') ||
        (button3.textContent == 'X' && button5.textContent == 'X' && button7.textContent == 'X') ||
        (button4.textContent == 'X' && button5.textContent == 'X' && button6.textContent == 'X') ||
        (button7.textContent == 'X' && button8.textContent == 'X' && button9.textContent == 'X')
    ) {
        player1Score = player1Score + 1;
        player1ScoreText.innerHTML = player1Score;
        textResult.innerHTML = 'X GANHOU';
        modalMenu.style.display = 'flex';
        playerTurn = player1;
        playerTurnText.innerHTML = 'PLAYER 1';
        cleanBoard();
    } else if (
        (button1.textContent == 'O' && button2.textContent == 'O' && button3.textContent == 'O') ||
        (button1.textContent == 'O' && button4.textContent == 'O' && button7.textContent == 'O') ||
        (button1.textContent == 'O' && button5.textContent == 'O' && button9.textContent == 'O') ||
        (button2.textContent == 'O' && button5.textContent == 'O' && button8.textContent == 'O') ||
        (button3.textContent == 'O' && button6.textContent == 'O' && button9.textContent == 'O') ||
        (button3.textContent == 'O' && button5.textContent == 'O' && button7.textContent == 'O') ||
        (button4.textContent == 'O' && button5.textContent == 'O' && button6.textContent == 'O') ||
        (button7.textContent == 'O' && button8.textContent == 'O' && button9.textContent == 'O')
    ) {
        botScore = botScore + 1;
        botScoreText.innerHTML = botScore;
        textResult.innerHTML = 'O GANHOU';
        modalMenu.style.display = 'flex';
        playerTurn = player1;
        playerTurnText.innerHTML = 'PLAYER 1';
        cleanBoard();
    } else if (
        button1.textContent != '' &&
        button2.textContent != '' &&
        button3.textContent != '' &&
        button4.textContent != '' &&
        button5.textContent != '' &&
        button6.textContent != '' &&
        button7.textContent != '' &&
        button8.textContent != '' &&
        button9.textContent != ''
    ) {
        textResult.innerHTML = 'EMPATE';
        modalMenu.style.display = 'flex';
        playerTurn = player1;
        playerTurnText.innerHTML = 'PLAYER 1';
        cleanBoard();
    }
}
