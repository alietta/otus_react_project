import { AppState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const appInitialState: AppState = {
  status: "success",
};
export const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    loading: (state) => {
      state.status = "loading";
    },
    success: (state) => {
      state.status = "success";
    },
    error: (state) => {
      state.status = "error";
    },
  },
});
