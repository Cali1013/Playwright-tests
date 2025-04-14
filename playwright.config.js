// @ts-check
const { devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

const config = {
  testDir: './Projects',
  reporter : 'html',
  testignore: ['e2e/chatgpttest2.spec.js'],
  timeout: 40 *1000,
  expect : {
    timeout: 5000
  },
  
  use: {

    browsername : 'Chromium',
    headless : true
  }

}