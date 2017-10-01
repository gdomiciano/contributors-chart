module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
      browser: true,
      node: true
  },
  extends: 'airbnb-base',
  plugins: [
      'html'
  ],
  rules: {
      'import/no-unresolved': 0,
      'import/extensions': 0,
      'import/prefer-default-export': 0,
      'indent': [2, 4, { 'SwitchCase': 1 }],
      'no-console': 0,
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, 
      'max-len': 0,
      'import/no-extraneous-dependencies': 0,
  },
};
