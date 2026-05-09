// @ts-check
import { test, expect } from '@playwright/test';
test('First Test', async ({ page }) => {
  //Writing testing code here
  await page.goto('https://playwright.dev/');
  await page.pause();
});
