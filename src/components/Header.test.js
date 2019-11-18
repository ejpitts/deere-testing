import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Given Header", () => {
  it("should exist with a specifying classname", () => {
    const component = shallow(<Header />);

    expect(component.is("header.Header")).toBe(true);
  });

  describe("When its given a title prop", () => {
    const mockTitle = "Welcome!";
    const component = shallow(<Header title={mockTitle} />);
    expect(component.text()).toEqual(mockTitle);
  });

  describe("When not given a title prop", () => {
    const component = shallow(<Header />);
    expect(component.text()).toEqual("Greetings");
  });
});
