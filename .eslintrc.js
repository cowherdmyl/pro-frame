module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
