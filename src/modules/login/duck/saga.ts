import { isEmpty } from "ramda";
import { takeEvery, call, put, fork } from "redux-saga/effects";

import { actions } from "./reducer";
import { isLoggedIn, getUserName, login, logout } from "./api";
import { appSlice } from "@/modules/App/duck/reducer";

export function* checkUserWorker() {
  yield put(appSlice.actions.loading());
  const isAuth: boolean = yield call(isLoggedIn);
  const name: string = yield call(getUserName);
  if (isAuth) {
    yield put(actions.loginSuccess(name));
  } else {
    yield put(actions.logoutSuccess());
  }
  yield put(appSlice.actions.success());
}

export function* logoutWorker() {
  yield put(actions.logoutLoading());
  try {
    yield call(logout);
    yield put(actions.logoutSuccess());
  } catch {
    yield put(actions.logoutError());
  }
}

export function* loginWorker({ payload }: ReturnType<typeof actions.login>) {
  yield put(actions.loginLoading());
  const username = String(payload);
  try {
    if (!isEmpty(username)) {
      yield call(login, username);
      yield put(actions.loginSuccess(username));
    }
  } catch {
    yield put(actions.loginError());
  }
}

export function* loginSaga() {
  yield fork(checkUserWorker);
  yield takeEvery(actions.login.type, loginWorker);
  yield takeEvery(actions.logout.type, logoutWorker);
}
