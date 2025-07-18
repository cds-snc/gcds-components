import globals from 'globals'
import eslintjs from '@eslint/js'
import eslintjsx from 'eslint-plugin-jsx-a11y'
// import eslintprettier from 'eslint-plugin-prettier/recommended'
import eslintstorybook from 'eslint-plugin-storybook'
import tseslint from 'typescript-eslint'
// import eslintn from 'eslint-plugin-n'
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      'node_modules/',
      'dist/',
      'loader/'
    ]
  },
  eslintjs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintjsx.flatConfigs.recommended,
  {
    files: ['src/*.{tsx,js,ts}', 'src/**/*.{tsx,js,ts}'],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      tseslint,
      eslintjs
    },
    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "varsIgnorePattern": "^(?:h|Fragment)$"
        }
      ],
      'prefer-const': 'warn',
      '@typescript-eslint/no-wrapper-object-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn'
    }
  },
  {
    files: ['scripts/*.js', 'eslint.config.mjs', 'stencil.config.ts'],
    languageOptions: {
      globals: {
        ...globals.node
      },
    },

    // extends: [
    //   eslintn.configs['flat/recommended'],
    // ],
    
    plugins: {
      tseslint
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  },
  ...eslintstorybook.configs['flat/recommended'],
  {
    files: [".storybook/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      }
    }
  },
  {
    files: ['src/**/*.ts', 'src/*.ts'],
    plugins: {
      eslintjs,
      tseslint
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    }
  },
  {
    files: ['src/**/*.e2e.ts', 'src/*.e2e.ts'],
    plugins: {
      eslintjs,
      tseslint
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  },
  // eslintprettier
]);
