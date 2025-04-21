const {test , expect } = require('@playwright/test');

test('login to website and retrieve products', async ({ page }) => {
// login to page and enter user name and password
    await page.goto('https://rahulshettyacademy.com/client/auth/login');
    await page.fill('#userEmail' , 'playwrightcali1@gmail.com' );
    await page.fill('#userPassword' , 'Test_1234' );
    await page.click('#login');




















});