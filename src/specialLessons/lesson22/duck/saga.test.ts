import { testSaga } from "redux-saga-test-plan";
import { call, delay } from "redux-saga/effects";
import { colorWorker } from "./saga";
import { actions } from "../duck/reducer";
import { getColors } from "./api";

describe("Lesson22 saga", () => {
  it("color saga test", () => {
    testSaga(colorWorker)
      .next()
      .put(actions.loading())
      .save("loading")
      .next()
      .all([call(getColors), delay(1000)])
      .save("after request")
      .next([{ data: { new_color: "f1f1f1" } }])
      .put(actions.success("f1f1f1"))
      .restore("loading")
      .next()
      .all([call(getColors), delay(1000)])
      .next([{ data: { new_color: "" } }])
      .put(actions.success("000000"))
      .restore("after request")
      .throw(new Error())
      .put(actions.error());
  });
});
