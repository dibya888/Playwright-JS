const { test, expect } = require('@playwright/test');

test.describe("Example", () => {

  test("Testing Selectors", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
    await page.locator('#userName').type('Capt.MacTavish');
    await page.locator("[placeholder='name@example.com']").type('captmactavish@sas.com');
    await page.locator('#currentAddress').type('Herefordshire, England');
    await page.locator('#permanentAddress').type('Herefordshire, England');
    await page.locator('button:has-text("Submit")').click();
    await page.pause();
  })
})