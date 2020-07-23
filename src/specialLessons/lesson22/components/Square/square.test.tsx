import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { Button } from "sancho";
import thunk from "redux-thunk";
import { Square } from "./index";

const mockStore = configureMockStore([thunk]);

describe("Square", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      square: {
        status: "loading",
        color: "ffffff",
      },
    });
  });
  it("call action on button", () => {
    const element = mount(<Square />, {
      wrappingComponent: Provider,
      wrappingComponentProps: {
        store,
      },
    });
    const button = element.find(Button);
    button.simulate("click");
    const actions = store.getActions();
    expect(actions).toEqual([{ type: "square/colors", payload: undefined }]);
  });
});
