/**
 * @jest-environment jsdom
 */
import {
  randomByPercent,
  makeFieldPos,
  preatyArray,
  randomIntWithoutRepeat,
} from "./gameFunctions";

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
      const filledCells = randArray.reduce((acc, row) => {
        const fillInRow = row.filter(Boolean).length;
        return acc + fillInRow;
      }, 0);
      const arrayPercent = (filledCells / 16) * 100;
      expect(arrayPercent).toEqual(50);
    });
    it("test randomByPercent 25", () => {
      const randArray = randomByPercent(4, 4, 25);
      const filledCells = randArray.reduce((acc, row) => {
        const fillInRow = row.filter(Boolean).length;
        return acc + fillInRow;
      }, 0);
      const arrayPercent = (filledCells / 16) * 100;
      expect(arrayPercent).toEqual(25);
    });
    it("test round randomByPercent 20", () => {
      const randArray = randomByPercent(3, 3, 20);
      const filledCells = randArray.reduce((acc, row) => {
        const fillInRow = row.filter(Boolean).length;
        return acc + fillInRow;
      }, 0);
      const percentCount = Math.round((20 * 9) / 100);
      expect(filledCells).toEqual(percentCount);
    });
  });
});
