/**
 * @jest-environment jsdom
 */
import React from "react";
import { mount, configure } from "enzyme";
import renderer from "react-test-renderer";

import { preatyArray } from "./Game";

describe("Game functions", () => {
  it("test preatyArray make smaller", () => {
    const arr = [true, false, false];
    expect(preatyArray(arr, 2, false)).toEqual([true, false]);
  });
  it("test preatyArray make bigger", () => {
    const arr = [true, false, false];
    expect(preatyArray(arr, 5, false)).toEqual([
      true,
      false,
      false,
      false,
      false,
    ]);
  });
  it("test preatyArray fill with array", () => {
    const arr = [[true], [false]];
    expect(preatyArray(arr, 4, [false])).toEqual([
      [true],
      [false],
      [false],
      [false],
    ]);
  });
});
