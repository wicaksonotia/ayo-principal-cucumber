import ChromeDriverService from "wdio-chromedriver-service";
import Page from "../page";
import { pause } from "../../helper/commands";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class FormSubGTPPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }

  get btnSimpan() {
    return $("#btnSave");
  }

  get inpName() {
    return $("#field-name");
  }
  get inpWbs() {
    return $("#field-wbs");
  }
  get inpCostCenter() {
    return $("#field-cost_center");
  }
  get inpGLAccount() {
    return $("#field-gl_account");
  }
  get inpPPH() {
    return $("#field-rate_pph");
  }
  get inpApprover() {
    return $('[id="field-approvers[0].approver_name"]');
  }
  get btnClearApprover() {
    return $(
      '[class="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-clearIndicator MuiAutocomplete-clearIndicatorDirty"][type="button"]'
    );
  }
  get inpApprover2() {
    return $('[id="field-approvers[1].approver_name"]');
  }
  get inpApprover3() {
    return $('[id="field-approvers[2].approver_name"]');
  }
  get btnTambahKurangApprover() {
    return $$('[class="MuiButtonBase-root MuiIconButton-root"][type="button"]');
  }
  get drpdwnValueApprover() {
    return $(
      '[value="sisda"][aria-activedescendant="field-approver_name-option-1"][aria-controls="field-approver_name-popup"]'
    );
  }
  get toggleStatus() {
    return $("#fieldSwitch");
  }

  //Notifikasi Tambahan
  get notif() {
    return $("#notifMessage");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 60s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat Sub Group Trade Program");
    await expect(browser).toHaveUrlContaining(
      "dte/sub-group-trade-program/create"
    );
  }

  async pageDetail() {
    await expect(this.titlePage).toHaveText("Sub Group Trade Program");
    // await expect(browser).toHaveUrlContaining('dte/sub-group-trade-program/detail')
  }

  async pageEdit() {
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 60s",
    });
    await expect(this.titlePage).toHaveText("Ubah Sub Group Trade Program");
    // await expect(browser).toHaveUrlContaining('dte/sub-group-trade-program/edit')
  }

  async name(employeeName) {
    await this.inpName.setValue(employeeName);
    await pause();
  }

  async clearName() {
    await this.inpName.clearValue();
    await pause();
  }

  async clearPPH() {
    await this.inpPPH.setValue("");
    await pause();
  }

  async wbs(wbs) {
    await this.inpWbs.setValue(wbs);
  }

  async cost(cost) {
    await this.inpCostCenter.setValue(cost);
  }

  async gl(gl) {
    await this.inpGLAccount.setValue(gl);
  }

  async pph(pph) {
    await this.inpPPH.setValue(pph);
    await pause();
  }

  async clearApprover() {
    await this.inpApprover.addValue(" ");
    await this.btnClearApprover.click();
    await browser.pause(2000);
  }
  async approver(approver) {
    await this.inpApprover.scrollIntoView();
    await this.inpApprover.addValue(approver);
    await browser.pause(5000);
    await browser.keys("Enter");
    // await this.drpdwnValueApprover.waitForExist()
    // await this.drpdwnValueApprover.click()
  }

  async approver1(approver1) {
    await this.inpApprover.scrollIntoView();
    await this.inpApprover.addValue(approver1);
    await browser.pause(5000);
    await browser.keys("Enter");
    // await this.drpdwnValueApprover.waitForExist()
    // await this.drpdwnValueApprover.click()
  }

  async scApprover() {
    await this.inpApprover.scrollIntoView();
  }

  async approver2(approver2) {
    //await this.inpApprover2.scrollIntoView();
    await this.inpApprover2.addValue(approver2);
    await browser.pause(5000);
    await browser.keys("Enter");
    // await this.drpdwnValueApprover.waitForExist()
    // await this.drpdwnValueApprover.click()
  }

  async approver3(approver3) {
    await this.inpApprover3.scrollIntoView();
    await this.inpApprover3.addValue(approver3);
    await browser.pause(5000);
    await browser.keys("Enter");
    // await this.drpdwnValueApprover.waitForExist()
    // await this.drpdwnValueApprover.click()
  }

  async tambahApprover(index) {
    await this.inpApprover.scrollIntoView();
    await this.btnTambahKurangApprover[index].click();
  }
  async kurangApprover(index) {
    await this.btnTambahKurangApprover[index].click();
    await browser.pause(3000);
  }

  async status() {
    await this.toggleStatus.scrollIntoView();
    await this.toggleStatus.click();
    await browser.pause(2000);
  }

  async submitForm() {
    await this.btnSimpan.scrollIntoView();
    await this.btnSimpan.click();
    await browser.pause(10000);
  }

  async notification() {
    await this.notif.waitForExist();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/sub-group-trade-program/create");
  }
}

export default new FormSubGTPPage();
