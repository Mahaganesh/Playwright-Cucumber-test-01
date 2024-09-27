import { Page } from "@cucumber/screenplay";
import ElementUtil from "../utils/elements-utils";
import userData from "../user-data";

export default class BookingPage {
    constructor(page) {
        this.page = Page;
        this.elementUtil = new ElementUtil(page);
        this.bookingPageMenu = "[data-testid='booking-page-tab']";
    }
    async getBookingPageBusinessNameField() {
        return this.elementUtil.waitForElementToBeVisible(this.bookingPageMenu);
    }
}