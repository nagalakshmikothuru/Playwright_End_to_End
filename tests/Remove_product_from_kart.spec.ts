/*
Login
↓
Add Product
↓
Open Cart
↓
Verify Product
↓
Remove Product
↓
Verify Product Removed
*/

import { test } from '@playwright/test';
import { userLoginCred } from '../utils/testData';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
test('Remove Product from Cart @regression', async ({ page }) => {
     // Create Page Object Instances
        const loginPage: LoginPage = new LoginPage(page);
        const homePage: HomePage = new HomePage(page);
        const productPage: ProductPage = new ProductPage(page);
        const cartPage = new CartPage(page);
       
    
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
    
        // Open Product
        await homePage.openProduct(
            'Sauce Labs Backpack'
        );
    
        // Verify Product Details
        await productPage.verifyProductName(
            'Sauce Labs Backpack'
        );
    
        // Add Product
        await productPage.addProductToCart();
    
        // Open Cart
        await cartPage.openCart();
    
        // Verify Product
        await cartPage.verifyProductInCart(
            'Sauce Labs Backpack'
        );

        //remove Product
        await cartPage.removeProductFromCart(
            'Sauce Labs Backpack'
        );
});
