import { declOfNum } from "./helpers";

describe("declension of nouns", () => {
  it("1 яблоко", () => {
    expect(declOfNum(1, ["яблоко", "яблока", "яблок"])).toBe("яблоко");
  });
  it("3 яблока", () => {
    expect(declOfNum(3, ["яблоко", "яблока", "яблок"])).toBe("яблока");
  });
  it("8 яблок", () => {
    expect(declOfNum(8, ["яблоко", "яблока", "яблок"])).toBe("яблок");
  });
});

