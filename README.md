# pro-frame

项目工程化的基本配置：prettier,eslint,typescript,git commit等的基本配置

## 配置项说明

1.prettier
```
依赖：prettier,eslint-config-prettier,eslint-plugin-prettier
配置：extends:['plugin:prettier/recommended']
```
2.eslint
```
配置：extends: ['eslint:recommended']
```
3.typesctipt
```
依赖：typescript,@typescript-eslint/parser,@typescript-eslint/eslint-plugin
配置：extends: ['plugin:@typescritp-eslint/recommended'], Plugins: ['@typescript-eslint'], parser: '@typescript-eslint/parser'
```
4.husky
```
npm set-script prepare "husky install"
npx husky add pre-commit > "commendline"
```
5.lint-staged
```
"lint-staged": {
  "*.{js,ts,vue}": "eslint --fix"
}
```
6.commitlint
```
依赖：@commitlint/cli, @commitlint/config-conventional
配置：.commitlintrc.js > extends: ['@commitlint/config-conventional']
```
