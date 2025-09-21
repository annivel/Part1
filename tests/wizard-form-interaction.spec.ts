import { test, expect } from "@playwright/test";
// https://magento.softwaretestingboard.com/customer/account/create/

test("create account wizard form", async ({ page }) => {
  await page.goto("https://practice.qabrains.com/registration");
  await page.getByRole("textbox", { name: "Name" }).fill("test user");
  await page
    .getByRole("combobox", { name: "Select Country" })
    .selectOption("Andorra");
  await page
    .getByRole("combobox", { name: "Account Type" })
    .selectOption("Engineer");
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("testemail@example.com");

  await page.locator("#password").fill("testPass123");
  await page.locator("#confirm_password").fill("testPass123");

  await page.getByRole("button", { name: "Signup" }).click();

  await expect(
    page.getByRole("heading", { name: "REGISTRATION SUCCESSFUL" })
  ).toBeVisible();
});

test("login with valid credentials", async ({ page }) => {
  await page.goto("https://practice.qabrains.com");
  await expect(
    page.getByRole("heading", { name: "User Authentication" })
  ).toBeVisible();

  await page
    .getByRole("textbox", { name: "email" })
    .fill("qa_testers@qabrains.com");
  await page.getByRole("textbox", { name: "password" }).fill("Password123");
  await page.getByRole("button", { name: "login" }).click();

  await expect(
    page.getByRole("heading", { name: "LOGIN SUCCESSFUL" })
  ).toBeVisible();
});

test("login with not autorized credetials", async ({ page }) => {
  await page.goto("https://practice.qabrains.com");
  await expect(
    page.getByRole("heading", { name: "User Authentication" })
  ).toBeVisible();

  await page.getByRole("textbox", { name: "email" }).fill("test@example.com");
  await page.getByRole("textbox", { name: "password" }).fill("testPass123");
  await page.getByRole("button", { name: "login" }).click();

  await expect(page.locator(".toaster")).toHaveText(
    "Your email and password both are invalid!"
  );
});
