import parser from '@typescript-eslint/parser'

export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parserOptions: {
    programs: [parser.createProgram('./tsconfig.json')],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
}
