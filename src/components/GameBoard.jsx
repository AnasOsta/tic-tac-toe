import { useState } from "react";

export default function GameBoard({ onSquareClick, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleClick(rowIndex, colIndex) {
  //   const newGameBoard = [...gameBoard];
  //   newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //   setGameBoard(newGameBoard);

  //   onSquareClick();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSquareClick(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
