const { test, expect } = require('@playwright/test');

test('login to website', async ({ page }) => {
    // Navigate to page
    await page.goto('https://www.saucedemo.com/');
    
    // Enter username and password
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    
    // Click login button
    await page.click('#login-button');
    
    // Store locator for the logo
    const logo = page.locator("[class='app_logo']");
    
    // Log the text content of the logo
    console.log(await logo.textContent());
    
    // Check that the logo displays the correct value
    await expect(logo).toContainText('Swag Labs');
});