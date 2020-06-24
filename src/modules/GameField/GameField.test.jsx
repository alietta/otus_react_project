/**
 * @jest-environment jsdom
 */
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);

import { GameField } from "./GameField";

describe("GameField", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      settings: {
        fieldSize: { width: 4, height: 4 },
        cellSize: { width: 10, height: 10 },
      },
      game: {
        filledCells: [],
      },
      field: [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ],
    });
  });
  it("renders cells for passed empty GameField", () => {
    const element = mount(<GameField />, {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        store,
      },
    });
    expect(element).toMatchSnapshot();
  });
  it("renders filled cells snapshot check", () => {
    store = mockStore({
      settings: {
        fieldSize: { width: 4, height: 4 },
        cellSize: { width: 10, height: 10 },
      },
      game: {
        filledCells: [1, 2, 5],
      },
      field: [
        [false, true, true, false],
        [true, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ],
    });
    const element = mount(<GameField />, {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        store,
      },
    });
    expect(element).toMatchSnapshot();
  });
});
