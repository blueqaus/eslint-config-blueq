const indentSize = 2
const maxDepth = 4
const maxLen = 100
const maxParams = 3
const maxStatements = 10

module.exports = {
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false,
    }],
    camelcase: ['error', {
      properties: 'never',
    }],
    'capitalized-comments': ['error', 'always'],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['off'],
    'func-names': ['error', 'always'],
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true,
    }],
    'id-blacklist': ['error', 'callback', 'cb'],
    'id-length': ['error', {
      min: 2,
    }],
    'id-match': ['off'],
    indent: ['error', indentSize, {
      FunctionDeclaration: {
        body: 1,
        parameters: 1,
      },
      FunctionExpression: {
        body: 1,
        parameters: 1,
      },
      outerIIFEBody: 1,
      SwitchCase: 1,
      VariableDeclarator: 1,
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],
    'line-comment-position': ['off'],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      afterBlockComment: true,
      beforeLineComment: true,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: false,
      allowObjectStart: true,
      allowObjectEnd: false,
      allowArrayStart: true,
      allowArrayEnd: false,
    }],
    'lines-around-directive': ['error', {
      before: 'always',
      after: 'always',
    }],
    'max-depth': ['error', maxDepth],
    'max-len': ['error', maxLen],
    'max-lines': ['error', {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    }],
    'max-nested-callbacks': ['warn', {
      max: 4,
    }],
    'max-params': ['error', maxParams],
    'max-statements': ['warn', maxStatements],
    'max-statements-per-line': ['error', {
      max: 1,
    }],
    'multiline-ternary': ['off'],
    'new-cap': ['off'],
    'new-parens': 'off',
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 4,
    }],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': ['error'],
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'ForOfStatement',
      'FunctionExpression',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', {
      ObjectExpression: {
        minProperties: 1,
      },
      ObjectPattern: {
        minProperties: 1,
        multiline: true,
      },
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', {
      avoidEscape: true,
    }],
    'require-jsdoc': 'off',
    semi: ['error', 'never'],
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],
    'sort-keys': ['off', 'asc', {
      caseSensitive: false,
      natural: true,
    }],
    'sort-vars': ['error', {
      ignoreCase: true,
    }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'always',
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],
    'spaced-comment': ['error', 'always'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'error',
  },
}
