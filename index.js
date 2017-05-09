module.exports = {
  extends: [
    './rules/possibleErrors',
    './rules/bestPractices',
    './rules/strict',
    './rules/variables',
    './rules/node',
    './rules/stylisticIssues',
    './rules/ecmaScript6',
    './rules/babel',
    './rules/immutablejs',
    './rules/import',
    './rules/jsxA11y',
    './rules/react',
    './rules/prettier',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
    },
  },
  rules: {
    strict: 'error',
  },
}
