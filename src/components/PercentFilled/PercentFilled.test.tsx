import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { PercentFilled } from "./PercentFilled";

describe("PercentFilled", () => {
  it("renders PercentFilled", () => {
    expect(renderer.create(<PercentFilled />).toJSON()).toMatchSnapshot();
  });
  it("should call onSubmit with props", () => {
    const onSubmit = jest.fn();
    const element = mount(<PercentFilled onSubmit={onSubmit} />);
    element.find("input").simulate("change", {
      target: { value: 34 },
    });
    element.find("button").simulate("submit");
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit.mock.calls[0][0]).toBe(34);
  });
  it("should call onSubmit with wrong percent more than 100", () => {
    const onSubmit = jest.fn();
    const element = mount(<PercentFilled onSubmit={onSubmit} />);
    element.find("input").simulate("change", {
      target: { value: 150 },
    });
    element.find("button").simulate("submit");
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit.mock.calls[0][0]).toBe(100);
  });
  it("should call onSubmit with wrong percent less than 0", () => {
    const onSubmit = jest.fn();
    const element = mount(<PercentFilled onSubmit={onSubmit} />);
    element.find("input").simulate("change", {
      target: { value: -3 },
    });
    element.find("button").simulate("submit");
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit.mock.calls[0][0]).toBe(3);
  });
});
