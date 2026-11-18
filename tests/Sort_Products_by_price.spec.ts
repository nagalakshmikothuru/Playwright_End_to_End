/*
Scenario 5: Sort Products by Price (Low to High)
Login
↓
Verify Products Page
↓
Select "Price Low to High"
↓
Verify Products are Sorted
*/

import { test } from '@playwright/test';
import { userLoginCred } from '../utils/testData';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test('Sort Products by Price (Low to High) @regression', async ({ page }) => {

// Create Page Object Instances
    const loginPage: LoginPage = new LoginPage(page);
    const homePage: HomePage = new HomePage(page);

    
    // Login
    await loginPage.navigateToLoginPage();
    await page.screenshot({
        path: 'screenshots/order-flow-before.png',
        fullPage: true
    });
   await loginPage.login(
           userLoginCred.standardUser,
           userLoginCred.password
       );
    await loginPage.verifyLoginSuccess();
    await page.screenshot({
        path: 'screenshots/login-success.png',
        fullPage: true
    });

    // Verify Products Page
    await homePage.verifyHomePage();

    // Select "Price Low to High"
    await homePage.selectSortOption('Price (low to high)'); 

    //verify Products are Sorted
    await homePage.sortProductsBy('Price (low to high)');   

    // Sort Products
    //await homePage.sortProducts('lohi');

    // Verify Sorting
    await homePage.verifyLowToHighSorting();


});