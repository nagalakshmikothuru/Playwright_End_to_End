import { Page, expect, Locator } from '@playwright/test';

export class ProductPage {
    private page: Page;
    private addToCartButton: Locator;
    private productName: Locator;
    private backToProductsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = this.page.locator('button[id*="add-to-cart"]');
        this.productName = this.page.locator('.inventory_details_name');
        this.backToProductsButton = this.page.locator('#back-to-products');
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async verifyProductName(productName: string) {
        await expect(this.productName).toContainText(productName);
    }

    async goBackToProducts() {
        await this.backToProductsButton.click();
    }
}