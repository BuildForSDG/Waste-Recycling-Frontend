module.exports = {
  rootDir: "__tests__",
  testRegex: [".spec.js$", ".test.js$"],
  coverageDirectory: "./coverage",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  }
};
