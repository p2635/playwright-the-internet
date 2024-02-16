import { test, expect } from "@playwright/test";
import { AddRemoveElementsPage } from "../../pages/add-remove-elements-page";

test.describe("Add and remove elements page with POM", () => {
  let addRemoveElementsPage;

  test.beforeEach(async ({ page }) => {
    addRemoveElementsPage = new AddRemoveElementsPage(page);
    await addRemoveElementsPage.goto();
  });

  test("should add one button", async ({ page }) => {
    await expect(addRemoveElementsPage.deleteButton).toHaveCount(0);
    await addRemoveElementsPage.clickAddElementButton();
    await expect(addRemoveElementsPage.deleteButton).toHaveCount(1);
  });

  test("should delete one button", async ({ page }) => {
    await addRemoveElementsPage.clickAddElementButton();
    await expect(addRemoveElementsPage.deleteButton).toHaveCount(1);
    await addRemoveElementsPage.clickDeleteButton();
    await expect(addRemoveElementsPage.deleteButton).toHaveCount(0);
  });
});
