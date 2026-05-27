import { expect } from '@playwright/test';
import { matchers, createConfig } from '@stencil/playwright';

expect.extend(matchers);

export default createConfig({
  retries: 0, // Don't retry visual tests, retries mask real regressions
  testDir: './src',
  testMatch: '*.visual.ts',
  timeout: 60000,

  // Store baselines next to the test file so diffs are easy to find in PRs
  snapshotPathTemplate:
    '{testFileDir}/__screenshots__/{testFileName}/{arg}{ext}',

  use: {
    baseURL: 'http://localhost:3333/',
    // Consistent viewport, component widths are relative, so this matters
    viewport: { width: 1280, height: 800 },
    animations: 'disabled',
  },

  webServer: {
    url: 'http://localhost:3333/',
  },

  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      // 2% pixel tolerance handles sub-pixel anti-aliasing differences
      // without letting real changes through
      maxDiffPixelRatio: 0.02,
    },
  },

  reporter: [
    // GitHub annotations in CI — shows failed test names inline on the PR
    ['github'],
    // Self-contained HTML report with actual/expected/diff images side by side
    // Download from the Actions artifact to review changes
    ['html', { outputFolder: 'visual-report', open: 'never' }],
    ['list'],
  ],
});
