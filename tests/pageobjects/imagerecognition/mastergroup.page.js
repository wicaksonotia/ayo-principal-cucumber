import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class MasterGroupPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get btnCreate() {
    return $("#btnCreate");
  }
  get dropdownIR() {
    return $('[class="nav-link mat-ripple ng-tns-c22-10 ng-star-inserted"]');
  }
  get menuMG() {
    return $("#menu-236");
  }
  get cellGroupName() {
    return $$("#cellName");
  }

  get btnEdit() {
    return $$("#btnEdit");
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
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 60s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 60000 });
  }

  async page1() {
    // await browser.switchToParentFrame()
    // await browser.pause(3000)
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 10000,
      timeoutMsg: "expected title page not displayed after 6s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageList() {
    await browser.pause(3000);
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await this.btnCreate.waitForExist();
    await expect(this.titlePage).toHaveText("Master Group");
    await expect(browser).toHaveUrlContaining("dte/master-brand-group");
  }

  async pageMG() {
    await expect(this.titlePage).toHaveText("Undian");
    await browser.pause(7000);
  }

  async createNew() {
    await expect(this.btnCreate).toBeClickable();
    await this.btnCreate.click();
  }

  async editMasterGroup() {
    // await browser.execute(() => document.body.style.zoom='70%')
    await browser.pause(3000);
    await expect(this.btnEdit[0]).toBeExisting();
    await this.btnEdit[0].click();
  }

  async deleteMasterGroup() {
    await this.btnDelete[0].click();
    await this.btnConfirmDelete.click();
  }

  async expectNewMasterGroupRow1(groupname) {
    await expect(this.cellGroupName[0]).toHaveText(groupname);
    await browser.pause(5000);
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/master-brand-group");
  }
}

export default new MasterGroupPage();
