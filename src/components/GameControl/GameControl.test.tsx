import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { GameControl } from "./GameControl";

describe("GameControl", () => {
  it("renders GameControl", () => {
    expect(renderer.create(<GameControl />).toJSON()).toMatchSnapshot();
  });
  it("should call reset with props", () => {
    const resetGame = jest.fn();
    const changeSpeed = jest.fn();
    const element = mount(
      <GameControl resetGame={resetGame} changeSpeed={changeSpeed} />
    );
    element.find("div[name='reset']").simulate("click");
    expect(resetGame).toHaveBeenCalled();
  });
  it("should call pause with props", () => {
    const resetGame = jest.fn();
    const changeSpeed = jest.fn();
    const element = mount(
      <GameControl speed={1} resetGame={resetGame} changeSpeed={changeSpeed} />
    );
    element.find("div[name='pause']").simulate("click");
    expect(changeSpeed).toHaveBeenCalled();
    expect(changeSpeed.mock.calls[0][0]).toEqual("pause");
  });
  it("should call play with props", () => {
    const resetGame = jest.fn();
    const changeSpeed = jest.fn();
    const element = mount(
      <GameControl speed={1} resetGame={resetGame} changeSpeed={changeSpeed} />
    );
    element.find("div[name='play']").simulate("click");
    expect(changeSpeed).toHaveBeenCalled();
    expect(changeSpeed.mock.calls[0][0]).toEqual("play");
  });
  it("should call fast speed with props", () => {
    const resetGame = jest.fn();
    const changeSpeed = jest.fn();
    const element = mount(
      <GameControl speed={1} resetGame={resetGame} changeSpeed={changeSpeed} />
    );
    element.find("div[name='fast']").simulate("click");
    expect(changeSpeed).toHaveBeenCalled();
    expect(changeSpeed.mock.calls[0][0]).toEqual("fast");
  });
  it("should call slow speed with props", () => {
    const resetGame = jest.fn();
    const changeSpeed = jest.fn();
    const element = mount(
      <GameControl speed={1} resetGame={resetGame} changeSpeed={changeSpeed} />
    );
    element.find("div[name='slow']").simulate("click");
    expect(changeSpeed).toHaveBeenCalled();
    expect(changeSpeed.mock.calls[0][0]).toEqual("slow");
  });
});
