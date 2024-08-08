export default function Log({ log }) {
  return (
    <ol id="log">
      {log.map((turn) => (
        <li key={`${turn.square.row},${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
