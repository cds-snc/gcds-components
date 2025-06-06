import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');
import { dateInputErrorMessage } from '../../../validators/input-validators/input-validators';

describe('gcds-date-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-date-input legend="Date input" name="date" format="full"></gcds-date-input>',
    );

    const element = await page.find('gcds-date-input');
    expect(element).toHaveClass('hydrated');
  });

  it('submit value in full format', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<form noValidate>
        <gcds-date-input legend="Date input" name="date" format="full"></gcds-date-input>
        <button type="submit">Submit</button>
      </form>
      `,
    );

    await page.waitForChanges();

    // Select March
    await page.select('gcds-date-input >>> gcds-select >>> select', '03');

    // Type 3
    await page.type(
      'gcds-date-input >>> .gcds-date-input__day >>> input',
      '03',
    );

    // Type 1991
    await page.type(
      'gcds-date-input >>> .gcds-date-input__year >>> input',
      '1991',
    );

    await page.waitForChanges();

    (await page.find('button')).click();

    await page.waitForChanges();

    expect(page.url()).toContain('?date=1991-03-03');
  });

  it('submit value in compact format', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<form noValidate>
        <gcds-date-input legend="Date input" name="date" format="compact"></gcds-date-input>
        <button type="submit">Submit</button>
      </form>
      `,
    );

    await page.waitForChanges();

    // Select March
    await page.select('gcds-date-input >>> gcds-select >>> select', '03');

    // Type 1991
    await page.type(
      'gcds-date-input >>> .gcds-date-input__year >>> input',
      '1991',
    );

    await page.waitForChanges();

    (await page.find('button')).click();

    await page.waitForChanges();

    expect(page.url()).toContain('?date=1991-03');
  });
});

it('Validation - Missing all fileds', async () => {
  const page = await newE2EPage();
  await page.setContent(
    '<gcds-date-input legend="Date input" name="date" format="full" required></gcds-date-input>',
  );

  const dateInput = await page.find('gcds-date-input');

  dateInput.callMethod('validate');
  await page.waitForChanges();

  expect(
    (await page.find('gcds-date-input >>> gcds-error-message')).innerHTML,
  ).toEqual(dateInputErrorMessage.en.all);
});

it('Validation - Missing day', async () => {
  const page = await newE2EPage();
  await page.setContent(
    '<gcds-date-input legend="Date input" name="date" format="full" required></gcds-date-input>',
  );

  await page.select('gcds-date-input >>> gcds-select >>> select', '03');
  await page.type(
    'gcds-date-input >>> .gcds-date-input__year >>> input',
    '1991',
  );

  const dateInput = await page.find('gcds-date-input');

  dateInput.callMethod('validate');
  await page.waitForChanges();

  expect(
    (await page.find('gcds-date-input >>> gcds-error-message')).innerHTML,
  ).toEqual(dateInputErrorMessage.en.missingday);
});

it('Validation - Missing year', async () => {
  const page = await newE2EPage();
  await page.setContent(
    '<gcds-date-input legend="Date input" name="date" format="full" required></gcds-date-input>',
  );

  await page.select('gcds-date-input >>> gcds-select >>> select', '03');
  await page.type('gcds-date-input >>> .gcds-date-input__day >>> input', '03');

  const dateInput = await page.find('gcds-date-input');

  dateInput.callMethod('validate');
  await page.waitForChanges();

  expect(
    (await page.find('gcds-date-input >>> gcds-error-message')).innerHTML,
  ).toEqual(dateInputErrorMessage.en.missingyear);
});

it('Validation - Missing month', async () => {
  const page = await newE2EPage();
  await page.setContent(
    '<gcds-date-input legend="Date input" name="date" format="full" required></gcds-date-input>',
  );

  await page.type(
    'gcds-date-input >>> .gcds-date-input__year >>> input',
    '1991',
  );
  await page.type('gcds-date-input >>> .gcds-date-input__day >>> input', '03');

  const dateInput = await page.find('gcds-date-input');

  dateInput.callMethod('validate');
  await page.waitForChanges();

  expect(
    (await page.find('gcds-date-input >>> gcds-error-message')).innerHTML,
  ).toEqual(dateInputErrorMessage.en.missingmonth);
});

