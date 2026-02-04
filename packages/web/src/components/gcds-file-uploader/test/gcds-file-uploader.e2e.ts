import { AxeBuilder } from '@axe-core/playwright';

import { expect } from '@playwright/test';
import { test } from '../../../../tests/base';
import path from 'path';

test.describe('gcds-file-uploader', () => {
  test('renders', async ({ page }) => {
    const element = await page.locator('gcds-file-uploader');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    // Check if it has the 'hydrated' class
    await expect(element).toHaveClass('hydrated');
  });
  test('upload one file', async ({ page }) => {
    const element = await page.locator('gcds-file-uploader');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    const filePath: string = path.resolve(
      './www/components/gcds-file-uploader/test/gcds-file-uploader.e2e.html',
    );

    const fileInput = await page.locator('input[type="file"]');

    fileInput.setInputFiles(filePath);

    await page.waitForChanges();

    expect(
      await element.evaluate(
        el => (el as HTMLGcdsFileUploaderElement).files.length,
      ),
    ).toBe(1);
  });
  test('upload multiple file', async ({ page }) => {
    const element = await page.locator('gcds-file-uploader');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    const fileInput = await page.locator('input[type="file"]');

    fileInput.setInputFiles([
      path.resolve(
        './www/components/gcds-file-uploader/test/gcds-file-uploader.e2e.html',
      ),
      path.resolve(
        './www/components/gcds-date-input/test/gcds-date-input.e2e.html',
      ),
    ]);

    await page.waitForChanges();

    expect(
      await element.evaluate(
        el => (el as HTMLGcdsFileUploaderElement).files.length,
      ),
    ).toBe(2);
  });
  test('upload and remove file', async ({ page }) => {
    const element = await page.locator('gcds-file-uploader');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    const filePath: string = path.resolve(
      './www/components/gcds-file-uploader/test/gcds-file-uploader.e2e.html',
    );

    const fileInput = await page.locator('input[type="file"]');

    fileInput.setInputFiles(filePath);

    await page.waitForChanges();

    expect(
      await element.evaluate(
        el => (el as HTMLGcdsFileUploaderElement).files.length,
      ),
    ).toBe(1);

    await page.locator('button').nth(1).click();

    await page.waitForChanges();

    expect(
      await element.evaluate(
        el => (el as HTMLGcdsFileUploaderElement).files.length,
      ),
    ).toBe(0);
  });
  test('set files manually', async ({ page }) => {
    const element = await page.locator('gcds-file-uploader');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await page.evaluate(() => {
      const blob = new Blob(['hello world'], { type: 'text/plain' });
      const file = new File([blob], './example.txt', { type: 'text/plain' });

      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);

      document.querySelector('gcds-file-uploader').files = dataTransfer.files;
    });

    await page.waitForChanges();

    expect(
      await element.evaluate(
        el => (el as HTMLGcdsFileUploaderElement).files.length,
      ),
    ).toBe(1);
  });
  /**
   * Validation
   */
  test('validation', async ({ page }) => {
    const element = await page.locator('gcds-file-uploader');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el =>
      (el as HTMLGcdsFileUploaderElement).validate(),
    );

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsFileUploaderElement).errorMessage,
    );

    expect(errorMessage).toEqual('You must upload a file to continue.');

    const filePath: string = path.resolve(
      './www/components/gcds-file-uploader/test/gcds-file-uploader.e2e.html',
    );

    const fileInput = await page.locator('input[type="file"]');

    fileInput.setInputFiles(filePath);

    await page.waitForChanges();

    await element.evaluate(el =>
      (el as HTMLGcdsFileUploaderElement).validate(),
    );

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsFileUploaderElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });
  test('validation - custom validation', async ({ page }) => {
    const element = await page.locator('gcds-file-uploader');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      const matchFile = (name: string) => {
        return {
          validate: (value: FileList) => {
            return {
              valid: value.length > 0 && value[0].name === name,
              reason: {
                en: `The uploaded file must have a name of ${name}.`,
                fr: `The uploaded file must have a name of ${name}.`,
              },
            };
          },
        };
      };

      (el as HTMLGcdsFileUploaderElement).validator = [
        matchFile('gcds-date-input.e2e.html'),
      ];
    });

    await page.waitForChanges();

    const fileInput = await page.locator('input[type="file"]');

    fileInput.setInputFiles(
      path.resolve(
        './www/components/gcds-file-uploader/test/gcds-file-uploader.e2e.html',
      ),
    );

    await page.waitForChanges();

    await element.evaluate(el =>
      (el as HTMLGcdsFileUploaderElement).validate(),
    );

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsFileUploaderElement).errorMessage,
    );

    expect(errorMessage).toEqual(
      'The uploaded file must have a name of gcds-date-input.e2e.html.',
    );

    fileInput.setInputFiles(
      path.resolve(
        './www/components/gcds-date-input/test/gcds-date-input.e2e.html',
      ),
    );

    await page.waitForChanges();

    await element.evaluate(el =>
      (el as HTMLGcdsFileUploaderElement).validate(),
    );

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsFileUploaderElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });
  test('validation - custom validation old format', async ({ page }) => {
    const element = await page.locator('gcds-file-uploader');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    await element.evaluate(el => {
      const matchFile = (name: string) => {
        return {
          validate: (value: FileList) => {
            return value.length > 0 && value[0].name === name;
          },
          errorMessage: {
            en: `The uploaded file must have a name of ${name}.`,
            fr: `The uploaded file must have a name of ${name}.`,
          },
        };
      };

      (el as HTMLGcdsFileUploaderElement).validator = [
        // @ts-expect-error Old format of validator is different than new format. Will still run in JS environments
        matchFile('gcds-date-input.e2e.html'),
      ];
    });

    await page.waitForChanges();

    const fileInput = await page.locator('input[type="file"]');

    fileInput.setInputFiles(
      path.resolve(
        './www/components/gcds-file-uploader/test/gcds-file-uploader.e2e.html',
      ),
    );

    await page.waitForChanges();

    await element.evaluate(el =>
      (el as HTMLGcdsFileUploaderElement).validate(),
    );

    let errorMessage = await element.evaluate(
      el => (el as HTMLGcdsFileUploaderElement).errorMessage,
    );

    expect(errorMessage).toEqual(
      'The uploaded file must have a name of gcds-date-input.e2e.html.',
    );

    fileInput.setInputFiles(
      path.resolve(
        './www/components/gcds-date-input/test/gcds-date-input.e2e.html',
      ),
    );

    await page.waitForChanges();

    await element.evaluate(el =>
      (el as HTMLGcdsFileUploaderElement).validate(),
    );

    errorMessage = await element.evaluate(
      el => (el as HTMLGcdsFileUploaderElement).errorMessage,
    );

    expect(errorMessage).toEqual('');
  });

  test('HTML validity', async ({ page }) => {
    const element = await page.locator('gcds-file-uploader');

    // Wait for element to attach and become visible, allowing up to 10s
    await element.waitFor({ state: 'attached' });
    await element.waitFor({ state: 'visible' });
    await element.waitFor({ timeout: 10000 });

    let validity = await element.evaluate(el =>
      (el as HTMLGcdsFileUploaderElement).checkValidity(),
    );

    expect(validity).toBe(false);

    const fileInput = await page.locator('input[type="file"]');

    fileInput.setInputFiles(
      path.resolve(
        './www/components/gcds-file-uploader/test/gcds-file-uploader.e2e.html',
      ),
    );

    await page.waitForChanges();

    validity = await element.evaluate(el =>
      (el as HTMLGcdsFileUploaderElement).checkValidity(),
    );

    expect(validity).toBe(true);
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

test.describe('gcds-file-uploader a11y tests', () => {
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
   * Labels
   */
  test('Proper labels', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .withRules(['label'])
      .analyze();
    expect(results.violations).toHaveLength(0);
  });
  /**
   * Keyboard focus
   */
  test('Keyboard focus', async ({ page }) => {
    const element = await page.locator('gcds-file-uploader');
    await expect(element).toHaveClass('hydrated');

    const fileUploaderField = await page
      .locator('input')
      .evaluate(el => (el as HTMLInputElement).innerText);

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () =>
          window.document.activeElement.shadowRoot.activeElement.textContent,
      ),
    ).toEqual(fileUploaderField);
  });
  /**
   * Aria-invalid
   */
  test('aria-invalid', async ({ page }) => {
    const element = await page.locator('gcds-file-uploader');
    await expect(element).toHaveClass('hydrated');

    await element.evaluate(
      el => ((el as HTMLGcdsFileUploaderElement).errorMessage = 'Error'),
    );

    await page.waitForChanges();

    await expect(page.locator('input')).toHaveAttribute('aria-invalid', 'true')
  });
});
