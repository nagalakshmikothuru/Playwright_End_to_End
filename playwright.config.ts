import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    reporter: [
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['allure-playwright'],
        ['list']
    ],
    use: {
        baseURL: 'https://www.saucedemo.com',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry'
    }
});