it('Validation - Missing month and day', async () => {
  const page = await newE2EPage();
  await page.setContent(
    '<gcds-date-input legend="Date input" name="date" format="full" required></gcds-date-input>',
  );

  await page.type(
    'gcds-date-input >>> .gcds-date-input__year >>> input',
    '1991',
  );

  const dateInput = await page.find('gcds-date-input');

  dateInput.callMethod('validate');
  await page.waitForChanges();

  expect(
    (await page.find('gcds-date-input >>> gcds-error-message')).innerHTML,
  ).toEqual(dateInputErrorMessage.en.missingmonthday);
});

it('Validation - Missing day and year', async () => {
  const page = await newE2EPage();
  await page.setContent(
    '<gcds-date-input legend="Date input" name="date" format="full" required></gcds-date-input>',
  );

  await page.select('gcds-date-input >>> gcds-select >>> select', '03');

  const dateInput = await page.find('gcds-date-input');

  dateInput.callMethod('validate');
  await page.waitForChanges();

  expect(
    (await page.find('gcds-date-input >>> gcds-error-message')).innerHTML,
  ).toEqual(dateInputErrorMessage.en.missingdayyear);
});

it('Validation - Missing month and year', async () => {
  const page = await newE2EPage();
  await page.setContent(
    '<gcds-date-input legend="Date input" name="date" format="full" required></gcds-date-input>',
  );

  await page.type('gcds-date-input >>> .gcds-date-input__day >>> input', '03');

  const dateInput = await page.find('gcds-date-input');

  dateInput.callMethod('validate');
  await page.waitForChanges();

  expect(
    (await page.find('gcds-date-input >>> gcds-error-message')).innerHTML,
  ).toEqual(dateInputErrorMessage.en.missingmonthyear);
});

it('Validation - Year length', async () => {
  const page = await newE2EPage();
  await page.setContent(
    '<gcds-date-input legend="Date input" name="date" format="full" required></gcds-date-input>',
  );

  await page.select('gcds-date-input >>> gcds-select >>> select', '03');
  await page.type('gcds-date-input >>> .gcds-date-input__day >>> input', '03');
  await page.type(
    'gcds-date-input >>> .gcds-date-input__year >>> input',
    '19912',
  );

  const dateInput = await page.find('gcds-date-input');

  dateInput.callMethod('validate');
  await page.waitForChanges();

  expect(
    (await page.find('gcds-date-input >>> gcds-error-message')).innerHTML,
  ).toEqual(dateInputErrorMessage.en.invalidyearlength);
});

it('Validation - Invalid day', async () => {
  const page = await newE2EPage();
  await page.setContent(
    '<gcds-date-input legend="Date input" name="date" format="full" required></gcds-date-input>',
  );

  await page.select('gcds-date-input >>> gcds-select >>> select', '03');
  await page.type('gcds-date-input >>> .gcds-date-input__day >>> input', '34');
  await page.type(
    'gcds-date-input >>> .gcds-date-input__year >>> input',
    '1991',
  );

  const dateInput = await page.find('gcds-date-input');

  dateInput.callMethod('validate');
  await page.waitForChanges();

  expect(
    (await page.find('gcds-date-input >>> gcds-error-message')).innerHTML,
  ).toEqual(dateInputErrorMessage.en.invalidday);
});

