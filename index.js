module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@acollier/eslint-config', 'plugin:vue/recommended'],
  plugins: ['vue'],
  rules: {
    'vue/no-v-html': 'off',
    'vue/component-name-in-template-casing': 'off'
  }
}
