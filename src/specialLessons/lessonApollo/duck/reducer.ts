import { Instagram } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const instagramInitialState: Instagram = {
  status: "loading",
  code: "",
  token: "",
  id: ""
};
export const instagramSlice = createSlice({
  name: "apollo",
  initialState: instagramInitialState,
  reducers: {
    getToken: (state) => state,
    loading: (state) => {
      state.status = "loading";
    },
    tokenSuccess: (state, { payload }: PayloadAction<{ token: string; id: string }>) => {
      state.token = payload.token;
      state.id = payload.id;
      state.status = "success";
    },
    error: (state) => {
      state.status = "error";
    },
  },
});
export const { actions, reducer } = instagramSlice;
