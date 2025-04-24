const { test, expect } = require('@playwright/test');

test('login to website' , async ({ page , context }) => {
//initiate create a trace file
    await context.tracing.start ({ screenshots:true , snapshots:true , sources:true});

/* 
//login to page and enter user name and password
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name' , 'problem_user');
    await page.fill('#password' , 'secret_sauce');
    await page.click('#login-button');
//check if you are on the correct page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
*/
//check that if the login details used are wrong, login fails
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name' , 'locked_out_user');
    await page.fill('#password' , 'secret_' );
    await page.click('#login-button');
    await expect(page.locator('.error-button')).toBeVisible();
    

//create a trace file
    await context.tracing.stop({ path: 'trace.zip'});

});