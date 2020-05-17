import React from "react";
import { connect } from "react-redux";

import {
  addDefeatedPokemon,
  attackPokemon,
  fetchPokemon,
} from "../reducers/Battle";
import energy from "../sprites/energy";

const Ability = ({ ability, savePlay }) => {
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
};

const Attacks = ({ battle, dispatch, player, myTurn, ...props }) => {
  const victim = player === "left" ? "right" : "left";
  const victimPokemon = battle[victim].activePokemon;
  const { name, ability, attacks, types } = battle[player].activePokemon;

  const handleAttack = (move) => {
    if (myTurn) {
      let damage = parseInt(move.atk.damage);
      if (
        victimPokemon.weaknesses &&
        victimPokemon.weaknesses[0].type === types[0]
      ) {
        damage += parseInt(victimPokemon.weaknesses[0].value);
        move.weaknesses = `${victimPokemon.name} has weakness to ${types[0]} types, damage is increased by ${victimPokemon.weaknesses[0].value}`;
      } else if (
        victimPokemon.resistances &&
        victimPokemon.resistances[0].type === types[0]
      ) {
        damage += parseInt(victimPokemon.resistances[0].value);
        move.resistances = `${victimPokemon.name} has resistance to ${types[0]} types, damage is decreased by ${victimPokemon.resistances[0].value}`;
      }

      dispatch(attackPokemon(victim, damage));
      move.damage = `${victimPokemon.name} HP is reduced to ${victimPokemon.hp}`;
      if (parseInt(victimPokemon.hp) <= 0) {
        dispatch(addDefeatedPokemon(victim, victimPokemon));
        move.fainted = `${victimPokemon.name} is fainted`;
        dispatch(fetchPokemon(victim));
      }
      props.savePlay(move);
    }
  };

  return (
    <div className="pokemon__actions">
      <Ability ability={ability} savePlay={props.savePlay} />
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
