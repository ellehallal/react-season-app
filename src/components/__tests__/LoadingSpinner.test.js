import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import LoadingSpinner from "../LoadingSpinner";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
    shallow(<LoadingSpinner />);
});

test("renders with Loading text", () => {
    const wrapper = shallow(<LoadingSpinner />);
    expect(wrapper.text()).toContain('Loading')
});