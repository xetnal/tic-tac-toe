const WIN_CONDITIONS = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

const getPlayer = (playerName, playerMark) => ({
  getName: () => playerName,
  getMark: () => playerMark,
});

const gameFlow = () => {
  const cells = {};
  for (let index = 0; index < 9; index++) {
    cells[index] = document.getElementById(parseInt(index));
    cells[index].addEventListener("click", () => {
     
       addMark(index);
       cells[index].style.pointerEvents = 'none';
    });
  }

  const player1 = getPlayer("Circles", "X");
  const player2 = getPlayer("Crosses", "O");
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  let currentPlayer = player1;

  const addMark = (cellId) => {
    const parsedCell = cellId;

    const boardRow = Math.floor(parsedCell / 3);
    const boardColumn = parsedCell % 3;
    if (currentPlayer === player1) {
      board[boardRow][boardColumn] = "X";
    } else {
      board[boardRow][boardColumn] = "O";
    }
    cells[parsedCell].innerHTML = board[boardRow][boardColumn];
    isWin();
    isTie();
    switchPlayers();
    
    console.log(board);
    console.log(isWin());
    console.log(isTie());
  };

 
  const winnerDisplay = document.getElementById('winnerDisplay');
  const isWin =() => {
    let win = false
    //Checking each horizontal
    board.forEach(line => {
      if((line[0] === line[1] && line[1] === line[2]) && ((line[0]) !== "")) {
        win = true
      }
    })
    //Checking vertical
    if((board[0][0] === board[1][0] && board[1][0] === board[2][0]) && (board[1][0]) !== ""){
      win = true
    }
    if((board[0][1] === board[1][1] && board[1][1] === board[2][1]) && ((board[0][1] !== ""))){
      win = true
    }
    if((board[0][2] === board[1][2] && board[1][2] === board[2][2]) && (board[0][2] !== "")){
      win = true
    }
    //Checking diagonal
    if((board[0][0] === board[1][1] && board[1][1] === board[2][2]) && (board[0][0] != "")){
      win = true
    }
    if((board[0][2] === board[1][1] && board[1][1] === board[2][0]) && (board[0][2] !== "")){
      win = true
    }
    if(win){
      winnerDisplay.innerHTML = currentPlayer.getName() + ' wins!';
      return true
    } else {
      return false
    }
    }

  const isTie = () => {
    tie = false;
    if ((isWin() === false) && (boardIsFull())) {
      winnerDisplay.innerHTML = 'Its a TIE!'
      tie = true;
    }
    if (tie) {
      return true
    } else{ 
      return false
    }
    }
  
  
  function boardIsFull(){
    let result = true;
    for (let i=0; i<board.length; i++){
        // if board[i] contains any spaces, we aren't full!
        if (board[i].includes("")) {
          result = false
        }
    }
    return result;
  }
    
  
    

  const resetBoard = () => {

  };

  const switchPlayers = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  };

  return {
    addMark,
    board, //done
    currentPlayer, //done
    // displayWinner,
    isTie,
    isWin,
    // resetBoard,
    switchPlayers, //done
    boardIsFull,
  };
};
gameFlow();
