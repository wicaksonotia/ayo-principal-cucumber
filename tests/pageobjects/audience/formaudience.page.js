import Page from "../page";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class FormAudiencePage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerAudience");
  }
  get titlePagePersonalize() {
    return $("#headerAudiencePersonalize");
  }

  get namaGrup() {
    return $('input[formcontrolname="name"]');
  }
  get publishMisi() {
    return $('[formcontrolname="mission_publication_id"]');
  }
  get jenis() {
    return $$(
      'mat-radio-group[formcontrolname="audience_type"] mat-radio-button'
    );
  } //Tsm, Scheduler
  get businessType() {
    return $('[formcontrolname="business_type"]');
  }
  get limit() {
    return $$('mat-radio-group[formcontrolname="limit"] mat-radio-button');
  } //Batasi Audience, Pilih Semua
  get min() {
    return $('input[formcontrolname="min"]');
  }
  get max() {
    return $('input[formcontrolname="max"]');
  }
  get type() {
    return $$('mat-radio-group[formcontrolname="type"] mat-radio-button');
  }
  get dropdownTradeScheduler() {
    return $('[formcontrolname="trade_scheduler_id"]');
  }
  get searchTradeScheduler() {
    return $("ngx-mat-select-search div input");
  }
  get selectTradeScheduler() {
    return $$('[role="option"]');
  }
  get rbFixedPanel() {
    return $$('[class="mat-radio-container"]');
  }

  get InputTextSearch() {
    return $$('[placeholder="Cari"]');
  }
  get filterZone() {
    return $("");
  }
  get filterRegional() {
    return $("");
  }
  get filterArea() {
    return $("");
  }
  get filterSalespoint() {
    return $("");
  }
  get filterDistrict() {
    return $("");
  }
  get filterTerritory() {
    return $("");
  }
  get filterRetailClassification() {
    return $("");
  }
  get filterSrcClassification() {
    return $("");
  }
  get filterSrcType() {
    return $("");
  }
  get btnLoaddata() {
    return $("div.pt-16.ng-star-inserted > button");
  }
  get btnExportImport() {
    return $$('[class="is-danger mat-raised-button"]');
  }
  get btnCheck() {
    return $("#btn-check");
  }

  get btnImport() {
    return $("div.p-0 > div > div:nth-child(1) > button");
  }
  get btnImportAfterClose() {
    return $("div:nth-child(1) > div:nth-child(3) > div > button");
  }
  get textRequestingImport() {
    return $("div.p-0 > div > div:nth-child(1) > label");
  }
  get popUpDialogImport() {
    return $('[role="dialog"] ng-component div  mat-toolbar div div span');
  }
  get inputAddFile() {
    return $('div.mat-dialog-content.ps > div > label input[type="file"]');
  }
  get progressImport() {
    return $('[role="progressbar"]');
  }
  get datatableRowImport() {
    return $$('[role="dialog"] datatable-scroller > datatable-row-wrapper');
  }
  get cellTableImport() {
    return $$(
      '[role="dialog"] datatable-scroller > datatable-row-wrapper > datatable-body-row > div > datatable-body-cell > div'
    );
  }
  get btnCloseDialogImport() {
    return $('[role="dialog"] button.mat-icon-button');
  }
  get btnKirimDialogImport() {
    return $('[role="dialog"] button.mat-raised-button');
  }
  get btnBatalDialogImport() {
    return $('[role="dialog"] button.mat-stroked-button');
  }

  get btnExport() {
    return $("div.p-0 > div > div:nth-child(2) > button");
  }
  get btnSimpan() {
    return $("#btn-simpan");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.titlePage.isExisting(), {
      timeout: 20000,
      timeoutMsg: "expected title page not existing after 20s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat Audience");
    await expect(browser).toHaveUrlContaining("dte/audience/create");
  }

  async pageCreatePersonalize() {
    await browser.pause(5000);
    await expect(this.titlePagePersonalize).toHaveText(
      "Buat Audience Personalize"
    );
    await expect(browser).toHaveUrlContaining(
      "dte/audience/create-personalize"
    );
  }

  async pageEdit() {
    await expect(this.titlePage).toHaveText("Detail Audience");
    await expect(browser).toHaveUrlContaining("dte/audience/edit");
  }

  async createImport(namaGrup, minAudience, maxAudience) {
    await browser.pause(10000);
    await this.namaGrup.setValue(namaGrup); //HWKND-Toko
    await this.jenis[0].scrollIntoView();
    await this.jenis[0].click(); //Tsm
    await this.limit[0].click(); //Batasi Audience
    await this.min.addValue(minAudience); //1
    await this.max.addValue(maxAudience); //10
    await this.type[0].click(); //Misi
    await browser.pause(8000);
  }

  async createImport1000(namaGrup) {
    await browser.pause(10000);
    await this.namaGrup.setValue(namaGrup); //HWKND-Toko
    await this.btnSimpan.scrollIntoView();
    await this.btnImport.click();
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/50importaudiencepersonalize.csv"
    );
    await browser.execute(function () {
      document.querySelector("div.mat-dialog-content.ps > div > label").style =
        "visibility:visible; overflow:visible;";
    });
    await this.inputAddFile.waitForDisplayed();
    await this.inputAddFile.setValue(remoteFilePath);
    await browser.pause(600000);
    await this.btnCloseDialogImport.click(); //Close
    await this.btnImport.click();
    await this.btnKirimDialogImport.click(); //Kirim
  }

  async createImportMitra(namaGrup) {
    await browser.pause(10000);
    await this.namaGrup.setValue(namaGrup); //HWKND-Toko
    await this.businessType.click();
    await this.selectTradeScheduler[2].click();
    await this.btnSimpan.scrollIntoView();
    await this.btnImport.click();
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/50importaudiencepersonalize.csv"
    );
    await browser.execute(function () {
      document.querySelector("div.mat-dialog-content.ps > div > label").style =
        "visibility:visible; overflow:visible;";
    });
    await this.inputAddFile.waitForDisplayed();
    await this.inputAddFile.setValue(remoteFilePath);
    await browser.pause(50000);
    await this.btnCloseDialogImport.click(); //Close
    await this.btnImport.click();
    await this.btnKirimDialogImport.click(); //Kirim
  }

  async createImportPersonalize(namaGrup) {
    await browser.pause(10000);
    await this.namaGrup.setValue(namaGrup);
    await this.publishMisi.click();
    await this.InputTextSearch[1].addValue("Test Selasa");
    await this.selectTradeScheduler[0].click();
    await this.btnCheck.scrollIntoView();
    await this.rbFixedPanel[2].click();
    await this.btnExportImport[1].click();
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/50importaudiencepersonalize.csv"
    );
    await browser.execute(function () {
      document.querySelector("div.mat-dialog-content.ps > div > label").style =
        "visibility:visible; overflow:visible;";
    });
    await this.inputAddFile.waitForDisplayed();
    await this.inputAddFile.setValue(remoteFilePath);
    await browser.pause(30000);
    await this.btnCloseDialogImport.click(); //Close
    await browser.pause(3000);
    await this.btnImportAfterClose.click();
    await this.btnKirimDialogImport.click(); //Kirim
    await browser.pause(3000);
    await this.btnCheck.click();
    await browser.pause(30000);
    await this.btnSimpan.click();
  }

  async createImportPersonalize200(namaGrup) {
    await browser.pause(10000);
    await this.namaGrup.setValue(namaGrup);
    await this.publishMisi.click();
    await this.InputTextSearch[1].addValue("Test Selasa");
    await this.selectTradeScheduler[0].click();
    //await this.selectTradeScheduler[2].click()
    await this.btnCheck.scrollIntoView();
    await this.rbFixedPanel[2].click();
    await this.btnExportImport[1].click();
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/51import200kaudiencepersonalize.csv"
    );
    await browser.execute(function () {
      document.querySelector("div.mat-dialog-content.ps > div > label").style =
        "visibility:visible; overflow:visible;";
    });
    await this.inputAddFile.waitForDisplayed();
    await this.inputAddFile.setValue(remoteFilePath);
    await browser.pause(190000);
    await this.btnCloseDialogImport.click(); //Close
    await this.btnImportAfterClose.click();
    await this.btnKirimDialogImport.click(); //Kirim
    await this.btnCheck.click();
    await browser.pause(60000);
    await this.btnSimpan.click();
    await browser.pause(60000);
  }

  async exportFile() {
    await browser.pause(10000);
    await this.btnExport.scrollIntoView();
    await this.btnExport.click();
    await browser.pause(8000);
  }

  async importAudience() {
    await this.btnImport.scrollIntoView();
    await this.btnImport.click();
  }

  async importFile() {
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/8export-template-audience-toko.csv"
    );
    await browser.execute(function () {
      document.querySelector("div.mat-dialog-content.ps > div > label").style =
        "visibility:visible; overflow:visible;";
    });
    await this.inputAddFile.waitForDisplayed();
    await this.inputAddFile.setValue(remoteFilePath);
    await browser.pause(10000);
    await this.btnCloseDialogImport.click(); //Close
    await this.btnImport.click();
  }

  async sendImportFile() {
    await this.btnKirimDialogImport.click(); //Kirim
  }

  async submitAudience() {
    await this.btnSimpan.waitForClickable();
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
    // await browser.pause(5000)
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new FormAudiencePage();
