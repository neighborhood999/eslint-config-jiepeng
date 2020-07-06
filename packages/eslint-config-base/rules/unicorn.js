module.exports = {
  env: {
    es6: true
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },

  plugins: ['unicorn'],

  rules: {
    // https://github.com/sindresorhus/eslint-plugin-unicorn#rules

    // Enforce passing a message value when throwing a built-in error.
    'unicorn/error-message': 'error',

    // Enforce explicitly comparing the length property of a value.
    'unicorn/explicit-length-check': 'error',

    //Require Array.isArray() instead of instanceof Array.
    'unicorn/no-array-instanceof': 'error',

    // Enforce throwing TypeError in type checking conditions.
    'unicorn/prefer-type-error': 'error',

    // Require new when throwing an error.
    'unicorn/throw-new-error': 'error',

    // Enforce proper case for numeric literals.
    'unicorn/number-literal-case': 'error',

    // Enforce the use of new for all builtins, except String, Number, Boolean, Symbol and BigInt.
    'unicorn/new-for-builtins': 'error',

    // Disallow identifiers starting with new or class
    'unicorn/no-keyword-prefix': 'off'
  }
};
