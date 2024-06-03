module.exports = {
    // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
    // This option interrupts the configuration hierarchy at this file
    // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
    root: true,

    // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
    // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
    // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
    parserOptions: {
        parser: require.resolve('@typescript-eslint/parser'),
        extraFileExtensions: ['.vue']
    },

    env: {
        browser: true,
        es2021: true,
        node: true,
        'vue/setup-compiler-macros': true
    },

    // Rules order is important, please avoid shuffling them
    extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',

        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
        // ESLint typescript rules
        'plugin:@typescript-eslint/recommended',

        // Uncomment any of the lines below to choose desired strictness,
        // but leave only one uncommented!
        // See https://eslint.vuejs.org/rules/#available-rules
        'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
        // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
        // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

        'standard'
    ],

    plugins: [
    // required to apply rules which need type information
        '@typescript-eslint',

        // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
        // required to lint *.vue files
        'vue'
    ],

    globals: {
        ga: 'readonly', // Google Analytics
        cordova: 'readonly',
        __statics: 'readonly',
        __QUASAR_SSR__: 'readonly',
        __QUASAR_SSR_SERVER__: 'readonly',
        __QUASAR_SSR_CLIENT__: 'readonly',
        __QUASAR_SSR_PWA__: 'readonly',
        process: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly'
    },

    // add your custom rules here
    rules: {
        'generator-star-spacing': 'off',
        'no-unreachable-loop': 2,
        'no-await-in-loop': 1,
        'no-undef': 2,

        'import/first': 'off',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/named': 'off',

        'prefer-promise-reject-errors': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        /* Best Practices */
        'grouped-accessor-pairs': [2, 'getBeforeSet'],
        'max-classes-per-file': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-eval': 2,
        'no-extra-bind': 2,
        'no-floating-decimal': 2,
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 0,
        '@typescript-eslint/no-invalid-this': 1,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-new': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal-escape': 2,
        'no-param-reassign': [2, {
            props: false
        }],
        'no-proto': 2,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unused-expressions': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-void': 2,
        'require-await': 2,
        'yoda': 2,

        /* Strict Mode */
        'strict': 2,

        /* Variables */
        'no-label-var': 2,
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 2,
        'no-undef-init': 2,

        'vue/no-v-model-argument': 0,
        'import/extensions': [
            'warn',
            'never',
            {
                'js': 'as-needed',
                'json': 'as-needed',
                'vue': 'always',
                'svg': 'always'
            }
        ],
        'vue/no-mutating-props': 'error',
        'vue/no-arrow-functions-in-watch': 'error',
        'vue/multi-word-component-names': [2, {
            'ignores': [
                'Centered',
                'Checkbox'
            ]
        }],
        'vue/no-reserved-component-names': 'off',
        'eol-last': [2, 'always'],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2
            }
        ],
        'block-spacing': 2,
        'max-len': [2, {
            code: 140,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreComments: true,
            ignoreTrailingComments: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
            ignorePattern: '\\s*[path,background-image]\\s*'
        }],
        'vue/max-len': [2, {
            code: 140,
            ignoreComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
            ignoreHTMLAttributeValues: true,
            ignoreHTMLTextContents: true
        }],
        'no-trailing-spaces': [2, {
            ignoreComments: true
        }],
        'vue/no-parsing-error': [2, {
            'x-invalid-end-tag': false
        }],
        quotes: [2, 'single', {
            allowTemplateLiterals: true
        }],
        indent: [2, 4, {
            SwitchCase: 1
        }],
        'vue/script-indent': [2, 4, {
            baseIndent: 0,
            switchCase: 0,
            ignores: [
                'ConditionalExpression',
                'LogicalExpression',
                'TemplateLiteral > *'
            ]
        }],
        'vue/html-indent': [2, 4, {
            attribute: 1,
            closeBracket: 0
        }],
        'no-tabs': 2,
        semi: [2, 'never'],
        'quote-props': [2, 'as-needed', {
            'unnecessary': false
        }],
        'comma-dangle': [2, 'never'],
        'object-curly-spacing': 0,
        '@typescript-eslint/object-curly-spacing': [2, 'always'],
        'array-bracket-spacing': [2, 'never'],
        'arrow-parens': [2, 'always'],
        'linebreak-style': 0,
        'no-var': 2,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [2, {
            args: 'after-used',
            argsIgnorePattern: '^_'
        }],
        'prefer-const': 2,
        'one-var': [2, {
            initialized: 'never',
            uninitialized: 'always'
        }],
        'object-shorthand': [2, 'always'],
        'array-callback-return': [2, { allowImplicit: true }],
        'prefer-destructuring': [2, {
            VariableDeclarator: {
                array: false,
                object: true
            }
        }],
        'prefer-rest-params': 2,
        eqeqeq: [2, 'always'],
        'vue/eqeqeq': [2, 'always'],
        'no-unneeded-ternary': 2,
        'no-else-return': [2, { allowElseIf: true }],
        'newline-per-chained-call': 2,
        'no-confusing-arrow': [2, { allowParens: true }],
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 0,
        '@typescript-eslint/no-duplicate-imports': 2,
        'no-restricted-syntax': [2, 'ForInStatement'],
        'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
        'space-before-function-paren': [2, {
            anonymous: 'never',
            named: 'never'
        }],
        'no-multi-spaces': 2,
        'no-multi-assign': 2,
        'accessor-pairs': 2,
        'new-parens': 0,
        'vue/max-attributes-per-line': [2, {
            singleline: {
                max: 2
            },
            multiline: {
                max: 1
            }
        }],
        'vue/html-quotes': [
            1,
            'double',
            { 'avoidEscape': false }
        ],
        'vue/order-in-components': 2,
        'vue/attributes-order': [2, {
            order: [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                'UNIQUE',
                'SLOT',
                'TWO_WAY_BINDING',
                'OTHER_ATTR',
                'EVENTS',
                'CONTENT'
            ]
        }],
        'vue/html-closing-bracket-newline': [2, {
            singleline: 'never',
            multiline: 'always'
        }],
        'vue/html-self-closing': ['error', {
            html: {
                void: 'never',
                normal: 'any',
                component: 'always'
            },
            svg: 'always',
            math: 'always'
        }],
        'vue/html-closing-bracket-spacing': [2, {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'always'
        }],
        'vue/first-attribute-linebreak': [2, {
            'singleline': 'ignore',
            'multiline': 'below'
        }],
        'key-spacing': [2, {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
        }],
        'vue/key-spacing': [2, {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
        }],
        'keyword-spacing': [2, {
            before: true,
            after: true
        }],
        'vue/keyword-spacing': [2, {
            before: true,
            after: true
        }],
        'vue/mustache-interpolation-spacing': [2, 'always'],
        'vue/no-multi-spaces': [2, {
            ignoreProperties: false
        }],
        'vue/v-bind-style': [2, 'shorthand'],
        'vue/v-on-style': [2, 'shorthand'],
        'vue/no-spaces-around-equal-signs-in-attribute': 2,
        'vue/no-template-shadow': 2,
        'vue/require-prop-types': 2,
        'vue/this-in-template': [2, 'never'],
        'vue/component-definition-name-casing': [2, 'PascalCase'],
        'curly': 'error',
        'arrow-spacing': [2, { 'before': true, 'after': true }],
        'comma-spacing': [2, { 'before': false, 'after': true }],
        'vue/no-unsupported-features': ['error', {
            'version': '2.7.14',
            'ignores': []
        }],
        'vue/no-multiple-objects-in-class': 2,
        'vue/no-unused-properties': [2, {
            'groups': ['setup'],
            'deepData': false,
            'ignorePublicMembers': false
        }],
        'vue/no-undef-components': [2, {
            'ignorePatterns': [
                'router-view',
                'q(\\-\\w+)+'
            ]
        }],
        'vue/attribute-hyphenation': 2,
        'vue/prop-name-casing': [2, 'camelCase'],
        'vue/v-on-event-hyphenation': [0, 'always', {
            'autofix': false,
            'ignore': []
        }],
        'vue/custom-event-name-casing': [2, 'camelCase'],
        'space-before-blocks': 0,
        '@typescript-eslint/space-before-blocks': 2,
        '@typescript-eslint/type-annotation-spacing': 2,
        'space-in-parens': [2, 'never'],
        'vue/space-in-parens': [2, 'never'],
        'space-infix-ops': 0,
        '@typescript-eslint/space-infix-ops': 2,
        'vue/space-infix-ops': 2,
        'space-unary-ops': 2,
        'vue/space-unary-ops': 2,
        'template-curly-spacing': [2, 'never'],
        'vue/template-curly-spacing': [2, 'never'],
        'vue/operator-linebreak': [
            2, 'after', {
                overrides: {
                    '?': 'before',
                    ':': 'before'
                }
            }
        ],
        'object-curly-newline': [2, {
            multiline: true,
            consistent: true
        }
        ],
        'vue/object-curly-newline': [2, {
            multiline: true,
            consistent: true
        }]
    }
}
