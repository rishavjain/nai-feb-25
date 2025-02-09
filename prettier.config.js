/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import('prettier').Config}
 */
const config = {
  trailingComma: 'all',
  printWidth: 120,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
}

export default config
