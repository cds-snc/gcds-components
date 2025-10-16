import { test, expect } from '@playwright/test';

test('routerLink with GCDS components', async ({ page }) => {
  await page.goto('http://localhost:4200/nav-one');

  // Alternate between /nav-one and /nav-two using routerLink on gcds components
  const pathOne = '/nav-one';
  const pathTwo = '/nav-two';

  // Breadcrumb item
  const breadcrumbItem = page.locator(
    '#breadcrumb-item gcds-breadcrumbs-item a',
  );
  await breadcrumbItem.click({ force: true });
  await expect(page).toHaveURL(`http://localhost:4200${pathTwo}`);

  // Button component
  const buttonComponent = page.locator('#button-component gcds-button a');
  await buttonComponent.click({ force: true });
  await expect(page).toHaveURL(`http://localhost:4200${pathOne}`);

  // Card component
  const cardComponent = page.locator('#card-component gcds-card a');
  await cardComponent.click({ force: true });
  await expect(page).toHaveURL(`http://localhost:4200${pathTwo}`);

  // Lang toggle
  const langToggle = page.locator('#lang-toggle gcds-lang-toggle a');
  await langToggle.click({ force: true });
  await expect(page).toHaveURL(`http://localhost:4200${pathOne}`);

  // Link component
  const linkComponent = page.locator('#link-component gcds-link a');
  await linkComponent.click({ force: true });
  await expect(page).toHaveURL(`http://localhost:4200${pathTwo}`);

  // Nav link component
  const navLinkComponent = page.locator('#nav-link-component gcds-nav-link a');
  await navLinkComponent.click({ force: true });
  await expect(page).toHaveURL(`http://localhost:4200${pathOne}`);

  // Link component with queryParams
  // Currently won't pass query parameters to new page
  const linkComponentParams = page.locator(
    '#link-component-query-params gcds-link a',
  );
  await linkComponentParams.click({ force: true });
  await expect(page).toHaveURL(`http://localhost:4200${pathTwo}`);
});
