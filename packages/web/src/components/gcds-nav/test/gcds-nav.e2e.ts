import { AxeBuilder } from '@axe-core/playwright';
import { expect, Page } from '@playwright/test';
import { test, testMobile } from '../../../../tests/base';

// Test hooks added to window inside page.evaluate()
type TestWindow = Window & {
  __log: unknown[];
  [key: symbol]: { navigate?: (path: string) => void };
};

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

const waitForNavs = async (page: Page) => {
  await page.locator('#top-nav').waitFor({ state: 'attached' });
  await expect(page.locator('#top-nav')).toHaveClass(/hydrated/);
  await expect(page.locator('#side-nav')).toHaveClass(/hydrated/);
};

const axe = (page: Page) =>
  new AxeBuilder({ page }).include('gcds-nav').withTags(WCAG_TAGS).analyze();

test.describe('gcds-nav desktop', () => {
  test('renders both navigations', async ({ page }) => {
    await waitForNavs(page);

    await expect(
      page.getByRole('navigation', { name: 'Top navigation' }),
    ).toBeVisible();
    await expect(
      page.getByRole('navigation', { name: 'GC Design System' }),
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Jobs at CDS' })).toBeVisible();
  });

  test('marks the current page and expands its group', async ({ page }) => {
    await waitForNavs(page);

    const current = page.locator('#side-nav a[aria-current="page"]');
    await expect(current).toHaveText('Basic page');
    await expect(
      page.locator('#side-nav').getByRole('button', { name: 'Page templates' }),
    ).toHaveAttribute('aria-expanded', 'true');
  });

  test('top navigation dropdown keyboard support', async ({ page }) => {
    await waitForNavs(page);

    const trigger = page
      .locator('#top-nav')
      .getByRole('button', { name: 'Resources' });

    await trigger.focus();
    await page.keyboard.press('Enter');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');

    await page.keyboard.press('Tab');
    await expect(
      page.locator('#top-nav').getByRole('link', { name: 'Blog' }),
    ).toBeFocused();

    await page.keyboard.press('Escape');
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).toBeFocused();
  });

  test('closes the dropdown when focus leaves it', async ({ page }) => {
    await waitForNavs(page);

    const trigger = page
      .locator('#top-nav')
      .getByRole('button', { name: 'Resources' });

    await trigger.click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  test('fires gcdsClick on the source element and uses the navigation handler', async ({
    page,
  }) => {
    await waitForNavs(page);

    await page.evaluate(() => {
      const w = window as unknown as TestWindow;
      w.__log = [];
      const registry = w[Symbol.for('gcds.nav.registry')];
      registry.navigate = (path: string) => w.__log.push({ routed: path });
      document.addEventListener('gcdsClick', (e: CustomEvent) =>
        w.__log.push({
          target: (e.target as HTMLElement).nodeName,
          analytics: (e.target as HTMLElement).dataset.gcAnalyticsNavigation,
          shouldRoute: e.detail.shouldRoute,
        }),
      );
    });

    await page.locator('#top-nav').getByRole('link', { name: 'About' }).click();

    const log = await page.evaluate(
      () => (window as unknown as TestWindow).__log,
    );
    expect(log).toEqual([
      {
        target: 'GCDS-NAV-LINK',
        analytics: 'header:Canadian Digital Service: About',
        shouldRoute: true,
      },
      { routed: '/about/' },
    ]);
    // The router handled it, so the page did not navigate
    await expect(page).toHaveURL(/gcds-nav\.e2e\.html/);
  });

  test('a11y: no WCAG violations', async ({ page }) => {
    await waitForNavs(page);
    const results = await axe(page);
    expect(results.violations).toEqual([]);
  });
});

testMobile.describe('gcds-nav mobile', () => {
  testMobile(
    'combines both navigations into one menu button',
    async ({ page }) => {
      await waitForNavs(page);

      await expect(
        page.getByRole('button', { name: 'Menu', exact: true }),
      ).toHaveCount(1);
      await expect(page.locator('#side-nav')).toBeHidden();
    },
  );

  testMobile('opens the combined menu as a modal dialog', async ({ page }) => {
    await waitForNavs(page);

    const trigger = page.getByRole('button', { name: 'Menu', exact: true });
    await trigger.click();

    const dialog = page.getByRole('dialog', { name: 'Site menu' });
    await expect(dialog).toBeVisible();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(
      dialog.getByRole('button', { name: 'Close', exact: true }),
    ).toBeFocused();

    // Both navigations are sections of the same menu
    await expect(
      dialog.getByRole('navigation', { name: 'Top navigation' }),
    ).toBeVisible();
    await expect(
      dialog.getByRole('navigation', { name: 'GC Design System' }),
    ).toBeVisible();
    await expect(
      dialog.getByRole('link', { name: 'Jobs at CDS' }),
    ).toBeVisible();
    await expect(dialog.locator('a[aria-current="page"]')).toHaveText(
      'Basic page',
    );

    // Page behind does not scroll
    expect(
      await page.evaluate(() => document.documentElement.style.overflow),
    ).toBe('hidden');

    const results = await axe(page);
    expect(results.violations).toEqual([]);

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
    expect(
      await page.evaluate(() => document.documentElement.style.overflow),
    ).toBe('');
  });

  testMobile(
    'routes clicks from merged navigations through the handler',
    async ({ page }) => {
      await waitForNavs(page);

      await page.evaluate(() => {
        const w = window as unknown as TestWindow;
        w.__log = [];
        const registry = w[Symbol.for('gcds.nav.registry')];
        registry.navigate = (path: string) => w.__log.push({ routed: path });
        document.addEventListener('gcdsClick', (e: CustomEvent) =>
          w.__log.push({
            target: (e.target as HTMLElement).nodeName,
            text: (e.target as HTMLElement).textContent.trim(),
            shouldRoute: e.detail.shouldRoute,
          }),
        );
      });

      await page.getByRole('button', { name: 'Menu', exact: true }).click();
      await page
        .getByRole('dialog')
        .getByRole('link', { name: 'Start to use' })
        .click();

      const log = await page.evaluate(
        () => (window as unknown as TestWindow).__log,
      );
      expect(log).toEqual([
        { target: 'GCDS-NAV-LINK', text: 'Start to use', shouldRoute: true },
        { routed: '/en/start-to-use' },
      ]);
      await expect(page.getByRole('dialog')).toBeHidden();
      await expect(page).toHaveURL(/gcds-nav\.e2e\.html/);
    },
  );
});

test.describe('gcds-nav inputs', () => {
  test('renders items attribute and JSON script', async ({ page }) => {
    await page.goto('/components/gcds-nav/test/gcds-nav-inputs.e2e.html');
    await expect(page.locator('#items-nav')).toHaveClass(/hydrated/);

    const items = page.getByRole('navigation', { name: 'Items navigation' });
    await expect(items.getByRole('link', { name: 'About' })).toHaveAttribute(
      'data-analytics',
      'about',
    );
    await expect(
      items.getByRole('link', { name: 'External (opens in a new tab)' }),
    ).toHaveAttribute('rel', 'noopener');

    const script = page.getByRole('navigation', { name: 'Script navigation' });
    await script.getByRole('button', { name: 'Components' }).click();
    await expect(script.getByRole('link', { name: 'Alert' })).toBeVisible();

    const results = await axe(page);
    expect(results.violations).toEqual([]);
  });

  test('hash router links update the current page without an adapter', async ({
    page,
  }) => {
    await page.goto('/components/gcds-nav/test/gcds-nav-inputs.e2e.html');
    await expect(page.locator('#items-nav')).toHaveClass(/hydrated/);

    await page.evaluate(() => {
      const w = window as unknown as TestWindow;
      w.__log = [];
      w[Symbol.for('gcds.nav.registry')].navigate = (path: string) =>
        w.__log.push(path);
      document.body.insertAdjacentHTML(
        'beforeend',
        `<gcds-nav id="hash-nav" variant="side" label="Hash navigation" items='[
          { "label": "Alert", "href": "#/alert" },
          { "label": "Button", "href": "#/button" }
        ]'></gcds-nav>`,
      );
    });

    const nav = page.getByRole('navigation', { name: 'Hash navigation' });
    await nav.getByRole('link', { name: 'Button' }).click();

    await expect(page).toHaveURL(/#\/button$/);
    await expect(nav.getByRole('link', { name: 'Button' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    await expect(nav.getByRole('link', { name: 'Alert' })).not.toHaveAttribute(
      'aria-current',
    );

    // Hash links are left to the browser, the router handler is not called
    expect(
      await page.evaluate(() => (window as unknown as TestWindow).__log),
    ).toEqual([]);
  });
});
