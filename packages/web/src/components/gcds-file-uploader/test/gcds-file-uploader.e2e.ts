import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-file-uploader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-file-uploader label="file uploader label" name="file" uploader-id="file-uploader" />',
    );

    const element = await page.find('gcds-file-uploader');
    expect(element).toHaveClass('hydrated');
  });

  it('upload 1 file', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-file-uploader label="file uploader label" name="file" uploader-id="file-uploader" />',
    );

    const [fileChooser] = await Promise.all([
      page.waitForFileChooser(),
      page.click('gcds-file-uploader >>> input'),
    ]);

    await fileChooser.accept(['./gcds-file-uploader.e2e.ts']);

    await page.waitForChanges();

    expect(
      (
        await page.findAll(
          'gcds-file-uploader >>> .file-uploader__uploaded-file',
        )
      ).length,
    ).toBe(1);
  });

  it('upload multiple files', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-file-uploader label="file uploader label" multiple name="file" uploader-id="file-uploader" />',
    );

    const [fileChooser] = await Promise.all([
      page.waitForFileChooser(),
      page.click('gcds-file-uploader >>> input'),
    ]);

    await fileChooser.accept([
      './gcds-file-uploader.e2e.ts',
      './gcds-file-uploader.spec.tsx',
    ]);

    await page.waitForChanges();

    expect(
      (
        await page.findAll(
          'gcds-file-uploader >>> .file-uploader__uploaded-file',
        )
      ).length,
    ).toBe(2);
  });

  it('upload and remove file', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-file-uploader label="file uploader label" name="file" uploader-id="file-uploader" />',
    );

    const [fileChooser] = await Promise.all([
      page.waitForFileChooser(),
      page.click('gcds-file-uploader >>> input'),
    ]);

    await fileChooser.accept(['./gcds-file-uploader.e2e.ts']);

    await page.waitForChanges();

    await (
      await page.find(
        'gcds-file-uploader >>> .file-uploader__uploaded-file > button',
      )
    ).click();

    expect(
      (
        await page.findAll(
          'gcds-file-uploader >>> .file-uploader__uploaded-file',
        )
      ).length,
    ).toBe(0);
  });

  it('set files property manually', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-file-uploader label="file uploader label" name="file" uploader-id="file-uploader" />',
    );

    await page.evaluate(() => {
      const blob = new Blob(['hello world'], { type: 'text/plain' });
      const file = new File([blob], './example.txt', { type: 'text/plain' });

      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);

      document.querySelector('gcds-file-uploader').files = dataTransfer.files;
    });

    await page.waitForChanges();

    expect(
      (
        await page.findAll(
          'gcds-file-uploader >>> .file-uploader__uploaded-file',
        )
      ).length,
    ).toBe(1);
    expect(
      (await page.find('gcds-file-uploader >>> gcds-text')).textContent,
    ).toBe('./example.txt');
  });
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-file-uploader a11y tests', () => {
  /**
   * Aria-invalid true if error test
   */
  it('aria-invalid', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-file-uploader label="Label" uploader-id="aria-invalid" name="file" error-message="Field required" />',
    );
    const element = await await page.find('gcds-file-uploader >>> input');
    expect(element.getAttribute('aria-invalid')).toEqual('true');
  });

  /**
   * Colour contrast test
   */
  it('colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-file-uploader label="Label" name="file" uploader-id="colour-contrast"></gcds-file-uploader>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  /**
   * File uploader keyboard focus
   */
  it('file uploader keyboard focus', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-file-uploader label="Label" name="file" uploader-id="keyboard-focus" />
    `);

    const fileUploaderField = await (
      await page.find('gcds-file-uploader >>> input')
    ).innerText;

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () =>
          window.document.activeElement.shadowRoot.activeElement.textContent,
      ),
    ).toEqual(fileUploaderField);
  });

  /**
   * File uploader label test
   */
  it('file-uploader contains label', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<gcds-file-uploader label="Label" name="file" uploader-id="contains-label" />',
    );
    const element = await await page.find('gcds-file-uploader >>> gcds-label');
    expect(element.getAttribute('id')).toEqual('label-for-contains-label');
  });
});
