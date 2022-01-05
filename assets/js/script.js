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

    



});