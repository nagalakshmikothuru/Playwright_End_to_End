import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Valid Login Test @smoke', async ({ page }) => {

    // Create Login Page Object
    const loginPage: LoginPage = new LoginPage(page);

    // Navigate to Application
    await loginPage.navigateToLoginPage();

    // Login with Valid Credentials
    await loginPage.login(
        'standard_user',
        'secret_sauce'

    );

    // Verify Login Success
    await loginPage.verifyLoginSuccess();
    //await page.pause();
});