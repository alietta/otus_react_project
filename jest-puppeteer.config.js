module.exports = {
  launch: {
    headless: true,
  },
  browser: "chromium",
  server: {
    command: "npm run start:e2e",
    port: 3030,
    debug: true,
  },
};
