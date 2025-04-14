const {test, expect} = require('@playwright/test');


test('Browser context with cookies Playwright Test', async ({browser})=>
{
//playwright code
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.iloveugly.co.nz/");
console.log(await page.title());



});

test('Straight to page Playwright Test', async ({page})=>
{
    //playwright code
    //const context = await browser.newContext();
    //const pafe = await context.newPage();
    await page.goto("https://login.realme.govt.nz/32179062-92f6-4eb0-89bc-df400a9e0367/oauth2/v2.0/authorize?p=B2C_1A_DIA_RealMe_Home&client_id=5e90bca8-7dd9-4399-8863-340a4c002ce7&redirect_uri=https://api.realme.govt.nz/sls/continue&scope=openid&state=home&response_type=code&prompt=login");
    // get ttile 
    console.log(await page.title());
    //await expect(page).toHaveTitle('Google');
//css
    await page.locator('#signInName').fill('Auckland');
    await page.locator("[type='password']").fill('Auckland');
    await page.locator('#next').click();
    console.log(await page.locator('#banner-login-fail').textContent()); //lists in the log the text content of the error
    await expect(page.locator('#banner-login-fail')).toContainText('unsuccessful'); //verifies that the content of the message is as expected
});