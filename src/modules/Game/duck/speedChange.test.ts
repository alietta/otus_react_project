import { reducer, actions } from "./reducer";

describe("Game reducer", () => {
  describe("change speed", () => {
    it("speed pause", () => {
      const state = {
        status: "settings",
        speed: 1,
        filledCells: [],
      };
      const resState = reducer(state, {
        type: actions.changeSpeed.type,
        payload: "pause",
      });
      expect(resState.speed).toEqual(0);
    });
    it("speed play", () => {
      const state = {
        status: "settings",
        speed: 0,
        filledCells: [],
      };
      const resState = reducer(state, {
        type: actions.changeSpeed.type,
        payload: "play",
      });
      expect(resState.speed).toEqual(1);
    });
    it("speed slow", () => {
      const state = {
        status: "settings",
        speed: 1,
        filledCells: [],
      };
      const resState = reducer(state, {
        type: actions.changeSpeed.type,
        payload: "slow",
      });
      expect(resState.speed).toEqual(1.5);
    });
    it("speed slow with limit", () => {
      const state = {
        status: "settings",
        speed: 5,
        filledCells: [],
      };
      const resState = reducer(state, {
        type: actions.changeSpeed.type,
        payload: "slow",
      });
      expect(resState.speed).toEqual(5);
    });
    it("speed slow with small koef", () => {
      const state = {
        status: "settings",
        speed: 0.4,
        filledCells: [],
      };
      const resState = reducer(state, {
        type: actions.changeSpeed.type,
        payload: "slow",
      });
      expect(resState.speed).toEqual(0.5);
    });
    it("speed fast", () => {
      const state = {
        status: "settings",
        speed: 1,
        filledCells: [],
      };
      const resState = reducer(state, {
        type: actions.changeSpeed.type,
        payload: "fast",
      });
      expect(resState.speed).toEqual(0.5);
    });
    it("speed fast with limit", () => {
      const state = {
        status: "settings",
        speed: 0.1,
        filledCells: [],
      };
      const resState = reducer(state, {
        type: actions.changeSpeed.type,
        payload: "fast",
      });
      expect(resState.speed).toEqual(0.1);
    });
    it("speed fast with small koef", () => {
      const state = {
        status: "settings",
        speed: 0.4,
        filledCells: [],
      };
      const resState = reducer(state, {
        type: actions.changeSpeed.type,
        payload: "fast",
      });
      expect(resState.speed).toEqual(0.3);
    });
  });
});
