/**
 * @jest-environment jsdom
 */
import React from "react";
import { mount, configure } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { Cell } from "./Cell";

describe("Cell", () => {
  it("renders button for empty cell", () => {
    expect(renderer.create(<Cell onClick={jest.fn()} />).toJSON())
      .toMatchInlineSnapshot(`
      <div
        className="css-6scvsp-CellWrapper-EmptyCell ej7ht1y0"
        onClick={[Function]}
      />
    `);
  });
  it("renders button for filled with x cell", () => {
    expect(
      renderer.create(<Cell onClick={jest.fn()}>x</Cell>).toJSON()
    ).toMatchSnapshot();
  });
  it("calls onClick callback on click by empty cell", () => {
    const onClick = jest.fn();
    const wrapper = mount(<Cell onClick={onClick} />);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("calls onClick callback with passed x, y params", () => {
    const onClick = jest.fn();
    const x = 12;
    const y = 14;
    const wrapper = mount(<Cell onClick={onClick} x={x} y={y} isFilled />);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledWith(x, y, false);
  });
});
