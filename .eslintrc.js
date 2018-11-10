// {
//     "env": {
//         "browser": true,
//         "es6": true,
//         "node": true
//     },
//      "parserOptions": {
//          "parser": "babel-eslint"
//      },
//     "extends": [
//         "airbnb-base",
//         "plugin:vue/recommended"
//     ],
//     "rules": {}
// }
module.exports = {
    root: true,
    parserOptions: {
      sourceType: 'module',
      parser: 'babel-eslint',
    },
    env: {
      node: true,
      es6: true,
      browser: true,
    },
    // required to lint *.vue files
    plugins: [
      'vue'
    ],
    extends: [
      'eslint:recommended',
      'plugin:vue/recommended'
    ],
    // add your custom rules here
    rules: {
      // allow debugger during development
      'no-console': 0,
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'import/no-unresolved': 0,
      'import/no-require': 0,
      'import/extensions': 0,
      'import/prefer-default-export': 0
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js','.vue']
        }
      },
    }
  }
// module.exports = {
//   root: true,
//   parser: 'babel-eslint',
//   env: {
//       browser: true,
//       node: true
//   },
//   extends: 'airbnb-base',
//   plugins: [
//       'html'
//   ],
//   rules: {
//       'comma-dangle': 1,
//       'import/no-unresolved': 0,
//       'import/extensions': 0,
//       'import/prefer-default-export': 0,
//       'indent': [2, 4 | { 'SwitchCase': 1 }],
//       'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
//       'max-len': 0,
//       'import/no-extraneous-dependencies': 0,
//   },
// };
