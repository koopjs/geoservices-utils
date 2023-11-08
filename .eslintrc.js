module.exports = {
    "env": {
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        'plugin:@typescript-eslint/recommended',
    ],
    "overrides": [
        {
            "env": {
                "node": true,
                "jest": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': ['warning'],
        "@typescript-eslint/typedef": [
            "error",
            {
              "parameter": true,
            },
          ]
    },
    "ignorePatterns": ["**/*.spec.ts", "tsconfig.json"],
}
