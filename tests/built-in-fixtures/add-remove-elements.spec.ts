import { test, expect } from "@playwright/test";

// Version with built-in fixtures
test.describe("Add and remove elements page", () => {
  test.beforeEach("navigate to the page", async ({ page }) => {
    await page.goto("/add_remove_elements/");
  });

  test("should see one add button and no delete button", async ({ page }) => {
    const addElementButton = page.getByRole("button", { name: "Add Element" });
    const deleteButton = page.getByRole("button", { name: "Delete" });
    await expect(deleteButton).toHaveCount(0);
    await expect(addElementButton).toHaveCount(1);
  });

  test("should add a delete button on clicking Add Element", async ({
    page,
  }) => {
    const addElementButton = page.getByRole("button", { name: "Add Element" });
    const deleteButton = page.getByRole("button", { name: "Delete" });
    await addElementButton.click();
    await expect(deleteButton).toHaveCount(1);
  });

  test("should delete one button", async ({ page }) => {
    const addElementButton = page.getByRole("button", { name: "Add Element" });
    const deleteButton = page.getByRole("button", { name: "Delete" });
    await addElementButton.click();
    await deleteButton.first().click();
    await expect(deleteButton).toHaveCount(0);
  });
});
