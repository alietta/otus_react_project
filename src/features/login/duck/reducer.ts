import { User } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userInitialState: Users = {
  status: "success",
  isAuth: false,
  name: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginLoading: (state) => {
      state.status = "loading";
    },
    loginSuccess: (state, { payload }: PayloadAction<Array<User>>) => {
      state.user = payload;
      state.isAuth = true;
      state.status = "success";
    },
    loginError: (state) => {
      state.isAuth = false;
      state.status = "error";
    },
    logoutLoading: (state) => {
      state.status = "loading";
    },
    logoutSuccess: (state) => {
      state.user = "";
      state.isAuth = false;
      state.status = "success";
    },
    logoutError: (state) => {
      state.isAuth = false;
      state.status = "error";
    },
  },
});

