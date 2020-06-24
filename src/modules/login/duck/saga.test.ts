import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { checkUserWorker, logoutWorker, loginWorker } from "./saga";
import { actions, reducer } from "./reducer";
import { isLoggedIn, getUserName, login, logout } from "./api";
import { appSlice } from "@/modules/App/duck/reducer";

describe("Login saga", () => {
  it("checkUser login", () => {
    return expectSaga(checkUserWorker)
      .withReducer(reducer)
      .put(appSlice.actions.loading())
      .provide([
        [matchers.call.fn(isLoggedIn), true],
        [matchers.call.fn(getUserName), "Helen"],
      ])
      .put(actions.loginSuccess("Helen"))
      .put(appSlice.actions.success())
      .hasFinalState({
        status: "success",
        isAuth: true,
        name: "Helen",
      })
      .run();
  });
  it("checkUser logout", () => {
    return expectSaga(checkUserWorker)
      .withReducer(reducer)
      .put(appSlice.actions.loading())
      .provide([
        [matchers.call.fn(isLoggedIn), false],
        [matchers.call.fn(getUserName), null],
      ])
      .put(actions.logoutSuccess())
      .put(appSlice.actions.success())
      .hasFinalState({
        status: "success",
        isAuth: false,
        name: "",
      })
      .run();
  });
  it("logoutWorker success", () => {
    return expectSaga(logoutWorker)
      .withReducer(reducer)
      .put(actions.logoutLoading())
      .provide([[matchers.call.fn(logout), false]])
      .put(actions.logoutSuccess())
      .hasFinalState({
        status: "success",
        isAuth: false,
        name: "",
      })
      .run();
  });
  it("logoutWorker failed", () => {
    return expectSaga(logoutWorker)
      .withReducer(reducer)
      .put(actions.logoutLoading())
      .provide([[matchers.call.fn(logout), throwError(new Error("error"))]])
      .put(actions.logoutError())
      .hasFinalState({
        status: "error",
        isAuth: false,
        name: "",
      })
      .run();
  });
  it("loginWorker success", () => {
    return expectSaga(loginWorker, { payload: "Helen" })
      .withReducer(reducer)
      .put(actions.loginLoading())
      .provide([[matchers.call.fn(login), "Helen"]])
      .put(actions.loginSuccess("Helen"))
      .hasFinalState({
        status: "success",
        isAuth: true,
        name: "Helen",
      })
      .run();
  });
  it("loginWorker failed", () => {
    return expectSaga(loginWorker, { payload: "Helen" })
      .withReducer(reducer)
      .put(actions.loginLoading())
      .provide([[matchers.call.fn(login), throwError(new Error("error"))]])
      .put(actions.loginError())
      .hasFinalState({
        status: "error",
        isAuth: false,
        name: "",
      })
      .run();
  });
});
