import { Page } from '@playwright/test';

export class ConfirmationPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getValues(page: Page) {
    let splitValues: string[];
    const myObject = {};
    const values = await page.locator('tbody >> tr').allInnerTexts();
    values.forEach(element => {
      splitValues = element.split('\t');
      myObject[splitValues[0]] = splitValues[1];
    });
    return myObject;
  }
}
