import Page from "../page";
import { pause, click } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class CoinRedemptionApprovalPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get searchInput() {
    return $("#search");
  }

  get columnTitle() {
    return $("#columnTitle");
  }
  get cellGTP() {
    return $$("#cellGTP");
  }
  get cellSGTP() {
    return $$("#cellSGTP");
  }
  get cellWBS() {
    return $$("#cellWBS");
  }
  get cellStatus() {
    return $$("#cellStatus");
  }
  get btnSetujui() {
    return $$("#btnApprove");
  }
  get btnTolak() {
    return $$("#btnReject");
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

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 10s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 60000 });
  }

  async page2() {
    await browser.pause(3000);
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(3000);
    //await expect(this.titlePage).toHaveText('CTA')
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 3000000,
      timeoutMsg: "expected search input not displayed after 3000s",
    });
    // await expect(this.titlePage).toBeDisplayed({timeout:6000})
  }
  async searchGTP(GTP) {
    await this.searchInput.click();
    await this.searchInput.setValue(GTP);
    await pause();
  }

  async searchResult(GTP) {
    await expect(this.cellGTP[0]).toBeExisting();
    await expect(this.cellGTP[0]).toHaveText(GTP);
    // await browser.pause(3000)
    // await expect(this.cellWBS[0]).toBeExisting();
    // await expect(this.btnTolak[0]).toBeExisting();
  }

  async searchResultSGPT(SGTP) {
    // await expect(this.cellSGTP[0]).toBeExisting();
    // await expect(this.cellSGTP[0]).toHaveText(SGTP);
    // await browser.pause(3000)
    // await expect(this.cellWBS[0]).toBeExisting();
    // await expect(this.btnTolak[0]).toBeExisting();
  }

  async getStatusRow1(status) {
    await this.cellStatus[0].scrollIntoView();
    await this.cellStatus[0].toHaveText(status);
  }
  async approveRequest() {
    await click(this.btnSetujui[0]);
    await pause();
  }

  async dialogConfirmApprove() {
    await click(this.btnConfirm);
    await pause();
  }

  async rejectRequest() {
    // await this.btnTolak[0].scrollIntoView();
    // await expect(this.btnTolak[0]).toBeDisplayed();
    await this.btnTolak[0].click();
    // await this.btnTolak[1].click()
  }

  async dialogConfirmReject() {
    await this.dialogTitle.waitForExist();
    await expect(this.dialogCaption).toHaveTextContaining(
      "Apakah Anda menolak request penukaran coin ini?"
    );
    await this.btnConfirm.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/coin-redemption-approval");
  }
}

export default new CoinRedemptionApprovalPage();
