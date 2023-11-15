import { expectChai } from "chai";
import Page from "../page";
import { pause } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class TaskSequencingPage extends Page {
  get MenuTaskSequencingPage() {
    return $("#menu-339");
  }
  //define selectors using getter methods
  get titlePage() {
    return $("#headerTaskSequencing");
  }
  get titlePage2() {
    return $("#headerDte.task_sequencing.text1");
  }
  get btnCreate() {
    return $("#btnBuatTaskSequencing");
  }
  get searchInput() {
    return $("#search");
  }
  get tabMenu() {
    return $$('mat-tab-header div[role="tab"]');
  } // Default, Personalize
  get titleTab() {
    return $("mat-tab-body div> h2");
  }

  //Table
  get filterStatus() {
    return $('datatable-header-cell[title="Status"]');
  }
  get status() {
    return $$("#status");
  }
  get datatableBody() {
    return $("#datatable-body");
  }
  get dataRow() {
    return $("#data-row");
  }
  get dataCell() {
    return $$("#data-cell");
  }
  get btnDuplicate() {
    return $("#btn-duplikat");
  }
  get btnRequestFile() {
    return $("#btn-request_file");
  }
  get btnExport() {
    return $("#btn-export");
  }
  get btnEdit() {
    return $$("#btn-edit");
  }
  get btnDelete() {
    return $("#btn-delete");
  }
  get lastPage() {
    return $('a[aria-label="go to last page"]');
  }
  get kolomNama() {
    return $$('[class="row-name ng-star-inserted"]');
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.searchInput.isDisplayed(), {
      timeout: 1000000,
      timeoutMsg: "expected search input not displayed after 3000s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async page2() {
    await browser.waitUntil(async () => await this.searchInput.isDisplayed(), {
      timeout: 1000000,
      timeoutMsg: "expected search input not displayed after 3000s",
    });
    await expect(this.searchInput).toBeDisplayed({ timeout: 6000 });
  }

  async pageList() {
    // await this.searchInput.waitForExist();
    // await expect(this.searchInput).toBeExisting()
    // await expect(this.titlePage2).toHaveText('Task Sequencing')
    await this.MenuTaskSequencingPage.scrollIntoView();
    await this.MenuTaskSequencingPage.click();
    await expect(browser).toHaveUrlContaining("dte/task-sequencing");
  }

  async pageList2() {
    //await this.searchInput.waitForExist();
    //await expect(this.searchInput).toBeExisting()
    await expect(this.titlePage).toHaveText("Task Sequencing");
    await browser.pause(3000);
    //await expect(browser).toHaveUrlContaining('dte/task-sequencing')
  }

  async getAlert() {
    const alertSuccess = await browser.getAlertText();
  }

  async tabDefault() {
    await this.tabMenu[0].click();
    await expect(this.titleTab).toHaveText("Task Sequencing Management");
  }

  async tabPersonalize() {
    await this.tabMenu[1].click();
    await expect(this.titleTab).toHaveText("Personalize Management");
  }

  async createTaskSequencing() {
    await this.btnCreate.waitForExist();
    await this.btnCreate.waitForClickable();
    await expect(this.btnCreate).toBeExisting();
    await expect(this.btnCreate).toBeClickable();
    await this.btnCreate.click();
  }

  async searchTaskSequencing(taskSequencingName) {
    await this.searchInput.setValue(taskSequencingName);
    await pause();
  }

  async searchResult(taskSequencingName) {
    await browser.waitUntil(
      async () => await this.dataCell[0].$("div > span").isExisting(),
      {
        timeout: 10000,
        timeoutMsg: "expected search result not displayed after 10s",
      }
    );
    await browser.pause(10000);
    // await this.dataCell[1].$('div > span').waitForExist();
    await expect(this.dataCell[0].$("div > span")).toBeExisting();
    await expect(this.dataCell[0].$("div > span")).toHaveText(
      taskSequencingName
    );
  }

  async reqFile() {
    await this.btnRequestFile.scrollIntoView();
    await this.btnRequestFile.click();
    await browser.pause(5000);
  }

  async reqFile2() {
    await this.btnRequestFile.scrollIntoView();
    await browser.pause(10000);
  }
  async detailTask(taskSequencingName) {
    //click name
    await browser.pause(10000);
    //await expect(this.dataCell[0].$('div > span')).toBeExisting();
    //await expect(this.dataCell[0].$('div > span')).toHaveText(taskSequencingName);
    // await this.dataCell[0].$("div > span").scrollIntoView();
    await this.kolomNama[0].click();
  }

  async editTask(nameTSM) {
    //click edit button
    await this.searchInput.setValue(nameTSM);
    await pause();
    //await expect(this.btnEdit[0]).toBeExisting()
    await this.btnEdit[0].scrollIntoView();
    await this.btnEdit[0].click();
    await pause();
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

  async duplicateTSM() {
    await this.btnDuplicate.scrollIntoView();
    await browser.pause(3000);
    await this.btnDuplicate.click();
    await browser.pause(3000);
  }

  async exportTSM() {
    await this.btnExport.scrollIntoView();
    await this.btnExport.click();
    await browser.pause(8000);
  }
  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/task-sequencing");
  }
}

export default new TaskSequencingPage();
