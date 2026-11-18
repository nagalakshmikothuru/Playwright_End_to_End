import { test } from '@playwright/test';
import { userLoginCred } from '../utils/testData';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Complete Order Flow @regression', async ({ page }) => {

    // Create Page Object Instances
    const loginPage: LoginPage = new LoginPage(page);
    const homePage: HomePage = new HomePage(page);
    const productPage: ProductPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

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

    // Checkout
    await cartPage.clickCheckout();

    // Enter Customer Details
    await checkoutPage.enterCustomerDetails(
        'Nagalakshmi',
        'Kothuru',
        '500001'
    );

    // Place Order
    await checkoutPage.finishOrder();

    // Verify Success Message
    await checkoutPage.verifyOrderSuccess();
    await page.screenshot({
        path: 'screenshots/order-flow-after.png',
        fullPage: true
    });
});