import { AxeBuilder } from '@axe-core/playwright';
import { expect } from '@playwright/test';
import { test, testMobile, testTablet } from '../../../../tests/base';

test.describe('gcds-side-nav', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-side-nav');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');

    // Check first nav link item role
    const firstItem = await page.locator('gcds-nav-link').first();
    await expect(firstItem).toHaveRole('listitem');
  });

    testMobile('renders mobile', async ({ page }) => {
    const element = page.locator('gcds-side-nav');
    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');

    await expect(element.locator('gcds-nav-link').first()).toBeHidden();

    // open menu
    await element.locator('.gcds-trigger--expandable').first().click()

    await expect(element.locator('gcds-nav-link').first()).toBeVisible();
  })

  testTablet('renders tablet', async ({ page }) => {
    const element = page.locator('gcds-side-nav');
    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');

    await expect(element.locator('gcds-nav-link').first()).toBeHidden();

    // open menu
    await element.locator('.gcds-trigger--expandable').first().click()

    await expect(element.locator('gcds-nav-link').first()).toBeVisible();
  })

  test('keyboard controls', async ({ page }) => {
    const element = await page.locator('gcds-side-nav');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');

    // Define the expected tab order and how to get text for each
    const steps = [
      {
        key: 'Tab',
        getText: () => document.activeElement.textContent,
        expected: 'Components',
      },
      {
        key: 'ArrowDown',
        getText: () => document.activeElement.textContent,
        expected: 'Get started',
      },
      {
        key: 'ArrowDown',
        getText: () =>
          document.activeElement.shadowRoot.activeElement.textContent,
        expected: 'Contact',
      },
      {
        key: 'ArrowDown',
        getText: () => document.activeElement.textContent,
        expected: 'Components',
      },
      {
        key: 'ArrowUp',
        getText: () =>
          document.activeElement.shadowRoot.activeElement.textContent,
        expected: 'Contact',
      },
      {
        key: 'ArrowRight',
        getText: () => document.activeElement.textContent.trim(),
        expected: `Contact us
        Get involved
        Find a demo`,
        wait: true,
      },
      {
        key: 'ArrowDown',
        getText: () => document.activeElement.textContent,
        expected: 'Get involved',
      },
      {
        key: 'ArrowDown',
        getText: () => document.activeElement.textContent,
        expected: 'Find a demo',
      },
      {
        key: 'ArrowDown',
        getText: () => document.activeElement.textContent,
        expected: 'Components',
      },
      {
        key: 'ArrowUp',
        getText: () => document.activeElement.textContent,
        expected: 'Find a demo',
      },
      {
        key: 'Escape',
        getText: () =>
          document.activeElement.shadowRoot.activeElement.textContent,
        expected: 'Contact',
      },
    ];

    for (const step of steps) {
      await page.keyboard.press(step.key);
      const activeElementText = await page.evaluate(step.getText);
      if (step.wait) {
        await page.waitForTimeout(100);
      }
      await expect(activeElementText).toBe(step.expected);
    }
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-side-nav a11y tests', () => {
  /**
   * Colour contrast
   */
  test('Colour contrast', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
  /**
   * Landmark labels
   */
  test('Landmark labels', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withRules(['landmark-unique'])
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
  /**
   * Link text
   */
  test('Proper link text', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withRules(['link-name'])
      .analyze();
    expect(results.violations).toHaveLength(0);
  });

  testMobile('Mobile a11y test', async ({ page }) => {
    const element = page.locator('gcds-side-nav');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.locator('.gcds-trigger--expandable').first().click()

    const results = await new AxeBuilder({ page })
      .include('gcds-side-nav')
      .analyze();
    expect(results.violations).toHaveLength(0);
  });

  testTablet('Tablet a11y test', async ({ page}) => {
    const element = page.locator('gcds-side-nav');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.locator('.gcds-trigger--expandable').first().click()

    const results = await new AxeBuilder({ page })
      .include('gcds-side-nav')
      .analyze();
    expect(results.violations).toHaveLength(0);
  })
});
