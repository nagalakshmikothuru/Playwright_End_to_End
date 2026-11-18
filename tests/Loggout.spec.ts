import { test, expect } from '@playwright/test';
import { userLoginCred } from '../utils/testData';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test('Logout Test @smoke', async ({ page }) => {

   // Create Login Page Object
       const loginPage: LoginPage = new LoginPage(page);
   
       // Navigate to Application
       await loginPage.navigateToLoginPage();
       await page.screenshot({
           path: 'screenshots/login-before.png',
           fullPage: true
       });
   
       // Login with Valid Credentials
       await loginPage.login(
           userLoginCred.standardUser,
           userLoginCred.password
       );
   
       // Verify Login Success
       await loginPage.verifyLoginSuccess();
       await page.screenshot({
           path: 'screenshots/login-after.png',
           fullPage: true
       });
       //await page.pause();
});