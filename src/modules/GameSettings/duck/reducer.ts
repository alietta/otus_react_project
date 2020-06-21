import { ISettingState, ISize } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const settingsInitialState: ISettingState = {
  fieldSize: {
    width: 100,
    height: 100,
  },
  cellSize: {
    width: 10,
    height: 10,
  },
  default: {
    fieldSize: {
      width: 100,
      height: 100,
    },
    cellSize: {
      width: 10,
      height: 10,
    },
  }
};
export const settingsSlice = createSlice({
  name: "app",
  initialState: settingsInitialState,
  reducers: {
    field: (state, { payload }: PayloadAction<ISize>) => {
      state.fieldSize = payload;
    },
    cell: (state, { payload }: PayloadAction<ISize>) => {
      state.cellSize = payload;
    },
    returnDefault: (state) => {
      state.fieldSize = state.default.fieldSize;
      state.cellSize = state.default.cellSize;
    }
  },
});

export const { actions, reducer } = settingsSlice;
