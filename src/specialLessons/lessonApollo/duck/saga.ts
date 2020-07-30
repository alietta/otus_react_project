import { takeEvery, call, put, delay, all } from "redux-saga/effects";
import queryString from "query-string"
import { actions } from "./reducer";
import { getToken } from "./api";


export function* tokenWorker() {
  yield put(actions.loading());
  try {
    const code = queryString.parse(window.location.search).code
    console.log(code)
    const result = yield call(getToken, code);
    console.log(result.data)
  } catch {
    yield put(actions.error());
  }
}

export function* instaSaga() {
  yield takeEvery(actions.getToken.type, tokenWorker);
}
