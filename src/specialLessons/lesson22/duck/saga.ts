import { takeEvery, call, put, delay, all } from "redux-saga/effects";

import { actions } from "./reducer";
import { getColors } from "./api";

export function* colorWorker() {
  yield put(actions.loading());
  try {
    const [ result ] = yield all([
      call(getColors),
      delay(1000)
    ])
    const color = result.data.new_color
    yield put(actions.success( color === '' ? '000000' : color ));
  } catch {
    yield put(actions.error());
  }
}

export function* squareSaga() {
  yield takeEvery(actions.colors.type, colorWorker);
}
