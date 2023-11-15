import Page from "../page";
import { pause, setStartEndDate } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class formKoinPotonganBelanjaPage extends Page {
  get titlePage() {
    return $("#headerKoinPotonganBelanja");
  }
  get inputNamaProgram() {
    return $('[formcontrolname="name"]');
  }
  get selectGroupTradeProgram() {
    return $('[formcontrolname="trade_creator_group_id"]');
  }
  get inputCari() {
    return $$('[placeholder="Cari"]');
  }
  get optionGTP() {
    return $$('[role="option"]');
  }
  get startDate() {
    return $('div > input[formcontrolname="startDate"]');
  }
  get endDate() {
    return $('div > input[formcontrolname="endDate"]');
  }
  get popUpCalendar() {
    return $("mat-datepicker-content tbody.mat-calendar-body");
  }
  get checkBoxBatasiDenganProduk() {
    return $('[formcontrolname="limit_by_product"]');
  }
  get inputBatasanBerdasarkanProduk() {
    return $('[placeholder="Batasan Berdasarkan Produk"]');
  }
  get optionBatasan() {
    return $$('[role="option"]');
  }
  get checkBoxBatasiDenganKategori() {
    return $('[formcontrolname="limit_by_category"]');
  }
  get dropdownBatasanBerdasarkanKategori() {
    return $('[formcontrolname="category"]');
  }
  get btnSimpan() {
    return $(
      '[class="confirmation-button mat-raised-button ng-star-inserted"]'
    );
  }
  get roleTab() {
    return $$('[role="tab"]');
  }
  get checkboxMitra() {
    return $$('[class="mat-checkbox mat-accent ng-star-inserted"]');
  }
  get btnSimpanPanelMitra() {
    return $('[class="confirmation-button mat-raised-button"]');
  }

  //a method to encapsule automation code to interact with the page
  async Page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 600000,
      timeoutMsg: "expected title page not displayed after 600s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 600000 });
  }

  //batasi dengan produk
  async createKPB(inputNama, inputCari, inputBBP) {
    await this.inputNamaProgram.setValue(inputNama);
    await browser.pause(2000);
    await this.selectGroupTradeProgram.click();
    await this.inputCari[1].setValue(inputCari);
    await browser.pause(2000);
    await this.optionGTP[0].click();
    await browser.keys("Escape");
    // ==========untuk set starDate and endDate==========
    await setStartEndDate(this.startDate, this.endDate, this.popUpCalendar);

    await this.checkBoxBatasiDenganProduk.scrollIntoView();
    await this.checkBoxBatasiDenganProduk.click();
    await browser.pause(2000);
    await this.inputBatasanBerdasarkanProduk.setValue(inputBBP);
    await browser.pause(2000);
    await this.optionBatasan[0].click();
    await this.btnSimpan.click();
  }

  //batasi dengan kategori
  async createKPK(inputNamaBK, inputCariBK) {
    await this.inputNamaProgram.setValue(inputNamaBK);
    await browser.pause(2000);
    await this.selectGroupTradeProgram.click();
    await this.inputCari[1].setValue(inputCariBK);
    await browser.pause(2000);
    await this.optionGTP[0].click();
    await browser.keys("Escape");

    // ==========untuk set starDate and endDate==========
    await setStartEndDate(this.startDate, this.endDate, this.popUpCalendar);

    await this.checkBoxBatasiDenganKategori.scrollIntoView();
    await this.checkBoxBatasiDenganKategori.click();
    await browser.pause(2000);
    await this.dropdownBatasanBerdasarkanKategori.click();
    await browser.pause(2000);
    await this.optionBatasan[7].scrollIntoView();
    await this.optionBatasan[7].click();
    await this.optionBatasan[8].scrollIntoView();
    await this.optionBatasan[8].click();
    await browser.keys("Escape");
    await browser.pause(1000);
    await this.btnSimpan.click();
  }

  async formPanelMitra(inputCariMitra) {
    await this.roleTab[1].click();
    await browser.pause(5000);
    await this.inputCari[1].setValue(inputCariMitra);
    await browser.pause(3000);
    await this.checkboxMitra[1].scrollIntoView();
    await this.checkboxMitra[1].click();
    await browser.pause(3000);
    await this.btnSimpanPanelMitra.scrollIntoView();
    await browser.pause(1000);
    await this.btnSimpanPanelMitra.click();
    await browser.pause(3000);
  }
}

export default new formKoinPotonganBelanjaPage();
