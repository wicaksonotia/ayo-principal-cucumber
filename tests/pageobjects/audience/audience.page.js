import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class AudiencePage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerDte.audience.text1");
  }
  get btnCreate() {
    return $("#btn-create-audience");
  }
  get searchInput() {
    return $("input#search");
  }
  get tabPersonalize() {
    return $$('[role="tab"]');
  }

  //Table
  get datatableBody() {
    return $("#datatable-body");
  }
  get dataRow() {
    return $$("#data-row");
  }
  get dataCell() {
    return $$("#nama-group");
  }
  get btnEdit() {
    return $$("#btn-edit");
  }
  get btnDelete() {
    return $$("#btn-delete");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.searchInput.isExisting(), {
      timeout: 400000,
      timeoutMsg: "expected search input not existing after 600s",
    });
    // await expect(this.searchInput).toBeExisting();
    // await this.searchInput.waitForDisplayed();
    // await expect(this.searchInput).toBeDisplayed();
    // await (this.titlePage).waitForDisplayed()
    // await expect(this.titlePage).toBeDisplayed({timeout:6000})
  }

  async pageList() {
    // await expect(this.titlePage).toHaveText('Audience')
    await expect(browser).toHaveUrlContaining("dte/audience");
  }

  async goToPersonalize() {
    await browser.pause(3000);
    await this.tabPersonalize[1].click();
  }

  async createAudience() {
    await browser.pause(8000);
    await this.btnCreate.click();
  }

  async searchAudience(namaGrupAudience) {
    await browser.pause(3000);
    await expect(this.searchInput).toBeDisplayed();
    await this.searchInput.setValue(namaGrupAudience);
    // await browser.pause(7000)
  }

  async searchResult(namaGrupAudience) {
    // await browser.waitUntil(
    //     async () => (await this.dataCell[0].isExisting()),
    //     {
    //         timeout: 60000,
    //         timeoutMsg: 'expected search result not existing after 60s'
    //     }
    // )
    await browser.pause(3000);
    // await this.dataCell[0].$('div > span').waitForExist();
    await expect(this.dataCell[0]).toBeExisting();
    await expect(this.dataCell[0]).toHaveText(namaGrupAudience);
    // await browser.pause(3000)
  }

  async editAudience() {
    //click edit button
    await this.btnEdit[0].click();
  }

  async detailsAudience(namaGrupAudience) {
    //detail by click name
    // await this.dataRow.$$('option')[25].click();
    await expect(this.dataRow.$$("#data-cell")[0].$("div > span")).toHaveText(
      namaGrupAudience
    );
    await this.dataRow.$$("#data-cell")[0].$("div > span").click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/audience");
  }
}

export default new AudiencePage();
