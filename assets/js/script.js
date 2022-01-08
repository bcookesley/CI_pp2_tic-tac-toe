// Waits for DOM content to load

document.addEventListener('DOMContentLoaded', () => {

    // Starting page tags

    let startingPage = document.getElementById("start-page");
    let button = document.getElementById("button");
    let info = document.getElementById("info");

    // Game page tags 

    let gamePage = document.getElementById("game-page");
    let boxes = document.querySelectorAll(".boxes");
    let showChange = document.querySelector("#showChange");
    let board = Array.from(boxes);

    // Winner page tags 

    let winnerPage = document.getElementById("winner-page");
    let winningName = document.getElementById("winner-name");
    let reset = document.getElementById("quit");
    let isPlayerMove = true;
    let gameOver = false;

    // Winning combinations 

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



    // Starting page. When button is clicked the start page disappears and game board shows

    button.onclick = function () {
        if (startingPage.style.display !== "none") {
            startingPage.style.display = "none";
            info.style.display = "none";
        } else {
            startingPage.style.display = "block";
        }
        gamePage.style.display = "block";
        info.style.display = "none";
        console.log('start game');
    }

    // click function for player to add an X in a box for their move 

    boxes.forEach(box => box.addEventListener('click', event => {
        playerMove(event, box);
        console.log('player event listener');
    }))


    // player move function linked to click function above 
    function playerMove(event, box) {

        if (box.innerText == '') {
            box.innerText += 'X';
            box.id = 'X';
            showChange.style.left = `160px`;
            showChange.style.opacity = `1`;

            isPlayerMove = false;
            winningFunc();
            drawFunc();
            console.log('player moved, now computer move');
            let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed(); // delays computer move - code snippet taken from Code Nepal - https://www.codingnepalweb.com/tic-tac-toe-game-javascript/
            setTimeout(() => {
                computerMove();
                //showChange.style.right = `160px`;
            }, randomTimeDelay);
        }
    }

    // Computer move function. Moves an O into a random empty box
    // Code snippet heavily influenced by Codepen.io - https://codepen.io/lando464/pen/BPGEKO

    function computerMove() {
        let emptyCells = [];
        let random;

        boxes.forEach(function (cell) {
            if (cell.innerText == '') {
                emptyCells.push(cell);
            } else {
                cell.id = 'O';
            }
        });

        // computer marks a random EMPTY cell
        random = Math.ceil(Math.random() * emptyCells.length) - 1;
        emptyCells[random].innerText = 'O';
        showChange.style.left = `160px`;
        console.log('computer move, now player move');
        winningFunc();
        drawFunc();
    }

    /*

    let winningFunc = () => {
        for (let a = 0; a <= 7; a++) {
            let b = winningCombos[a];

            if (board[b[0]].innerText == '' || board[b[1]].innerText == '' || board[b[2]].innerText == '') {
                continue;
            } else if (board[b[0]].innerText == 'X' || board[b[1]].innerText == 'X' || board[b[2]].innerText == 'X') {
                winningName.innerText = `Player X Wins The Game!`;
                gamePage.style.display = "none";
                winnerPage.style.display = "block";
            } else if (board[b[0]].innerText == 'O' || board[b[1]].innerText == 'O' || board[b[2]].innerText == 'O') {
                winningName.innerText = `Player O Wins The Game!`;
                gamePage.style.display = "none";
                winnerPage.style.display = "block";
            } else {
                continue;
            }
        }
        console.log('winning function');
    }

    */


    // Winning function will loop through winning combos to determine the winner 
    // Code snippet from Code Now - https://www.youtube.com/watch?v=5cI0unBbAho&t=1990s (See README file)


    let winningFunc = () => {
        for (let a = 0; a <= 7; a++) {
            let b = winningCombos[a];

            if (boxes[b[0]].id == '' || boxes[b[1]].id == '' || boxes[b[2]].id == '') {
                gameOver = false;
                continue;
            } else if (boxes[b[0]].id == 'X' || boxes[b[1]].id == 'X' || boxes[b[2]].id == 'X') {
                gameOver = true;
                winningName.innerText = `Player X Wins The Game!`;
                gamePage.style.display = "none";
                winnerPage.style.display = "block";
                console.log('player x wins');
            } else if (boxes[b[0]].id == 'O' || boxes[b[1]].id == 'O' || boxes[b[2]].id == 'O') {
                setTimeout (() => {
                    gameOver = true;
                    winningName.innerText = `Player O Wins The Game!`;
                    gamePage.style.display = "none";
                    winnerPage.style.display = "block";
                    console.log('player o wins');
                }, 700);
            } else {
                gameOver = false;
                continue;
            }
        }
        console.log('winning function');
    }


    // Draw function to determine if the game is a draw 
    // Code snippet from Code Now - https://www.youtube.com/watch?v=5cI0unBbAho&t=1990s (See README file)


    let drawFunc = () => {

        if (boxes[0].id != "" && boxes[1].id != "" && boxes[2].id != "" &&
            boxes[3].id != "" && boxes[4].id != "" && boxes[5].id != "" && boxes[6].id != "" &&
            boxes[7].id != "" && boxes[8].id != "") {
            gameOver = true;
            winningName.innerText = `Game Draw!`;

            gamePage.style.display = "none";
            winnerPage.style.display = "block";
        }
        console.log('draw function');
    }

    reset.addEventListener('click', () => {
        window.location.reload();
    })

});