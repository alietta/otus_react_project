/**
 * @jest-environment jsdom
 */
import React from "react";
import { mount, configure } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { GameField } from "./GameField";

describe("GameField", () => {
  it("renders cells for passed empty GameField", () => {
    expect(
      renderer
        .create(
          <GameField
            field={[
              [false, false],
              [false, false],
            ]}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
  it("renders filled cells snapshot check", () => {
    expect(
      renderer
        .create(
          <GameField
            field={[
              [true, false],
              [false, false],
            ]}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
});
