import React from "react";
import renderer from "react-test-renderer";
import { GameSettings } from "./GameSettings";

describe("GameSettings", () => {
  it("renders GameSettings", () => {
    expect(renderer.create(<GameSettings />).toJSON()).toMatchSnapshot();
  });
});
