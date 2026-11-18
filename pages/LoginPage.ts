import { Page, expect, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private username : Locator;
    private password : Locator;
    private loginButton : Locator;
    private errorMessage : Locator;

    constructor( page: Page) {
 this.page = page;
    this.username = page.locator('#user-name');
    this.password = this.page.locator('#password');
    this.loginButton = this.page.locator('#login-button');
    this.errorMessage = this.page.locator('[data-test="error"]');
    }

    async navigateToLoginPage() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccess() {
        await expect(this.page).toHaveURL(/inventory/);
    }

    async verifyLoginFailure() {
        await expect(this.errorMessage).toBeVisible();
    }
}