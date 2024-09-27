const {When, Then, Given } = require('@cucumber/cucumber');
const { chromium } = require('playwright'); // Import Playwright
const BookingPage = require("../page/app.page"); // CommonJS import

let browser;
let page;
let bookingPage;

Given('Login to Setmore', {}, async function () {
    browser = await chromium.launch({ headless: true }); // Launch the browser
    const context = await browser.newContext(); // Create a new browser context
    page = await context.newPage(); // Create a new page
    bookingPage = new BookingPage(page); // Pass the page to BookingPage

    // Now you can perform actions like filling in the email
    await bookingPage.setmoreLoginPageEmailField('your_email@example.com');
});

When('Select Contacts Component', async function () {
    // Implement the functionality here
});

Then('Perform search', async function () {
    // Implement the functionality here
});

// Ensure to close the browser after tests
// after(async function() {
//     await browser.close(); // Close the browser after tests
// });
