import Page from "../page";
const path = require("path");
import { setStartEndDateTime } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class FormCoinDisbursementPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerCoinDisbursement");
  }
  get titlePageEdit() {
    return $("#headerCoinDisbursement");
  }
  get btnSimpan() {
    return $('div[class="button-header"] button');
  }

  get tabMenu() {
    return $$('div[role="tablist"] > div > div');
  } //Penukaran Coin, TargetPenerima
  //Tab Penukaran Coin
  get namaProgramPenukaranKoin() {
    return $('input[formcontrolname="name"]');
  }
  get coinValution() {
    return $('input[formcontrolname="coin_valuation"]');
  }
  get startDatePenukaranKoin() {
    return $('input[formcontrolname="start_date"]');
  }
  get endDatePenukaranKoin() {
    return $('input[formcontrolname="end_date"]');
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
  get drpdwnGroupTradeProgram() {
    return $('mat-select[formcontrolname="group_trade_id"]');
  }
  get selectGroupTradeProgram() {
    return $$('mat-option[role="option"]');
  }
  get opsiPenukaran() {
    return $$("mat-checkbox.example-margin > label > div");
  } //TransferBank, SaldoPojokBayar
  //Tab Target Penerima
  get targetedRetailerTP() {
    return $("#mat-checkbox-38-input");
  }
  get filterZoneTP() {
    return $("");
  }
  get filterRegionalTP() {
    return $("");
  }
  get filterAreaTP() {
    return $("");
  }
  get filterSalespointTP() {
    return $("");
  }
  get filterDistrictTP() {
    return $("");
  }
  get filterTerritoryTP() {
    return $("");
  }
  get filterRetailClassificationTP() {
    return $("");
  }
  get filterSrcClassificationTP() {
    return $("");
  }
  get filterSrcTypeTP() {
    return $("");
  }
  get btnLoaddataTP() {
    return $("div.pt-16.ng-star-inserted > button");
  }
  get btnExportImportTP() {
    return $$('div[class="p-16 export"] button');
  }
  get btnUnpublishTP() {
    return $("div.confirm button.confirmation-button");
  }
  get btnSimpanTP() {
    return $('button[class="confirmation-button mat-raised-button"]');
  }
  //List Penukaran Coin
  get searchInput() {
    return $("");
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
  get drpdwnGTP() {
    return $('mat-select[formcontrolname="group_trade_program"]');
  }
  get selectGTP() {
    return $$('mat-option[role="option"] > span');
  }
  get namaProgramPK() {
    return $('mat-select[formcontrolname="name"]');
  }
  get drpdwnOpsiPenukaran() {
    return $('mat-select[formcontrolname="opsi_penukaran"]');
  }
  get selectOpsiPenukaran() {
    return $$('mat-option[role="option"]');
  } //Semua, Transfer Bank, Saldo Pojok Bayar
  get drpdwnStatusPembayaran() {
    return $('mat-select[formcontrolname="payment_status"]');
  }
  get selectStatusPembayaran() {
    return $$('mat-option[role="option"]');
  } //Semua, Belum Bayar,Sudah Bayar,Gagal Bayar
  get btnExportImport() {
    return $$("div.export > button");
  }
  get popupImportLPC() {
    return $('[class="dialog-content-wrapper"]');
  }
  get inputPopupImportLPC() {
    return $(
      "app-import-exchange-coin > div > div.mat-dialog-content > div > label > input"
    );
  }
  get listRedeemPopupImportLPC() {
    return $$("table > tbody > tr > td");
  }
  get datatableheadercell() {
    return $$("datatable-header-cell.datatable-header-cell");
  }
  get listDataPenukaranCoin() {
    return $$("datatable-body-cell > div > span");
  }
  get btnKirimPopupImportLPC() {
    return $("button.mat-raised-button.mat-primary");
  }
  get btnBatalPopupImportLPC() {
    return $("");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 20000,
      timeoutMsg: "expected title page not displayed after 20s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat Coin Disbursement");
    await expect(browser).toHaveUrlContaining("dte/coin-disbursement/create");
  }

  async pageEdit() {
    async () => await this.titlePageEdit.isDisplayed(),
      {
        timeout: 20000,
        timeoutMsg: "expected title page not displayed after 20s",
      };
    await expect(this.titlePageEdit).toBeDisplayed({ timeout: 6000 });
    await expect(this.titlePageEdit).toHaveText("Ubah Coin Disbursement");
    await expect(browser).toHaveUrlContaining("dte/coin-disbursement/edit");
  }

  async viewTabPenukaranCoin() {
    await this.tabMenu[0].waitForClickable();
    await expect(this.tabMenu[0]).toBeClickable();
    await this.tabMenu[0].click();
  }

  async viewTabTargetPenerima() {
    await this.tabMenu[1].waitForClickable();
    await expect(this.tabMenu[1]).toBeClickable();
    await this.tabMenu[1].click();
  }

  async viewTabListPenukaranCoin() {
    await this.tabMenu[2].waitForClickable();
    await expect(this.tabMenu[2]).toBeClickable();
    await this.tabMenu[2].click();
    await browser.pause(2000);
  }

  async createNew(namaProgramPenukaranKoin, coinValution) {
    await this.namaProgramPenukaranKoin.setValue(namaProgramPenukaranKoin);
    await this.coinValution.setValue(coinValution);

    await setStartEndDateTime(
      this.startDatePenukaranKoin,
      this.endDatePenukaranKoin,
      this.popUpCalendar,
      this.startTime,
      this.endTime
    );

    await this.drpdwnGroupTradeProgram.scrollIntoView();
    await this.drpdwnGroupTradeProgram.click();
    await this.selectGroupTradeProgram[100].scrollIntoView();
    await this.selectGroupTradeProgram[100].click(); //Group Trade Weekend
    await this.selectGroupTradeProgram[105].scrollIntoView();
    await this.selectGroupTradeProgram[105].click(); //Group Zala
    await this.selectGroupTradeProgram[219].scrollIntoView();
    await this.selectGroupTradeProgram[219].click(); //HanifahWknd-GTP1
    await browser.keys("Escape");
  }

  async selectOpsiPenukaranTB() {
    await this.opsiPenukaran[0].scrollIntoView();
    await this.opsiPenukaran[0].click();
  }

  async selectOpsiPenukaranSPBB() {
    await this.opsiPenukaran[1].scrollIntoView();
    await this.opsiPenukaran[1].click();
  }

  async exportDetailLPC() {
    await this.btnExportImport[0].waitForClickable();
    await expect(this.btnExportImport[0]).toBeClickable();
    await this.btnExportImport[0].click();
    await browser.pause(5000);
  }

  async tableListPenukaranCoin(namaProgramPenukaranKoin) {
    await this.datatableheadercell[0].scrollIntoView();
    await this.listDataPenukaranCoin[0].waitForExist(); //row 1 list
    await expect(this.listDataPenukaranCoin[0]).toHaveText(
      namaProgramPenukaranKoin
    );
    await browser.pause(2000);
  }

  async importLPC(namaProgramPenukaranKoin) {
    await this.btnExportImport[1].waitForClickable();
    await this.btnExportImport[1].click(); //Import xls
    // await browser.execute(function () {
    //     document.querySelector('app-import-exchange-coin > div > div.mat-dialog-content > div > label').style="visibility: visible; overflow: visible;";
    //   });
    // await browser.pause(7000);
    // await this.inputPopupImportLPC.scrollIntoView()
    // await this.inputPopupImportLPC.waitForDisplayed()
    // const filePathAttach = path.join(__dirname, '../../files-to-upload/coindisbursement/list-penukaran-coin-8029417202112221640155082.xls');
    // const remoteFilePathAddAttach = await browser.uploadFile(filePathAttach, {setTimeout:60000});
    // await (await this.inputPopupImportLPC).setValue(remoteFilePathAddAttach, {setTimeout:60000});
    await browser.pause(40000);
    await this.listRedeemPopupImportLPC[0].waitForExist(); //row 1 list imported xls
    await expect(this.listRedeemPopupImportLPC[0]).toHaveText(
      namaProgramPenukaranKoin
    );
  }

  async kirimImportLPC() {
    await this.btnKirimPopupImportLPC.waitForDisplayed();
    await expect(this.btnKirimPopupImportLPC).toBeClickable();
    await this.btnKirimPopupImportLPC.click();
  }

  async exportListRedeemLPC() {
    await this.btnExportImport[2].waitForClickable();
    await expect(this.btnExportImport[2]).toBeClickable();
    await this.btnExportImport[2].click();
    await browser.pause(5000);
  }

  async saveTP() {
    await browser.pause(10000);
    await this.btnSimpanTP.click();
  }

  async submitForm() {
    await this.btnSimpan.waitForClickable();
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
    await browser.pause(5000);
  }

  async submitEdit() {
    await this.btnSubmitEdit.waitForClickable();
    await expect(this.btnSubmitEdit).toBeClickable();
    await this.btnSubmitEdit.click();
    await browser.pause(5000);
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new FormCoinDisbursementPage();
