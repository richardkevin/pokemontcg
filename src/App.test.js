import React from "react";
import { shallow } from "enzyme";

import { App } from "./App";
import { initialState } from "./reducers/Battle";

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

  it("first card should receive left state", () => {
    const component = shallow(<App battle={initialState} />).find("Card");
    expect(component.at(0).props().pokemon).toEqual(initialState.left);
  });
  it("second card should receive left state", () => {
    const component = shallow(<App battle={initialState} />).find("Card");
    expect(component.at(1).props().pokemon).toEqual(initialState.right);
  });
});
