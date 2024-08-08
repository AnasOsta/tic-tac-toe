export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} is the winner</p>}
      {!winner && <p>Tie Game</p>}
      <p>
        <button onClick={() => window.location.reload()}>Play Again</button>
      </p>
    </div>
  );
}
