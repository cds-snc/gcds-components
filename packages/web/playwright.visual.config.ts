import { expect } from '@playwright/test';
import { matchers, createConfig } from '@stencil/playwright';

expect.extend(matchers);

export default createConfig({
  retries: 2, // EXPERIMENT: measure deterministic noise floor
  testDir: './src',
  testMatch: '*.visual.ts',
  // Heavier interactive components (date-input, file-uploader, details) can
  // exceed 60s during page setup under CI load — font wait (≤10s) + hydration
  // (≤30s) + navigation leaves little margin. 120s gives headroom without
  // touching screenshot strictness.
  timeout: 120000,

  // Store baselines next to the test file so diffs are easy to find in PRs
  snapshotPathTemplate:
    'src/{testFileDir}/__screenshots__/{testFileName}/{arg}{ext}',

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
      // 2% pixel tolerance handles the irreducible sub-pixel anti-aliasing
      // noise floor (GPU rasterization isn't bit-exact run-to-run) without
      // letting real changes through — those shift far more than 2% or change
      // the image dimensions, which fails regardless of ratio. Use a ratio,
      // not a flat pixel count, so the tolerance scales with element size.
      maxDiffPixelRatio: 0.005,
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
