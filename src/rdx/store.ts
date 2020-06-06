import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducder";

export const store = configureStore({
  reducer,
});
