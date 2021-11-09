'use strict';

/*----------------------------------*/

/*  P A G E   S C R I P T  */

const modalMenu = document.getElementById('modalMenu');

function openMenu() {
    modalMenu.style.display = 'flex';
    textResult.innerHTML = '';
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
    if (document.getElementById(buttonClicked).textContent == '') {
        if (playerTurn == player1) {
            document.getElementById(buttonClicked).innerHTML = 'X';
            winner();
            playerTurnText.innerHTML = 'COMPUTADOR';
            playerTurn = bot;
            setTimeout(botPlay, 500);
        }
    }
}

const horizontal1 = [button1, button2, button3];
const horizontal2 = [button4, button5, button6];
const horizontal = [button7, button8, button9];
const vertical1 = [button1, button4, button7];
const vertical2 = [button2, button5, button8];
const vertical3 = [button3, button6, button9];
const diagonal1 = [button1, button5, button9];
const diagonal2 = [button3, button5, button7];

function botPlay() {
    var arrayPosition = 0;
    var i = 0;
    var numX = 0;

    while (i <= 2) {
        var arrayPositionText = vertical2[arrayPosition].textContent;
        if (arrayPositionText == 'X') {
            numX++;
        }
        arrayPosition++;
        i++;
    }

    if (numX == 2) {
        var i = 0;
        while (i <= 2) {
            if (vertical2[i].textContent == '') {
                vertical2[i].innerHTML = 'O';
            } else {
                i++;
            }
        }
    } else {
        botRandomPlay();
    }
}

function botRandomPlay() {
    const buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
    var buttonSelected = Math.floor(Math.random() * buttons.length);

    if (buttons[buttonSelected].textContent == '') {
        buttons[buttonSelected].innerHTML = 'O';
        winner();
        playerTurn = player1;
        playerTurnText.innerHTML = 'PLAYER 1';
    } else {
        botPlay();
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

function cleanBoard() {
    var i = 0;
    while (i <= 9) {
        document.getElementsByClassName('buttons')[i].innerHTML = '';
        i++;
    }
}
