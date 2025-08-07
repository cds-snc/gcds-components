import { expect } from '@playwright/test';
import { matchers, createConfig } from '@stencil/playwright';
import { defineCoverageReporterConfig } from '@bgotink/playwright-coverage';
import * as path from 'path';

expect.extend(matchers);

export default createConfig({
  // You can override Playwright config options here
  retries: 3,
  testDir: './src',
  testMatch: '*.e2e.ts',
  timeout: 60000,
  use: {
    baseURL: 'http://localhost:3333/',
  },
  webServer: {
    url: 'http://localhost:3333/',
  },
  reporter: [
    ['list'],
    [
      '@bgotink/playwright-coverage',
      defineCoverageReporterConfig({
        sourceRoot: __dirname,
        resultDir: path.join(__dirname, 'coverage/e2e'),
        reports: [['html'], ['lcovonly', { file: 'coverage.lcov' }]],
        exclude: ['web', 'web/@stencil/core'],
      }),
    ],
  ],
});
