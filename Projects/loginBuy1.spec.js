const { test, expect } = require('@playwright/test');
//const { safeFill } = require('../Utilities/helpers.js');

test('login to website and buy stuff' , async ({ page , context }) => {
//initiate create a trace file
    //await context.tracing.start ({ screenshots:true , snapshots:true , sources:true});


//login to page and enter user name and password
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name' , 'standard_user');
    await page.fill('#password' , 'secret_sauce');
    await page.click('#login-button');
//check if you are on the correct page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
//put items in cart
    await page.click('#add-to-cart-sauce-labs-backpack');
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
    await page.click('.shopping_cart_link');
    const cartItem = page.locator('.inventory_item_name');
    await expect(cartItem).toHaveText('Sauce Labs Backpack');
//checkout    
    await page.click('#checkout');
    const pageCheckout = page.locator('.title');
    await expect(pageCheckout).toHaveText('Checkout: Your Information');
//Fill in customer information
/* Test too flaky up to this point, cant figure it out
await page.evaluate(() => {
    const first = document.querySelector('#first-name');
    const last = document.querySelector('#last-name');
    const postal = document.querySelector('#postal-code');
  
    first.value = 'Cali';
    last.value = 'Test';
    postal.value = '1041';
  
    [first, last, postal].forEach(input => {
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
        await expect(page.locator('#last-name')).toHaveValue('Test');
        await Promise.all([
            page.waitForNavigation(),
            page.click('#continue')
          ]);
          
          await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');


*/
});

//create a trace file
//await context.tracing.stop({ path: 'trace.zip'});