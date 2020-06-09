import { User } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userInitialState: User = {
  status: "success",
  isAuth: false,
  name: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    login: (state, { payload }: PayloadAction<string>) => {
      return state;
    },
    loginLoading: (state) => {
      state.status = "loading";
    },
    loginSuccess: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
      state.isAuth = true;
      state.status = "success";
    },
    loginError: (state) => {
      state.isAuth = false;
      state.status = "error";
    },
    logout: state => state,
    logoutLoading: (state) => {
      state.status = "loading";
    },
    logoutSuccess: (state) => {
      state.name = "";
      state.isAuth = false;
      state.status = "success";
    },
    logoutError: (state) => {
      state.isAuth = false;
      state.status = "error";
    },
  },
});

export const { reducer, actions } = userSlice;
