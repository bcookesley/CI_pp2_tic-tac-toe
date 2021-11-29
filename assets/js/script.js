/* Almost all of this code was copied from an external source on Youtube. All credits and links to this video are in the README.md file.
While a simple game - my JavaScript progression and understanding were not good enough to make a game such as this. Due to the amount of 
time I had to complete this unit and hand my project in I had to find how others had written and coded this game (there are many!).

I typed this all out myself and I have watched, written and rewritten lots of this code. I have also added some of my own, but this was also largely inspired and taken from 
the Love Maths walkthrough project.

*/

// Waits for DOM content to load

window.addEventListener('DOMContentLoaded', () => {

    const boxes = Array.from(document.querySelectorAll('.box'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');
    const startGame = document.querySelector('.game-choice');

    /**
     * All 9 squares of the board are an empty string to be filled with either X or O
     * and winning combinations are listed.
     */
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    let onePlayer = document.getElementById('single-player');
    let twoPlayer = document.getElementById('two-player');

    const playerX_Won = 'playerX_Won';
    const playerO_Won = 'playerO_Won';
    const tie = 'tie';
    var cells;


    // function to hold which game to select and start

    function gameStart(event) {
        
        
        if (onePlayer) {
            startGame.innerHTML.remove('.game-choice');
        }
        else if (twoPlayer) {

        }

    }

    function computerMove() {
        let emptyCell = [''];
        let random;

        cells.forEach(function(cell) {
            if (cell.textContent === '') {
                emptyCells.push(cell);
            }
        });

        random = Math.ceil(Math.random() * 
        emptyCells.length) -1;
        emptyCells[random].textContent = mark;
        checkRow()
        switchMark()
    }

    function switchMark() {
        if (mark === 'X') {
            mark = 'O';
        } else {
            mark = 'X';
        }
    }

    //Winning combinations

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    /**
     * Win and loss conditions declearing the combination of 3
     * matching win conditions.
     * 
     */

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            } 
        }

        if (roundWon) {
            announce(currentPlayer === 'X' ? playerX_Won : playerO_Won);
            isGameActive = false;
            return;
        }

        if (!board.includes(''))
            announce(tie);

    }

    const announce = (type) => {
        switch (type) {
            case playerO_Won:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                incrementLoss();
                break;
            case playerX_Won:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                incrementScore();
                break;
            case tie:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    };

    const isValidAction = (box) => {
        if (box.innerText === 'X' || box.innerText === 'O') {
            return false;
        }

        return true;
    }

    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const userAction = (box, index) => {
        if (isValidAction(box) && isGameActive) {
            box.innerText = currentPlayer;
            box.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        boxes.forEach(box => {
            box.innerText = '';
            box.classList.remove('playerX');
            box.classList.remove('playerO');
        });
    }

    function incrementScore() {

        let oldScore = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++oldScore;


    }

    function incrementLoss() {

        let oldScore = parseInt(document.getElementById("loss").innerText);
        document.getElementById("loss").innerText = ++oldScore;

    }


    boxes.forEach((box, index) => {
        box.addEventListener('click', () => userAction(box, index));
    });

    resetButton.addEventListener('click', resetBoard);
    startGame.addEventListener('click', gameStart);
});