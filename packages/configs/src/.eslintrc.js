module.exports = {
    env: {
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        // TODO: these could be re-enabled
        '@typescript-eslint/explicit-function-return-type': [0],
        '@typescript-eslint/explicit-module-boundary-types': [0],
        '@typescript-eslint/no-explicit-any': 'off',
        'brace-style': 'error',
        'no-multiple-empty-lines': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'no-trailing-spaces': 'error',
        'no-console': [
            'error',
            {
                allow: ['log', 'error'],
            },
        ],
        // 'object-curly-spacing': [
        //     'error',
        //     'always',
        //     {
        //         arraysInObjects: true,
        //         objectsInObjects: false,
        //     },
        // ],
        'spaced-comment': [
            'error',
            'always',
            {
                exceptions: ['-', '+'],
            },
        ],
        'comma-dangle': [0],
        eqeqeq: ['error', 'smart'],
        indent: ['error', 4, { SwitchCase: 1 }],
        semi: ['error', 'always'],
    },
};
