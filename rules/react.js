const indentSize = 2

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    // React
    'react/display-name': [
      'error',
      {
        ignoreTranspilerName: false,
      },
    ],
    'react/forbid-component-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array', 'object'],
      },
    ],
    'react/forbid-foreign-prop-types': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': ['error'],
    'react/no-did-update-set-state': ['error'],
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true,
      },
    ],
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'error',
    'react/prop-types': [
      'error',
      {
        customValidators: [],
        ignore: [],
        skipUndeclared: false,
      },
    ],
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'error',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: false,
      },
    ],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    // JSX-specific rules
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-spacing': [
      'error',
      'never',
      {
        allowMultiline: true,
      },
    ],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': 'error',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-indent': ['error', indentSize],
    'react/jsx-indent-props': ['error', indentSize],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false,
      },
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-no-literals': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: false,
        ignore: [],
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
      },
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: true,
        assignment: true,
        return: true,
      },
    ],
  },
}
