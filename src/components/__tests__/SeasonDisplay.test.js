import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import SeasonDisplay from "../SeasonDisplay";
import getSeason from "../SeasonDisplay";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<SeasonDisplay />);
});

test("displays summer if in southern hemisphere", () => {
  getSeason(-33, 10);
  const wrapper = shallow(<SeasonDisplay />);
  const whatSeason = findByTestAttr(wrapper, "what-season");
  expect(whatSeason.text()).toContain("summer");
});

test("displays winter if in northern hemisphere", () => {
  getSeason(33, 10);
  const wrapper = shallow(<SeasonDisplay />);
  const whatSeason = findByTestAttr(wrapper, "what-season");
  expect(whatSeason.text()).toContain("summer");
});

test("displays 'it's hot' if season is summer", () => {
  getSeason(-33, 10);
  const wrapper = shallow(<SeasonDisplay />);
  const whatSeason = findByTestAttr(wrapper, "what-season");
  expect(whatSeason.text()).toContain("summer");
});

test("displays 'it's chilly' if season is winter", () => {
  getSeason(33, 10);
  const wrapper = shallow(<SeasonDisplay />);
  const whatSeason = findByTestAttr(wrapper, "what-season");
  expect(whatSeason.text()).toContain("summer");
});

test("displays a sun icon if season is summer", () => {
  getSeason(-33, 10);
  const wrapper = shallow(<SeasonDisplay />);
  const showIcon = findByTestAttr(wrapper, "display-icon");
  expect(showIcon.hasClass("sun")).toBeTruthy();
});

test("displays a snowflake icon if season is winter", () => {
  getSeason(33, 10);
  const wrapper = shallow(<SeasonDisplay />);
  const showIcon = findByTestAttr(wrapper, "display-icon");
  expect(showIcon.hasClass("snowflake")).toBeTruthy();
});
