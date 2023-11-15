import ChromeDriverService from "wdio-chromedriver-service";
import Page from "../page";
const path = require("path");
import { setStartEndDate, pause } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class FormDTEAutomationPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerDteAutomation");
  } //Create
  get titlePageNonTsm() {
    return $("#headerDteAutomation-NonTsm");
  } //Detail/Edit
  get titlePageTsm() {
    return $("#headerDteAutomation-Tsm");
  } //Detail/Edit

  get btnSimpan() {
    return $("button.confirmation-button");
  }

  get type() {
    return $$('label[class="mat-checkbox-layout"] > div');
  } //Shareable Link, Exclude Transaction GSM
  get searchInput() {
    return $$('[placeholder="Cari"]');
  }
  get drpdwnAutomation() {
    return $('mat-select[formcontrolname="automation"]');
  }
  get selectAutomation() {
    return $$('mat-option[role="option"] > span');
  } // E-Order, Digital Coupon, Referral Code

  get drpdwnJenisTantanganEOrder() {
    return $('mat-select[formcontrolname="jenis_tantangan"]');
  }
  get selectJenisTantanganEOrder() {
    return $$('mat-option[role="option"] > span');
  } // Default, Minimum Transaction Frequency, Extra Coin

  get drpdwnTradeProgram() {
    return $('mat-select[formcontrolname="trade_program_id"]');
  }
  get searchTradeProgram() {
    return $("div > input.mat-select-search-input");
  }
  get selectTradeProgram() {
    return $$('mat-option[role="option"] > span');
  }

  //Durasi
  get startDatePenukaranKoin() {
    return $('input[formcontrolname="startDate"]');
  }
  get endDatePenukaranKoin() {
    return $('input[formcontrolname="endDate"]');
  }
  get popUpCalendar() {
    return $("mat-datepicker-content tbody.mat-calendar-body");
  }

  get totalKupon() {
    return $('input[formcontrolname="coupon_total"]');
  }
  get coinRewardperFrekuensi() {
    return $('input[formcontrolname="coin_reward"]');
  }
  get frekuensi() {
    return $('input[formcontrolname="coin_max"]');
  }

  get drpdwnBarcodeSKUTarget() {
    return $('mat-select[placeholder="Cari Barcode SKU yang di targetkan"]');
  }
  get searchBarcodeSKUTarget() {
    return $("div > input.mat-select-search-input");
  }
  get btnXsearchBarcodeSKUTarget() {
    return $("ngx-mat-select-search > div > button");
  }
  get selectBarcodeSKUTarget() {
    return $$('mat-option[role="option"] > div');
  }
  get btnAddProduct() {
    return $("div.mt-8.px-24 > div > div > button");
  }

  get judulTantangan() {
    return $('input[formcontrolname="title_challenge"]');
  }
  get deskripsiTantangan() {
    return $('input[formcontrolname="description_challenge"]');
  }
  get teksButton() {
    return $('input[formcontrolname="button_text"]');
  }

  //Notifikasi Tambahan
  get notif() {
    return $$('mat-radio-group[role="radiogroup"]');
  } //Ya, Tidak
  get notifYa() {
    return $$('mat-radio-group[formcontrolname="notif"] > mat-radio-button');
  } //H+1, H+2, H+3

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 60s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageCreateNonTsm() {
    await expect(this.titlePage).toHaveText("DTE Automation");
    await expect(browser).toHaveUrlContaining("dte/automation/create");
  }

  async pageDetailNonTsm() {
    await expect(this.titlePage).toHaveText("DTE Automation - Non TSM");
    await expect(browser).toHaveUrlContaining("dte/automation/detail");
  }

  async pageEditNonTsm() {
    await expect(this.titlePage).toHaveText("DTE Automation - Non TSM");
    await expect(browser).toHaveUrlContaining("dte/automation/edit");
  }

  async pageCreateTsm() {
    await expect(this.titlePage).toHaveText("DTE Automation");
    await expect(browser).toHaveUrlContaining("dte/automation/createtsm");
  }

  async pageDetailTsm() {
    await expect(this.titlePage).toHaveText("DTE Automation - TSM");
    await expect(browser).toHaveUrlContaining("dte/automation/detail");
  }

  async pageEditTsm() {
    await expect(this.titlePage).toHaveText("DTE Automation - TSM");
    await expect(browser).toHaveUrlContaining("dte/automation/edit_tsm");
  }

  async chooseTypeShareableLink() {
    await this.type[0].click();
  }

  async chooseTypeExcludeTransactionGSM() {
    await this.type[1].click();
  }

  async automationEOrder() {
    await this.drpdwnAutomation.click();
    await this.selectJenisTantanganEOrder[0].waitForExist();
    await expect(this.selectJenisTantanganEOrder[0]).toBeExisting();
    await this.selectJenisTantanganEOrder[0].click(); //E-Order
  }

  async jenisTantanganEOrder() {
    await this.drpdwnJenisTantanganEOrder.click();
    await this.selectJenisTantanganEOrder[1].waitForExist();
    await expect(this.selectJenisTantanganEOrder[1]).toBeExisting();
    await this.selectJenisTantanganEOrder[1].click(); //Minimum Transaction Frequency
  }

  async automationDigitalCoupon() {
    await this.drpdwnAutomation.click();
    await this.selectAutomation[1].waitForExist();
    await expect(this.selectAutomation[1]).toBeExisting();
    await this.selectAutomation[1].click(); //Digital Coupon
    await browser.pause(5000);
  }

  async automationReferralCode() {
    await this.drpdwnAutomation.click();
    await this.selectAutomation[2].waitForExist();
    await expect(this.selectAutomation[2]).toBeExisting();
    await this.selectAutomation[2].click(); //Referral Code
  }

  async tradeProgram(tp_dte) {
    await this.drpdwnTradeProgram.click();
    await pause();
    // await this.searchInput[1].setValue(tp_dte);
    // await browser.pause(3000);
    await this.selectTradeProgram[0].click();
  }

  async dateScroll() {
    await this.startDatePenukaranKoin.scrollIntoView();
  }

  async selectDate() {
    await setStartEndDate(
      this.startDatePenukaranKoin,
      this.endDatePenukaranKoin,
      this.popUpCalendar
    );
  }

  async kupon(totalKupon) {
    await this.totalKupon.scrollIntoView();
    await this.totalKupon.setValue(totalKupon);
  }

  async fillFrekuensi(coinRewardperFrekuensi, frekuensi) {
    await this.coinRewardperFrekuensi.scrollIntoView();
    await this.coinRewardperFrekuensi.setValue(coinRewardperFrekuensi);
    await this.frekuensi.setValue(frekuensi);
  }

  async skuProduct(barcodeSKU) {
    await this.drpdwnBarcodeSKUTarget.click();
    // await this.btnXsearchBarcodeSKUTarget.waitForExist()
    // await this.btnXsearchBarcodeSKUTarget.click()
    await this.searchBarcodeSKUTarget.setValue(barcodeSKU);
    await browser.pause(3000);
    await browser.keys("Enter");
    // await this.selectBarcodeSKUTarget[0].click()
  }

  async judulDeskripsiButton(judulTantangan, deskripsiTantangan, teksButton) {
    await this.judulTantangan.setValue(judulTantangan);
    await this.deskripsiTantangan.setValue(deskripsiTantangan);
    await this.teksButton.setValue(teksButton);
    await this.btnSimpan.scrollIntoView();
  }

  async notifTambahanYes() {
    await this.notif[0].click();
  }

  async submitForm() {
    await this.btnSimpan.waitForClickable();
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
    await browser.pause(5000);
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new FormDTEAutomationPage();
