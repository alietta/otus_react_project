import { combineReducers } from "@reduxjs/toolkit";
import {
  userSlice as lessonSlice,
  counterSlice,
} from "@/features/lesson17/duck/reducer";
import { userSlice } from "@/features/login/duck/reducer";
import { appSlice } from "@/features/App/duck/reducer";

export const reducer = combineReducers({
  users: lessonSlice.reducer,
  counter: counterSlice.reducer,
  app: appSlice.reducer,
  user: userSlice.reducer,
});
