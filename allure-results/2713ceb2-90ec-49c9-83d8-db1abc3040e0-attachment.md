# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Loggout.spec.ts >> Logout Test @smoke
- Location: tests\Loggout.spec.ts:6:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#user-name')
    - locator resolved to <input value="" type="text" id="user-name" name="user-name" autocorrect="off" data-test="username" aria-label="Username" autocapitalize="none" placeholder="Username" class="input_error form_input"/>

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { Page, expect, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |     private page: Page;
  5  |     private username : Locator;
  6  |     private password : Locator;
  7  |     private loginButton : Locator;
  8  |     private errorMessage : Locator;
  9  | 
  10 |     constructor( page: Page) {
  11 |  this.page = page;
  12 |     this.username = page.locator('#user-name');
  13 |     this.password = this.page.locator('#password');
  14 |     this.loginButton = this.page.locator('#login-button');
  15 |     this.errorMessage = this.page.locator('[data-test="error"]');
  16 |     }
  17 | 
  18 |     async navigateToLoginPage() {
  19 |         await this.page.goto('/');
  20 |     }
  21 | 
  22 |     async login(username: string, password: string) {
> 23 |         await this.username.fill(username);
     |                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  24 |         await this.password.fill(password);
  25 |         await this.loginButton.click();
  26 |     }
  27 | 
  28 |     async verifyLoginSuccess() {
  29 |         await expect(this.page).toHaveURL(/inventory/);
  30 |     }
  31 | 
  32 |     async verifyLoginFailure() {
  33 |         await expect(this.errorMessage).toBeVisible();
  34 |     }
  35 | }
```