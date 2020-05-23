import React from "react";
import { mount } from "enzyme";
import { App } from "./App";
import { MemoryRouter } from "react-router";
import { LoginPage } from "@/pages/LoginPage";
import { GamePage } from "@/pages/GamePage";
import { AppContext } from "@/AppContext";

describe("Router test", () => {
  it("route without authorization", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
      {
        wrappingComponent: AppContext.Provider,
        wrappingComponentProps: {
          value: [{ isAuth: false, loader: false, name: "" }, jest.fn()],
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
        wrappingComponent: AppContext.Provider,
        wrappingComponentProps: {
          value: [{ isAuth: false, loader: false, name: "" }, jest.fn()],
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
        wrappingComponent: AppContext.Provider,
        wrappingComponentProps: {
          value: [{ isAuth: true, loader: false, name: "Bob" }, jest.fn()],
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
        wrappingComponent: AppContext.Provider,
        wrappingComponentProps: {
          value: [{ isAuth: true, loader: false, name: "Bob" }, jest.fn()],
        },
      }
    );
    expect(wrapper.find(GamePage)).toHaveLength(1);
  });
});
