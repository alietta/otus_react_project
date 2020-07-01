import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { Headbar } from "./Headbar";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

const logout = () => ({ type: "user/logout" });

describe("Headbar", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      user: {
        name: "Helen",
      },
    });
  });
  it("renders Headbar", () => {
    const element = mount(<Headbar />, {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        store,
      },
    });
    expect(element).toMatchSnapshot();
  });
  it("should render with name from store", () => {
    const element = mount(<Headbar />, {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        store,
      },
    });
    expect(element.text().includes("Helen")).toBe(true);
  });
  it("should call logout action on click", () => {
    const element = mount(<Headbar />, {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        store,
      },
    });
    element.find(".logout-icon").first().simulate("click");
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "user/logout", payload: undefined });
  });
});
