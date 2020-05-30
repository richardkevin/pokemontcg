import charizard from "../charizard.json";
import gyarados from "../gyarados.json";
import actionNames from "./actions";

export const initialState = Object.freeze({
  left: { activePokemon: charizard, defeatedPokemons: [] },
  right: { activePokemon: gyarados, defeatedPokemons: [] },
  isFetching: false,
  currentTurn: "right",
});

export default function battle(state = initialState, action) {
  switch (action.type) {
    case actionNames.ADD_DEFEATED_POKEMON:
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          activePokemon: { types: [], attacks: [] },
          defeatedPokemons: [
            ...state[action.player].defeatedPokemons,
            state[action.player].activePokemon,
          ],
        },
      };
    case actionNames.ATTACK_POKEMON:
      const { activePokemon } = { ...state[action.player] };
      activePokemon.hp = parseInt(activePokemon.hp) - action.damage;
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          activePokemon,
        },
        currentTurn: action.player,
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
