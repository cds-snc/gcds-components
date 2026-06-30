import globals from 'globals';
import eslintjs from '@eslint/js';
import eslintjsx from 'eslint-plugin-jsx-a11y';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintprettier from 'eslint-plugin-prettier/recommended';
// todo: re-enable when storybook gets updated so we can use a newer version of the eslint package
// import eslintstorybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';
import eslintplaywright from 'eslint-plugin-playwright';
import eslintn from 'eslint-plugin-n';
import eslintstylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

// todo: change some warnings to errors once fixed
export default defineConfig([
  {
    ignores: [
      'node_modules/',
      'dist/',
      'loader/',
      'www/',
      'test-results/',
      'hydrate/',
      'stencil/',
    ],
  },
  eslintjs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintjsx.flatConfigs.recommended,
  eslintstylistic.configs.recommended,
  {
    files: ['src/*.{tsx,js,ts}', 'src/**/*.{tsx,js,ts}', 'eslint.config.mjs'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      tseslint,
      eslintjs,
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^(?:h|Fragment)$',
        },
      ],
      'prefer-const': 'warn',
      '@typescript-eslint/no-wrapper-object-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'jsx-a11y/no-noninteractive-tabindex': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
      'no-case-declarations': 'warn',
      '@stylistic/lines-between-class-members': 'warn',
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/comma-dangle': 'warn',
      'no-useless-assignment': 'warn',
    },
  },
  {
    files: ['scripts/*.js', 'eslint.config.mjs', 'stencil.config.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    extends: [eslintn.configs['flat/recommended']],

    plugins: {
      tseslint,
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-expressions': 'warn',
      'n/no-extraneous-import': 'warn',
      'n/no-missing-import': 'warn',
      'n/no-process-exit': 'warn',
      'n/hashbang': 'warn',
      'preserve-caught-error': 'warn',
    },
  },
  // ...eslintstorybook.configs['flat/recommended'],
  {
    files: ['.storybook/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // 'storybook/no-uninstalled-addons': 'warn',
    },
  },
  {
    files: ['src/**/*.ts', 'src/*.ts'],
    plugins: {
      eslintjs,
      tseslint,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    files: ['src/**/*.e2e.ts', 'src/*.e2e.ts'],
    extends: [eslintplaywright.configs['flat/recommended']],
    plugins: {
      eslintjs,
      tseslint,
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'playwright/no-standalone-expect': 'off',
      'playwright/no-unused-locators': 'warn',
    },
  },
  eslintConfigPrettier,
  {
    extends: [eslintprettier],
    files: ['src/*.{tsx,js,ts}', 'src/**/*.{tsx,js,ts}', 'eslint.config.mjs'],
    rules: {
      'prettier/prettier': 'warn',
    },
  },
]);
