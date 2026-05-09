// @ts-check
import { test, expect } from '@playwright/test';
// test('First Test', async ({ page }) => {
//   //Writing testing code here
//   await page.goto('https://playwright.dev/');
//   const title = page.locator('.navbar__inner .navbar__title');
//   await expect(title).toHaveText('Playwright');
// });

test("Simple click test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator("text=Add/Remove Elements").click();
  await page.pause();
  await page.locator("text=Add Element").click();
})