// import { chromium, Browser, BrowserContext, Page } from 'playwright'; // Uncomment if needed

class ElementUtil {
    constructor(page) {
        this.page = page;
    }

    async trigger(element) {
        const locator = this.page.locator(element);
        await locator.waitFor({ state: "visible", timeout: 30000 });
        await locator.click(); // Click on the element
    }

    async gotoURL(url) {
        await this.page.goto(url, { waitUntil: "domcontentloaded" });
    }

    async fill(element, value) {
        const locator = await this.waitForElementToBeVisible(element);
        await locator.fill(value); // Fill the input field with the provided value
    }

    async waitForElementToBeVisible(element) {
        const locator = this.page.locator(element);
        await locator.waitFor({ state: "visible", timeout: 45000 });
        return locator; // Return the locator for further actions
    }

    async waitForElementToHidden(element) {
        return this.page.waitForSelector(element, { state: "detached", timeout: 45000 });
    }

    async elementIsHidden(element) {
        return this.page.locator(element).isHidden({ timeout: 5000 });
    }

    async elementIsDisabled(element) {
        return this.page.locator(element).isDisabled({ timeout: 2000 });
    }

    async elementIsVisible(element) {
        const locator = this.page.locator(element);
        await locator.waitFor({ state: "visible", timeout: 5000 });
        return locator.isVisible(); // Already returns a boolean
    }

    async getTextContent(element) {
        return this.page.locator(element).textContent({ timeout: 20000 });
    }

    async getAttributeValue(element, value) {
        return this.page.locator(element).getAttribute(value); // Fixed to use locator
    }

    async getElementInputValue(element) {
        return this.page.locator(element).inputValue();
    }

    async getCursorFocusedElement(element) {
        const locator = this.page.locator(element);
        const isFocused = await locator.evaluate(field => field === document.activeElement);
        return isFocused; // Return true if the element is focused
    }

    async navigateTo(link) {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }), 
            this.page.click(link)
        ]);
    }

    async onHover(element) {
        await this.page.locator(element).hover({ timeout: 5000 });
    }

    async uploadFiles(element, value) {
        await this.page.setInputFiles(element, value);
    }
}

module.exports = ElementUtil; 
