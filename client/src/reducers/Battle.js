import getPokemon from "../utils/getPokemon";
import charizard from "../charizard.json";
import gyarados from "../gyarados.json";

// actions
export const FETCH_POKEMON = "fetch_pokemon";
export const REGISTER_ACTIVE_POKEMON = "register_active_pokemon";
export const ATTACK_POKEMON = "attack_pokemon";
export const ADD_DEFEATED_POKEMON = "add_defeated_pokemon";

// action creators
export const fetchPokemon = (player) => async (dispatch) => {
  const pokemon = await getPokemon();
  dispatch(registerActivePokemon(player, pokemon));
};

export function addDefeatedPokemon(player, pokemon) {
  return { type: ADD_DEFEATED_POKEMON, player, pokemon };
}
export function attackPokemon(player, damage) {
  return { type: ATTACK_POKEMON, player, damage };
}
export function registerActivePokemon(player, pokemon) {
  return { type: REGISTER_ACTIVE_POKEMON, player, pokemon };
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
      activePokemon.hp = activePokemon.hp - action.damage;
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          activePokemon,
        },
      };
    case REGISTER_ACTIVE_POKEMON:
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          activePokemon: action.pokemon,
        },
      };
    default:
      return state;
  }
}
