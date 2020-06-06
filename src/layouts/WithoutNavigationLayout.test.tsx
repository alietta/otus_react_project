import React from "react";
import { mount } from "enzyme";
import { WithoutNavigationLayout } from "./WithoutNavigationLayout";

describe("WithoutNavigationLayout", () => {
  const Component: React.FC<> = () => <h1>Test</h1>;
  it("render", () => {
    const element = mount(
      <WithoutNavigationLayout>
        <Component />
      </WithoutNavigationLayout>
    );
    expect(element.html()).toMatchSnapshot();
  });
});