it('Validation - Custom validator', async () => {
  const page = await newE2EPage();
  await page.setContent(
    '<gcds-date-input legend="Date input" name="date" format="full" required></gcds-date-input>',
  );

  await page.evaluate(() => {
    const dateInput = document.querySelector('gcds-date-input');

    const expectYear = (year: string) => {
      return {
        validate: (value: string) => {
          const dates = value.split('-');
          return {
            valid: dates[0] === year,
            reason: {
              en: `The entered year must be ${year}.`,
              fr: `The entered year must be ${year}.`,
            },
          };
        },
      };
    };

    (dateInput as HTMLGcdsDateInputElement).validator = [expectYear('1991')];
  });

  await page.waitForChanges();

  await page.select('gcds-date-input >>> gcds-select >>> select', '03');
  await page.type('gcds-date-input >>> .gcds-date-input__day >>> input', '03');
  await page.type(
    'gcds-date-input >>> .gcds-date-input__year >>> input',
    '199',
  );

  const dateInput = await page.find('gcds-date-input');

  dateInput.callMethod('validate');
  await page.waitForChanges();

  expect(
    (await page.find('gcds-date-input >>> gcds-error-message')).innerHTML,
  ).toEqual('The entered year must be 1991.');

  await page.type('gcds-date-input >>> .gcds-date-input__year >>> input', '1');

  dateInput.callMethod('validate');
  await page.waitForChanges();

  expect(await page.$('gcds-date-input >>> gcds-error-message')).toBe(null);
});

it('Validation - Custom validator old format', async () => {
  const page = await newE2EPage();
  await page.setContent(
    '<gcds-date-input legend="Date input" name="date" format="full" required></gcds-date-input>',
  );

  await page.evaluate(() => {
    const dateInput = document.querySelector('gcds-date-input');

    const expectYear = (year: string) => {
      return {
        validate: (value: string) => {
          const dates = value.split('-');
          return dates[0] === year;
        },
        errorMessage: {
          en: `The entered year must be ${year}.`,
          fr: `The entered year must be ${year}.`,
        },
      };
    };

    // @ts-expect-error Old format of validator is different than new format. Will still run in JS environments
    (dateInput as HTMLGcdsDateInputElement).validator = [expectYear('1991')];
  });

  await page.waitForChanges();

  await page.select('gcds-date-input >>> gcds-select >>> select', '03');
  await page.type('gcds-date-input >>> .gcds-date-input__day >>> input', '03');
  await page.type(
    'gcds-date-input >>> .gcds-date-input__year >>> input',
    '199',
  );

  const dateInput = await page.find('gcds-date-input');

  dateInput.callMethod('validate');
  await page.waitForChanges();

  expect(
    (await page.find('gcds-date-input >>> gcds-error-message')).innerHTML,
  ).toEqual('The entered year must be 1991.');

  await page.type('gcds-date-input >>> .gcds-date-input__year >>> input', '1');

  dateInput.callMethod('validate');
  await page.waitForChanges();

  expect(await page.$('gcds-date-input >>> gcds-error-message')).toBe(null);
});

/**
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-date-input a11y tests', () => {
  it('Colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-date-input legend="Date input" name="date" format="full"></gcds-date-input>',
    );

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  it('Proper labels', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-date-input legend="Date input" name="date" format="full"></gcds-date-input>',
    );

    const labelTest = new AxePuppeteer(page).withRules('label').analyze();
    const results = await labelTest;

    expect(results.violations.length).toBe(0);
  });

  it('Keyboard focus', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<gcds-date-input legend="Date input" name="date" format="full"></gcds-date-input>',
    );

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => window.document.activeElement.shadowRoot.activeElement.nodeName,
      ),
    ).toEqual('GCDS-SELECT');

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => window.document.activeElement.shadowRoot.activeElement.nodeName,
      ),
    ).toEqual('GCDS-INPUT');

    await page.keyboard.press('Tab');

    expect(
      await page.evaluate(
        () => window.document.activeElement.shadowRoot.activeElement.nodeName,
      ),
    ).toEqual('GCDS-INPUT');
  });
});
