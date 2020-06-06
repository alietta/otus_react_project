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
    getUsers: (state, { payload }: PayloadAction<Array<User>>) => {
      state.users = payload;
    },
  },
});
