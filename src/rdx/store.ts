import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer } from "./reducder";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { loginSaga } from "@/modules/login/duck/saga";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(loginSaga);
}
const middleware = [...getDefaultMiddleware(), sagaMiddleware];

export const store = configureStore({
  reducer,
  middleware,
});

sagaMiddleware.run(rootSaga);
