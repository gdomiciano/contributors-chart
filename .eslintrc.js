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
    plugins: [
      'vue'
    ],
    extends: [
      'eslint:recommended',
      'plugin:vue/recommended'
    ],
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
