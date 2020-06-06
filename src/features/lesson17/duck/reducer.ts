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
