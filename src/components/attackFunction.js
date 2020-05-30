import {
  addDefeatedPokemon,
  attackPokemon,
  fetchPokemon,
} from "../reducers/actions";

export default function attackFunction({
  dispatch,
  myTurn,
  savePlay,
  types,
  victim,
  victimPokemon,
}) {
  return (move) => {
    if (myTurn) {
      let damage = parseInt(move.atk.damage);
      if (
        victimPokemon.weaknesses &&
        victimPokemon.weaknesses[0].type === types[0]
      ) {
        damage += parseInt(victimPokemon.weaknesses[0].value);
        move.weaknesses = weaknessMessage(victimPokemon, types);
      }
      if (
        victimPokemon.resistances &&
        victimPokemon.resistances[0].type === types[0]
      ) {
        damage += parseInt(victimPokemon.resistances[0].value);
        move.resistances = resistanceMessage(victimPokemon, types);
      }
      dispatch(attackPokemon(victim, damage));
      move.damage = damageMessage(victimPokemon);
      if (parseInt(victimPokemon.hp) <= 0) {
        dispatch(addDefeatedPokemon(victim, victimPokemon));
        move.fainted = faintMessage(victimPokemon);
        dispatch(fetchPokemon(victim));
      }
    } else {
      move.notAllowed = "Its not your turn";
    }
    savePlay(move);
  };
}

export function faintMessage(victimPokemon) {
  return `${victimPokemon.name} is fainted`;
}

export function damageMessage(victimPokemon) {
  return `${victimPokemon.name} HP is reduced to ${victimPokemon.hp}`;
}

export function resistanceMessage(victimPokemon, types) {
  return `${victimPokemon.name} has resistance to ${types[0]} types, damage is decreased by ${victimPokemon.resistances[0].value}`;
}

export function weaknessMessage(victimPokemon, types) {
  return `${victimPokemon.name} has weakness to ${types[0]} types, damage is increased by ${victimPokemon.weaknesses[0].value}`;
}
