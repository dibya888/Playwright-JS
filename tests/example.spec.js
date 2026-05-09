const { test, expect } = require('@playwright/test');

test.describe.parallel("Smoke Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })

  test("Simple click test", async ({ page, browserName }) => {
    await page.pause();
    const element = page.locator("text=Add/Remove Elements");
    const addElement = page.locator("text=Add Element");
    await element.click();
    await addElement.click();
  })

  test("Duplicate Test 1", async ({ page }) => {
    const element = page.locator("text=Add/Remove Elements");
    const addElement = page.locator("text=Add Element");
    await element.click();
    await addElement.click();
  })

  test("Duplicate Test 2", async ({ page }) => {
    const element = page.locator("text=Add/Remove Elements");
    const addElement = page.locator("text=Add Element");
    await element.click();
    await addElement.click();
  })
})