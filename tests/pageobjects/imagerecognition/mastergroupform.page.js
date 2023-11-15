import ChromeDriverService from "wdio-chromedriver-service";
import Page from "../page";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class FormMBGPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }

  get btnSimpan() {
    return $("#btnSave");
  }

  get inpGroupName() {
    return $("#field-name");
  }
  get inpModelGroupName() {
    return $("#field-model_group_name");
  }
  get inpModelName() {
    return $("#field-model_name");
  }
  get toggleStatus() {
    return $('[name="status"]');
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 6s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat Master Group");
    await expect(browser).toHaveUrlContaining("dte/master-brand-group");
  }

  async pageEdit() {
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 6s",
    });
    await expect(this.titlePage).toHaveText("Ubah Master Group");
    // await expect(browser).toHaveUrlContaining('dte/master-brand-group')
  }

  async group(groupName) {
    await this.inpGroupName.setValue(groupName);
  }

  async modelGroup(modelGroupName) {
    await this.inpModelGroupName.addValue(modelGroupName);
    await browser.pause(5000);
    await browser.keys("Enter");
  }

  async model(modelName) {
    await this.inpModelName.addValue(modelName);
    await browser.pause(5000);
    await browser.keys("Enter");
  }

  async status() {
    await this.toggleStatus.click();
  }

  async submitForm() {
    await this.btnSimpan.click();
    await browser.pause(10000);
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/master-brand-group");
  }
}

export default new FormMBGPage();
