import { Instagram } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const instagramInitialState: Instagram = {
  status: "loading",
  code: "",
  token: "",
  id: "",
};
export const instagramSlice = createSlice({
  name: "apollo",
  initialState: instagramInitialState,
  reducers: {
    getToken: (state) => state,
    loading: (state) => {
      state.status = "loading";
    },
    tokenSuccess: (
      state,
      { payload }: PayloadAction<{ access_token: string; user_id: string }>
    ) => {
      state.token = payload.access_token;
      state.id = payload.user_id;
      state.status = "success";
    },
    error: (state) => {
      state.status = "error";
    },
  },
});
export const { actions, reducer } = instagramSlice;
