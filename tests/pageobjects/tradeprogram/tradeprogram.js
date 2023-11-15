import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class TradeProgramPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerTradeProgram");
  }
  get btnCreate() {
    return $("#btn-create-trade");
  }
  get searchInput() {
    return $('input[id="search"]');
  } //masih pakai default id Angular
  get btnFilter() {
    return $$('[type="button"]');
  }

  //Table
  get datatableBody() {
    return $$("#datatable-body");
  }
  get dataRow() {
    return $$("#data-row");
  }
  get dataCell() {
    return $$("#data-cell");
  }
  get btnEdit() {
    return $$("#btn-edit");
  }
  get btnDelete() {
    return $$("#btn-delete");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 20s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async page2() {
    await browser.waitUntil(async () => await this.searchInput.isDisplayed(), {
      timeout: 20000,
      timeoutMsg: "expected title page not displayed after 20s",
    });
    await expect(this.searchInput).toBeDisplayed({ timeout: 6000 });
  }

  async pageList() {
    await this.searchInput.waitForExist();
    await expect(this.searchInput).toBeExisting();
    await expect(this.titlePage).toHaveText("Trade Program");
    await expect(browser).toHaveUrlContaining("dte/trade-program");
  }

  async createTradeProgram() {
    await expect(this.btnCreate).toBeClickable();
    await this.btnCreate.click();
  }

  async searchTradeProgram(tradeProgramName) {
    await expect(this.searchInput).toBeDisplayed();
    await browser.pause(3000);
    await this.searchInput.setValue(tradeProgramName);
    await browser.pause(3000);
    await this.btnFilter[1].click();
    await browser.pause(5000);
  }

  async searchResult(tradeProgramName) {
    await browser.waitUntil(async () => await this.dataRow[1].isExisting(), {
      timeout: 50000,
      timeoutMsg: "expected search result not displayed after 50s",
    });
    await browser.pause(3000);
    // await this.dataCell[1].$('div > span').waitForExist();
    await expect(this.dataCell[0].$("div > span")).toBeExisting();
    await expect(this.dataCell[0].$("div > span")).toBeDisplayed();
    await expect(this.dataCell[0].$("div > span")).toHaveText(tradeProgramName);
  }

  async detailTradeProgram() {
    //click name
    await this.dataRow.$$("option")[25].click();
  }

  async editTradeProgram() {
    //click edit button
    await this.btnEdit.$$("option")[25].click();
  }
  async editTP() {
    //click edit button
    await this.btnEdit[0].click();
  }
  async editTradeProgram(namaTemplate) {
    //detail by click name
    await expect(this.dataRow.$$("#data-cell")[0].$("div > span")).toHaveText(
      namaTsm
    );
    await this.btnEdit[0].click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/trade-program");
  }
}

export default new TradeProgramPage();
