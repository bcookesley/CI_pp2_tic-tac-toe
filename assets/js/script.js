/* Almost all of this code was copied from an external source on Youtube. All credits and links to this video are in the README.md file.
While a simple game - my JavaScript progression and understanding were not good enough to make a game such as this. Due to the amount of 
time I had to complete this unit and hand my project in I had to find how others had written and coded this game (there are many!).

I typed this all out myself and I have watched, written and rewritten lots of this code. I have also added some of my own, but this was also largely inspired and taken from 
the Love Maths walkthrough project.

*/

// Waits for DOM content to load

document.addEventListener('DOMContentLoaded', () => {

    // X => <i class="fas fa-times"></i>
    // O => <i class="fas fa-circle-notch"></i>

    // Starting page tags
    let startPage = document.querySelector("#startPage");
    let choose = document.querySelectorAll(".choose");

    // Main page tags 
    let mainPage = document.querySelector("#main-page");
    let box = document.querySelectorAll("#box");
    let playerDisplay = document.querySelector("#playerDisplay");
    let showChange = document.querySelector("#showChange");
    let X = document.getElementsByTagName("i")

    // Winner page tags 
    let winner = document.querySelector("#winner");
    let winningName = document.querySelector("winningName");
    let reset = document.querySelector("#reset");

    let mark;
    var cells;
    let changeTurn = null;

    /*
        Board indexes 
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */ 

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

    box.forEach(items => {
        items.addEventListener('click', () => {
            if (changeTurn == false)  {
                items.innerHTML = `<i class="fas fa-times"></i>`;
                items.id = "X";
                items.style.pointerEvents = "none";
                showChange.innerHTML = "Player X's Turn";
                changeTurn = true;
            } else {
                items.innerHTML = `<i class="fas fa-circle"></i>`;
                items.id ="O";
                items.style.pointerEvents = "none";
                showChange.innerHTML = "Player O's Turn";
                changeTurn = false;
            }
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

    // switch player mark
    function switchMark() {
        if (mark == 'X') {
        mark = 'O';
        } else {
        mark = 'X';
        }
    }

    computerMove();



});