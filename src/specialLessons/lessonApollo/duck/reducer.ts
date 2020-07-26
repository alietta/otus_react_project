import { Square } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const squareInitialState: Square = {
  status: "loading",
  color: "ffffff",
};
export const squareSlice = createSlice({
  name: "square",
  initialState: squareInitialState,
  reducers: {
    colors: (state) => state,
    loading: (state) => {
      state.status = "loading";
    },
    success: (state, { payload }: PayloadAction<string>) => {
      state.color = payload;
      state.status = "success";
    },
    error: (state) => {
      state.status = "error";
    },
  },
});
export const { actions, reducer } = squareSlice;
