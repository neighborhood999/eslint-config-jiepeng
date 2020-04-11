module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    es6: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      sourceType: 'module'
    }
  },

  extends: [
    './rules/base',
    './rules/prettier',
    './rules/import-order',
    './rules/react',
    './rules/jsx-a11y',
    './rules/sort-imports-es6'
  ].map(require.resolve)
};
