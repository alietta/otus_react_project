import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { GameMenu } from "./GameMenu";

const mockStore = configureMockStore([thunk]);

describe("GameMenu", () => {
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
  it("renders GameMenu", () => {
    const element = mount(<GameMenu />, {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        store,
      },
    });
  });
});
