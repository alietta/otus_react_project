import { declOfNum } from "./helpers";

test("declension of nouns", () => {
  expect(declOfNum(1, ["яблоко", "яблока", "яблок"])).toBe("яблоко");
});
