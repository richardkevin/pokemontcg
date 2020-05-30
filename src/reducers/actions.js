import getPokemon from "../utils/getPokemon";

// actions
const actionNames = Object.freeze({
  ADD_DEFEATED_POKEMON: "add_defeated_pokemon",
  ATTACK_POKEMON: "attack_pokemon",
  FETCH_POKEMON: "fetch_pokemon",
  RECEIVE_POKEMON: "receive_pokemon",
  REQUEST_POKEMON: "request_pokemon",
});

export default actionNames;

// action creators
export function addDefeatedPokemon(player, pokemon) {
  return { type: actionNames.ADD_DEFEATED_POKEMON, player, pokemon };
}
export function attackPokemon(player, damage) {
  return { type: actionNames.ATTACK_POKEMON, player, damage };
}
export const fetchPokemon = (player) => async (dispatch) => {
  dispatch(requestPokemon());
  const pokemon = await getPokemon();
  dispatch(receivePokemon(player, pokemon));
};
export function receivePokemon(player, pokemon) {
  return { type: actionNames.RECEIVE_POKEMON, player, pokemon };
}
export function requestPokemon() {
  return { type: actionNames.REQUEST_POKEMON };
}
