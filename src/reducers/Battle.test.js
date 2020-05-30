import reducer, { initialState } from "./Battle";
import actionNames from "./actions";

describe("reducer", () => {
  describe("initialState", () => {
    it("default case", () => {
      const state = reducer(initialState, { type: "foo" });
      expect(state).toEqual(initialState);
    });
    it("add defeated pokemon case", () => {
      const action = {
        type: actionNames.ADD_DEFEATED_POKEMON,
        player: "right",
        pokemon: "gyarados",
      };
      const state = reducer(initialState, action);
      expect(state.right.defeatedPokemons[0]).toEqual(action.pokemon);
    });
    it("attack case", () => {
      const action = {
        type: actionNames.ATTACK_POKEMON,
        player: "right",
        damage: 100,
      };
      const state = reducer(initialState, action);
      expect(state.right.activePokemon.hp).toEqual(0);
    });
    it("request pokemon case", () => {
      const action = {
        type: actionNames.REQUEST_POKEMON,
        player: "right",
        pokemon: "foo",
      };
      const state = reducer(initialState, action);
      expect(state.isFetching).toEqual(true);
    });
    it("receive pokemon case", () => {
      const action = {
        type: actionNames.RECEIVE_POKEMON,
        player: "right",
        pokemon: "foo",
      };
      const state = reducer(initialState, action);
      expect(state.isFetching).toEqual(false);
      expect(state.right.activePokemon).toEqual(action.pokemon);
    });
  });
});
