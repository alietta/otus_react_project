import { testSaga } from "redux-saga-test-plan";
import { call, delay } from "redux-saga/effects";
import { tokenWorker } from "./saga";
import { actions } from "./reducer";
import { getToken } from "./api";

window.location.search = "?code=543";
describe("Lesson apollo saga", () => {
  it("insta saga test", () => {
    testSaga(tokenWorker, { payload: "543" })
      .next()
      .put(actions.loading())
      .save("loading")
      .next()
      .call(getToken, "543")
      .next({ data: { access_token: "e43q", user_id: 5 } })
      .put(actions.tokenSuccess({ access_token: "e43q", user_id: 5 }))
      .restore("loading")
      .next()
      .call(getToken, "543")
      .throw(new Error())
      .put(actions.error());
  });
});
