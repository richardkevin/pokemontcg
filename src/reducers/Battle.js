import charizard from "../charizard.json";
import gyarados from "../gyarados.json";
import actionNames from "./actions";

export const initialState = Object.freeze({
  left: { activePokemon: charizard, defeatedPokemons: [] },
  right: { activePokemon: gyarados, defeatedPokemons: [] },
  isFetching: false,
});

export default function battle(state = initialState, action) {
  switch (action.type) {
    case actionNames.ADD_DEFEATED_POKEMON:
      const { defeatedPokemons } = { ...state[action.player] };
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          activePokemon: { types: [], attacks: [] },
          defeatedPokemons: [...defeatedPokemons, action.pokemon],
        },
      };
    case actionNames.ATTACK_POKEMON:
      const { activePokemon } = { ...state[action.player] };
      activePokemon.hp = parseInt(activePokemon.hp) - parseInt(action.damage);
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          activePokemon,
        },
      };
    case actionNames.REQUEST_POKEMON:
      return {
        ...state,
        isFetching: true,
      };
    case actionNames.RECEIVE_POKEMON:
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
