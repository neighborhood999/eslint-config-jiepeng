module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    '@jiepeng/eslint-config-jiepeng-base',
    './rules/react',
    './rules/react-hooks',
    './rules/jsx-a11y',
    'prettier/react'
  ].map(require.resolve),
  rules: {}
};
