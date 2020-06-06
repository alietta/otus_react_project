import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "@/features/lesson17/duck/reducer";

export const reducer = combineReducers({
  users: userSlice.reducer,
});
