import React from "react";
import { mount } from "enzyme";
import { App } from "@/modules/App";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router";
import { LoginPage } from "@/pages/LoginPage";
import { GamePage } from "@/pages/GamePage";

window.fetch = jest.fn();
const mockStore = configureMockStore([thunk]);
const storeWithAuth = mockStore({
  app: {
    status: "success",
  },
  user: {
    isAuth: true,
    name: "Helen",
  },
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

const storeWithoutAuth = mockStore({
  app: {
    status: "success",
  },
  user: {
    isAuth: false,
    name: "",
  },
});

describe("Router test", () => {
  it("route without authorization", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
      {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          store: storeWithoutAuth,
        },
      }
    );
    expect(wrapper.find(LoginPage)).toHaveLength(1);
  });
  it("route without authorization redirect to login from every page", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/test"]}>
        <App />
      </MemoryRouter>,
      {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          store: storeWithoutAuth,
        },
      }
    );
    expect(wrapper.find(LoginPage)).toHaveLength(1);
  });
  it("route with authorization", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
      {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          store: storeWithAuth,
        },
      }
    );
    expect(wrapper.find(GamePage)).toHaveLength(1);
  });
  it("route with authorization redirect from login", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>,
      {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          store: storeWithAuth,
        },
      }
    );
    expect(wrapper.find(GamePage)).toHaveLength(1);
  });
});
