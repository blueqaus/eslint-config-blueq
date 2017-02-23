module.exports = {
  env: { es6: true },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  plugins: [
    'import',
  ],
  rules: {
    // Static analysis
    'import/default': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': ['off'],
    'import/no-restricted-paths': ['off'],
    'import/no-unresolved': ['error'],
    'import/no-webpack-loader-syntax': 'error',

    // Helpful warnings
    'import/export': 'error',
    'import/no-extraneous-dependencies': ['error'],
    'import/no-deprecated': 'off',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-mutable-exports': 'error',

    // Module systems
    'import/no-amd': 'error',
    'import/no-commonjs': 'off',
    'import/no-nodejs-modules': 'off',
    'import/unambiguous': 'off',

    // Style guide
    'import/extensions': ['error', 'never'],
    'import/first': ['error', 'absolute-first'],
    'import/max-dependencies': ['error', { max: 10 }],
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/no-named-default': 'error',
    'import/no-unassigned-import': 'off',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
    }],
    'import/prefer-default-export': 'error',
  },
}
