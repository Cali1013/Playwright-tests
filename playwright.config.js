// @ts-check
const { devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

//Playwright cofig file
const config = {
  testDir: './Projects', //Test folder
  testIgnore: ['e2e/chatgpttest2.spec.js'],
  timeout: 40 *1000, //Global Timeout
  expect : {
    timeout: 5000
  },
  reporter: [['html', {outputFolder: 'playwright-report', open: 'on'}]],

  use: {

    headless : true,
    trace: 'retain-on-failure',
    screenshot: 'retain-on-failure',
    video: 'retain-on-failure',

  },

  projects:[
    {
      name: 'Chromium',
      use: { browserName: 'chromium'},

    },
  ],

};

module.exports = config;
