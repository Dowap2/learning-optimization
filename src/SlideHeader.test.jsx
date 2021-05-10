import React from "react";
import { SlideHeader } from "./SlideHeader";
import { render } from "@testing-library/react";

let component = null;

test("test render", () => {
  component = render(<SlideHeader />);
  const test = component;
  console.log(test);
});
