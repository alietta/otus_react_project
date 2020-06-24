import { combineReducers } from "@reduxjs/toolkit";
import {
  userSlice as lessonSlice,
  counterSlice,
} from "@/features/lesson17/duck/reducer";
import { userSlice } from "@/features/login/duck/reducer";
import { appSlice } from "@/features/App/duck/reducer";
import { settingsSlice } from "@/modules/GameMenu/duck/reducer";
import { gameSlice } from "@/modules/Game/duck/reducer";
import { fieldSlice } from "@/modules/GameField/duck/reducer";

export const reducer = combineReducers({
  settings: settingsSlice.reducer,
  game: gameSlice.reducer,
  field: fieldSlice.reducer,
  users: lessonSlice.reducer,
  counter: counterSlice.reducer,
  app: appSlice.reducer,
  user: userSlice.reducer,
});
