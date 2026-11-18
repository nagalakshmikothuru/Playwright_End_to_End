import { Page, expect, Locator } from '@playwright/test';

export class CartPage {
    private page: Page;
    private cartIcon: Locator;
    private checkoutButton: Locator;
    private inventoryItemNames: Locator;
    private removeButton: Locator;
    private removeItem:Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartIcon = this.page.locator('.shopping_cart_link');
        this.checkoutButton = this.page.locator('#checkout');
        this.inventoryItemNames = this.page.locator('.inventory_item_name');
        this.removeButton = this.page.locator('#remove-sauce-labs-backpack');
        this.removeItem = this.page.locator(".cart_item_label>>a>div");
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async verifyProductInCart(productName: string) {
        await expect(this.inventoryItemNames).toContainText(productName);
    }

    async removeProductFromCart(productName: string) {
        const removeProduct:string |null=await this.removeItem.textContent();
        if(removeProduct == productName)
        {await this.removeButton.click();}

    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}