import Page from "../page";
const path = require("path");
import {
  pause,
  setStartEndDateTP,
  setEndDate,
  setDropdown,
} from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class FormTradeProgramPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerTradeProgram");
  }
  get options() {
    return $$("#options");
  }

  get dropdownGroupTradeProgram() {
    return $('[formcontrolname="group_trade_program"]');
  }
  get searchGroupTradeProgram() {
    return $('[placeholder="Cari Group Trade Program..."]');
  } //masih pakai default id Angular
  get selectGroupTradeProgram() {
    return $$('[role="option"]');
  }
  get dropdownSubGroupTradeProgram() {
    return $('mat-select[formcontrolname="sub_group_trade_program"]');
  }
  get searchSubGroupTradeProgram() {
    return $('[placeholder="Cari Sub Group Trade Program..."]');
  } //masih pakai default id Angular
  get selectSubGroupTradeProgram() {
    return $$('[role="option"]');
  }
  get namaTradeProgram() {
    return $('[formcontrolname="name"]');
  } //masih pakai default id Angular

  get previewBanner() {
    return $("#previewBanner");
  }
  get inputFileBanner() {
    return $("#upload-file-trade");
  }

  get dropdownGroupAudience() {
    return $("#trade_audience_group_id");
  }
  get searchGroupAudience() {
    return $("#mat-input-15");
  } //masih pakai default id Angular
  get selectGroupAudience() {
    return $("");
  }

  get startDate() {
    return $('input[formcontrolname="start_date"]');
  }
  get endDate() {
    return $(
      'input[formcontrolname="end_date"][placeholder="Tanggal Berakhir"]'
    );
  }
  get popUpCalendar() {
    return $("tbody.mat-calendar-body");
  }

  get danaTradeProgram() {
    return $('input[formcontrolname="budget"]');
  } //masih pakai default id Angular
  get expiredCoin() {
    return $('input[formcontrolname="coin_expiry_date"]');
  } //masih pakai default id Angular

  get btnSimpan() {
    return $("#btn-simpan-trade");
  }
  get btnSimpan2() {
    return $('[class="confirmation-button mat-raised-button"]');
  }
  get btnCekDetail() {
    return $("");
  }
  get inputAddFile() {
    return $('input[type="file"]');
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 10000,
      timeoutMsg: "expected title page not displayed after 10s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat Trade Program");
    await expect(browser).toHaveUrlContaining("dte/trade-program/create");
    await browser.pause(2000);
  }

  async pageEdit() {
    await expect(this.titlePage).toHaveText("Ubah Trade Program");
    await expect(browser).toHaveUrlContaining("dte/trade-program/edit");
  }

  async pageDetail() {
    await expect(this.titlePage).toHaveText("Detail Trade Program");
    await expect(browser).toHaveUrlContaining("dte/trade-program/detail");
  }

  async createTP(namaGTP, namaSGTP, namaTP, danaTP) {
    await pause();
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/trade_program.jpg"
    );
    await browser.execute(function () {
      document.querySelector("#trade-create > label").style =
        "visibility:visible; overflow:visible;";
    });
    await this.inputAddFile.waitForDisplayed();
    await this.inputAddFile.setValue(remoteFilePath);
    await pause();
    await this.dropdownGroupTradeProgram.scrollIntoView();
    await pause();
    await this.dropdownGroupTradeProgram.click();
    await pause();
    await this.searchGroupTradeProgram.setValue(namaGTP);
    await pause();
    await this.selectGroupTradeProgram[0].click();
    await pause();
    await this.dropdownSubGroupTradeProgram.click();
    await pause();
    await this.searchSubGroupTradeProgram.setValue(namaSGTP);
    await pause();
    await this.selectSubGroupTradeProgram[0].click();
    await pause();
    await this.namaTradeProgram.scrollIntoView();
    await pause();
    await this.namaTradeProgram.setValue(namaTP);
    await setStartEndDateTP(this.startDate, this.endDate, this.popUpCalendar);
    await pause();
    await this.danaTradeProgram.setValue(danaTP);
    await pause();
    await setEndDate(this.expiredCoin, this.popUpCalendar);
  }

  async createTP1(namaGTP, namaSGTP, namaTP, danaTP) {
    await browser.pause(10000);
    await this.dropdownGroupTradeProgram.scrollIntoView();
    await browser.pause(3000);
    await this.dropdownGroupTradeProgram.click();
    await this.searchGroupTradeProgram.waitForExist();
    await this.searchGroupTradeProgram.setValue(namaGTP);
    await browser.pause(3000);
    await this.selectGroupTradeProgram[0].click();
    await this.searchGroupTradeProgram.waitForExist({ reverse: true });
    await this.dropdownSubGroupTradeProgram.click();
    await this.searchSubGroupTradeProgram.waitForExist();
    await this.searchSubGroupTradeProgram.setValue(namaSGTP);
    await browser.pause(3000);
    await this.selectSubGroupTradeProgram[0].click();
    await this.searchSubGroupTradeProgram.waitForExist({ reverse: true });
    await this.namaTradeProgram.scrollIntoView();
    await this.namaTradeProgram.setValue(namaTP);
    // ==========untuk set starDate and endDate==========
    await setStartEndDate(this.startDate, this.endDate, this.popUpCalendar);
    await browser.pause(3000);
    await this.danaTradeProgram.setValue(danaTP);
    await setEndDate(this.expiredCoin, this.popUpCalendar);
  }

  async editDana(editDanaTP) {
    await this.danaTradeProgram.scrollIntoView();
    await this.danaTradeProgram.clearValue();
    await browser.pause(2000);
    await this.danaTradeProgram.setValue(editDanaTP);
    await browser.pause(1000);
  }
  async submit() {
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
    await browser.pause(5000);
  }

  async submit1() {
    await this.btnSimpan2.scrollIntoView();
    await expect(this.btnSimpan2).toBeClickable();
    await this.btnSimpan2.click();
    await browser.pause(5000);
  }
  async cekDetail() {
    await this.btnCekDetail.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new FormTradeProgramPage();
