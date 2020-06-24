import React from "react";
import renderer from "react-test-renderer";
import { GameMenu } from "./GameMenu";

describe("GameMenu", () => {
  it("renders GameControl", () => {
    expect(renderer.create(<GameMenu />).toJSON()).toMatchSnapshot();
  });
});
