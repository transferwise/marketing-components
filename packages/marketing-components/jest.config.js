var commonConfig = require("../../node_modules/@transferwise/test-config/jest.config.js");
module.exports = {
    ...commonConfig,
    "transform": {
        "^.+\\.js$": "babel-jest",
        "^.+\\.svg$": "<rootDir>/fileTransformer.js"
    }
}