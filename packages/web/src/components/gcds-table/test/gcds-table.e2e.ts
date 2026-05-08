import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-table', () => {
  /**
   * Rendering & Hydration Tests
   */
  test('Hydration Status', async ({ page }) => {
    const element = page.locator('gcds-table');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Verify component hydrates successfully in real browser
    await expect(element).toHaveClass('hydrated');
  });

  /**
   * Data & Column Rendering Tests - Performance
   */
  test('Large Dataset Rendering Performance', async ({ page }) => {
    const element = page.locator('gcds-table');

    // Wait for element to attach and become visible
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Generate 500+ rows of test data
    const largeDataset = Array.from({ length: 500 }, (_, i) => ({
      number: 1000 + i,
      name: `Pokemon ${i + 1}`,
      height: (i % 50) + 1,
      weight: 100 + (i % 100) * 5,
      base_experience: 50 + (i % 150),
    }));

    // Assign large dataset to table with pagination enabled
    await element.evaluate((el, data) => {
      const table = el as any;
      table.pagination = true;
      table.paginationSize = 10;
      table.data = data;
    }, largeDataset);

    await page.waitForChanges();

    // Verify table renders without freezing (measure render time)
    const startTime = Date.now();

    // Wait for pagination-limited DOM to render
    await page.waitForSelector('tbody tr', { timeout: 5000 });

    const renderTime = Date.now() - startTime;

    // Verify render completes within acceptable time (< 2000ms for 500+ rows)
    expect(renderTime).toBeLessThan(2000);

    // Verify only current page rows are in DOM (pagination should limit DOM nodes)
    const visibleRows = await page.locator('tbody tr');
    const rowCount = await visibleRows.count();

    // Should show 10 rows (page size) since pagination is enabled
    expect(rowCount).toBe(10);

  });
});
