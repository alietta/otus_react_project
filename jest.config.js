module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/internals/jestSettings.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    // https://jestjs.io/docs/en/webpack#handling-static-assets
    "\\.(css|less)$": "<rootDir>/internals/__mocks__/styleMock.js",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFiles: ["jest-localstorage-mock", "jest-canvas-mock"],
};
