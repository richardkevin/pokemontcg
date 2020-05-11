import React from "react";

import energy from "../sprites/energy";

const Ability = ({ ability }) => {
  return ability ? (
    <div className="pokemon__ability">
      <small className="pokemon__ability-type">{ability.type}</small>
      <span className="pokemon__ability-name">{ability.name}</span>
      <p className="pokemon__ability-description">{ability.text}</p>
    </div>
  ) : null;
};

const Attacks = ({ pokemon }) => {
  const { ability, attacks } = pokemon;

  return (
    <div className="pokemon__actions">
      <Ability ability={ability} />
      {attacks.map((atk) => (
        <div key={atk.name.replace(" ", "-")} className="pokemon__attack">
          <span className="pokemon__attack-cost">
            {atk.cost.map((type) => (
              <img
                src={energy[type]}
                className="pokemon__energy-cost"
                alt={type}
              />
            ))}
          </span>
          <span className="pokemon__attack-name">{atk.name}</span>
          <span className="pokemon__attack-damage right">{atk.damage}</span>
          <span className="pokemon__attack-description">{atk.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Attacks;
