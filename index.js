module.exports = {
  "extends": [].map(require.resolve),
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "jsx": true,
    }
  },
  "rules": {
    "strict": 'error'
  }
}