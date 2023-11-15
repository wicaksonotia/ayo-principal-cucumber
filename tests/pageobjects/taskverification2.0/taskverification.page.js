import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class TaskVerificationPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get searchInput() {
    return $("#search");
  }

  get columnTitle() {
    return $$('[class="MuiDataGrid-columnHeaderTitle"]');
  }
  get cellNamaTSM() {
    return $$("#cellName");
  }
  get inpSampling() {
    return $$("#field-number");
  }
  get btnGenerate() {
    return $$("#btnGenerate");
  }
  get btnAssign() {
    return $$("#btnAssign");
  }

  get dialogTitle() {
    return $("#dialogTitle");
  }
  get dialogCaption() {
    return $("#dialogCaption");
  }
  get btnConfirm() {
    return $("#btnConfirm");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 60s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 60000 });
  }

  async pageList() {
    await browser.pause(3000);
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(3);
    await browser.pause(3000);
    await expect(this.titlePage).toBeDisplayed();
    await expect(this.columnTitle).toBeDisplayed();
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

  async pageList3() {
    //await browser.switchToFrame(0)
    await browser.switchToParentFrame();
    await browser.pause(10000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await browser.waitUntil(async () => await this.searchInput.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 60s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 60000 });
  }

  async searchTaskVerif(taskVerifName) {
    await this.searchInput.click();
    await this.searchInput.setValue(taskVerifName);
  }

  async searchTaskVerif2(taskVerifName) {
    await expect(this.searchInput).toBeDisplayed();
    await this.searchInput.scrollIntoView();
    await this.searchInput.click();
    await this.searchInput.setValue(taskVerifName);
    // await browser.pause(5000)
  }

  async searchResult(taskVerifName) {
    await this.cellNamaTSM[0].waitForExist();
    await expect(this.cellNamaTSM[0]).toBeExisting();
    await expect(this.cellNamaTSM[0]).toHaveText(taskVerifName);
  }

  async generateSampling(sampingAmount) {
    await this.inpSampling[0].waitForExist();
    await this.inpSampling[0].setValue(sampingAmount);
    await browser.pause(2000);
    await this.btnGenerate[0].click();
    await browser.pause(15000);
    await this.btnAssign[0].click();
    await browser.pause(5000);
    // await this.btnAssign[0].click()
  }

  async dialogConfirm() {
    await this.dialogTitle.waitForExist();
    await expect(this.dialogCaption).toHaveTextContaining(
      "Apakah Anda yakin ingin Sampling Misi Verification ini?"
    );
    await this.btnConfirm.click();
    await browser.pause(3000);
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/task-verification");
  }
}

export default new TaskVerificationPage();
