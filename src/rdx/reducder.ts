import { combineReducers } from "@reduxjs/toolkit";
import {
  userSlice as lessonSlice,
  counterSlice,
} from "@/specialLessons/lesson17/duck/reducer";
import { userSlice } from "@/modules/login/duck/reducer";
import { appSlice } from "@/modules/App/duck/reducer";
import { settingsSlice } from "@/modules/GameMenu/duck/reducer";
import { gameSlice } from "@/modules/Game/duck/reducer";
import { fieldSlice } from "@/modules/GameField/duck/reducer";
import { squareSlice } from "@/specialLessons/lesson22/duck/reducer";
import { instagramSlice } from "@/specialLessons/lessonApollo/duck/reducer";

export const reducer = combineReducers({
  settings: settingsSlice.reducer,
  game: gameSlice.reducer,
  field: fieldSlice.reducer,
  users: lessonSlice.reducer,
  counter: counterSlice.reducer,
  app: appSlice.reducer,
  user: userSlice.reducer,
  square: squareSlice.reducer,
  instagram: instagramSlice.reducer,
});
