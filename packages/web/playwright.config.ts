import { expect } from '@playwright/test';
import { matchers, createConfig } from '@stencil/playwright';

expect.extend(matchers);

export default createConfig({
  // You can override Playwright config options here
  testDir: './src',
  testMatch: '*.e2e.ts',
  timeout: 60000,
  use: {
    baseURL: 'http://localhost:3333/',
  },
  webServer: {
    url: 'http://localhost:3333/',
  },
});
