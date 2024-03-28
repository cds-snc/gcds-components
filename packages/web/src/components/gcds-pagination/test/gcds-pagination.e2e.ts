import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-pagination display="simple"></gcds-pagination>
    `);

    const element = await page.find('gcds-pagination');
    expect(element).toHaveClass('hydrated');
  });

  it('renders url', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-pagination
        display="list"
        label="URL render"
        total-pages="3"
        current-page="2"
        id="renderURL"
      ></gcds-pagination>

      <script>
        var page = document.getElementById("renderURL");

        const urlObject = {
            queryStrings: {
              "query": "design system",
              "idx::offset": 10,
              "page::match": "page_{{1}}"
            },
            fragment:"red",
          };

        page.url = urlObject;
      </script>
    `);

    const element = await page.find('gcds-pagination >>> [aria-current*=page]');
    expect(element.getAttribute('href')).toEqual(
      '?query=design system&idx=10&page=page_2#red',
    );
  });
});

/*
 * Accessibility tests
 * Axe-core rules: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-21-level-a--aa-rules
 */

describe('gcds-pagination a11y tests', () => {
  it('Colour contrast: Display list and simple', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-pagination
        display="list"
        label="List render"
        total-pages="3"
        current-page="2"
      ></gcds-pagination>

      <gcds-pagination
        display="Simple"
        label="Simple render"
        next-href="#red"
        next-label="Next"
        previous-href="#blue"
        previous-label="Previous"
      ></gcds-pagination>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('color-contrast')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
  it('Link name: Display list and simple', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <gcds-pagination
        display="list"
        label="List render"
        total-pages="3"
        current-page="2"
      ></gcds-pagination>

      <gcds-pagination
        display="Simple"
        label="Simple render"
        next-href="#red"
        next-label="Next"
        previous-href="#blue"
        previous-label="Previous"
      ></gcds-pagination>
    `);

    const colorContrastTest = new AxePuppeteer(page)
      .withRules('link-name')
      .analyze();
    const results = await colorContrastTest;

    expect(results.violations.length).toBe(0);
  });
});
