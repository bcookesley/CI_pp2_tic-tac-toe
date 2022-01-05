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

    const ticTacToeGame = new TicTacToeGame();
    //ticTacToeGame.start();

    function TicTacToeGame() {
        const board = new Board();
        const humanPlayer = new HumanPlayer();
        const computerPlayer = new ComputerPlayer();
        let turn = 0;

        this.start = function(){
            const config = { childList: true};
            const observer = new MutatuionObserver(() => takeTurn());
            board.positions.forEach((el) => observer.observe(el, config));
            takeTurn();
            console.log("hello");
        }

        function takeTurn() {
            
            if (turn % 2 === 0) {
                humanPlayer.takeTurn();
            } else {
                computerPlayer.takeTurn();
            }

            turn++;
        }
    }


    button.onclick = function () {
        if(startPage.style.display !== "none") {
            startPage.style.display = "none";
        } else {
            startPage.style.display = "block";
        }
        mainPage.style.display = "block";
        HumanPlayer();
        Board();
    }

    function Board() {
        this.positions = Array.from(box);
    }

    function HumanPlayer() {

        this.takeTurn = function() {
            
            board.positions.forEach( el => el.addEventListener('click', handleTurnTaken));
        }

        function handleTurnTaken(event) {
            
        }
    }

    function ComputerPlayer() {

        this.takeTurn = function() {
            console.log("computer player turn");
        }
        
    }







    /*
    let mark;
    var cells;
    let changeTurn = null;
    */

    /*
        Board indexes 
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */ 

        /*

    // Winning combinations 
    let winningCombination = [
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
        if(startPage.style.display !== "none") {
            startPage.style.display = "none";
        } else {
            startPage.style.display = "block";
        }
        mainPage.style.display = "block";
        playerMove();
    }

    /*
    choose.forEach(chooseNow => {
        chooseNow.addEventListener('click', () => {
            if (chooseNow.id === "playerX") {
                changeTurn = false;
                showChange.innerHTML = "Player X's Turn";
            } else {
                changeTurn = true;
            }
            startPage.style.display = "none";
            mainPage.style.display = "block";
        })
    });
    */
/*
    box.forEach(items => {
        items.addEventListener('click', () => {
            items.innerHTML = `<i class="fas fa-times"></i>`;
            winningFunc();
            drawFunc();
            computerMove()
        })
    })

    let winningFunc = () => {
        for (let a = 0; a <= 7; a++) {
            let b = winningCombination[a];

            if (box[b[0]].id == "" || box[b[1]].id == "" || box[b[2]].id == "") {
                continue;
            } else if (box[b[0]].id == "X" && box[b[1]].id == "X" && box[b[2]].id == "X") {

                winningName.innerText = `Player X Wins The Game!`;

                mainPage.style.display = "none";
                winner.style.display = "block";
            } else if (box[b[0]].id == "O" && box[b[1]].id == "O" && box[b[2]].id == "O") {

                winningName.innerText = `Player O Wins The Game!`;

                mainPage.style.display = "none";
                winner.style.display = "block";
            } else {
                continue;
            }
        }
    }





    // let the computer make the next move
    function computerMove() {
        var emptyCells = [];
        var random;
  
        /*  for (var i = 0; i < cells.length; i++) {
        if (cells[i].textContent == '') {
        emptyCells.push(cells[i]);
        }
        }*/

        /*
    
        cells.forEach(function(cell){
            if (cell.textContent == '') {
            emptyCells.push(cell);
            }
        });
    
        // computer marks a random EMPTY cell
        random = Math.ceil(Math.random() * emptyCells.length) - 1;
        emptyCells[random].textContent = mark;
        checkRow();
        switchMark();
    }

    function checkRow() {

    }

    // switch player mark
    function switchMark() {
        if (mark == 'X') {
        mark = 'O';
        } else {
        mark = 'X';
        }
    }
    */



});