import React from "react";
import { SlideHeader } from "./SlideHeader";
import { render } from "@testing-library/react";
import { mount } from "enzyme";
import { useSelector } from "react-redux";

let component = null;

test("test render", () => {
  component = render(<SlideHeader />);
  const test = component;
  console.log(test);
});

test("button click", () => {
  const wrapper = mount(<SlideHeader />);
  const index = useSelector(state => state.slideState.slideState);
  wrapper.find("button").simulate("click");
  expect(index).toEqual(600);
});
