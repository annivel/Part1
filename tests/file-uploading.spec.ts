import { expect, test } from "@playwright/test";
import path from "path";

test("file upload txt file", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/upload");
  await page
    .getByRole("button", { name: "Choose file" })
    .setInputFiles(path.join(__dirname, "testfile.txt"));

  await page.getByRole("button", { name: "upload" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "File Uploaded!"
  );
  await expect(page.locator("#uploaded-files")).toContainText("testfile.txt");
});
