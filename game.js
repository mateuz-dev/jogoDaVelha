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
const player2 = 'O';

const gameOver = false;

var playerTurn = player1;

const playerTurnText = document.querySelector('#playerTurn');

function validarBotao(buttonClicked) {
    if (buttonClicked.textContent != '') {
        return false;
    } else {
        return true;
    }
}

function play(buttonClicked) {
    if (validarBotao()) {
        if (playerTurn == player1) {
            document.getElementById(buttonClicked).innerHTML = 'X';
            playerTurnText.innerHTML = 'PLAYER 2';
            playerTurn = player2;
            winner();
        } else if (playerTurn == player2) {
            document.getElementById(buttonClicked).innerHTML = 'O';
            playerTurnText.innerHTML = 'PLAYER 1';
            playerTurn = player1;
            winner();
        }
    } else {
    }
}

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');

function cleanBoard() {
    var i = 0;
    while (i <= 9) {
        document.getElementsByClassName('buttons')[i].innerHTML = '';
        i++;
    }
}

var player1Score = 0;
var player2Score = 0;

const player1ScoreText = document.getElementById('player1ScoreText');
const player2ScoreText = document.getElementById('player2ScoreText');

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
        player2Score = player2Score + 1;
        player2ScoreText.innerHTML = player2Score;
        textResult.innerHTML = 'O GANHOU';
        modalMenu.style.display = 'flex';
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
        cleanBoard();
    }
}
