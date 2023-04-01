/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    "customExportConditions": [
      "node",
      "node-addons"
    ]
  },
  moduleFileExtensions: ['vue', 'json', 'js', 'ts', "tsx", 'jsx', 'node', 'mjs'],
  transform: {
    // "^.+\.[j|t]sx?$": "babel-jest",
    '^.+\\.(vue)$': '@vue/vue3-jest',
    '^.+\\.[jt]sx?$': 'babel-jest',
  }
};
