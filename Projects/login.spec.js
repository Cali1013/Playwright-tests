// declare alias depending on your goal for this test and this is required for all projects
const { test , expect} = require('@playwright/test');

//declaring test name and establishing that this is an asyncronous test
test('login to website' , async ({ page }) => {
// navigate to page
await page.goto('https://www.saucedemo.com/');
//enter user name    
await page.fill('#user-name' , 'standard_user');
//enter password
await page.fill('#password' , 'secret_sauce');
//click login
await page.click('#login-button');
//displays in the log the text content of the app logo locator
console.log(await page.locator("[class='app_logo']").textContent());
//check that the logo displays the correct value
await expect(page.locator("[class='app_logo']")).toContainText('Swag Labs');





});
