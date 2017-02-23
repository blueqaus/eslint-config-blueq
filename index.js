module.exports = {
  "extends": [
    './rules/possibleErrors',
    './rules/bestPractices',
    './rules/strict',
    './rules/variables',
  ].map(require.resolve),
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "jsx": true,
    },
  },
  "rules": {
    "strict": 'error',
  },
}
