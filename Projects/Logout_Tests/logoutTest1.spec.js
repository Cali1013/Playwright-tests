const { test , expect } = require('@playwright/test');

test('Logout test1' , async ({ page }) => {

await page.goto('https://the-internet.herokuapp.com/login');
await page.locator('#username').fill('tomsmith');
await page.locator('#password').fill('SuperSecretPassword!');
await page.locator('.radius').click();
await page.locator('.button.secondary.radius').click();
const logoutScreen = page.locator('#flash');
await expect(logoutScreen).toContainText('You logged out of the secure area!');








});