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
    });
  }

  const player1 = getPlayer("player1", "X");
  const player2 = getPlayer("player2", "O");
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
  };

  const isWin = () => {
    WIN_CONDITIONS.forEach((element) => {
      const [firstElement, secondElement, thirdElement] = element;
      if (
        (board[firstElement[0]][firstElement[1]] ===
          board[secondElement[0]][secondElement[1]]) ===
          board[thirdElement[0][thirdElement[1]]] &&
        board[secondElement[0]][secondElement[1]] !== ""
      ) {
        return true;
      }
    });
    return false;
  };

  const isTie = () => {
    board.forEach((row) => {
      if (!row.includes("") && !isWin()) {
        return true;
      } else {
        return false;
      }
    });
  };

  const displayWinner = () => {};

  const resetBoard = () => {};

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
  };
};
gameFlow();
