import { expect, test } from "@playwright/test";

test("infinity scroll into view", async ({ page }) => {
  await page.goto("https://limitless.exchange/advanced");

  const confirmButton = page.getByRole("button", {
    name: "I’m ready to turn my knowledge into profit",
  });

  if (await confirmButton.isVisible()) {
    await confirmButton.click();
  } else {
    await scrollUntilFooterDispays(page);
  }

  const footerElements = page.locator(
    "//p[contains(text(),'Explore by categories')]/following-sibling::div//a[@href]"
  );

  const expectedFooterValues = [
    "Hourly",
    "Daily Strikes",
    "Weekly Strikes",
    "Crypto",
    "Economy",
    "Company News",
    "Other",
  ];

  await expect(footerElements).toHaveCount(7);
  const actualFooterValues = await footerElements.allInnerTexts();

  expect(actualFooterValues).toEqual(expectedFooterValues);
});

async function scrollToBottomOfThePage(page) {
  return page.evaluate(() =>
    window.scrollTo(0, document.documentElement.scrollHeight)
  );
}

// This function will scroll to the bottom, wait for spinner, and check for footer.
// If the footer is not visible, it will repeat the process up to a maximum number of attempts.
async function scrollUntilFooterDispays(page, maxAttempts = 10) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    await scrollToBottomOfThePage(page);
    await waitForSpinnerToDisappear(page);

    if (await isFooterElementDisplayed(page)) {
      return true;
    }
  }
  return false;
}

async function waitForSpinnerToDisappear(page) {
  const spinner = page.getByText("Loading more markets");

  if (await spinner.isVisible()) {
    await spinner.waitFor({ state: "hidden" });
  }
  return true;
}

async function isFooterElementDisplayed(page) {
  const footerSection = page.getByText("Explore by categories");
  return await footerSection.isVisible();
}
