module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    '@jiepeng/eslint-config-jiepeng-base',
    './rules/jsx-a11y',
    './rules/react'
  ].map(require.resolve)
};
