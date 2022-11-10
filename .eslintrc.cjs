module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser', // 配置ts解析器
  ignorePatterns: ['/dist/**','rollup.config.js'],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    indent: ['error', 2],
    'no-unused-vars': 'error',
    'no-restricted-globals': ['error'],
    'no-console': 'off'
  }
}
