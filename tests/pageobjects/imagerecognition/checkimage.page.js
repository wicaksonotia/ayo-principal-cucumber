import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class CheckImagePage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get btnCreate() {
    return $("#btnCreate");
  }

  get cellNamaCheckImage() {
    return $$("#cellName");
  }
  get cellStatus() {
    return $$("#cellStatus");
  }

  get btnDelete() {
    return $$("#btnDelete");
  }
  get popUptitle() {
    return $("#dialogTitle");
  }
  get popUpDesc() {
    return $("#dialogCaption");
  }
  get btnConfirmDelete() {
    return $("#btnConfirm");
  }
  get btnCancelDelete() {
    return $("#btnCancel");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 10000,
      timeoutMsg: "expected title page not displayed after 10s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageList() {
    await browser.pause(10000);
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await this.btnCreate.waitForExist();
    await expect(this.titlePage).toHaveText("Check Image");
    await expect(browser).toHaveUrlContaining("dte/check-image-planogram");
  }

  async createNew() {
    await expect(this.btnCreate).toBeClickable();
    await this.btnCreate.click();
  }

  async deleteCheckImage() {
    // await browser.execute(() => document.body.style.zoom='70%')
    await browser.pause(3000);
    await expect(this.btnDelete[0]).toBeExisting();
    await this.btnDelete[0].click();
    await expect(this.btnConfirmDelete).toBeExisting();
    await this.btnConfirmDelete.click();
  }

  async expectNewCheckImageRow1(name, status) {
    await expect(this.cellNamaCheckImage[0]).toHaveText(name);
    // await expect(this.cellStatus[0]).toHaveText(status)
  }

  async clickCheckImageRow1() {
    await this.cellNamaCheckImage[0].click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/check-image-planogram");
  }
}

export default new CheckImagePage();
