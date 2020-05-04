import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { SizeForm } from "./SizeForm";

describe("SizeForm", () => {
  it("renders SizeForm", () => {
    expect(renderer.create(<SizeForm />).toJSON()).toMatchSnapshot();
  });
  it("should call passSize with props", () => {
    const passSize = jest.fn();
    const element = mount(<SizeForm passSize={passSize} />);
    element.find("input[name='width']").simulate("change", {
      target: { value: 5, name: "width" },
    });
    element.find("input[name='height']").simulate("change", {
      target: { value: 7, name: "height" },
    });
    expect(passSize).toHaveBeenCalledTimes(3);
    expect(passSize.mock.calls[0][0]).toMatchObject({ width: 3, height: 3 });
    expect(passSize.mock.calls[1][0]).toMatchObject({ width: 5, height: 3 });
    expect(passSize.mock.calls[2][0]).toMatchObject({ width: 5, height: 7 });
  });
});
