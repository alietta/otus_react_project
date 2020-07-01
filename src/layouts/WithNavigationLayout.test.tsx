import React from "react";
import { mount } from "enzyme";
import { WithNavigationLayout } from "./WithNavigationLayout";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  user: {
    name: "Helen",
  },
});
describe("WithNavigationLayout", () => {
  const Component: React.FC<> = () => <h1>Test</h1>;
  it("render", () => {
    const element = mount(
      <WithNavigationLayout>
        <Component />
      </WithNavigationLayout>,
      {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          store,
        },
      }
    );
    expect(element.html()).toMatchSnapshot();
  });
});
