import { test } from '@playwright/test';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { LoginPage } from '../pages/LoginPage';
import { getLoginData, type LoginCredential, type LoginTestStatus } from '../utils/testDataFuction';

const usersFilePath = path.resolve(__dirname, '../data/users.json');
const loginCases = getLoginData();

function isLoginCredential(value: unknown): value is LoginCredential {
    if (typeof value !== 'object' || value === null) {
        return false;
    }

    const credential = value as Record<string, unknown>;
    return typeof credential.id === 'string'
        && typeof credential.username === 'string'
        && typeof credential.password === 'string'
        && (credential.expectedLogin === 'success' || credential.expectedLogin === 'failure')
        && (credential.lastTestStatus === null
            || credential.lastTestStatus === 'passed'
            || credential.lastTestStatus === 'failed')
        && (credential.lastTestedAt === null || typeof credential.lastTestedAt === 'string');
}

async function saveTestResult(id: string, status: LoginTestStatus) {
    const parsed: unknown = JSON.parse(await readFile(usersFilePath, 'utf8'));
    if (!Array.isArray(parsed)) {
        throw new Error('Login test data must be a JSON array.');
    }

    const credentials = parsed.filter(isLoginCredential);
    if (credentials.length !== parsed.length) {
        throw new Error('Login test data contains an invalid credential entry.');
    }

    const credential = credentials.find((entry) => entry.id === id);
    if (!credential) {
        throw new Error(`Could not find login test data for "${id}".`);
    }

    credential.lastTestStatus = status;
    credential.lastTestedAt = new Date().toISOString();
    await writeFile(usersFilePath, `${JSON.stringify(credentials, null, 2)}\n`, 'utf8');
}

for (const loginCase of loginCases) {
    test(`Login credentials: ${loginCase.id}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        let status: LoginTestStatus = 'failed';

        try {
            await loginPage.navigateToLoginPage();
            await page.screenshot({
                path: `screenshots/login-${loginCase.id}-before.png`,
                fullPage: true
            });

            await loginPage.login(loginCase.username, loginCase.password);

            if (loginCase.expectedLogin === 'success') {
                await loginPage.verifyLoginSuccess();
            } else {
                await loginPage.verifyLoginFailure();
            }

            await page.screenshot({
                path: `screenshots/login-${loginCase.id}-after.png`,
                fullPage: true
            });
            status = 'passed';
        } finally {
            await saveTestResult(loginCase.id, status);
        }
    });
}