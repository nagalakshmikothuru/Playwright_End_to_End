import { Page, expect, Locator } from '@playwright/test';

export class HomePage {
    private page: Page;
    private productsTitle: Locator;
    private sortDropdown: Locator;
    private inventoryItemNames: Locator;
    private menuButton : Locator;
    private logoutLink : Locator;

    constructor(page: Page) {
        this.page = page;
        this.productsTitle = this.page.locator('.title');
        this.sortDropdown = this.page.locator('.product_sort_container');
        this.inventoryItemNames = this.page.locator('.inventory_item_name');
        this.menuButton = this.page.locator('#menu_button_container');
        this.logoutLink = this.page.locator('#logout_sidebar_link');
    }

    async verifyHomePage() {
        await expect(this.productsTitle)
            .toHaveText('Products');
    }

    async selectSortOption(option: string) {
        await this.sortDropdown.selectOption(option);
    }

    async openProduct(productName: string) {
        await this.inventoryItemNames
            .filter({ hasText: productName })
            .click();
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutLink.click();
    }
}