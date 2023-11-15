import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class SubGTPPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get btnCreate() {
    return $("#btnCreate");
  }
  get table() {
    return $('[class="MuiBox-root jss14"]');
  }
  get searchInput() {
    return $("#search");
  }

  get MenuSgpt() {
    return $("#menu-243");
  }
  //Table
  get datatableBody() {
    return $("div.MuiDataGrid-renderingZone");
  }
  get dataRow() {
    return $$("div.MuiDataGrid-row");
  }

  get cellNama() {
    return $$("#columnTitle");
  }
  get nama() {
    return $$("#cellName");
  }
  get wbs() {
    return $$("#cellWBS");
  }
  get approver() {
    return $$("#cellApprover");
  }
  get status() {
    return $$("#cellStatus");
  }

  get btnEdit() {
    return $$("#btnEdit");
  }
  get btnDelete() {
    return $$("#btnDelete");
  }
  get notifMessage() {
    return $$("#notifMessage");
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

  //a method to encapsule automation code to interact with the page
  async page() {
    // await browser.switchToParentFrame()
    await browser.pause(20000);
    await browser.switchToFrame(0);
    await browser.pause(9000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 10000,
      timeoutMsg: "expected title page not displayed after 10s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageSGPT() {
    await this.MenuSgpt.scrollIntoView();
    await this.MenuSgpt.click();
  }

  async pageList() {
    await browser.pause(3000);
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await this.searchInput.waitForExist();
    await expect(this.searchInput).toBeExisting();
    await expect(this.btnCreate).toBeExisting();
    await expect(this.titlePage).toHaveText("Sub Group Trade Program");
    await expect(browser).toHaveUrlContaining("dte/sub-group-trade-program");
    // await expect(this.datatableBody).toBeExisting()
    // await expect(this.dataRow).toBeExisting()
  }

  async createNew() {
    await expect(this.btnCreate).toBeClickable();
    await this.btnCreate.click();
  }

  async search(nama) {
    await expect(this.searchInput).toBeDisplayed();
    await this.searchInput.setValue(nama);
    // await browser.pause(3000)
  }

  async search1(nama) {
    await this.table.scrollIntoView();
    await this.searchInput.setValue(nama);
    await browser.pause(3000);
  }

  async searchResult(nama) {
    await browser.waitUntil(async () => await this.nama[0].isExisting(), {
      timeout: 20000,
      timeoutMsg: "expected search result not displayed after 20s",
    });
    await browser.pause(3000);
    await expect(this.nama[0]).toBeExisting();
    await expect(this.nama[0]).toHaveText(nama);
    // await this.nama[0].click();
  }

  async viewDetailATask(nama) {
    await this.cellNama.scrollIntoView();
    console.log("List Sub Group Trade Program: ");
    const titleTask = await this.nama;
    titleTask.forEach((element) => {
      const tasks = element.getText();
      // console.log(tasks)       //output: Promise { <pending> }
      tasks.then(function (result) {
        console.log(result); //output: Employee Name list
        if (String(result) == nama) {
          element.click();
        }
      });
    });
  }

  async editSubGTP() {
    // await browser.execute(() => document.body.style.zoom='70%')
    await browser.pause(3000);
    await this.btnEdit[0].scrollIntoView();
    await expect(this.btnEdit[0]).toBeExisting();
    await this.btnEdit[0].click();
  }

  async deleteSubGTP() {
    // await browser.execute(() => document.body.style.zoom='70%')
    await browser.pause(3000);
    await this.btnDelete[0].scrollIntoView();
    await expect(this.btnDelete[0]).toBeExisting();
    await this.btnDelete[0].click();
    await expect(this.btnConfirmDelete).toBeExisting();
    await this.btnConfirmDelete.click();
  }

  async expectNewEmployeeRow1(nama, wbs, approver, status) {
    await expect(this.nama[0]).toHaveText(nama);
    await expect(this.wbs[0]).toHaveText(wbs);
    await expect(this.approver[0]).toHaveText(approver);
    await expect(this.status[0]).toHaveText(status);
    await this.nama[0].click();
    await browser.pause(5000);
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/sub-group-trade-program");
  }
}

export default new SubGTPPage();
