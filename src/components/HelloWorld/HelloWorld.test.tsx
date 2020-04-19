import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import HelloWorld from "./index.tsx";

describe("Hello world render check", () => {
  it("Default render", () => {
    expect(shallow(<HelloWorld />).matchesElement(<div>Hello World</div>)).toBe(
      true
    );
  });

  it("Default render with prop", () => {
    expect(
      shallow(<HelloWorld name="Tanya" />).matchesElement(
        <div>Hello World, Tanya</div>
      )
    ).toBe(true);
  });
});
