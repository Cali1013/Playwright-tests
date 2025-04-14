const { test, expect } = require('@playwright/test');

test('Google Search Test', async ({ page }) => {
    // Go to Google
    await page.goto('https://www.google.com');

    // Accept cookies if the prompt appears (optional)
    const acceptButton = page.locator('text=Accept all');
    if (await acceptButton.isVisible()) {
        await acceptButton.click();
    }

    // Type in the search box and press Enter
    await page.fill('input[name="q"]', 'Playwright testing');
    await page.keyboard.press('Enter');

    // Wait for results to load
    await page.waitForSelector('#search');

    // Assert that a result contains "playwright.dev"
    const resultText = await page.locator('#search').innerText();
    expect(resultText).toContain('playwright.dev');
});