import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class VerificationApprovalPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get searchInput() {
    return $('input[placeholder="Cari"]');
  }

  get columnTitle() {
    return $("#columnTitle");
  }
  get cellNamaTSM() {
    return $$("#cellTSM");
  }
  get cellStatus() {
    return $$("#cellStatus");
  }
  get btnSetujui() {
    return $$("#btnApprove");
  }

  get dialogTitle() {
    return $("#dialogTitle");
  }
  get dialogCaption() {
    return $("#dialogCaption");
  }
  get btnConfirm() {
    return $("#btnConfirm");
  }

  get columnAssignmentUC() {
    return $("div#cellID.MuiBox-root.jss37.jss5");
  }

  get tabPanel() {
    return $("#simple-tabpanel-0");
  }
  get btnLihatDetail() {
    return $$(
      '[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-textSizeSmall MuiButton-sizeSmall"][type="button"]'
    );
  }

  get dropdownSummary() {
    return $(
      '[class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiInput-input"]'
    );
  }

  get optionSumarry() {
    return $$('[role="option"]');
  }

  get textSummaryData() {
    return $("div.MuiBox-root.jss56.jss9");
  }

  get textRejectedReason() {
    return $("div.MuiBox-root.jss98.jss9");
  }

  get btnClose() {
    return $('[type="button"][aria-label="close"]');
  }

  get btnApprove2() {
    return $(
      '[class="MuiButtonBase-root MuiButton-root MuiButton-contained jss5 MuiButton-containedSecondary"][type="button"]'
    );
  }
  get btnSimpan() {
    return $$('[type="button"]');
  }
  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.switchToFrame(0);
    await browser.pause(10000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 60s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 60000 });
  }

  async pageList2() {
    await browser.switchToParentFrame();
    await browser.pause(10000);
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 10000,
      timeoutMsg: "expected title page not displayed after 10s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async searchTaskVerif(taskVerifName) {
    await expect(this.searchInput).toBeDisplayed();
    await this.searchInput.click();
    await this.searchInput.setValue(taskVerifName);
    // await browser.pause(5000)
  }

  async searchResult(taskVerifName, status) {
    await this.cellNamaTSM[0].waitForExist();
    await expect(this.cellNamaTSM[0]).toBeExisting();
    await expect(this.cellNamaTSM[0]).toHaveText(taskVerifName);
    // await expect(this.cellStatus[0]).toHaveText(status);
  }

  async approve() {
    await this.btnSetujui[0].click();
  }

  async assignmentUC() {
    await this.columnAssignmentUC.click();
    await browser.pause(2000);
  }

  async summaryData() {
    //await this.tabPanel.scrollIntoView();
    await this.textSummaryData.scrollIntoView();
    await this.textSummaryData.getText("Summary Data");
    await browser.pause(2000);
    //await this.btnLihatDetail[0].toBeClickable();
    await this.btnLihatDetail[0].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[1].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[2].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[3].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[4].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[5].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[6].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[7].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[8].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[9].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[10].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[11].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[12].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[13].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[14].click();
    await browser.pause(2000);
    await this.btnClose.click();
    await browser.pause(2000);
  }

  async rejectedReason() {
    await this.textRejectedReason.getText("Rejected Reason");
    await browser.pause(2000);
    await this.btnLihatDetail[1].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[1].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[2].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[3].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[4].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[5].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[6].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[7].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[8].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[9].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[10].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[11].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[12].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[13].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[14].click();
    await browser.pause(2000);
    await this.btnClose.click();
    await browser.pause(2000);
  }

  async summaryData2() {
    //await this.tabPanel.scrollIntoView();
    await this.textSummaryData.scrollIntoView();
    await this.textSummaryData.getText("Summary Data");
    await browser.pause(2000);
    //await this.btnLihatDetail[0].toBeClickable();
    await this.btnLihatDetail[0].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[1].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[2].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[3].click();
    await browser.pause(2000);
    await this.btnClose.click();
    await browser.pause(2000);
  }

  async rejectedReason2() {
    await this.textRejectedReason.getText("Rejected Reason");
    await browser.pause(2000);
    await this.btnLihatDetail[1].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[1].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[2].click();
    await browser.pause(2000);
    await this.dropdownSummary.click();
    await browser.pause(2000);
    await this.optionSumarry[3].click();
    await browser.pause(2000);
    await this.btnClose.click();
    await browser.pause(2000);
  }

  async detailApprove() {
    await this.btnApprove2.scrollIntoView();
    await this.btnApprove2.click();
    await browser.pause(2000);
  }
  async dialogConfirm() {
    await this.dialogTitle.waitForExist();
    await expect(this.dialogCaption).toHaveTextContaining(
      "Apakah Anda yakin menyetujui verifikasi misi ini?"
    );
    await this.btnConfirm.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/verification-approval");
  }
}

export default new VerificationApprovalPage();
