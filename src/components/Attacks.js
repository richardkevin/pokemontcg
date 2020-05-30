import React from "react";
import { connect } from "react-redux";

import energy from "../sprites/energy";
import attackFunction from "./attackFunction";
import Ability from "./Ability";

export const Attacks = ({ battle, dispatch, player, myTurn, savePlay }) => {
  const victim = player === "left" ? "right" : "left";
  const victimPokemon = battle[victim].activePokemon || {};

  const { ability, attacks = [], name, types } =
    (battle[player] && battle[player].activePokemon) || {};

  const handleAttack = attackFunction({
    dispatch,
    myTurn,
    savePlay,
    types,
    victim,
    victimPokemon,
  });

  return (
    <div className="pokemon__actions">
      <Ability ability={ability} savePlay={savePlay} />
      {attacks.map((atk, atkIdx) => (
        <div
          key={atkIdx}
          className="pokemon__attack"
          onClick={() => handleAttack({ name, atk })}
        >
          <span className="pokemon__attack-cost">
            {atk.cost.map((type, costIdx) => (
              <img
                src={energy[type]}
                className="pokemon__energy-cost-type"
                alt={type}
                key={costIdx}
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

Attacks.defaultProps = {
  battle: {
    left: {},
    right: {},
  },
};

export default connect(({ battle }) => ({ battle }))(Attacks);
