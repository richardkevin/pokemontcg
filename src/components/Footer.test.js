import React from "react";
import { shallow } from "enzyme";

import Footer, { TypeDamage } from "./Footer";

describe("TypeDamage", () => {
  it("should render without problem", () => {
    const component = shallow(<TypeDamage />);
    expect(component.isEmptyRender()).toBeFalsy();
  });
  it("should render img with given energy type", () => {
    const type = "Fire";
    const component = shallow(<TypeDamage type={type} />);

    expect(component.find("img").prop("alt")).toBe(type);
    expect(component.find("img").prop("src")).toBe("Fire.png");
  });
  it("should render img with given value", () => {
    const value = "foo";
    const component = shallow(<TypeDamage value={value} />);
    expect(component.find("span").text()).toBe(value);
  });
});

describe("Footer", () => {
  it("should render without problem", () => {
    const component = shallow(<Footer />);
    expect(component.isEmptyRender()).toBeFalsy();
  });
});
