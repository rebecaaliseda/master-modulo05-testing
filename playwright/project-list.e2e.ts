import { test, expect } from '@playwright/test';

test.describe('Project List Scene', () => {
  test('should display project page elements', async ({ page }) => {
    await page.goto('/#/projects');

    await expect(page.getByPlaceholder('Buscar proyecto')).toBeVisible();

    await expect(page.getByText('Nuevo proyecto')).toBeVisible();
  });
});
