/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow, mount } from "enzyme";

import { Game } from "./Game";

describe("Game", () => {
  it("renders Game", () => {
    const elem = shallow(<Game />);
    expect(elem).toMatchSnapshot();
  });
  it("test Game field prop", () => {
    const elem = mount(<Game />);
    const fieldComponent = elem.find("GameField");
    const field = fieldComponent.props().field;
    const filledCells = field.reduce((acc, row) => {
      const fillInRow = row.filter((elem) => elem).length;
      return acc + fillInRow;
    }, 0);
    const percentCount = Math.round((50 * 4) / 100);
    expect(field instanceof Array).toBeTruthy();
    expect(field.length).toBe(2);
    expect(field[0].length).toBe(2);
    expect(filledCells).toEqual(percentCount);
  });
});
