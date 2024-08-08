import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/log";
import { WINNING_COMBINATIONS } from "./components/winning-combination";
import GameOver from "./components/gameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = driveActivePlayer(gameTurn);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = players[firstSquare];
    }
  }

  const hasDeawn = !winner && gameTurn.length === 9;
  function handleClick(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurn((prevTurns) => {
      const currentTurns = driveActivePlayer(prevTurns);
      const newTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentTurns },
        ...prevTurns,
      ];
      return newTurns;
    });
  }

  function driveActivePlayer(gameTurns) {
    let currentTurns = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
      currentTurns = "O";
    }

    return currentTurns;
  }

  function handlePlayerNameChange(player, name) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [player]: name,
    }));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDeawn) && <GameOver winner={winner} />}
        <GameBoard onSquareClick={handleClick} board={gameBoard} />
      </div>
      <Log log={gameTurn} />
    </main>
  );
}

export default App;
