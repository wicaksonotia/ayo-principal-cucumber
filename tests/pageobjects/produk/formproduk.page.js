import Page from "../page";
const path = require("path");
import { pause } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class FormProdukPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerTambahProduk");
  }
  get fieldUploadFile() {
    return $('input[type="file"]');
  }
  get tabGambarProduk() {
    return $('[class="mat-tab-label mat-ripple ng-star-inserted"]');
  }
  get namaProduk() {
    return $('[placeholder="Nama Produk"]');
  }
  get barcode() {
    return $('[formcontrolname="barcode"]');
  }
  get namaPerusahaan() {
    return $('[formcontrolname="brand"]');
  }
  get searchInput() {
    return $$('[placeholder="Cari"]');
  }
  get option() {
    return $$('[role="option"]');
  }
  get optionText() {
    return $('[class="mat-option-text"]');
  }
  get optionText2() {
    return $$('[class="mat-option-text"]');
  }
  get namaLainProduk() {
    return $('[placeholder="Nama Lain Produk"]');
  }
  get kategoriProduk() {
    return $('[formcontrolname="category"]');
  }
  get subKategori() {
    return $('[formcontrolname="subCategory"]');
  }
  get businessType() {
    return $('[formcontrolname="business_type"]');
  }
  get UOM() {
    return $('[formcontrolname="packaging"]');
  }
  get deskripsiProduk() {
    return $('[placeholder="Deskripsi Produk"]');
  }
  get wmsDeskripsiProduk() {
    return $('[placeholder="WMS Deskripsi Produk"]');
  }
  get rbYa() {
    return $$('[class="mat-radio-container"]');
  }
  get checkbox() {
    return $$('[class="mat-checkbox-inner-container"]');
  }
  get btnSimpan() {
    return $('[aria-label="save"]');
  }

  get kodeFamily() {
    return $('[formcontrolname="code"]');
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.titlePage.isExisting(), {
      timeout: 20000,
      timeoutMsg: "expected title page not existing after 20s",
    });
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Tambah Produk");
    await expect(browser).toHaveUrlContaining("sku-management/product/create");
  }

  async pageEdit() {
    await expect(this.titlePage).toHaveText("Ubah Produk");
    // await expect(browser).toHaveUrlContaining('sku-management/product/edit')
  }

  async addProduct(name, company, otherName, category, desc, wmsdesc) {
    await browser.pause(10000);
    await this.namaProduk.setValue(name);
    await pause();
    await this.namaPerusahaan.click();
    await pause();
    await this.searchInput[1].setValue(company);
    await pause();
    await this.option[0].click();
    await this.namaLainProduk.setValue(otherName);
    await pause();
    await this.kategoriProduk.click();
    await this.searchInput[1].setValue(category);
    await pause();
    await this.optionText.click();
    await pause();
    await this.subKategori.click();
    await pause();
    await this.optionText2[0].click();
    await pause();
    await this.UOM.click();
    await pause();
    await this.optionText2[0].click();
    await pause();
    await this.checkbox[0].scrollIntoView();
    await pause();
    await this.deskripsiProduk.setValue(desc);
    await pause();
    await this.wmsDeskripsiProduk.setValue(wmsdesc);
    await pause();
    await this.checkbox[0].scrollIntoView();
    await pause();
    await this.rbYa[4].click();
    await pause();
    await this.titlePage.scrollIntoView();
    await pause();
    await this.tabGambarProduk.click();
    await pause();
    const remoteFilePath = path.join(__dirname, "../../files-to-upload/56.jpg");
    await browser.execute(function () {
      document.querySelector(".rectangle-16 > label").style =
        "visibility:visible; overflow:visible;";
    });
    await this.fieldUploadFile.waitForDisplayed();
    await this.fieldUploadFile.setValue(remoteFilePath);
  }

  async editProduct(famcode) {
    await this.kodeFamily.setValue(famcode);
  }

  async submitProduct() {
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

export default new FormProdukPage();
