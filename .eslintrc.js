module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'indent': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-undef': 'off',
        'react/prop-types': 'off',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'no-console': ['warn'],
        'i18next/no-literal-string': [
            'warn',
            { markupOnly: true, ignoreAttribute: ['to', 'data-testid', 'fill', 'theme'] }
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/display-name': 'off',
        'linebreak-style': 0,
    },
    globals: {
        __IS_DEV__: true,
        __API__: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        },
        {
            files: ['src/**/*Slice.ts'],
            rules: { 'no-param-reassign': ['error', { props: false }] }
        }
    ]
};
