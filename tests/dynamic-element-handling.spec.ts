import { expect, test } from "@playwright/test";

test.use({ ignoreHTTPSErrors: true });

test("wait animation to complete", async ({ page }) => {
  await page.goto("https://www.uitestingplayground.com/animation");

  await expect(
    page.getByRole("heading", { name: "Animated Button" })
  ).toBeVisible();

  await page.locator("#animationButton").click();
  await page.locator("#movingTarget:not(.spin)").waitFor();

  await expect(page.locator("#opstatus")).toHaveText("Animation done");
});

test("page load delay", async ({ page }) => {
  await page.goto("https://www.uitestingplayground.com/loaddelay"); //auto wait

  // Should I use custom wait and case if deleay more then the default timeout - 5s?
  await expect(
    page.getByRole("button", { name: "Button Appearing After Delay" })
  ).toBeVisible();
});
