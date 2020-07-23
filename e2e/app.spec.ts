import "expect-puppeteer";

describe("Login page", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3030");
  });

  it("should display login window", async () => {
    await new Promise((res) => {
      setTimeout(res, 1010);
    });
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain("Sign in to Life Game");
  });

  it("should log in", async () => {
    await page.waitFor("input");
    await page.type("input", "Abby");
    await page.click("button");
    await new Promise((res) => {
      setTimeout(res, 1010);
    });
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain("Abby");
  });
});
