import { AxeBuilder } from '@axe-core/playwright';

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

const COLORS = ['blue', 'gray', 'green', 'purple', 'red', 'yellow'];
const SIZES = ['regular', 'small'];

test.describe('gcds-tag', () => {
  test('renders', async ({ page }) => {
    const element = page.locator('gcds-tag').first();

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');
  });

  test('renders a non-interactive span', async ({ page }) => {
    const host = page.locator('gcds-tag').first();
    const tag = host.locator('.gcds-tag');

    await expect(tag).toHaveJSProperty('tagName', 'SPAN');
    await expect(host).not.toHaveAttribute('tabindex');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-tag a11y tests', () => {
  for (const color of COLORS) {
    for (const size of SIZES) {
      test(`Colour contrast - ${color} ${size}`, async ({ page }) => {
        const selector = `gcds-tag[color="${color}"][size="${size}"]`;
        await expect(page.locator(selector).first()).toHaveClass('hydrated');

        const results = await new AxeBuilder({ page })
          .withRules(['color-contrast'])
          .include(selector)
          .analyze();

        expect(results.passes.length).toBeGreaterThan(0);
        expect(results.violations).toHaveLength(0);
      });
    }
  }

  test('truncates a label longer than 20 characters with an ellipsis', async ({
    page,
  }) => {
    const text = (id: string) =>
      page.locator(`#${id}`).locator('.gcds-tag-text');

    const isTruncated = (id: string) =>
      text(id).evaluate(el => el.scrollWidth > el.clientWidth);

    expect(await isTruncated('long-label')).toBe(true);
    expect(await isTruncated('short-label')).toBe(false);
    await expect(text('long-label')).toHaveCSS('text-overflow', 'ellipsis');
    await expect(page.locator('#long-label')).toContainText(
      'This label is far longer than twenty characters',
    );
  });

  test('Tags in a list are announced as a list', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withRules(['list', 'listitem'])
      .include('ul')
      .analyze();

    expect(results.passes.length).toBeGreaterThan(0);
    expect(results.violations).toHaveLength(0);
  });
});
