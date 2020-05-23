import React from "react";
import { mount } from "enzyme";
import { Loader } from "./Loader";

describe("Loader", () => {
  it("renders Loader", () => {
    const element = mount(<Loader />);
    expect(element).toMatchSnapshot();
  });
});
