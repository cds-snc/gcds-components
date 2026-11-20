import { AxeBuilder } from '@axe-core/playwright';
import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-combobox', () => {
  test('renders after hydration', async ({ page }) => {
    const combobox = page.locator('#topics');

    await expect(combobox).toHaveClass('hydrated');
    await expect(combobox.locator('input')).toBeVisible();
    await expect(combobox.locator('gcds-label')).toHaveAttribute(
      'label',
      'Topics',
    );
  });

  test('filters options and emits input and change events when an option is selected', async ({
    page,
  }) => {
    const combobox = page.locator('#topics');
    const gcdsInput = await page.spyOnEvent('gcdsInput');
    const gcdsChange = await page.spyOnEvent('gcdsChange');
    const input = combobox.locator('input');

    await input.fill('Res');
    await expect(combobox.locator('[role="option"]')).toHaveText([
      'Select all options',
      'research',
    ]);
    await combobox.getByRole('option', { name: 'research' }).click();

    await expect(combobox.locator('.gcds-combobox__tag')).toHaveText('research');
    expect(gcdsInput).toHaveReceivedEvent();
    expect(gcdsChange).toHaveReceivedEvent();
  });

  test('selects every option with the select-all command', async ({ page }) => {
    const combobox = page.locator('#topics');
    await combobox.locator('input').focus();
    await combobox.getByRole('option', { name: 'Select all options' }).click();

    await expect(
      combobox.locator('.gcds-combobox__tag-all-options'),
    ).toHaveText('All options');
  });

  test('loads options from the select options slot', async ({ page }) => {
    const combobox = page.locator('#slotted-options');
    await combobox.locator('input').focus();

    await expect(combobox.getByRole('option')).toHaveText(['Apple', 'Pear']);
    await combobox.getByRole('option', { name: 'Apple' }).click();
    await expect(combobox.locator('.gcds-combobox__tag')).toHaveText('Apple');
  });

  test('does not allow focus when disabled', async ({ page }) => {
    const combobox = page.locator('#disabled-topics');
    const input = combobox.locator('input');

    await expect(input).toBeDisabled();
    await input.focus();
    await expect(input).not.toBeFocused();
  });
});

test.describe('gcds-combobox accessibility', () => {
  test('has no label or button name violations', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withRules(['label', 'button-name'])
      .analyze();

    expect(results.violations).toHaveLength(0);
  });

  test('keyboard focus reaches the search input', async ({ page }) => {
    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(() => {
        const active = document.activeElement;
        return active?.shadowRoot?.activeElement?.tagName;
      }),
    ).toBe('INPUT');
  });
});
