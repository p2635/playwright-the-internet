import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("The Internet");
});

test("a/b testing link", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "A/B Testing" }).click();
  await expect(page).toHaveURL(/abtest/);
});
