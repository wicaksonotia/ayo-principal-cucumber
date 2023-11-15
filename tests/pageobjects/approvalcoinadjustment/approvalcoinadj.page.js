import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class ApprovalCoinAdjPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerApprovalCoinAdjustment");
  }
  get tabMenu() {
    return $$('div[role="tablist"] div div[role="tab"]');
  }
  get menuApproval() {
    return $("#menu-518");
  }
  get searchInput() {
    return $$('input[placeholder="Cari"]');
  }

  //Table
  get datatableHeader() {
    return $("datatable-header.datatable-header");
  }
  get datatableBody() {
    return $("datatable-body.datatable-body");
  }
  get dataRow() {
    return $$("datatable-body-row.datatable-body-row");
  }
  get dataCell() {
    return $$(".datatable-body-cell > div > span");
  }

  get status() {
    return $$("datatable-body-cell.datatable-body-cell > div > div > p");
  }

  //Filter
  get filterDrpdwnSort() {
    return $('mat-select[formcontrolname="filter"]');
  }
  get filterSelectSort() {
    return $$('mat-option[role="option"]');
  } //Urutkan Perhari, Perbulan, Pertahun
  get filterStartDate() {
    return $('input[formcontrolname="start_date"]');
  }
  get filterEndDate() {
    return $('input[formcontrolname="end_date"]');
  }
  get filterStatus() {
    return $('mat-select[formcontrolname="status"]');
  }
  get filterSelectStatus() {
    return $$('mat-option[role="option"]');
  } //Semua Status, Approved, Rejected, Pending
  get fiterRequestor() {
    return $("#requestor_id");
  }
  get dropdownFilterApprover() {
    return $("#approver_id");
  }
  get searchApprover() {
    return $("div.mat-select-search-inner > input");
  }
  get selectApprover() {
    return $$('[role="option"]');
  }
  get btnFilter() {
    return $('button[class="mat-raised-button mat-primary"]');
  }

  get btnLihat() {
    return $(
      "ngx-datatable > div.visible > datatable-body > datatable-selection > datatable-scroller > datatable-row-wrapper > datatable-body-row > div.datatable-row-center.datatable-row-group.ng-star-inserted > datatable-body-cell:nth-child(11) > div > div > button:nth-child(1) > span > mat-icon"
    );
  }
  get btnExport() {
    return $$(
      'div[class="button-row ng-star-inserted"] button[mattooltip="Export Approval Coin Adjustment"]'
    );
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(
      async () => await this.searchInput[1].isExisting(),
      {
        timeout: 400000,
        timeoutMsg: "expected search input not existing after 400s",
      }
    );
    // await (this.titlePage).waitForDisplayed()
    // await expect(this.titlePage).toBeDisplayed({timeout:6000})
    // await expect(this.titlePage).toHaveText('Approval Coin Adjustment')
    await expect(browser).toHaveUrlContaining("dte/approval-coin-adjusment");
    await browser.pause(3000);
  }

  async pageList() {
    await this.menuApproval.scrollIntoView();
    await this.menuApproval.click();
    await expect(this.searchInput[1]).toBeExisting();
    await this.searchInput[1].waitForDisplayed();
    await expect(this.datatableBody).toBeExisting();
    await browser.pause(2000);
  }

  async search(namaTsm) {
    await expect(this.searchInput[1]).toBeDisplayed();
    await this.searchInput[1].setValue(namaTsm);
    // await browser.pause(7000)
  }

  async searchResult(namaTsm) {
    await this.datatableHeader.scrollIntoView();
    await browser.waitUntil(async () => await this.dataCell[0].isExisting(), {
      timeout: 60000,
      timeoutMsg: "expected search result not existing after 60s",
    });
    await browser.pause(3000);
    // await this.dataCell[0].$('div > span').waitForExist();
    await expect(this.dataCell[0]).toBeExisting();
    await expect(this.dataCell[0]).toHaveText(namaTsm);
    // await browser.pause(3000)
  }

  async tabMenuNonTsm() {
    await this.tabMenu[0].click();
  }

  async tabMenuTsm() {
    await this.tabMenu[1].click();
  }

  async filterApprovedTsm() {
    await this.filterStatus.waitForClickable();
    await this.filterStatus.click();
    await this.filterSelectStatus[1].click();
  }

  async filterRejectedTsm() {
    await this.filterStatus.waitForClickable();
    await this.filterStatus.click();
    await this.filterSelectStatus[2].click();
  }

  async filterPendingTsm() {
    await this.filterStatus.waitForClickable();
    await this.filterStatus.click();
    await this.filterSelectStatus[3].click();
  }

  async filterApproverName(approverName) {
    await this.dropdownFilterApprover.waitForClickable();
    await this.dropdownFilterApprover.click();
    await this.searchApprover.waitForExist();
    await this.searchApprover.setValue(approverName);
    await browser.pause(3000);

    //await this.selectApprover[1].waitForExist()
    //await this.selectApprover[1].waitForDisplayed()
    //await expect(this.selectApprover[2]).toBeDisplayed()
    await this.selectApprover[1].click();

    /*Jika approver name yang sama >1
    console.log('List Approver Name: ')
    const listApprover = await this.selectApprover
    listApprover.forEach(element => {
        const approver = element.getText()
            // console.log(approver)       //output: Promise { <pending> }
            approver.then(function(result) {
            console.log(result)         //output: list Approver Name
            if (String(result) == approverName) {
                element.click()
            }
        })
    })*/
  }

  async filter() {
    await this.btnFilter.click();
    await browser.pause(7000);
  }

  async getStatusRow1(statusRequest) {
    await this.status[0].waitForExist();
    // await this.status[1].scrollIntoView();
    // await this.status[0].waitForDisplayed()
    // await console.log(await this.status[0].getText())
    await expect(this.status[0]).toHaveText(statusRequest);
  }

  async detailTsm() {
    await this.btnLihat.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/approval-coin-adjusment");
  }
}

export default new ApprovalCoinAdjPage();
