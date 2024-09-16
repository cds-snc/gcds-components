const { AxeBuilder } = require('@axe-core/playwright');

import type { MapMLViewerElement } from '../../../gcds-map';
import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

const messages: string[] = [];

test.beforeEach(async ({ page }) => {
    messages.length = 0;
    page.on('console', (msg) => {
      const text = msg.text();
      if (text.includes('MapML module dynamically loaded')) {
        messages.push(msg.text());
      } else {
        return;
      }
    });

});

test.describe('gcds-map E2E', () => {

  test('gcds page contains mapml-viewer, loads mapml.js', async ({ page }) => {

    await page.goto('/components/gcds-map/test/gcds-map.e2e.html');
    const map = await page.locator('mapml-viewer');
    expect(map).toBeAttached();

    // Get the actual DOM element instead of E2EElement
    const mapHandle = await page.evaluateHandle(() => document.querySelector('mapml-viewer') as MapMLViewerElement);

    // Run `whenLayersReady()` inside the browser context
    await page.evaluate(async (m) => await m.whenLayersReady(), mapHandle);

    // detect the dynamically generated mapml.js script element
    const scriptDetected = await page.evaluate(() => {return document.querySelector('script[src$="mapml.js"]')});
    expect(scriptDetected).toBeTruthy();

    // Retrieve the `layers.length
    // @ts-ignore
    const layers = await page.evaluate(m => m.layers.length, mapHandle);
    expect(layers).toBe(1);
    expect(messages.some(msg => msg.includes("MapML module dynamically loaded"))).toBeTruthy();

    // gcds-* components are operable
    const buttons = await page.locator('gcds-button');
    const count = await buttons.count();
    expect(count).toEqual(1);

    const button = buttons.nth(0);
    expect(button).toBeAttached();

    // Check if it has the 'hydrated' class
    await expect(button).toHaveClass('hydrated', {timeout: 5000});

    const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();

      expect(results.violations.length).toBe(0);

  });
  test('gcds page without mapml-viewer does not load mapml.js', async ({ page }) => {

    await page.goto('/components/gcds-map/test/gcds-no-map.e2e.html');
    const map = await page.locator('mapml-viewer');
    expect(map).not.toBeAttached();
    // detect the dynamically generated script element
    const scriptDetected = await page.evaluate(() => {return document.querySelector('script[src$="mapml.js"]')});
    expect(scriptDetected).toBeFalsy();

    expect(messages.some(msg => msg.includes("MapML module dynamically loaded"))).toBeFalsy();

    // gcds-* components are operable
    const buttons = await page.locator('gcds-button');
    const count = await buttons.count();
    expect(count).toEqual(1);

    const button = buttons.nth(0);
    expect(button).toBeAttached();

    // Check if it has the 'hydrated' class
    await expect(button).toHaveClass('hydrated', {timeout: 5000});

    const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();

      expect(results.violations.length).toBe(0);
  });
});
