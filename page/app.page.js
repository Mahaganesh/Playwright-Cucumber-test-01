// import { Page } from "@cucumber/screenplay";
const ElementUtil = require("../utils/elements-utils");

class BookingPage {
    constructor(page) {
        this.page = page;
        this.elementUtil = new ElementUtil(page);
        this.setmoreLoginEmail = '//input[@class="email-field"]';
        this.setmoreLoginPassword = '//input[@class="password-field"]';
        this.setmoreLoginButton = '//a[@id="login-now"]';
    }

    async setmoreLoginPageEmailField(email) {
        console.log(email)
        return this.elementUtil.fill(this.setmoreLoginEmail, email);
    }

    async setmoreLoginPagePasswordField(password) {
        return this.elementUtil.fill(this.setmoreLoginPassword, password);
    }

    async getBookingPageBusinessNameField() {
        return this.elementUtil.waitForElementToBeVisible(this.bookingPageMenu);
    }
}

module.exports = BookingPage; // Export using CommonJS
