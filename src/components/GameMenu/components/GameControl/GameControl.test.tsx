import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { GameControl } from "./GameControl";

describe("GameControl", () => {
  it("renders GameControl", () => {
    expect(renderer.create(<GameControl />).toJSON()).toMatchSnapshot();
  });
  it("should call reset with props", () => {
    const setGameState = jest.fn();
    const element = mount(<GameControl setGameState={setGameState} />);
    element.find("div[name='reset']").simulate("click");
    expect(setGameState).toHaveBeenCalled();
    expect(setGameState.mock.calls[0][0]).toMatchObject({
      speed: 0,
      reset: true,
    });
  });
  it("should call pause with props", () => {
    const setGameState = jest.fn();
    const element = mount(<GameControl setGameState={setGameState} />);
    element.find("div[name='pause']").simulate("click");
    expect(setGameState).toHaveBeenCalled();
    expect(setGameState.mock.calls[0][0]).toMatchObject({
      speed: 0,
      reset: false,
    });
  });
  it("should call play with props", () => {
    const setGameState = jest.fn();
    const element = mount(<GameControl setGameState={setGameState} />);
    element.find("div[name='play']").simulate("click");
    expect(setGameState).toHaveBeenCalled();
    expect(setGameState.mock.calls[0][0]).toMatchObject({
      speed: 1,
      reset: false,
    });
  });
  it("should call fast speed with props", () => {
    const setGameState = jest.fn();
    const element = mount(<GameControl setGameState={setGameState} />);
    element.find("div[name='fast']").simulate("click");
    expect(setGameState).toHaveBeenCalled();
    expect(setGameState.mock.calls[0][0]).toMatchObject({
      speed: 2,
      reset: false,
    });
  });
  it("should call slow speed with props", () => {
    const setGameState = jest.fn();
    const element = mount(<GameControl setGameState={setGameState} />);
    element.find("div[name='slow']").simulate("click");
    expect(setGameState).toHaveBeenCalled();
    expect(setGameState.mock.calls[0][0]).toMatchObject({
      speed: 0.5,
      reset: false,
    });
  });
});
