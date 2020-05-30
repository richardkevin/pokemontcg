import attackFunction, {
  faintMessage,
  damageMessage,
  resistanceMessage,
  weaknessMessage,
} from "./attackFunction";
import {
  addDefeatedPokemon,
  attackPokemon,
  fetchPokemon,
} from "../reducers/actions";

const victim = "right";
let victimPokemon = { name: "foo", hp: 100 };
const types = ["Fire"];
const move = { name: "foo", atk: { damage: 30 } };

describe("App", () => {
  let dispatch = jest.fn();
  let savePlay = jest.fn();

  it("not my turn should save play with notAllowed message", () => {
    attackFunction({
      dispatch,
      myTurn: false,
      savePlay,
      types,
      victim,
    })(move);
    expect(savePlay).toBeCalledWith({
      ...move,
      notAllowed: "Its not your turn",
    });
  });

  describe("My turn", () => {
    const myTurn = true;

    beforeEach(() => {
      dispatch = jest.fn();
      savePlay = jest.fn();
      victimPokemon = { name: "foo", hp: 100 };
    });

    it("should save play with weakness message", () => {
      victimPokemon.weaknesses = [{ type: "Fire", value: "x2" }];
      attackFunction({
        dispatch,
        myTurn,
        savePlay,
        types,
        victim,
        victimPokemon,
      })(move);
      expect(savePlay).toBeCalledWith({
        ...move,
        weaknesses: weaknessMessage(victimPokemon, types),
      });
    });

    it("should save play with resistance message", () => {
      victimPokemon.resistances = [{ type: "Fire", value: "-30" }];
      attackFunction({
        dispatch,
        myTurn,
        savePlay,
        types,
        victim,
        victimPokemon,
      })(move);
      expect(savePlay).toBeCalledWith({
        ...move,
        resistances: resistanceMessage(victimPokemon, types),
      });
    });

    it("should dispatch attackPokemon action", () => {
      attackFunction({
        dispatch,
        myTurn,
        savePlay,
        types,
        victim,
        victimPokemon,
      })(move);
      expect(dispatch).toBeCalledWith(attackPokemon(victim, move.atk.damage));
    });

    xit("should save play with damage message", () => {
      attackFunction({
        dispatch,
        myTurn,
        savePlay,
        types,
        victim,
        victimPokemon,
      })(move);
      expect(savePlay).toBeCalledWith({
        ...move,
        damage: damageMessage(move),
      });
    });

    it("should dispatch addDefeatedPokemon action", () => {
      victimPokemon.hp = 0;
      attackFunction({
        dispatch,
        myTurn,
        savePlay,
        types,
        victim,
        victimPokemon,
      })(move);
      expect(dispatch).toBeCalledWith(
        addDefeatedPokemon(victim, victimPokemon)
      );
    });

    it("should save play with faint message", () => {
      victimPokemon.hp = 0;
      attackFunction({
        dispatch,
        myTurn,
        savePlay,
        types,
        victim,
        victimPokemon,
      })(move);
      expect(savePlay).toBeCalledWith({
        ...move,
        fainted: faintMessage(victimPokemon),
      });
    });

    it("should dispatch fetchPokemon action", () => {
      victimPokemon.hp = 0;
      attackFunction({
        dispatch,
        myTurn,
        savePlay,
        types,
        victim,
        victimPokemon,
      })(move);

      expect(dispatch).toBeCalledTimes(3);
    });
  });
});
