import ChromeDriverService from "wdio-chromedriver-service";
import Page from "../page";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class FormCheckImagePage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }

  get btnSimpan() {
    return $("#btnSave");
  }

  get inpTemplateName() {
    return $("#field-template_name");
  }
  get inpGroupName() {
    return $("#field-brand_group_id");
  }
  get inputAddFile() {
    return $('input[type="file"]');
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
    await expect(this.titlePage).toHaveText("Buat Check Image");
    await expect(browser).toHaveUrlContaining("dte/check-image-planogram");
  }

  async pageDetail() {
    await browser.switchToParentFrame();
    await browser.pause(10000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 6s",
    });
    await expect(this.titlePage).toHaveText("Check Image");
    // await expect(browser).toHaveUrlContaining('dte/check-image-planogram')
  }

  async template(templateName) {
    await this.inpTemplateName.addValue(templateName);
  }

  async group(groupName) {
    await this.inpGroupName.setValue(groupName);
    await browser.pause(5000);
    await browser.keys("Enter");
  }

  async addImage() {
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/48ir-checkimage.jpg"
    );
    await browser.execute(function () {
      document.querySelector('input[type="file"]').style.display = "block";
    });
    await this.inputAddFile.setValue(remoteFilePath);
  }

  async submitForm() {
    await this.btnSimpan.waitForClickable();
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
    await browser.pause(5000);
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/master-brand-group");
  }
}

export default new FormCheckImagePage();
