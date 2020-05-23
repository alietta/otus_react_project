import React from "react";
import { mount } from "enzyme";
import { pageWithoutNavigation } from "./pageWithoutNavigation";

describe("HOC pageWithoutNavigation", () => {
  interface ComponentProps {
    name: string;
  }
  const Component: React.FC<ComponentProps> = ({ name }) => <h1>{name}</h1>;
  const WrappedComponent = pageWithoutNavigation(Component);
  it("render", () => {
    const element = mount(<WrappedComponent name="Anny" />);
    expect(element.html()).toMatchInlineSnapshot(
      `"<div class=\\"css-1xfup8k\\"><div class=\\"css-1jywssl\\"><h1>Anny</h1></div></div>"`
    );
  });
});
