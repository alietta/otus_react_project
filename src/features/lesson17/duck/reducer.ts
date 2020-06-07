import { User, Users } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userInitialState: Users = {
  status: "success",
  users: [],
};
export const userSlice = createSlice({
  name: "users",
  initialState: userInitialState,
  reducers: {
    getUsersLoading: (state) => {
      state.status = "loading";
    },
    getUsersSuccess: (state, { payload }: PayloadAction<Array<User>>) => {
      state.users = payload;
      state.status = "success";
    },
    getUsersError: (state) => {
      state.status = "error";
    },
  },
});

export const counterSlice = createSlice({
  name: "conter",
  initialState: 0,
  reducers: {
    increment: {
      reducer: (state) => {
        return state + 1;
      },
      prepare: (probability: number) => ({
        payload: {},
        meta: { probability },
      }),
    },
  },
});
