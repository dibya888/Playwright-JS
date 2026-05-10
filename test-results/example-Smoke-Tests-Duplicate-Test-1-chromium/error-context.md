# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> Smoke Tests >> Duplicate Test 1
- Location: tests\example.spec.js:16:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('text=Add Elemens')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e6]:
      - heading "Add/Remove Elements" [level=3] [ref=e7]
      - generic [ref=e8]:
        - button "Add Element" [ref=e9] [cursor=pointer]
        - separator [ref=e10]
  - generic [ref=e12]:
    - separator [ref=e13]
    - generic [ref=e14]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e15] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test.describe("Smoke Tests", () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/');
  6  |   })
  7  | 
  8  |   test("Simple click test", async ({ page, browserName }) => {
  9  |     await page.pause();
  10 |     const element = page.locator("text=Add/Remove Elements");
  11 |     const addElement = page.locator("text=Add Element");
  12 |     await element.click();
  13 |     await addElement.click();
  14 |   })
  15 | 
  16 |   test("Duplicate Test 1", async ({ page }) => {
  17 |     const element = page.locator("text=Add/Remove Elements");
  18 |     const addElement = page.locator("text=Add Elemens");
  19 |     await element.click();
> 20 |     await addElement.click();
     |                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 |   })
  22 | 
  23 |   test("Duplicate Test 2", async ({ page }) => {
  24 |     const element = page.locator("text=Add/Remove Elements");
  25 |     const addElement = page.locator("text=Add Element");
  26 |     await element.click();
  27 |     await addElement.click();
  28 |   })
  29 | })
```