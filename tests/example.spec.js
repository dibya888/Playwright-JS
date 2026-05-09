// @ts-check
import { test, expect } from '@playwright/test';
test("First Test @regression", async ({ page }) => {
  //Writing testing code here
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

test("Simple click test @regression", async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Working on the firefox fix');
  await page.goto("https://the-internet.herokuapp.com/");
  const element = page.locator("text=Add/Remove Elements");
  const addElement = page.locator("text=Add Element");
  await element.click();
  await addElement.click();
})

test("Duplicate Test 1 @smoke", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  const element = page.locator("text=Add/Remove Elements");
  const addElement = page.locator("text=Add Element");
  await element.click();
  await addElement.click();
})

test("Duplicate Test 2 @regression", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  const element = page.locator("text=Add/Remove Elements");
  const addElement = page.locator("text=Add Element");
  await element.click();
  await addElement.click();
})