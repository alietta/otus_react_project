module.exports = {
  launch: {
    headless: true,
  },
  browser: "chromium",
  server: {
    command: "npm run start",
    port: 3030,
    debug: true,
  },
};
