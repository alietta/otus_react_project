import React from "react";
import { mount } from "enzyme";
import { pageWithNavigation } from "./pageWithNavigation";

describe("HOC pageWithNavigation", () => {
  interface ComponentProps {
    store: {
      name: string;
    }
  }
  const Component: React.FC<ComponentProps> = ({ store: {name }}) => <h1>{name}</h1>;
  const WrappedComponent = pageWithNavigation(Component);
  it("render", () => {
    const element = mount(<WrappedComponent store={{name: "Anny"}}/>);
    expect(element.html()).toMatchSnapshot();
  });
});
