import React from "react";
import { mount } from "enzyme";
import { WithNavigationLayout } from "./WithNavigationLayout";
import { AppContext } from "@/AppContext";

describe("WithNavigationLayout", () => {
  const Component: React.FC<> = () => <h1>Test</h1>;
  it("render", () => {
    const element = mount(
      <WithNavigationLayout>
        <Component />
      </WithNavigationLayout>,
      {
        wrappingComponent: AppContext.Provider,
        wrappingComponentProps: {
          value: [{ isAuth: true, loader: false, name: "Bob" }, jest.fn()],
        },
      }
    );
    expect(element.html()).toMatchSnapshot();
  });
});
