const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                require: "readonly",
                module: "writable",
                exports: "writable",
                process: "readonly",
                console: "readonly",
                __dirname: "readonly",
                __filename: "readonly",
                describe: "readonly",
                test: "readonly",
                expect: "readonly",
                beforeEach: "readonly",
                afterEach: "readonly",
                beforeAll: "readonly",
                afterAll: "readonly"
            }
        }
    }
];
