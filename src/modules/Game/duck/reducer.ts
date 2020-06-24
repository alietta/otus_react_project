import { IGameState, TGameStatus } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const gameInitialState: IGameState = {
  status: "settings",
  speed: 0,
  filledCells: [],
};
export const gameSlice = createSlice({
  name: "game",
  initialState: gameInitialState,
  reducers: {
    fillCells: (state, { payload }: PayloadAction<Array<number>>) => {
      state.filledCells = payload;
    },
    changeStatus: (state, { payload }: PayloadAction<TGameStatus>) => {
      state.status = payload;
    },
  },
});

export const { actions, reducer } = gameSlice;