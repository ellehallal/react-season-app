import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<App />);
});

test("componentDidMount", () => {
  const spy = jest.spyOn(App.prototype, "componentDidMount");
  const wrapper = mount(<App />);
  wrapper.instance().componentDidMount();
  expect(spy).toHaveBeenCalled();

  // const instance = wrapper.instance();
  // instance.componentDidMount();
  // expect(instance.componentDidMount().ca).toBe(true);
});

// test("displays the longitude", () => {
//   const longitude = findByTestAttr(wrapper, "longitude");
//   expect(longitude.text()).toContain(".");
// });

// test("displays the latitude", () => {
//   const latitude = findByTestAttr(wrapper, "latitude");
//   expect(latitude.text()).toContain(".");
// });
