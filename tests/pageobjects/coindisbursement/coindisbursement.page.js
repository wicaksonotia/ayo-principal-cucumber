import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class CoinDisbursementPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerCoinDisbursement");
  }
  get btnCreate() {
    return $('div[class="button-header"] button');
  }
  get searchInput() {
    return $$("input.mat-input-element");
  }
  get tabCoinDisbursement() {
    return $('[class="mat-tab-label mat-ripple ng-star-inserted"]');
  }
  get tabDataLog() {
    return $('[class="mat-tab-label mat-ripple ng-star-inserted"]');
  }
  get cellBudgetApprovalStatus() {
    return $$("datatable-body-cell sort-active ng-star-inserted");
  }
  get menuCoinR() {
    return $("#menu-343");
  }
  //Table
  get datatableBody() {
    return $("datatable-body.datatable-body");
  }
  get dataRow() {
    return $$("datatable-row-wrapper.datatable-row-wrapper");
  }
  get dataCell() {
    return $$("datatable-body-cell.datatable-body-cell div span");
  }
  get cellNamaProgram() {
    return $('datatable-header-cell[title="Nama Program Penukaran"]');
  }
  get namaProgramPenukaran() {
    return $$('span[class="row-name ng-star-inserted"]');
  }
  get status() {
    return $$("p.status");
  }
  get btnExport() {
    return $$('button[mattooltip="Export Detail"]');
  }
  get btnImport1() {
    return $('[class="is-danger mr-24 mb-24 mat-raised-button"]');
  }
  get btnImport() {
    return $$("#btn-import");
  }
  get popUpDialogImport() {
    return $('[class="dialog-content-wrapper"]');
  }
  get inputAddFile() {
    return $('div.mat-dialog-content.ps > div > label input[type="file"]');
  }
  get btnKirimDialogImport() {
    return $('[class="mat-raised-button mat-primary"]');
  }
  get btnEdit() {
    return $$(
      "datatable-body-cell:nth-child(11) > div > div > button:nth-child(2)"
    );
  }
  get btnDelete() {
    return $$('button[mattooltip="Hapus Coin Disbursement"]');
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 300000,
      timeoutMsg: "expected title page not displayed after 300s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageList() {
    //await this.menuCoinR.scrollIntoView()
    //await this.menuCoinR.click()
    //await this.searchInput[1].waitForExist();
    //await expect(this.searchInput[1]).toBeExisting()
    // await expect(this.titlePage).toHaveText('Daftar Coin Disbursement')
    await expect(browser).toHaveUrlContaining("dte/coin-disbursement");
    await expect(this.datatableBody).toBeExisting();
    await expect(this.dataRow).toBeExisting();
  }

  async pageList2() {
    await this.menuCoinR.scrollIntoView();
    await this.menuCoinR.click();
    await this.searchInput[1].waitForExist();
    await expect(this.searchInput[1]).toBeExisting();
    // await expect(this.titlePage).toHaveText('Daftar Coin Disbursement')
    await expect(browser).toHaveUrlContaining("dte/coin-disbursement");
    await expect(this.datatableBody).toBeExisting();
    await expect(this.dataRow).toBeExisting();
  }

  // async getAlert () {
  //     const alertSuccess = await browser.getAlertText();
  //     console.log(alertSuccess);
  // }

  async createNew() {
    await this.btnCreate.waitForExist();
    await expect(this.btnCreate).toBeClickable();
    await this.btnCreate.click();
    await browser.pause(15000);
  }

  async openTabCoinDisbursement() {
    await this.tabCoinDisbursement.click();
  }

  async openTabDataLog() {
    await this.tabDataLog.waitForDisplayed();
    await this.tabDataLog.click();
    await browser.pause(5000);
  }

  async importFile() {
    await this.btnImport1.click();
    // await this.btnImport1.click()
    await this.popUpDialogImport.waitForExist();
    // await browser.pause(5000);
    // await this.inputAddFile.waitForDisplayed()
    // await this.inputAddFile.click()
    await browser.pause(30000);
    await this.btnKirimDialogImport.click();
  }

  async viewBtnImport() {
    await this.btnImport[0].scrollIntoView();
    await browser.pause(3000);
    await this.btnImport[0].waitForDisplayed();
  }

  async search(namaProgramPenukaranKoin) {
    await this.searchInput[1].scrollIntoView();
    await this.searchInput[1].setValue(namaProgramPenukaranKoin);
    // await browser.pause(3000)
  }

  async searchResult(namaProgramPenukaranKoin) {
    await browser.waitUntil(async () => await this.dataCell[0].isExisting(), {
      timeout: 20000,
      timeoutMsg: "expected search result not displayed after 20s",
    });
    await browser.pause(3000);
    // await this.dataCell[1].$('div > span').waitForExist();
    await expect(this.dataCell[0]).toBeExisting();
    await expect(this.dataCell[0]).toHaveText(namaProgramPenukaranKoin);
  }

  // async checkStatus (status) {
  //     console.log('Status' + await this.statusTask.toHaveText(status))
  // }

  async editATask(namaProgramPenukaranKoin) {
    await this.cellNamaProgram.scrollIntoView();
    console.log("List Coin Disbursement: ");
    const titleTask = await this.namaProgramPenukaran;
    titleTask.forEach((element) => {
      const tasks = element.getText();
      // console.log(tasks)       //output: Promise { <pending> }
      tasks.then(function (result) {
        console.log(result); //output: Coin Disbursement list
        if (String(result) == namaProgramPenukaranKoin) {
          element.click();
        }
      });
    });
  }

  async editTask() {
    //click edit button
    // await browser.execute(() => document.body.style.zoom='70%')
    await browser.pause(3000);
    await expect(this.btnEdit[0]).toBeExisting();
    await this.btnEdit[0].click();
    await browser.pause(10000);
  }

  async editStatus(statusTsm) {
    //click edit button by status
    // await this.filterStatus.waitForExist();
    // await expect(this.filterStatus).toBeClickable()
    // await this.filterStatus.click()
    // await browser.pause(2000)
    // await expect(this.lastPage).toBeClickable()
    // await this.lastPage.click()
    // await browser.pause(2000)
    await expect(this.status[0]).toHaveText(statusTsm);
    await expect(this.btnEdit[0]).toBeExisting();
    await this.btnEdit[0].click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/coin-disbursement");
  }
}

export default new CoinDisbursementPage();
