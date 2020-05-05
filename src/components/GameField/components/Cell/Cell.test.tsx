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
      .emotion-0 {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid gray;
        margin: 3px;
        box-sizing: border-box;
        background: white;
      }

      .emotion-0:hover {
        border-width: 3px;
      }

      <div
        className="emotion-0 emotion-1"
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
