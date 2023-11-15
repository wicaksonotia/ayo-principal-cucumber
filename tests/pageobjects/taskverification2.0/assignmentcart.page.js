import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class AssignmentCartPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get searchInput() {
    return $('input[placeholder="Cari"]');
  }

  get columnTitle() {
    return $$("#columnTitle");
  }
  get cellNamaTSM() {
    return $$("#cellTSM");
  }
  get btnAddAssignment() {
    return $$("#btnAddAssignment");
  }
  get dialogTitle() {
    return $("#responsive-dialog-title");
  }
  get inpAdmin() {
    return $("#field-name");
  }
  get inpJumlahMisi() {
    return $("#field-total_mission");
  }
  get inpDeadline() {
    return $("#field-deadline");
  }
  get btnSimpan() {
    return $("#btnSave");
  }
  get btnKirim() {
    return $("#btnSubmit");
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
    await expect(this.columnTitle).toBeDisplayed();
  }

  async pageList2() {
    await browser.switchToParentFrame();
    await browser.pause(10000);
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 10000,
      timeoutMsg: "expected title page not displayed after 10s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async searchTaskVerif(taskVerifName) {
    await this.searchInput.click();
    await this.searchInput.setValue(taskVerifName);
  }

  async searchTaskVerif2(taskVerifName) {
    await this.searchInput.scrollIntoView();
    await this.searchInput.click();
    await this.searchInput.setValue(taskVerifName);
  }

  async searchResult(taskVerifName) {
    await this.cellNamaTSM[0].scrollIntoView();
    await this.cellNamaTSM[0].waitForExist();
    await expect(this.cellNamaTSM[0]).toBeExisting();
    await expect(this.cellNamaTSM[0]).toHaveText(taskVerifName);
  }

  async addAssignment(admin, jumlahMisi, deadline) {
    await this.btnAddAssignment[0].click();
    await expect(this.dialogTitle).toBeDisplayed();
    await this.inpAdmin.setValue(admin);
    await browser.pause(5000);
    await browser.keys("Enter");
    await this.inpJumlahMisi.setValue(jumlahMisi);
    await this.inpDeadline.setValue(deadline);
    await this.btnSimpan.click();
  }

  async kirim() {
    await this.btnKirim.click();
    await expect(this.dialogTitle).toBeDisplayed();
    await this.btnSimpan.click();
    await browser.pause(5000);
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/assignment-cart");
  }
}

export default new AssignmentCartPage();
