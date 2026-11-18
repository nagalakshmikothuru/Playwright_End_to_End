import { Page, expect, Locator } from '@playwright/test';

export class CheckoutPage {
    private page: Page;
    private firstName: Locator;
    private lastName: Locator;
    private postalCode: Locator;
    private continueButton: Locator;
    private finishButton: Locator;
    private completeHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = this.page.locator('#first-name');
        this.lastName = this.page.locator('#last-name');
        this.postalCode = this.page.locator('#postal-code');
        this.continueButton = this.page.locator('#continue');
        this.finishButton = this.page.locator('#finish');
        this.completeHeader = this.page.locator('.complete-header');
    }

    async enterCustomerDetails(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {

        await this.firstName.fill(firstName);

        await this.lastName.fill(lastName);

        await this.postalCode.fill(postalCode);

        await this.continueButton.click();
    }

    async finishOrder() {
        await this.finishButton.click();
    }

    async verifyOrderSuccess() {
        await expect(this.completeHeader)
            .toContainText('Thank you for your order!');
    }
}