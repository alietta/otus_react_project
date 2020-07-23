import "expect-puppeteer";

describe("Game test", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3030");
    await page.waitFor("input");
    await page.type("input", "Abby");
    await page.click("button");
    await new Promise((res) => {
      setTimeout(res, 1010);
    });
  });

  it("set random percent and start game", async () => {
    await page.waitFor("input[placeholder]");
    await page.type("input[placeholder]", "60");
    await page.click("button");
    await page.click("div[role=button]");
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).not.toContain("settings");
  });

  it("play and back to settings", async () => {
    await page.click("div[name=play]");
    await page.click("div[name=reset]");
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain("settings");
  });
});
