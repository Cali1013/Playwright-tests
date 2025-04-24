const { test , expect } = require('@playwright/test');

test ('Failed login test' , async ({ page }) => {
//access website
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('Test');
    await page.locator('#password').fill('Test');
    await page.locator('.radius').click();
    const loginFail = page.locator('#flash');
    await expect(loginFail).toContainText('Your username is invalid!');





});