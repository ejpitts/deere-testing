import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Given the App Component", () => {
  const component = shallow(<App />);

  it("should exist as a 'main' with a specifying class name", () => {
    // expect(component.exists()).toBe(true);
    // expect(component.hasClass("App")).toBe("true");

    // ! Same as below
    expect(component.is("main.App")).toBe(true);
  });

  it("should contain a Header component", () => {
    const Header = component.find("Header");

    expect(Header.exists()).toBe(true);
  });
  it("should contain a SearchForm component", () => {
    const SearchForm = component.find("SearchForm");

    expect(SearchForm.exists()).toBe(true);
  });
  it("should contain a TodosList component", () => {
    const TodosList = component.find("TodosList");

    expect(TodosList.exists()).toBe(true);
  });
});
