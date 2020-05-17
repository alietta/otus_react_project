import React from "react";
import { mount } from "enzyme";
import { App } from "./App";
import { MemoryRouter } from "react-router";
import { LoginPage } from "@/pages/LoginPage";
import { GamePage } from "@/pages/GamePage";

describe("Router test", () => {
  it("route without authorization", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(LoginPage)).toHaveLength(1);
  });
  it("route without authorization redirect to login from every page", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/test"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(LoginPage)).toHaveLength(1);
  });
  it("route with authorization", () => {
    localStorage.setItem("login", "Anny");
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(GamePage)).toHaveLength(1);
  });
  it("route with authorization redirect from login", () => {
    localStorage.setItem("login", "Anny");
    const wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(GamePage)).toHaveLength(1);
  });
});
