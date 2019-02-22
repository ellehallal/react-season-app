import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ErrorMessage from "../ErrorMessage";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
    shallow(<ErrorMessage />);
});

test("renders with Loading text", () => {
    const wrapper = shallow(<ErrorMessage message="Hi, I am an error" />);
    expect(wrapper.text()).toContain('Hi, I am an error')
});