import { test, expect } from '@playwright/test';

test('Page has loaded and rendered', async ({ page }) => {
  await page.goto('http://localhost:5173/file-uploader');

  const fileInput = await page.locator('input[type="file"]');
  await expect(fileInput).toBeVisible();

  // Simulate single file upload
  const filePath = 'tests/e2e/file-uploader.spec.ts';
  await fileInput.setInputFiles(filePath);

  await expect(await page.locator('#files')).toHaveText(
    'file-uploader.spec.ts',
  );

  // Remove file
  await page.locator('.file-uploader__uploaded-file button').click();
  await expect(await page.locator('#files')).toHaveText('');

  // Simulate mutliple file upload
  const multipleFilePath = [
    'tests/e2e/file-uploader.spec.ts',
    'tests/e2e/app.spec.ts',
  ];
  await fileInput.setInputFiles(multipleFilePath);

  await expect(await page.locator('#files')).toHaveText(
    'file-uploader.spec.ts, app.spec.ts',
  );

  // Remove files
  await page.locator('.file-uploader__uploaded-file button').first().click();
  await page.locator('.file-uploader__uploaded-file button').first().click();
  await expect(await page.locator('#files')).toHaveText('');
});
