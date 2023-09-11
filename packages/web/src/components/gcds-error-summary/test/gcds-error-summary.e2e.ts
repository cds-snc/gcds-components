import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-error-summary', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gcds-error-summary></gcds-error-summary>');

    const element = await page.find('gcds-error-summary');
    expect(element).toHaveClass('hydrated');
  });
  it('renders from listen', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <form novalidate>
        <gcds-error-summary></gcds-error-summary>

        <gcds-input
          input-id="fullname"
          label="Full name"
          required
        ></gcds-input>

        <gcds-textarea
          textarea-id="description"
          label="Description"
          required
        ></gcds-textarea>

        <gcds-select
          select-id="form-select"
          label="Select option"
          required
          default-value="Please select an option"
        >
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </gcds-select>

        <gcds-file-uploader
          uploader-id="form-uploader"
          label="Upload file"
          required
        ></gcds-file-uploader>

        <gcds-checkbox
          checkbox-id="form-checkbox"
          label="I agree to the terms"
          required
        ></gcds-checkbox>

        <gcds-button type="submit">
          Submit
        </gcds-button>
      </form>
    `);

    await page.waitForChanges();

    await page.click('gcds-button');

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
    ).toEqual(5);
  });
});

describe('gcds-input a11y tests', () => {
  /**
   * Colour contrast test
   */
  it('colour contrast', async () => {
    const page = await newE2EPage();
    await page.setContent(`
        <gcds-error-summary error-links='{"#link1":"This is the first error","#link2":"This is the second error"}'></gcds-error-summary>
      `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });

  /**
   * Links have discernible text
   */
  it('Link name', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <form novalidate>
        <gcds-error-summary listen></gcds-error-summary>
        <gcds-input input-id="fullname" label="Full name" required></gcds-input>
        <gcds-input type="email" input-id="email" label="Email address" required></gcds-input>
        <gcds-button type="submit">
          Submit
        </gcds-button>
      </form>
    `);

    await page.waitForChanges();

    await page.click('gcds-button');

    await page.waitForChanges();

    const linkTest = new AxePuppeteer(page).withRules('link-name').analyze();
    const results = await linkTest;

    expect(results.violations.length).toBe(0);
  });
});
