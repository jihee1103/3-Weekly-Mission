module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true, // node 환경 허락? 어디에서? ⤵️
      },
      files: ['.eslintrc.{js,cjs}'], // 여기 files에 명시된 파일에 한해서만 node 환경 허락
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  plugins: ['react', 'react-refresh', 'react-hooks', 'jsx-a11y', 'prettier', 'import'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: '18.2' },
    // import/resolver` 는 `eslint-plugin-import` 의 경로 설정 옵션
    // todo: unresolved 에러 안 고쳐져서 규칙 일단 꺼놓음
    // 'import/resolver': {
    // node: {
    // paths: ['src'],
    // extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // },
    // caseSensitive: false,
    // },
  },
  ignorePatterns: ['reportWebVitals.js', '*.test.js'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-shadow': 'off',
    'react/react-in-jsx-scope': 'off',
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['function', 'block'], next: '*' },
      {
        blankLine: 'always',
        prev: ['return', 'try', 'if', 'while', 'iife', 'for'],
        next: '*',
      },
      { blankLine: 'always', prev: '*', next: ['return', 'try', 'if', 'while', 'iife', 'for', 'export'] },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: ['multiline-const', 'multiline-let', 'multiline-var'],
      },
    ],
    'no-console': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/prop-types': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-fragments': 'off',
    camelcase: 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'consistent-return': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type', 'unknown'],
        pathGroups: [
          {
            pattern: '{react*,react*/**,react-dom/**,@tanstack/react-query/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@{layout,pages,components,assets}/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@{lib,utils,hooks,event,api}/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@{store,slice}/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@pages/**/*.style',
            group: 'unknown',
          },
          {
            pattern: '@components/**/*.style',
            group: 'unknown',
          },
          {
            pattern: '{.,..}/**/*.style',
            group: 'unknown',
          },
          {
            pattern: '*.style',
            group: 'unknown',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],
  },
};
