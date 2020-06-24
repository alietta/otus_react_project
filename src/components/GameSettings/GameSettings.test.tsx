import React from "react";
import renderer from "react-test-renderer";
import { GameSettings } from "./GameSettings";

describe("GameMenu", () => {
  it("renders GameControl", () => {
    expect(renderer.create(<GameSettings />).toJSON()).toMatchSnapshot();
  });
});
