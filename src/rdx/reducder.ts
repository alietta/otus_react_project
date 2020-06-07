import { combineReducers } from "@reduxjs/toolkit";
import { userSlice, counterSlice } from "@/features/lesson17/duck/reducer";

export const reducer = combineReducers({
  users: userSlice.reducer,
  counter: counterSlice.reducer,
});
