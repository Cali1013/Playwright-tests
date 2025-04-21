const { expect } = require('@playwright/test');

async function safeFill(page, selector, value) {
  const input = page.locator(selector);
  await input.waitFor({ state: 'visible' });
  await input.click();
  await input.fill(value);
  await expect(input).toHaveValue(value);
}

module.exports = { safeFill };