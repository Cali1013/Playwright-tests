const { test , expect } = require('@playwright/test');
//access parabank website
test('Account Overview test' , async({ page }) => {
await page.goto('https://parabank.parasoft.com/parabank/index.htm');
//login to parabank account
await page.locator('input[name="username"]').fill('john');
await page.locator('input[name="password"]').fill('demo');
await page.locator('input[type="submit"]').click();
//verify the correct account
await page.locator('a[href="overview.htm"]').click();
const account1 = page.locator('a[href="activity.htm?id=13344"]');
await expect(account1).toHaveText('13344');


});