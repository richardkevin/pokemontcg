import React from "react";
import { shallow } from "enzyme";

import { Attacks } from "./Attacks";
import { initialState } from "../reducers/Battle";

describe("Attacks", () => {
  it("renders without problem", () => {
    const component = shallow(<Attacks />);
    expect(component.isEmptyRender()).toBeFalsy();
  });
  it("renders Ability", () => {
    const component = shallow(<Attacks />);
    expect(component.find("Ability").isEmptyRender()).toBeFalsy();
  });

  describe("Right player", () => {
    it("should render attacks", () => {
      const component = shallow(
        <Attacks player="right" battle={initialState} />
      );
      expect(component.find(".pokemon__attack")).toHaveLength(
        initialState.right.activePokemon.attacks.length
      );
    });
    it("should render attack cost", () => {
      const component = shallow(
        <Attacks player="right" battle={initialState} />
      ).find(".pokemon__attack-cost");

      expect(component.at(0).children()).toHaveLength(
        initialState.right.activePokemon.attacks[0].cost.length
      );
    });
    it("should render attack name", () => {
      const component = shallow(
        <Attacks player="right" battle={initialState} />
      ).find(".pokemon__attack-name");

      expect(component.at(0).children().text()).toEqual(
        initialState.right.activePokemon.attacks[0].name
      );
    });
    it("should render attack damage", () => {
      const component = shallow(
        <Attacks player="right" battle={initialState} />
      ).find(".pokemon__attack-damage");

      expect(component.at(0).children().text()).toEqual(
        initialState.right.activePokemon.attacks[0].damage
      );
    });
    it("should render attack description", () => {
      const component = shallow(
        <Attacks player="right" battle={initialState} />
      ).find(".pokemon__attack-description");
      expect(component.at(0).children().isEmptyRender()).toBeTruthy();
    });
  });
});
