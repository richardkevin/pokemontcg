import React from "react";
import { connect } from "react-redux";

import {
  addDefeatedPokemon,
  attackPokemon,
  fetchPokemon,
} from "../reducers/Battle";
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

const Attacks = ({ battle, dispatch, player, myTurn, ...props }) => {
  const victim = player === "left" ? "right" : "left";
  const victimPokemon = battle[victim].activePokemon;
  const { name, ability, attacks } = battle[player].activePokemon;

  const handleAttack = (move) => {
    if (myTurn) {
      dispatch(attackPokemon(victim, parseInt(move.atk.damage)));
      if (victimPokemon.hp - move.atk.damage < 0) {
        dispatch(addDefeatedPokemon(victim, victimPokemon));
        move.fainted = victimPokemon.name;
        dispatch(fetchPokemon(victim));
      }
      props.savePlay(move);
    }
  };

  return (
    <div className="pokemon__actions">
      <Ability ability={ability} onclick={props} />
      {attacks &&
        attacks.map((atk, atkIdx) => (
          <div
            key={atkIdx}
            className="pokemon__attack"
            onClick={() => handleAttack({ name, atk })}
          >
            <span className="pokemon__attack-cost">
              {atk.cost.map((type, costIdx) => (
                <img
                  src={energy[type]}
                  className="pokemon__energy-cost"
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

export default connect(({ battle }) => ({ battle }))(Attacks);
