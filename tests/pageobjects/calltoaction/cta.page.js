import Page from "../page";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class CallToActionPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get btnCreate() {
    return $("#btnCreate");
  }
  get searchInput() {
    return $('[placeholder="Cari"]');
  }
  get tab() {
    return $$('[class="MuiTab-wrapper"]');
  }
  get btnImportCustomized() {
    return $("#btnImport");
  }
  get btnTutupImport() {
    return $(
      '[class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary"]'
    );
  }

  //Table
  get datatableBody() {
    return $('[class="MuiDataGrid-renderingZone"]');
  }
  get dataRow() {
    return $$('[class="MuiDataGrid-row"]');
  }
  get dataCellNama() {
    return $$(
      '[class="MuiTypography-root MuiLink-root MuiLink-underlineNone MuiTypography-colorInherit"]'
    );
  }
  get dataCellStatus() {
    return $$('[class="MuiChip-label MuiChip-labelSmall"]');
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
  get inputAddFile() {
    return $('input[type="file"]');
  }

  //Table Customized
  get cellNama() {
    return $$("#cellName");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.pause(10000);
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await browser.waitUntil(async () => await this.titlePage.isExisting(), {
      timeout: 90000,
      timeoutMsg: "expected search input not existing after 90s",
    });
    // await expect(this.btnCreate).toBeDisplayed()
    await expect(this.searchInput).toBeDisplayed();
  }

  async pageList() {
    await browser.pause(3000);
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await expect(this.titlePage).toHaveText("CTA");
    await expect(browser).toHaveUrlContaining("user-management/call-to-action");
  }

  async createCTA() {
    await browser.pause(8000);
    await this.btnCreate.click();
  }

  async row1Customized() {
    await expect(this.cellNama[0]).toHaveText("Toko Reda");
  }

  async openTabCustomized() {
    await this.tab[1].click();
    await browser.pause(5000);
  }

  async importCustomized() {
    await this.btnImportCustomized.click();
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/62ctacustomized.xlsx"
    );
    await browser.execute(function () {
      document.querySelector('input[type="file"]').style.display = "block";
    });
    await this.inputAddFile.setValue(remoteFilePath);
    await this.btnTutupImport.click();
  }

  async searchCTA(namaCTA) {
    await browser.pause(5000);
    await expect(this.searchInput).toBeDisplayed();
    await this.searchInput.setValue(namaCTA);
    await browser.pause(2000);
  }

  async searchResult(namaCTA) {
    await browser.pause(3000);
    await expect(this.dataCellNama[0]).toBeExisting();
    await expect(this.dataCellNama[0]).toHaveText(namaCTA);
  }

  async expectNewCTA(nama) {
    await expect(this.dataCellNama[0]).toHaveText(nama);
    // await expect(this.dataCellStatus[0]).toHaveText(status)
    // await this.dataCellNama[0].click()
    await browser.pause(5000);
  }

  async expectNewCTAEdited(nama, status) {
    await expect(this.dataCellNama[0]).toHaveText(nama);
    // await expect(this.dataCellStatus[0]).toHaveText(status)
    await browser.pause(5000);
  }

  async editCTA() {
    await this.btnEdit[0].scrollIntoView();
    await browser.pause(5000);
    await this.btnEdit[0].click();
  }

  async deleteCTA() {
    await this.btnDelete[0].scrollIntoView();
    await browser.pause(5000);
    await this.btnDelete[0].click();
    await browser.pause(5000);
    await expect(this.btnConfirmDelete).toBeExisting();
    await this.popUptitle.getText();
    await this.popUpDesc.getText();
    await this.btnConfirmDelete.click();
    await browser.pause(5000);
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("user-management/call-to-action");
  }
}

export default new CallToActionPage();
