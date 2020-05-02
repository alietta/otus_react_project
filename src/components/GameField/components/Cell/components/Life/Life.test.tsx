/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow, mount, configure } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { Life } from "./Life";

describe("Life", () => {
  it("render life", () => {
    const life = renderer.create(<Life />).toJSON();
    expect(life).toMatchInlineSnapshot(`
      <div
        className="css-tc5myo"
        color="black"
      />
    `);
  });
});
