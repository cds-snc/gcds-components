import { test, expect, Page } from '@playwright/test';

const APP = 'http://localhost:5173';

// Set a marker that only survives client side navigation (a full page load would reset it)
const markPage = (page: Page) =>
  page.evaluate(() => ((window as any).__spaMarker = true));
const stillSamePage = (page: Page) =>
  page.evaluate(() => (window as any).__spaMarker === true);

test.describe('GcdsNav with the Vue Router plugin option', () => {
  test('routes link clicks with Vue Router and updates the current page', async ({
    page,
  }) => {
    await page.goto(`${APP}/navigation`);
    const topNav = page.getByRole('navigation', { name: 'Top navigation' });
    await expect(topNav.getByRole('link', { name: 'About' })).toBeVisible();
    await markPage(page);

    await topNav.getByRole('link', { name: 'About' }).click();

    await expect(page).toHaveURL(`${APP}/navigation/about`);
    await expect(page.locator('gcds-heading')).toHaveText('Navigation: about');
    await expect(topNav.getByRole('link', { name: 'About' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(await stillSamePage(page)).toBe(true);
  });

  test('routes links inside dropdowns and side navigation groups', async ({
    page,
  }) => {
    await page.goto(`${APP}/navigation`);
    await markPage(page);

    const topNav = page.getByRole('navigation', { name: 'Top navigation' });
    await topNav.getByRole('button', { name: 'Resources' }).click();
    await topNav.getByRole('link', { name: 'Blog' }).click();
    await expect(page).toHaveURL(`${APP}/navigation/blog`);
    await expect(topNav.getByRole('button', { name: 'Resources' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );

    const sideNav = page.getByRole('navigation', { name: 'Section navigation' });
    await sideNav.getByRole('button', { name: 'Components' }).click();
    await sideNav.getByRole('link', { name: 'Button' }).click();
    await expect(page).toHaveURL(`${APP}/navigation/button`);

    expect(await stillSamePage(page)).toBe(true);
  });

  test('expands the side navigation group of the current page', async ({ page }) => {
    await page.goto(`${APP}/navigation/alert`);

    const sideNav = page.getByRole('navigation', { name: 'Section navigation' });
    await expect(sideNav.getByRole('button', { name: 'Components' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    await expect(sideNav.getByRole('link', { name: 'Alert' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  test('leaves external links to the browser', async ({ page }) => {
    await page.goto(`${APP}/navigation`);

    const external = page
      .getByRole('navigation', { name: 'Top navigation' })
      .getByRole('link', { name: 'Canada.ca' });
    await expect(external).toHaveAttribute('href', 'https://www.canada.ca/');

    const routed = await page.evaluate(
      () =>
        new Promise(resolve => {
          document.addEventListener(
            'gcdsClick',
            (e: Event) => {
              const detail = (e as CustomEvent).detail;
              e.preventDefault(); // keep the test offline
              resolve({ shouldRoute: detail.shouldRoute, external: detail.external });
            },
            { once: true },
          );
          const nav = document.querySelector('gcds-nav[variant="top"]');
          const link = Array.from(nav.shadowRoot.querySelectorAll('a')).find(a =>
            a.textContent.includes('Canada.ca'),
          );
          link.click();
        }),
    );

    expect(routed).toEqual({ shouldRoute: false, external: true });
  });
});

test.describe('GcdsNav mobile', () => {
  test.use({ viewport: { width: 375, height: 800 } });

  test('combines both navigations and routes from the menu', async ({ page }) => {
    await page.goto(`${APP}/navigation`);
    await markPage(page);

    const menu = page.getByRole('button', { name: 'Menu', exact: true });
    await expect(menu).toHaveCount(1);
    await menu.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog.getByRole('navigation', { name: 'Top navigation' })).toBeVisible();
    await expect(dialog.getByRole('navigation', { name: 'Section navigation' })).toBeVisible();

    await dialog.getByRole('link', { name: 'Start to use' }).click();

    await expect(page).toHaveURL(`${APP}/navigation/start`);
    await expect(dialog).toBeHidden();
    expect(await stillSamePage(page)).toBe(true);
  });
});
