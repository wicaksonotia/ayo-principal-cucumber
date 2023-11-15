import Page from "../page";
const path = require("path");
import { setStartEndDateTime, pause } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class DetailVerificationAssignmentPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get btnImport() {
    return $("#btnImport");
  }
  get popUpDialogImport() {
    return $('[class="MuiDialogTitle-root"]');
  }
  get btnCloseDialogImport() {
    return $('[class="MuiButtonBase-root MuiIconButton-root"]');
  }
  get inpApprover() {
    return $(
      '[class="MuiInputBase-input MuiInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd"]'
    );
  }
  get btnPreviewDialogImport() {
    return $("#btnPreview");
  }

  get dropdownSummary() {
    return $(
      '[class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiInput-input"][role="button"]'
    );
  }

  get optionSummary() {
    return $$('[role="option"]');
  }
  get btnSaveDialogImport() {
    return $("#btnSave");
  }
  get btnConfirmDialogImport() {
    return $("#btnConfirm");
  }

  get searchNav() {
    return $("#navigation-search");
  }

  get menuVerifApproval() {
    return $("#menu-355");
  }

  get inputAddFile() {
    return $('input[type="file"]');
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 10s",
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

  async importData(approver) {
    await this.btnImport.click();
    await expect(this.popUpDialogImport).toBeExisting();
    await expect(this.popUpDialogImport).toHaveText("Unggah File CSV");
    await browser.pause(120000);
    await this.btnCloseDialogImport.click();
    await this.btnImport.click();
    // await this.inpApprover[1].scrollIntoView()
    await this.inpApprover.setValue(approver);
    await browser.pause(3000);
    await browser.keys("Enter");
    await this.btnPreviewDialogImport.click();
    await browser.pause(3000);
    await this.btnSaveDialogImport.click();
    await browser.pause(3000);
    await this.btnConfirmDialogImport.click();
    await browser.pause(3000);
  }

  async importData2(approver) {
    await this.btnImport.click();
    await expect(this.popUpDialogImport).toBeExisting();
    await expect(this.popUpDialogImport).toHaveText("Unggah File CSV");
    await browser.pause(30000);
    await this.btnCloseDialogImport.click();
    await this.btnImport.click();
    await this.inpApprover.scrollIntoView();
    await this.inpApprover.setValue(approver);
    await browser.pause(5000);
    await browser.keys("Enter");
    await this.btnPreviewDialogImport.click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[1].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[2].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[3].click();
    await browser.pause(3000);
    await this.btnSaveDialogImport.click();
    await browser.pause(3000);
    await this.btnConfirmDialogImport.click();
    await browser.pause(3000);
  }

  async importData98(approver) {
    await this.btnImport.click();
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/98bismillah.csv"
    );
    await browser.execute(function () {
      document.querySelector('input[type="file"]').style.display = "block";
    });
    await this.inputAddFile.setValue(remoteFilePath);
    await this.btnCloseDialogImport.click();
    await this.btnImport.click();
    await this.inpApprover.scrollIntoView();
    await this.inpApprover.setValue(approver);
    await browser.pause(5000);
    await browser.keys("Enter");
    await this.btnPreviewDialogImport.click();
    await browser.pause(3000);
    //await this.btnSaveDialogImport.click();
    //await browser.pause(6000);
  }

  async importData989(approver) {
    await this.btnImport.click();
    await expect(this.popUpDialogImport).toBeExisting();
    await expect(this.popUpDialogImport).toHaveText("Unggah File CSV");
    await browser.pause(30000);
    await this.btnCloseDialogImport.click();
    await this.btnImport.click();
    await this.inpApprover.scrollIntoView();
    await this.inpApprover.setValue(approver);
    await browser.pause(5000);
    await browser.keys("Enter");
    await this.btnPreviewDialogImport.click();
    await browser.pause(3000);
    await this.btnSaveDialogImport.click();
    await browser.pause(3000);
    await this.btnConfirmDialogImport.click();
    await browser.pause(3000);
  }

  async importData3(approver) {
    await this.btnImport.click();
    await expect(this.popUpDialogImport).toBeExisting();
    await expect(this.popUpDialogImport).toHaveText("Unggah File CSV");
    await browser.pause(30000);
    await this.btnCloseDialogImport.click();
    await this.btnImport.click();
    await this.inpApprover.scrollIntoView();
    await this.inpApprover.setValue(approver);
    await browser.pause(5000);
    await browser.keys("Enter");
    await this.btnPreviewDialogImport.click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[1].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[2].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[3].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[4].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[5].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[6].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[7].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[8].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[9].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[10].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[11].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[12].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[13].click();
    await browser.pause(3000);
    await this.dropdownSummary.click();
    await browser.pause(3000);
    await this.optionSummary[14].click();
    await browser.pause(3000);
    await this.btnSaveDialogImport.click();
    await browser.pause(3000);
    await this.btnConfirmDialogImport.click();
    await browser.pause(3000);
  }

  async importData150(approver) {
    await this.btnImport.click();
    await expect(this.popUpDialogImport).toBeExisting();
    await expect(this.popUpDialogImport).toHaveText("Unggah File CSV");
    await browser.pause(480000);
    await this.btnCloseDialogImport.click();
    await this.btnImport.click();
    await this.inpApprover.scrollIntoView();
    await this.inpApprover.setValue(approver);
    await browser.pause(8000);
    await browser.keys("Enter");
    await this.btnPreviewDialogImport.click();
    await browser.pause(8000);
    await this.btnSaveDialogImport.click();
    await browser.pause(8000);
    await this.btnConfirmDialogImport.click();
    await browser.pause(8000);
    await expect(this.btnImport).toBeExisting();
  }

  async searchNavbar() {
    await this.searchNav.addValue("Verification Approval");
    await browser.pause(3000);
    await this.menuVerifApproval.click();
    await browser.pause(5000);
  }
  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new DetailVerificationAssignmentPage();
