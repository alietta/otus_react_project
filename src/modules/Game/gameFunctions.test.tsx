/**
 * @jest-environment jsdom
 */
import {
  randomByPercent,
  makeFieldPos,
  preatyArray,
  randomIntWithoutRepeat,
} from "./gameFunctions";
import { uniq } from "ramda";

describe("Game functions", () => {
  describe("preatyArray", () => {
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
  describe("randomIntWithoutRepeat", () => {
    it("test randomIntWithoutRepeat", () => {
      expect(randomIntWithoutRepeat(3, [2, 3, 0])).toEqual(1);
    });
  });
  describe("makeFieldPos", () => {
    it("test makeFieldPos", () => {
      expect(makeFieldPos({ cell: 7, width: 3 })).toEqual({ x: 1, y: 2 });
    });
    it("test makeFieldPos", () => {
      expect(makeFieldPos({ cell: 8, width: 3 })).toEqual({ x: 2, y: 2 });
    });
  });
  describe("randomByPercent", () => {
    it("test randomByPercent 50", () => {
      const randArray = randomByPercent(4, 4, 50);
      expect(randArray.length).toEqual(8);
      expect(uniq(randArray)).toEqual(randArray);
    });
    it("test randomByPercent 25", () => {
      const randArray = randomByPercent(4, 4, 25);
      expect(randArray.length).toEqual(4);
      expect(uniq(randArray)).toEqual(randArray);
    });
  });
});
