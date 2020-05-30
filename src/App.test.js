import React from "react";
import { shallow } from "enzyme";

import { App } from "./App";
import { initialState } from "./reducers/Battle";

const { left, right } = initialState;

describe("App", () => {
  it("renders without problem", () => {
    const component = shallow(<App />);
    expect(component.isEmptyRender()).toBeFalsy();
  });

  it("renders 2 cards", () => {
    const component = shallow(<App />);
    expect(component.find("Card")).toHaveLength(2);
  });

  it("renders history dashboard", () => {
    const component = shallow(<App />);
    expect(component.find("HistoryDashboard").isEmptyRender()).toBeFalsy();
  });

  it("first card should receive left as pokemon", () => {
    const component = shallow(<App left={left} />).find("Card");
    expect(component.at(0).props().pokemon).toEqual(left.activePokemon);
  });

  it("second card should receive right as pokemon", () => {
    const component = shallow(<App right={right} />).find("Card");
    expect(component.at(1).props().pokemon).toEqual(right.activePokemon);
  });

  it("first card should receive right as victimPokemon", () => {
    const component = shallow(<App right={right} />).find("Card");
    expect(component.at(0).props().victimPokemon).toEqual(right.activePokemon);
  });

  it("second card should receive left as victimPokemon", () => {
    const component = shallow(<App left={left} />).find("Card");
    expect(component.at(1).props().victimPokemon).toEqual(left.activePokemon);
  });
});
