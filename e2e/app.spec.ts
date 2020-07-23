import "expect-puppeteer";

describe("Login page", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3030");
  });

  it("should display login window", async () => {
    await new Promise((res) => {
      setTimeout(res, 3000);
    });
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain("Sign in to Life Game");
  });
});
