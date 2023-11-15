import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class FieldForcePage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerFieldForce");
  }
  get btnCreate() {
    return $('[aria-label="Login"]');
  }
  get searchInput() {
    return $$('[placeholder="Cari"]');
  }
  get btnFilter() {
    return $$('[type="button"]');
  }

  //Table
  get datatableBody() {
    return $('[class="visible"]');
  }
  get dataRow() {
    return $$(
      '[class="datatable-row-center datatable-row-group ng-star-inserted"]'
    );
  }
  get dataCellNama() {
    return $$("#cellName");
  }
  get dataCellStatus() {
    return $$("#cellStatus");
  }
  get dataCellClassification() {
    return $$("#cellClassification");
  }
  get btnEdit() {
    return $$('[class="secondary-text mat-icon material-icons"]');
  }
  get btnDelete() {
    return $$("#btnDelete");
  }
  get popUptitle() {
    return $("#headerPopupConfirmImport");
  }
  get popUpDesc() {
    return $('[class="mat-dialog-content ng-star-inserted"]');
  }
  get btnConfirmDelete() {
    return $("#btn-confirm-import");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.titlePage.isExisting(), {
      timeout: 90000,
      timeoutMsg: "expected search input not existing after 90s",
    });
    // await expect(this.btnCreate).toBeDisplayed()
    await expect(this.searchInput).toBeDisplayed();
  }

  async pageList() {
    await expect(this.titlePage).toHaveText("Daftar Field Force");
    await expect(browser).toHaveUrlContaining("user-management/field-force");
  }

  async createFF() {
    await browser.pause(8000);
    await this.btnCreate.click();
  }

  async searchFF(namaFF) {
    await browser.pause(3000);
    await expect(this.searchInput[1]).toBeDisplayed();
    await this.searchInput[1].setValue(namaFF);
    await browser.pause(9000);
    await this.btnFilter[1].click();
    await browser.pause(15000);
  }

  async searchResult(namaFF) {
    await browser.pause(10000);
    await this.dataCellNama[0].scrollIntoView();
    await browser.pause(5000);
    await expect(this.dataCellNama[0]).toBeExisting();
    await expect(this.dataCellNama[0]).toHaveText(namaFF);
  }

  async expectNewFF(nama, classification, status) {
    await this.dataCellNama[0].scrollIntoView();
    await expect(this.dataCellNama[0]).toHaveText(nama);
    // await expect(this.dataCellClassification[0]).toHaveText(classification)
    // await expect(this.dataCellStatus[0]).toHaveText(status)
    await this.dataCellNama[0].click();
    await browser.pause(15000);
  }

  async expectNewFFEdited(nama, classification, status) {
    await this.dataCellNama[0].scrollIntoView();
    await expect(this.dataCellNama[0]).toHaveText(nama);
    // await expect(this.dataCellClassification[0]).toHaveText(classification);
    // await expect(this.dataCellStatus[0]).toHaveText(status);
    await browser.pause(5000);
  }

  async editFF() {
    await this.btnEdit[0].click();
    await browser.pause(30000);
  }

  async deleteFF() {
    await this.btnDelete[0].click();
    await expect(this.btnConfirmDelete).toBeExisting();
    await this.popUptitle.getText();
    await this.popUpDesc.getText();
    await this.btnConfirmDelete.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("user-management/field-force");
  }
}

export default new FieldForcePage();
