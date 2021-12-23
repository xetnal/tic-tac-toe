
const Player = (playerName, playerMark ) => {
    const getName = () => playerName;
    const getMark = () => playerMark;

    return {
        getName,
        getMark,
    }

};


const gameFlow = () => {
    const player1 = Player('player1', 'X');
    const player2 = Player('player2', 'O');
    let board = ['', '', '', '', '', '', '', '', ''];
    const winConditions = [
        [0, 1, 2],
        [3, 4 ,5],
        [6, 7 ,8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let currentPlayer = player1;
    const switchPlayers = () => {
        if(currentPlayer === player1){
          currentPlayer = player2;
        } else {
          currentPlayer = player1;
        }
      }    

    function displayBoard() {
        for (i = 0; i < 3; i++) {
            let row = document.createElement('div');
            row.className = 'row';
            container.appendChild(row)
            for (let j = 0; j < 3; j++) {
                let cell = document.createElement('div');
                cell.className = 'cell';
                row.appendChild(cell);
    
            }

        }
    }
    

    return {
        switchPlayers, //done
        currentPlayer, //done
        board,   //done
        displayBoard, //done
        displayWinner,
        resetBoard,
        isWin,
        isTie,
        addMark,
    }
}


gameFlow.displayBoard()