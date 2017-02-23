module.exports = {
  env: { node: true, },
  rules: {
    'callback-return': ['error'],
    'global-require': 'error',
    'handle-callback-err': ['error', '^.*(e|E)rr'],
    'no-mixed-requires': ['error'],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-restriced-modules': 'off',
    'no-sync': 'off',
  },
}
