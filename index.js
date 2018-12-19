module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['standard', 'plugin:prettier/recommended', 'prettier', 'plugin:vue/recommended'],
  plugins: ['standard', 'vue', 'prettier'],
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 100
      }
    ],
    'vue/no-v-html': 'off',
    'vue/component-name-in-template-casing': 'off'
  }
}
