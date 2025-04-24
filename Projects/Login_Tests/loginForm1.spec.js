const { test , expect } = require ('@playwright/test'); //remember to set this up awlays!

test ('Test demoqa' , async ({ page }) => { //title code line for your test

    await page.goto('https://demoqa.com/automation-practice-form', { //access website, added waits so that playwright just waits for the main page to load even with ads
        waitUntil: 'domcontentloaded',
        timeout: 10000
      });
    //Fill the page  
    await page.locator('#firstName').fill('Cali');
    await page.locator('#lastName').fill('Test');
    await page.locator('#userEmail').fill('Test');
    // clicks the radio button selection
    await page.locator('label[for="gender-radio-1"]').click();
    await page.locator('#userNumber').fill('0210870472');
    await page.locator('#dateOfBirthInput').fill('21 Apr 2025');
    await page.locator('#subjectsInput').fill('English');
    //another radio button
    await page.locator('label[for="hobbies-checkbox-1"]').click();
    // uploads a file into the form
    await page.setInputFiles('#uploadPicture', '/Users/cali/Desktop/Test.png');
    await page.locator('#currentAddress').fill('Test Address');
    await page.locator('#react-select-3-input').fill('NCR');
    //submit the filled form
    await page.locator('#submit').click();
    const pageThanks = page.locator('#example-modal-sizes-title-lg');
    // checks that the pop up window that shows are located and verified
    await expect(pageThanks).toHaveText('Thanks for submitting the form');











});

