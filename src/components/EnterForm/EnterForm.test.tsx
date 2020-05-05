import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { EnterForm } from "./EnterForm";

describe("EnterForm", () => {
  it("renders EnterForm", () => {
    expect(renderer.create(<EnterForm />).toJSON()).toMatchSnapshot();
  });
  it("should call onSubmit with props", () => {
    const onSubmit = jest.fn();
    const element = mount(<EnterForm onSubmit={onSubmit} />);
    element.find("input").simulate("change", {
      target: { value: "Ivan" },
    });
    element.find("button").simulate("submit");
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit.mock.calls[0][0]).toMatchObject({ name: "Ivan" });
  });
});
