import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { GameSettings } from "./GameSettings";

describe("GameSettings", () => {
  it("renders GameSettings", () => {
    const startGame = jest.fn();
    const element = mount(
      <GameSettings
        size={{ min: 3, max: 10 }}
        passSize={jest.fn()}
        passCellSize={jest.fn()}
        changePercent={jest.fn()}
        startGame={startGame}
      />
    );
    expect(element).toMatchSnapshot();
  });
  it("click start game", () => {
    const startGame = jest.fn();
    const element = mount(
      <GameSettings
        size={{ min: 3, max: 10 }}
        passSize={jest.fn()}
        passCellSize={jest.fn()}
        changePercent={jest.fn()}
        startGame={startGame}
      />
    );
    element.find("Button").last().simulate("click");
    expect(startGame).toHaveBeenCalled();
  });
});
