import { newE2EPage } from '@stencil/core/testing';

describe('gcds-select', () => {
  it('Validation', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<gcds-select label="select label" select-id="select" name="select" required default-value="Select an option">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </gcds-select`,
    );

    const select = await page.find('gcds-select');

    select.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-select >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('Choose an option to continue.');

    await page.select('gcds-select >>> select', 'Yes');

    select.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-select >>> gcds-error-message')).toBe(null);
  });
  it('Validation - Custom validator', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<gcds-select label="select label" select-id="select" name="select" required default-value="Select an option">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </gcds-select`,
    );

    await page.evaluate(() => {
      const select = document.querySelector('gcds-select');

      const matchAnswer = (answer: string) => {
        return {
          validate: (value: string) => {
            return {
              valid: value === answer,
              reason: {
                en: `The selected answer must be "${answer}"`,
                fr: `The selected answer must be "${answer}"`,
              },
            };
          },
        };
      };

      (select as HTMLGcdsSelectElement).validator = [matchAnswer('Yes')];
    });

    const select = await page.find('gcds-select');

    await page.select('gcds-select >>> select', 'No');

    select.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-select >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('The selected answer must be "Yes"');

    await page.type('gcds-select >>> select', 'Yes');

    select.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-select >>> gcds-error-message')).toBe(null);
  });
  it('Validation - Custom validator old format', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<gcds-select label="select label" select-id="select" name="select" required default-value="Select an option">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </gcds-select`,
    );

    await page.evaluate(() => {
      const select = document.querySelector('gcds-select');

      const matchAnswer = (answer: string) => {
        return {
          validate: (value: string) => {
            return value === answer;
          },
          errorMessage: {
            en: `The selected answer must be "${answer}"`,
            fr: `The selected answer must be "${answer}"`,
          },
        };
      };

      // @ts-expect-error Old format of validator is different than new format. Will still run in JS environments
      (select as HTMLGcdsSelectElement).validator = [matchAnswer('Yes')];
    });

    const select = await page.find('gcds-select');

    await page.select('gcds-select >>> select', 'No');

    select.callMethod('validate');
    await page.waitForChanges();

    const error = await page.$eval(
      'gcds-select >>> gcds-error-message',
      el => el.innerText,
    );

    expect(error).toBe('The selected answer must be "Yes"');

    await page.type('gcds-select >>> select', 'Yes');

    select.callMethod('validate');
    await page.waitForChanges();

    expect(await page.$('gcds-select >>> gcds-error-message')).toBe(null);
  });
});
