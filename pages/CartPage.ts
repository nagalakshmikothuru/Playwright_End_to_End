import { Page, expect, Locator } from '@playwright/test';

export class CartPage {
    private page: Page;
    private cartIcon: Locator;
    private checkoutButton: Locator;
    private inventoryItemNames: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartIcon = this.page.locator('.shopping_cart_link');
        this.checkoutButton = this.page.locator('#checkout');
        this.inventoryItemNames = this.page.locator('.inventory_item_name');
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async verifyProductInCart(productName: string) {
        await expect(this.inventoryItemNames).toContainText(productName);
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}