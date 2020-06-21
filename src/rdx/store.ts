import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer } from "./reducder";
import { thunkMiddleware } from "./thunkMiddleware";
import { probabilityMiddleware } from "./probabilityMiddleware";

const middleware = [...getDefaultMiddleware(), probabilityMiddleware];
// const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer,
  middleware,
});
