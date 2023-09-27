module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react-redux/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["emotion", "graphql", "prettier", "react-redux"],
  rules: {
    "emotion/jsx-import": "error",
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "graphql/template-strings": [
      `error`,
      {
        env: `relay`,
        tagName: `graphql`,
      },
    ],
  },
}
