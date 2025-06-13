import { newE2EPage } from '@stencil/core/testing';

describe('gcds-textarea', () => {
  it('Validation', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-textarea name="textarea" label="Label" textarea-id="textarea-renders" required/>',
    );

    const textarea = await page.find('gcds-textarea');

    textarea.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-textarea >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('Enter information to continue.');

    await page.type('gcds-textarea >>> textarea', 'red');

    textarea.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-textarea >>> gcds-error-message')).toBe(null);
  });
  it('Validation - custom validator', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-textarea name="textarea" label="Label" textarea-id="textarea-renders" required/>',
    );

    await page.evaluate(() => {
      const textarea = document.querySelector('gcds-textarea');

      const minLength = (min: number) => {
        return {
          validate: (value: string) => {
            value = value || '';
            let valid = true;
            if (min) {
              valid = min <= value.length;
            }
            return {
              valid,
              reason: {
                en: `The entered value must be longer than ${min} characters`,
                fr: `The entered value must be longer than ${min} characters`,
              },
            };
          },
        };
      };

      (textarea as HTMLGcdsTextareaElement).validator = [minLength(2)];
    });

    await page.waitForChanges();

    const textarea = await page.find('gcds-textarea');

    textarea.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-textarea >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('The entered value must be longer than 2 characters');

    await page.type('gcds-textarea >>> textarea', 'red');

    textarea.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-textarea >>> gcds-error-message')).toBe(null);
  });
  it('Validation - custom validator old format', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-textarea name="textarea" label="Label" textarea-id="textarea-renders" required/>',
    );

    await page.evaluate(() => {
      const textarea = document.querySelector('gcds-textarea');

      const minLength = (min: number) => {
        const errorMessage = {
          en: `The entered value must be longer than ${min} characters`,
          fr: `The entered value must be longer than ${min} characters`,
        };
        return {
          validate: (value: string) => {
            value = value || '';
            let valid = true;
            if (min) {
              valid = min <= value.length;
            }
            return valid;
          },
          errorMessage,
        };
      };

      // @ts-expect-error Old format of validator is different than new format. Will still run in JS environments
      (textarea as HTMLGcdsTextareaElement).validator = [minLength(2)];
    });

    await page.waitForChanges();

    const textarea = await page.find('gcds-textarea');

    textarea.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-textarea >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('The entered value must be longer than 2 characters');

    await page.type('gcds-textarea >>> textarea', 'red');

    textarea.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-textarea >>> gcds-error-message')).toBe(null);
  });
});
