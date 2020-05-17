import getPokemon from "../utils/getPokemon";
import charizard from "../charizard.json";
import gyarados from "../gyarados.json";

// actions
export const ADD_DEFEATED_POKEMON = "add_defeated_pokemon";
export const ATTACK_POKEMON = "attack_pokemon";
export const FETCH_POKEMON = "fetch_pokemon";
export const RECEIVE_POKEMON = "receive_pokemon";
export const REQUEST_POKEMON = "request_pokemon";

// action creators
export function addDefeatedPokemon(player, pokemon) {
  return { type: ADD_DEFEATED_POKEMON, player, pokemon };
}
export function attackPokemon(player, damage) {
  return { type: ATTACK_POKEMON, player, damage };
}
export const fetchPokemon = (player) => async (dispatch) => {
  dispatch(requestPokemon());
  const pokemon = await getPokemon();
  dispatch(receivePokemon(player, pokemon));
};
export function receivePokemon(player, pokemon) {
  return { type: RECEIVE_POKEMON, player, pokemon };
}
export function requestPokemon() {
  return { type: REQUEST_POKEMON };
}

const initialState = {
  left: { activePokemon: charizard, defeatedPokemons: [] },
  right: { activePokemon: gyarados, defeatedPokemons: [] },
};

export default function battle(state = initialState, action) {
  switch (action.type) {
    case ADD_DEFEATED_POKEMON:
      const { defeatedPokemons } = { ...state[action.player] };
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          activePokemon: { types: [], attacks: [] },
          defeatedPokemons: [...defeatedPokemons, action.pokemon],
        },
      };
    case ATTACK_POKEMON:
      const { activePokemon } = { ...state[action.player] };
      activePokemon.hp = parseInt(activePokemon.hp) - parseInt(action.damage);
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          activePokemon,
        },
      };
    case REQUEST_POKEMON:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_POKEMON:
      return {
        ...state,
        isFetching: false,
        [action.player]: {
          ...state[action.player],
          activePokemon: action.pokemon,
        },
      };
    default:
      return state;
  }
}
