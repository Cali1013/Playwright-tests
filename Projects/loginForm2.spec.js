const { test , expect } = require('@playwright/test');

test('Test herokuapp website' , async ({ page }) => {

// access website
await page.goto('https://the-internet.herokuapp.com/login');
//Fill login page
await page.locator('#username').fill('tomsmith');
await page.locator('#password').fill('SuperSecretPassword!');
//click login button
await page.locator('.radius').click();
const loginPage = page.locator('#flash');
await expect(loginPage).toContainText('You logged into a secure area!');

});