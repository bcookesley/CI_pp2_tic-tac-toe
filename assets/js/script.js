// Waits for DOM content to load

document.addEventListener('DOMContentLoaded', () => {

    // Starting page tags
    let startingPage = document.getElementById("start-page");
    let button = document.getElementById("button");
    let info = document.getElementById("info");

    // Main page tags 
    let gamePage = document.getElementById("game-page");
    let boxes = document.querySelectorAll(".boxes");
    let showChange = document.querySelector("#showChange");
    let board = Array.from(boxes);

    // Winner page tags 
    let winnerPage = document.getElementById("winner-page");
    let winningName = document.getElementById("winner-name");
    let reset = document.getElementById("quit");
    isPlayerMove = true;

    let winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]





    button.onclick = function () {
        if(startingPage.style.display !== "none") {
            startingPage.style.display = "none";
            info.style.display = "none";
        } else {
            startingPage.style.display = "block";
        }
        gamePage.style.display = "block";
        info.style.display = "none";
        console.log('start game');
    }

    boxes.forEach(box => box.addEventListener('click', event => {

        if (isPlayerMove === true) {
            playerMove(event, box);
            console.log('player event listener');
        }
    }))




    function playerMove(event, box) {

        if (box.innerText == '') {
            box.innerText += 'X';
            box.id = 'X';
            showChange.style.left = `160px`;

            isPlayerMove = false;
            console.log('player moved, now computer move');
            computerMove();
        }
    }

    function computerMove(event, box) {
        let i = 0;

        while (board[i] < 8) {
            Math.floor(Math.random) * (board.length);
            box.innerText += 'O';
            box.id = 'O';

            console.log('computer move, now player move');
        }
    }

    let winningFunc = () => {
        for (let a = 0; a <= 7; a++) {
            let b = winningCombos[a];

            if (boxes[b[0]].id == '' || boxes[b[1]].id == '' || boxes[b[2]].id == '') {
                continue;
            } else if (boxes[b[0]].id == 'X' || boxes[b[1]].id == 'X' || boxes[b[2]].id == 'X') {
                winningName.innerText = `Player X Wins The Game!`;
                gamePage.style.display = "none";
                winnerPage.style.display = "block";
            } else if (boxes[b[0]].id == 'O' || boxes[b[1]].id == 'O' || boxes[b[2]].id == 'O') {
                winningName.innerText = `Player O Wins The Game!`;
                gamePage.style.display = "none";
                winnerPage.style.display = "block";
            } else {
                continue;
            }
        }
    }

    



});