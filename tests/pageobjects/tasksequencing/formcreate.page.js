import Page from "../page";
import { setStartEndDateTime, setDropdown, pause } from "../../helper/commands";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class FormCreatePage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerTaskSequencing");
  }

  get btnExportCoin() {
    return $("#btn-export-coin");
  }
  get btnDownloadFile() {
    return $("#btnDownloadFile");
  }

  get btnImportCoin() {
    return $("#btn-import-coin");
  }
  get requestingImport() {
    return $("div.button-header > div > div:nth-child(3) > label");
  }

  get inputFileImportCoin() {
    return $("#upload-file-import");
  }
  get popUpDialogImport() {
    return $('[role="dialog"] ng-component div  mat-toolbar div div span');
  }
  get btnClosePopUpImportCoin() {
    return $('button[aria-label="Close Dialog"]');
  }
  get datatableHeaderImportCoin() {
    return $("datatable-header.datatable-header");
  }
  get rowTableImportedCoin() {
    return $$("datatable-row-wrapper > datatable-body-row");
  }
  get importedGTP() {
    return $("#data-cell-[GTP]");
  }
  get importedNamaProgram() {
    return $("#data-cell-[NamaProgram]");
  }
  get importedNamaAudience() {
    return $("#data-cell-[NamaAudience]");
  }
  get importedNamaRetailer() {
    return $("#data-cell-[NamaRetailer]");
  }
  get importedStatusRetailer() {
    return $("#data-cell-[StatusRetailer]");
  }
  get importedCurrentCoinTotal() {
    return $("#data-cell-[CurrentCoinTotal]");
  }
  get reasonImportCoin() {
    return $("#alasanAdjustmentCoin");
  }
  get dropdownUserPenerima() {
    return $("#name");
  }
  get searchUserPenerima() {
    return $("div > input#searchUserPenerima");
  }
  get listUserPenerima() {
    return $$('mat-option[role="option"] > span');
  }
  get emailPenerima() {
    return $("#emailPenerima");
  }
  get btnKirimImportCoin() {
    return $("div > #btn-submit-import");
  }
  get headerPopupConfirmImport() {
    return $("h1#headerPopupConfirmImport");
  }
  get btnConfirmImport() {
    return $("#btn-confirm-import");
  }
  get btnCancelImport() {
    return $("#btn-cancel-import");
  }
  get btnBatalImportCoin() {
    return $("#btnBatalImportCoin");
  }

  get inputNama() {
    return $("#input-nama");
  }
  get dropdownTradeProgram() {
    return $("#tradeCreatorId");
    // return $('[formcontrolname="trade_creator_id"]');
    // return $('mat-select[formcontrolname="trade_creator_id"]');
  }
  get searchTP() {
    return $("#select-search-trade > div > input");
  } //#select-search-trade > div > input
  get selectTradeProgram() {
    // return $$('[role="option"]');
    return $$(".mat-option-text");
  }

  get dropdownGroupAudience() {
    return $("#tradeAudienceGroupId");
  }
  get searchGroupAudience() {
    return $("#select-search-audience > div > input");
  }
  get selectGroupAudience() {
    return $$('[role="option"]');
  }

  get startDate() {
    return $('div > input[formcontrolname="start_date"]');
  }
  get endDate() {
    return $('div > input[formcontrolname="end_date"]');
  }
  get popUpCalendar() {
    return $("mat-datepicker-content tbody.mat-calendar-body");
  }
  get startTime() {
    return $('div > input[formcontrolname="start_time"]');
  }
  get endTime() {
    return $('div > input[formcontrolname="end_time"]');
  }
  get popUpTimeStart() {
    return $("div.clock-face__container.ng-star-inserted");
  }
  get popUpTimeEnd() {
    return $("div.clock-face__inner.ng-star-inserted");
  }
  get btnTimePicker() {
    return $$('[class="timepicker-button"]');
  }

  get dataCell() {
    return $$("#data-cell");
  }

  get btnSubmit() {
    return $("button#btnSubmitTaskSequencing");
  }
  //Export

  //Import
  get btnKirim() {
    return $("#btn-submit-import");
  }
  get btnBatal() {
    return $("");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await this.titlePage.waitForExist();
    await this.titlePage.waitForDisplayed();
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async clickData() {
    await this.dataCell[0].scrollIntoView();
    await this.dataCell[0].click();
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat Task Sequencing");
    await expect(browser).toHaveUrlContaining("dte/task-sequencing/create");
  }

  async pageEdit() {
    await expect(this.titlePage).toHaveText("Ubah Task Sequencing");
    await expect(browser).toHaveUrlContaining("dte/task-sequencing/edit");
  }

  async pageDetail() {
    await expect(this.titlePage).toHaveText("Detail Task Sequencing");
    await expect(browser).toHaveUrlContaining("dte/task-sequencing/detail");
  }

  async formAddPage() {
    await this.titlePage.waitForExist();
    await this.titlePage.waitForDisplayed();
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
    await expect(browser).toHaveUrlContaining("dte/task-sequencing/create");
    await expect(this.titlePage).toHaveText("Buat Task Sequencing");
  }

  async formEditPage() {
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
    await expect(this.titlePage).toHaveText("Ubah Task Sequencing");
    await expect(browser).toHaveUrlContaining("dte/task-sequencing/edit");
  }

  async formDetailPage() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 20000,
      timeoutMsg: "expected title page page not displayed after 20s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
    await expect(browser).toHaveUrlContaining("dte/task-sequencing/detail");
    await expect(this.titlePage).toHaveText("Detail Task Sequencing");
  }

  async createTSM(
    nameTSM,
    tradeProgram,
    groupAudience,
    valueSearchTP,
    valueSearchAudience
  ) {
    await this.inputNama.setValue(nameTSM);
    await pause();
    await this.dropdownTradeProgram.click();
    await pause();
    await this.searchTP.setValue(tradeProgram);
    await browser.pause(12000);
    await this.selectTradeProgram[0].click();
    // await setDropdown(this.selectTradeProgram, tradeProgram);

    await this.dropdownGroupAudience.click();
    await pause();
    await this.searchGroupAudience.setValue(groupAudience);
    await browser.pause(14000);
    await this.selectGroupAudience[0].waitForExist();
    await this.selectGroupAudience[0].click();
    await this.searchGroupAudience.waitForExist({ reverse: true });

    await this.btnSubmit.scrollIntoView();
    await pause();
    // ==========untuk set starDate and endDate==========
    await setStartEndDateTime(
      this.startDate,
      this.endDate,
      this.popUpCalendar,
      this.startTime,
      this.endTime
    );
  }

  async editTSM2(nameTSM) {
    await this.inputNama.addValue("");
    await this.inputNama.setValue(nameTSM);
    await browser.pause(3000);
  }

  async exportFile() {
    await this.btnExportCoin.click();
    await browser.pause(10000);
  }

  async downloadExportFile() {
    // await browser.waitUntil(
    //   async () => await this.btnDownloadFile.isDisplayed(),
    //   {
    //     timeout: 100000,
    //     timeoutMsg: "expected button Download File not displayed after 60s",
    //   }
    // );
    // await expect(this.btnDownloadFile).toBeDisplayed();
    // await expect(this.btnDownloadFile).toBeClickable();
    await this.btnDownloadFile.click();
  }

  async importFile() {
    await this.btnImportCoin.waitForClickable();
    await this.btnImportCoin.click(); //Import xls
    await pause();
  }

  async uploadImportFile() {
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/6exportimport-coin-Adjustment-Coin.xlsx"
    );
    await browser.execute(function () {
      document.querySelector("#import-coin > label").style =
        "visibility: visible; overflow: visible;";
    });
    await pause();
    await this.inputFileImportCoin.setValue(remoteFilePath);
    await pause();
  }

  async userPenerimaCoinAdj(reasonImportCoin, namaPenerimaImported) {
    await this.datatableHeaderImportCoin.scrollIntoView();
    await this.rowTableImportedCoin[0].waitForExist(); //row 1 list imported xls, di-command karna window size terlalu lebar sehingga hanya tampil sedikit
    await this.reasonImportCoin.setValue(reasonImportCoin);
    await this.dropdownUserPenerima.click();
    await this.searchUserPenerima.waitForExist();
    await this.searchUserPenerima.setValue(namaPenerimaImported);
    await browser.pause(3000);
    await this.listUserPenerima[0].waitForExist();
    await this.listUserPenerima[0].waitForDisplayed();
    await expect(this.listUserPenerima[0]).toBeDisplayed();
    await this.listUserPenerima[0].click();
    // await this.emailPenerima.waitForExist()
    // await this.emailPenerima.toHaveText(emailPenerimaImported)
    await browser.pause(2000);
  }

  async closePopUpImport() {
    await this.btnClosePopUpImportCoin.click();
    await browser.pause(3000);
  }

  async sendImportFile() {
    await this.btnKirimImportCoin.click();
  }

  async confirmImport() {
    await this.headerPopupConfirmImport.waitForExist();
    await this.headerPopupConfirmImport.waitForDisplayed();
    await expect(this.headerPopupConfirmImport).toBeDisplayed();
    await this.btnConfirmImport.click();
  }

  async cancelConfirmImport() {
    await this.headerPopupConfirmImport.waitForExist();
    await this.headerPopupConfirmImport.waitForDisplayed();
    await expect(this.headerPopupConfirmImport).toBeDisplayed();
    await this.btnCancelImport.click();
  }

  async successImportFile() {
    await this.btnImportCoin.waitForEnabled({ reverse: true });
    await expect(this.btnImportCoin).toBeDisabled();
    await expect(this.requestingImport).toHaveText("Requesting IMPORT");
  }

  async cancelImportFile() {
    await this.btnBatalImportCoin.click();
  }

  async submitTsm() {
    await this.btnSubmit.scrollIntoView();
    await this.btnSubmit.waitForClickable();
    await expect(this.btnSubmit).toBeClickable();
    await this.btnSubmit.click();
    await browser.pause(5000);
  }

  async submitEditTsm() {
    await this.btnSubmit.waitForClickable();
    await expect(this.btnSubmit).toBeClickable();
    await this.btnSubmit.click();
    await browser.pause(5000);
  }

  async cekDetail() {
    await expect(this.btnSubmit).toBeClickable();
    await this.btnSubmit.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new FormCreatePage();
