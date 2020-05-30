import React from "react";

export default function Ability({ ability, savePlay }) {
  return ability ? (
    <div
      className="pokemon__ability"
      onClick={() => savePlay({ ability: "ability not implemented yet" })}
    >
      <small className="pokemon__ability-type">{ability.type}</small>
      <span className="pokemon__ability-name">{ability.name}</span>
      <p className="pokemon__ability-description">{ability.text}</p>
    </div>
  ) : null;
}
