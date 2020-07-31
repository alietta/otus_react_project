import { takeEvery, call, put, delay, all } from "redux-saga/effects";
import { AnyAction } from "redux";
import queryString from "query-string";
import { actions } from "./reducer";
import { getToken } from "./api";

export function* tokenWorker(action: AnyAction) {
  yield put(actions.loading());
  try {
    const result = yield call(getToken, action.payload);
    yield put(actions.tokenSuccess(result.data));
  } catch {
    yield put(actions.error());
    window.location.pathname = "/auth";
  }
}

export function* instaSaga() {
  yield takeEvery(actions.getToken.type, tokenWorker);
}
