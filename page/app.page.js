const ElementUtil = require("../utils/elements-utils");

class SetmoreLogin {
    constructor(page) {
        this.page = page;
        this.elementUtil = new ElementUtil(page);
        this.setmoreLoginEmail = '//input[@class="email-field"]';
        this.setmoreLoginPassword = '//input[@class="password-field"]';
        this.setmoreLoginButton = '//a[@id="login-now"]';
        this.setmoreCalendarSideButton = '//button[@data-testid="sidebar-trigger"]'
    }

    async waitForSetmoreLoginEmailField() {
        return this.elementUtil.elementIsVisible(this.setmoreLoginEmail);
    }
    async waitForSetmoreLoginPasswordField() {
        return this.elementUtil.elementIsVisible(this.setmoreLoginPassword);
    }
    async waitForSetmoreLoginButton() {
        return this.elementUtil.elementIsVisible(this.setmoreLoginButton);
    }
    async waitForSetmoreCalenderSideButton(){
        return this.elementUtil.waitForElementToBeVisible(this.setmoreCalendarSideButton);
    }


    async setmoreLoginPageEmailField(email) {
        return this.elementUtil.fill(this.setmoreLoginEmail, email);
    }

    async setmoreLoginPagePasswordField(password) {
        return this.elementUtil.fill(this.setmoreLoginPassword, password);
    }

    async setmoreLoginPageButton() {
        return this.elementUtil.trigger(this.setmoreLoginButton);
    }

}

module.exports = SetmoreLogin; 
