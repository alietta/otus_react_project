/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { Game } from "./Game";

const mockStore = configureMockStore([thunk]);

describe("Game", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      settings: {
        fieldSize: { width: 4, height: 4 },
        cellSize: { width: 10, height: 10 },
      },
      game: {
        status: "settings",
        speed: 0,
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
  it("renders Game", () => {
    const elem = mount(<Game/>, {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        store,
      },
    });
    expect(elem).toMatchSnapshot();
  });
});
