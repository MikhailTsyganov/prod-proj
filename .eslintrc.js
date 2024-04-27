module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
        "plugin:react-hooks/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "mt-fsd-path-checker"
    ],
    "rules": {
        "react/jsx-indent": [2, 2],
        "react/jsx-indent-props": [2, 2],
        "indent": [0, 2],
        "@typescript-eslint/explicit-function-return-type": [0],
        "@typescript-eslint/space-before-function-paren": [0],
        "@typescript-eslint/semi": [0],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-floating-promises": "off",
        "react/no-deprecated": 'off',
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/naming-convention": "off",
        "n/handle-callback-err": "off",
        "i18next/no-literal-string": [2, {
            markupOnly: true,
            ignoreAttribute: [
                'to',
                'data-testid',
                'target',
                'direction',
                'align',
                'justify',
                'gap',
                'role',
                'as',
                'defaultValue',
                'dropdownDirection',
                'borderRad'
            ]
        }],
        "@typescript-eslint/prefer-includes": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "react/prop-types": 'off',
        "react/display-name": 'off',
        "@typescript-eslint/no-dynamic-delete": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-invalid-void-type": "off",
        "no-tabs": "off",
        "no-mixed-spaces-and-tabs": "off",
        "mt-fsd-path-checker/path-checker": "error",
        "@typescript-eslint/consistent-type-imports": "off"
    },

    "globals": {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    },

    "overrides": [{
        files: [
            '**/src/**/*.test.{ts,tsx}',
            '**/src/**/*.stories.{ts,tsx}'
        ],
        rules: {
            "i18next/no-literal-string": 'off',
        }
    }]
}
