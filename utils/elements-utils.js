import {Browser, BrowserContext, Page } from "@cucumber/screenplay";


let browser = Browser;
let context = BrowserContext;
let page = Page;
let app = App;

export default class ElementUtil {
    constructor(page) {
        this.page = page;
    }

    async trigger(element) {
        const locator = this.page.locator(element);
        await locator.waitFor({ state: "visible", timeout: 30000 });
        await locator.click();
    }

    async gotoURL(url) {
        await this.page.goto(url, { waitUntil: "domcontentloaded" });
    }

    async fill(element, value) {
        const locator = await this.waitForElementToBeVisible(element);
        await locator.fill(value);
    }

    async waitForElementToBeVisible(element) {
        const locator = this.page.locator(element);
        await locator.waitFor({ state: "visible", timeout: 30000 });
        return locator;
    }
}