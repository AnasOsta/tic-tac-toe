import { useState } from "react";

export default function Player(player) {
  const [name, setName] = useState(player.name);
  const [isEdit, setIsEdit] = useState(false);

  function handleEditClick() {
    setIsEdit(!isEdit);

    if (isEdit) {
      player.onChangeName(player.symbol, name);
    }
  }
  let playerName = <span className="player-name">{name}</span>;
  let btnCap = "Edit";
  if (isEdit) {
    btnCap = "Save";
    playerName = (
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    );
  }
  return (
    <li className={player.isActive ? "active" : ""}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{player.symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCap}</button>
    </li>
  );
}
