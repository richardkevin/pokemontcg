import charizard from "../charizard.json";
import gyarados from "../gyarados.json";

// actions
export const REGISTER_ACTIVE_POKEMON = "register_active_pokemon";
export const ATTACK_POKEMON = "attack_pokemon";
export const ADD_DEFEATED_POKEMON = "add_defeated_pokemon";

// action creators
export function registerActivePokemon(player, pokemon) {
  return { type: REGISTER_ACTIVE_POKEMON, player, pokemon };
}
export function addDefeatedPokemon(pokemon) {
  return { type: ADD_DEFEATED_POKEMON, pokemon };
}

const initialState = {
  foo: { activePokemon: charizard, currentDamage: 0, defeatedPokemons: [] },
  bar: { activePokemon: gyarados, currentDamage: 0, defeatedPokemons: [] },
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_ACTIVE_POKEMON:
      return {
        ...state,
        [action.player]: { ...state[player], activePokemon: action.pokemon },
      };
    default:
      return state;
  }
};

export default player;
