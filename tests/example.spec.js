const { test, expect } = require('@playwright/test');

test.describe("Smoke Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })
  test.afterEach(async ({ page }) => {
    console.log("This test is finished");
  })

  test("Simple click test @regression", async ({ page, browserName }) => {
    await page.pause();
    const element = page.locator("text=Add/Remove Elements");
    const addElement = page.locator("text=Add Element");
    await element.click();
    await addElement.click();
  })

  test("Duplicate Test 1 @smoke", async ({ page }) => {
    const element = page.locator("text=Add/Remove Elements");
    const addElement = page.locator("text=Add Element");
    await element.click();
    await addElement.click();
  })

  test("Duplicate Test 2 @regression", async ({ page }) => {
    const element = page.locator("text=Add/Remove Elements");
    const addElement = page.locator("text=Add Element");
    await element.click();
    await addElement.click();
  })
})