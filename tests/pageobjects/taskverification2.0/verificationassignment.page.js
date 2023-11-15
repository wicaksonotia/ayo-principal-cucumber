import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class VerificationAssignmentPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get searchInput() {
    return $('input[placeholder="Cari"]');
  }

  get columnTitle() {
    return $("#columnTitle");
  }
  get cellNamaTSM() {
    return $("#cellTSM");
  }
  get cellAssignmentUniqueCode() {
    return $$("#CellID");
  }
  get cellAssignmentUniqueCode2() {
    return $("#CellID");
  }
  get btnExport() {
    return $$("#btnExportSummary");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 10s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 60000 });
  }

  async page2() {
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await browser.waitUntil(async () => await this.searchInput.isDisplayed(), {
      timeout: 100000,
      timeoutMsg: "expected title page not displayed after 10s",
    });
    await expect(this.searchInput).toBeDisplayed({ timeout: 60000 });
  }

  async pageList2() {
    await browser.switchToParentFrame();
    await browser.pause(10000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 60s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 60000 });
  }

  async searchTaskVerif(taskVerifName) {
    await expect(this.searchInput).toBeDisplayed();
    await this.searchInput.click();
    await this.searchInput.setValue(taskVerifName);
    // await browser.pause(5000)
  }

  async searchResult(taskVerifName) {
    await this.cellNamaTSM[0].waitForExist();
    await expect(this.cellNamaTSM[0]).toBeExisting();
    await expect(this.cellNamaTSM[0]).toHaveText(taskVerifName);
  }

  async exportFile() {
    await this.btnExport[0].click();
    await browser.pause(8000);
  }

  async viewATask() {
    await this.cellAssignmentUniqueCode[0].scrollIntoView();
    await this.cellAssignmentUniqueCode[0].waitForExist();
    await this.cellAssignmentUniqueCode[0].click();
  }

  async viewATask2() {
    await this.cellAssignmentUniqueCode.scrollIntoView();
    await this.cellAssignmentUniqueCode.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/verification-assignment");
  }
}

export default new VerificationAssignmentPage();
