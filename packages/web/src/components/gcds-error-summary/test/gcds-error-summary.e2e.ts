import { AxeBuilder } from '@axe-core/playwright';

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';

test.describe('gcds-error-summary', () => {
  test('renders', async ({ page }) => {
    const element = page.locator('gcds-error-summary');

    // Wait for element state
    await element.waitFor({ state: 'hidden' });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');
  });

  test('renders from listen', async ({ page }) => {
    const form = page.locator('form');
    await form.waitFor({ state: 'hidden' });

    await form.evaluate(el => {
      const input = document.createElement('gcds-input');
      input.label = 'Input';
      input.name = 'input';
      input.required = true;
      input.type = 'text';

      const textarea = document.createElement('gcds-textarea');
      textarea.label = 'Textarea';
      textarea.name = 'textarea';
      textarea.required = true;

      const select = document.createElement('gcds-select');
      select.label = 'Textarea';
      select.name = 'textarea';
      select.required = true;
      select.defaultValue = 'Please select another option';
      select.innerHTML = `<option>Option 1</option>
        <option>Option 2</option>
        option>Option 3</option>`;

      const file = document.createElement('gcds-file-uploader');
      file.label = 'File';
      file.name = 'file';
      file.required = true;

      const button = document.createElement('gcds-button');
      button.innerText = 'Submit';
      button.type = 'submit';

      el.append(input);
      el.append(textarea);
      el.append(select);
      el.append(file);
      el.append(button);
    });

    await page.waitForChanges();

    const submitButton = page.locator('button[type="submit"]');
    await submitButton.waitFor();

    await submitButton.click();

    await page.waitForChanges();

    expect(
      await page.evaluate(() =>
        document
          .querySelector('gcds-error-summary')
          .shadowRoot.querySelector('.gcds-error-summary')
          .classList.contains('gcds-show'),
      ),
    ).toBe(true);
    expect(
      await page.evaluate(
        () =>
          document
            .querySelector('gcds-error-summary')
            .shadowRoot.querySelector('.summary__errorlist').childNodes.length,
      ),
    ).toEqual(4);
  });

  test('list markers use the same responsive typography as links', async ({
    page,
  }) => {
    const setupErrorSummary = async () => {
      await page.locator('body').evaluate(element => {
        element.style.fontFamily = 'serif';
      });

      const element = page.locator('gcds-error-summary');
      await element.evaluate(
        el =>
          ((el as HTMLGcdsErrorSummaryElement).errorLinks =
            '{"#link1":"First error","#link2":"Second error"}'),
      );
      await page.waitForChanges();
    };

    const getTypography = () =>
      page.evaluate(() => {
        const errorSummary = document.querySelector('gcds-error-summary');
        const listItem = errorSummary.shadowRoot.querySelector('li');
        const link = listItem.querySelector('gcds-link');
        const anchor = link.shadowRoot.querySelector('a');
        const markerStyles = window.getComputedStyle(listItem, '::marker');
        const linkStyles = window.getComputedStyle(anchor);

        return {
          marker: {
            fontFamily: markerStyles.fontFamily,
            fontSize: markerStyles.fontSize,
            fontWeight: markerStyles.fontWeight,
            lineHeight: markerStyles.lineHeight,
          },
          link: {
            fontFamily: linkStyles.fontFamily,
            fontSize: linkStyles.fontSize,
            fontWeight: linkStyles.fontWeight,
            lineHeight: linkStyles.lineHeight,
          },
        };
      });

    await page.setViewportSize({ width: 1024, height: 768 });
    await setupErrorSummary();
    const desktopTypography = await getTypography();
    expect(desktopTypography.marker).toEqual(desktopTypography.link);

    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => {
      const element = document.querySelector('gcds-error-summary');
      return element && element.shadowRoot;
    });
    await setupErrorSummary();
    const mobileTypography = await getTypography();
    expect(mobileTypography.marker).toEqual(mobileTypography.link);
  });
});

test.describe('gcds-error-summary a11y tests', () => {
  /**
   * Colour contrast test
   */
  test('colour contrast', async ({ page }) => {
    const element = page.locator('gcds-error-summary');
    await element.waitFor({ state: 'hidden' });

    element.evaluate(
      el =>
        ((el as HTMLGcdsErrorSummaryElement).errorLinks =
          '{"#link1":"This is the first error","#link2":"This is the second error"}'),
    );

    await page.waitForChanges();

    const results = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
  /**
   * Links have discernible text
   */
  test('Link name', async ({ page }) => {
    const form = page.locator('form');
    await form.waitFor({ state: 'hidden' });

    await form.evaluate(el => {
      const input = document.createElement('gcds-input');
      input.label = 'Input';
      input.name = 'input';
      input.required = true;
      input.type = 'text';

      const button = document.createElement('gcds-button');
      button.innerText = 'Submit';
      button.type = 'submit';

      el.append(input);
      el.append(button);
    });

    await page.waitForChanges();

    const submitButton = page.locator('button');
    await submitButton.waitFor();

    await submitButton.click();

    await page.waitForChanges();

    const results = await new AxeBuilder({ page })
      .withRules(['link-name'])
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
});
