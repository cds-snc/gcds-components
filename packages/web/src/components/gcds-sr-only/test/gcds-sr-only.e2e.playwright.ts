import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/gcds-sr-only/test/gcds-sr-only.e2e.html');

  await page.waitForFunction(() => {
    const host = document.querySelector('gcds-sr-only');
    return host && host.shadowRoot;
  });
});

test.describe('gcds-sr-only', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-sr-only');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-sr-only a11y tests', () => {
  test('element is visually hidden', async ({ page }) => {
    const styles = await page.evaluate(() => {
      const element = document.querySelector('gcds-sr-only');
      const computedStyles = window.getComputedStyle(element);

      return {
        position: computedStyles.position,
        width: computedStyles.width,
        height: computedStyles.height,
        overflow: computedStyles.overflow,
        clip: computedStyles.clip,
        clipPath: computedStyles.clipPath,
        whiteSpace: computedStyles.whiteSpace,
      };
    });

    expect(styles.position).toBe('absolute');
    expect(styles.width).toBe('1px');
    expect(styles.height).toBe('1px');
    expect(styles.overflow).toBe('hidden');
    expect(styles.clip).toBe('rect(1px, 1px, 1px, 1px)');
    expect(styles.clipPath).toBe('inset(100%)');
    expect(styles.whiteSpace).toBe('nowrap');
  });
});
