import { expect, type Locator, type Page } from "@playwright/test";

export class AddRemoveElementsPage {
  readonly page: Page;
  readonly addElementButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addElementButton = page.getByRole("button", { name: "Add Element" });
    this.deleteButton = page.getByRole("button", { name: "Delete" });
  }

  async goto() {
    await this.page.goto("/add_remove_elements/");
  }

  async clickAddElementButton() {
    await expect(this.addElementButton).toBeVisible();
    await this.addElementButton.first().click();
  }

  async clickDeleteButton() {
    await expect(this.addElementButton).toBeVisible();
    await this.addElementButton.first().click();
  }

  async reloadPage() {
    await this.reloadPage();
  }
}
