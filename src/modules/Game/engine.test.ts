import { checkNeighbor, getGeneration } from "./engine";

describe("Engine", () => {
  describe("checkNeighbor", () => {
    let arr;
    beforeEach(() => {
      arr = [
        [false, true, false],
        [false, true, false],
        [false, true, false],
      ];
    });
    it("check neighbor point 0 0", () => {
      expect(checkNeighbor(arr, 0, 0)).toEqual(2);
    });
    it("check neighbor point 1 1", () => {
      expect(checkNeighbor(arr, 1, 1)).toEqual(2);
    });
    it("check neighbor point 0 1", () => {
      expect(checkNeighbor(arr, 0, 1)).toEqual(3);
    });
  });
  describe("getGeneration", () => {
    it("getGeneration figure 1", () => {
      const arr = [
        [false, true, false],
        [false, true, false],
        [false, true, false],
      ];
      expect(getGeneration(arr)).toEqual([
        [false, false, false],
        [true, true, true],
        [false, false, false],
      ]);
    });
    it("getGeneration figure 2", () => {
      const arr = [
        [true, true, false],
        [true, true, false],
        [false, false, false],
      ];
      expect(getGeneration(arr)).toEqual([
        [true, true, false],
        [true, true, false],
        [false, false, false],
      ]);
    });
    it("getGeneration figure 3", () => {
      const arr = [
        [false, false, false],
        [true, true, false],
        [false, false, false],
      ];
      expect(getGeneration(arr)).toEqual([
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ]);
    });
  });
});
