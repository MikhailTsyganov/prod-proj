module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
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
        "react"
    ],
    "rules": {
        "react/jsx-indent": [2, 2],
        "react/jsx-indent-props": [2, 2],
        "indent": [2, 2],
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
        "@typescript-eslint/naming-convention": "off"

    }
    
}
