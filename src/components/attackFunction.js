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
      savePlay(move);
    }
  };
}
