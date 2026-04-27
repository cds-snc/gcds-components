import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

describe('gcds-table', () => {
  test('renders', async ({ page }) => {
    const element = page.locator('gcds-table');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');
  });
});
