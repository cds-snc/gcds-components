module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/tests/setup-jest.ts'],
  testMatch: ['**/tests/unit/**/*.spec.ts'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/tests/app/',
    '/tests/e2e/',
    '/demo-app/',
    'tests/setup-jest.ts'
  ],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/**/index.ts'
  ],
  coverageDirectory: '../../coverage/gcds-components-angular',
  moduleNameMapper: {
    // Only the navigation routing helpers are imported from the package root in this library.
    // Map to their source so tests do not depend on how packages/web/dist was last built.
    '^@gcds-core/components$': '<rootDir>/../../packages/web/src/utils/nav/registry.ts'
  },
  transform: {
    '^.+\\.(ts|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  testEnvironment: 'jsdom'
};

