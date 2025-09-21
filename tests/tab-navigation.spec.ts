import { test, expect } from "@playwright/test";

// describe is a test group that contains a set of tests
test.describe("Tab Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test("navigates to docs page", async ({ page }) => {
    await page.getByRole("link", { name: "Docs" }).click();
    await expect(
      page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
  });

  test("navigates to api page", async ({ page }) => {
    await page.getByRole("link", { name: "API" }).click();
    await expect(
      page.getByRole("heading", { name: "Playwright" })
    ).toBeVisible();
  });

  test("switches to node.js tab", async ({ page }) => {
    // precondition
    await page.getByRole("link", { name: "API" }).click();

    // flacky behavior 1
    //const dropDown = page.getByRole('button', { name: 'Node.js' }).click();

    // flacky behavior 2
    //await expect (page.getByRole('button', { name: 'Node.js' })).toBeVisible();
    // await page.getByRole('button', { name: 'Node.js' }).click();

    const dropDown = page.getByRole("button", { name: "Node.js" });
    await expect(dropDown).toBeVisible(); // Is it really needed? auto-wait click() will ensure that element is visible before clicking  -  https://playwright.dev/docs/actionability
    await dropDown.hover();
    await dropDown.click();

    await expect(page.getByRole("link", { name: "Java" })).toBeVisible();
    await page.getByRole("link", { name: "Java" }).click();
    await expect(
      page.getByRole("link", { name: "Playwright for Java" })
    ).toBeVisible();
  });
});
