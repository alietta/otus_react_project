import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer } from "./reducder";
import { thunkMiddleware } from "./thunkMiddleware";

const middleware = [...getDefaultMiddleware({ thunk: false }), thunkMiddleware];

export const store = configureStore({
  reducer,
  middleware,
});
