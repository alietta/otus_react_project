import { GameState, GameStatus, Speed } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const gameInitialState: GameState = {
  status: "settings",
  speed: 0,
  lastSpeed: 0,
  filledCells: [],
};
export const gameSlice = createSlice({
  name: "game",
  initialState: gameInitialState,
  reducers: {
    fillCells: (state, { payload }: PayloadAction<Array<number>>) => {
      state.filledCells = payload;
    },
    changeStatus: (state, { payload }: PayloadAction<GameStatus>) => {
      state.status = payload;
      state.lastSpeed = 0;
    },
    changeSpeed: (state, { payload }: PayloadAction<Speed>) => {
      const round = (num: number): number => {
        const row = `${num}`.substr(0, 3);
        return parseFloat(row);
      };
      const speedCounter = {
        pause: () => 0,
        play: () => (state.lastSpeed > 0 ? state.lastSpeed : 1),
        slow: (speed: number) => {
          if (speed === 5 || speed === 0) {
            return speed;
          }
          return speed < 0.5 ? round(speed + 0.1) : speed + 0.5;
        },
        fast: (speed: number) => {
          if (speed === 0.1 || speed === 0) {
            return speed;
          }
          return speed <= 0.5 ? round(speed - 0.1) : speed - 0.5;
        },
      };
      const newSpeed = speedCounter[payload](state.speed);
      state.lastSpeed = state.speed;
      state.speed = newSpeed;
    },
  },
});

export const { actions, reducer } = gameSlice;
