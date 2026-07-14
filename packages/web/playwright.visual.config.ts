import { expect } from '@playwright/test';
import { matchers, createConfig } from '@stencil/playwright';

expect.extend(matchers);

export default createConfig({
  // Retries rescue non-deterministic *setup* failures (a stalled hydration or
  // font load re-runs cleanly). They do NOT hide visual regressions: a real
  // pixel change is deterministic and fails every retry. See maxDiffPixelRatio.
  retries: 2,
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
      // 0.5% tolerance. Measured: with baselines and comparison both on Linux
      // CI, every component renders within 0.5% of its baseline (178/178 pass).
      // This is tight enough to catch small changes — e.g. a summary text-colour
      // change measures ~2% — while clearing the render noise floor. Baselines
      // MUST be regenerated on Linux CI; a local (macOS) render differs by ~1%.
      // A ratio, not a flat pixel count, so tolerance scales with element size.
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
