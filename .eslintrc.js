module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:import/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier", "eslint-plugin", "import"],
  rules: {
    "prettier/prettier": [
      "error",
      { singleQuote: true },
      {
        usePrettierrc: true,
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
      aliases: {
        map: [
          ["@/src", "./src"],
          ["@/assets", "src/assets"],
          ["@/utils", "src/utils"],
          ["@/services", "src/services"],
        ],
      },
    },
  },
};
