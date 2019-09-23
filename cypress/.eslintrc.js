module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended'
  ],
  "rules": {
    "no-undef": "off",
    "no-unused-expressions": "off"
  }
}
