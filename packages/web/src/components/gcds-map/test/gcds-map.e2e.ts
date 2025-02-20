import { newE2EPage } from '@stencil/core/testing';
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('gcds-map E2E', () => {

  it('renders and contains mapml-viewer', async () => {
    const page = await newE2EPage();
    const messages: string[] = [];
    page.on('console', (msg) => {
      const text = msg.text();
      if (text.includes('MapML module dynamically loaded')) {
        messages.push(msg.text());
      } else {
        return;
      }
    });
    await page.setContent(
`<mapml-viewer width="400" height="400" lat="0" lon="0" zoom="0" projection="OSMTILE" controls>
    <map-layer src="/dist/gcds/gcds-map/mapml/en/osmtile/cbmt/" checked hidden></map-layer>
 </mapml-viewer>`);

    const map = await page.find('mapml-viewer');
    expect(map).not.toBeNull();

    // Get the actual DOM element instead of E2EElement
    const mapHandle = await page.evaluateHandle(() => document.querySelector('mapml-viewer'));

    // Run `whenLayersReady()` inside the browser context
    await page.evaluate(async (m) => await m.whenLayersReady(), mapHandle);

    // Retrieve the `layers.length`
    const layers = await page.evaluate(m => m.layers.length, mapHandle);
    expect(layers).toBe(1);
    expect(messages.some(msg => msg.includes("MapML module dynamically loaded"))).toBeTruthy();

  });
});
