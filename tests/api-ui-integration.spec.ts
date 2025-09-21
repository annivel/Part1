import { expect, test } from "@playwright/test";

let globalUserData: any;
let globalAccessToken: string;

export const randomEmail = () => {
  return Math.random().toString().substring(2) + "@gmail.com";
};

globalUserData = {
  name: "testuser",
  email: randomEmail(),
  password: "Password123!",
};

test.beforeAll(async ({ request }) => {
  const response = await request.post(
    "https://practice.expandtesting.com/notes/api/users/register",
    {
      data: globalUserData,
    }
  );

  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  expect(responseBody.message).toBe("User account created successfully");
  expect(responseBody.data.name).toBe(globalUserData.name);
  expect(responseBody.data.email).toBe(globalUserData.email);
});

test("UI user login", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/notes/app/login");

  await page.waitForTimeout(1000);
  await page.locator("#email").fill(globalUserData.email);
  await page.locator("#password").fill(globalUserData.password);
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByRole("link", { name: "MyNotes" })).toBeVisible();
});
