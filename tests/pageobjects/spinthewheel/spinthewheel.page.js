import Page from "../page";
import {
  click,
  setText,
  selectRadio,
  setDropdown,
  setDropdownCheckbox,
  pause,
} from "../../helper/commands";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class SpinTheWheelPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerSpinTheWheel");
  }
  get buttonSetupSTWMitra() {
    return $("#btnSetupSTW");
  }
  get buttonBuatPushNotif() {
    return $("#btnPushNotif");
  }
  get btnCreate() {
    return $("#btnCreate");
  }
  get searchInput() {
    return $("#search");
  }

  //Table
  get columnTitle() {
    return $$('[title="Nama Program"]');
  }
  get cellNamaProgram() {
    return $$("#nama");
  }
  get cellStatusLabel() {
    return $$("#status_label");
  }
  get cellStatus() {
    return $$("#status");
  }

  get btnExport() {
    return $$("#btn-detail");
  }
  get btnEdit() {
    return $$("#btn-edit");
  }
  get btnDelete() {
    return $$("#btn-delete");
  }
  get popUptitle() {
    return $("#headerPopupConfirmImport");
  }
  get btnConfirmDelete() {
    return $("#btn-confirm-import");
  }

  get buttonBuat() {
    return $("#btnCreate");
  }
  get iconEdit() {
    return $$("#btn-edit");
  }
  get iconDelete() {
    return $$("#btn-delete");
  }
  get buttonHapus() {
    return $("#btn-confirm-import");
  }
  get inputSearch() {
    return $("#search");
  }
  get datatable() {
    return $(
      '[class="material ngx-datatable fixed-header virtualized scroll-horz selectable checkbox-selection"]'
    );
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    // await browser.switchToFrame(1)
    // await browser.pause(3000)
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 600000,
      timeoutMsg: "expected title page not displayed after 10s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 600000 });
  }

  async pageList() {
    // await browser.switchToParentFrame()
    // await browser.pause(10000)
    // await browser.switchToFrame(2)
    // await browser.pause(3000)
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 10000,
      timeoutMsg: "expected title page not displayed after 10s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async createNew() {
    await expect(this.btnCreate).toBeClickable();
    await this.btnCreate.click();
  }

  async search(nama) {
    await this.searchInput.setValue(nama);
    await pause();
  }

  async searchResult(nama) {
    await browser.waitUntil(
      async () => await this.cellNamaProgram[0].isExisting(),
      {
        timeout: 20000,
        timeoutMsg: "expected search result not displayed after 20s",
      }
    );
    await browser.pause(3000);
    await expect(this.cellNamaProgram[0]).toBeExisting();
    await expect(this.cellNamaProgram[0]).toHaveText(nama);
    // await this.nama[0].click();
  }

  async searchResultAfterPublish(nama, statuslabel, status) {
    await browser.waitUntil(
      async () => await this.cellNamaProgram[0].isExisting(),
      {
        timeout: 20000,
        timeoutMsg: "expected search result not displayed after 20s",
      }
    );
    await browser.pause(3000);
    await expect(this.cellNamaProgram[0]).toBeExisting();
    await expect(this.cellNamaProgram[0]).toHaveText(nama);
    await expect(this.cellStatusLabel[0]).toHaveText(statuslabel);
    await expect(this.cellStatus[0]).toHaveText(status);
  }

  async editSTW() {
    await this.btnEdit[2].click();
    await pause();
  }

  async editSTW0() {
    await this.btnEdit[0].click();
    await pause();
  }

  async deleteSTW() {
    // await browser.execute(() => document.body.style.zoom='70%')
    await browser.pause(3000);
    await expect(this.btnDelete[0]).toBeExisting();
    await expect(this.btnDelete[0]).toBeClickable();
    await this.btnDelete[0].click();
    await expect(this.btnConfirmDelete).toBeExisting();
    await this.btnConfirmDelete.click();
  }

  async exportSTW() {
    // await browser.execute(() => document.body.style.zoom='70%')
    await browser.pause(3000);
    await expect(this.btnExport[0]).toBeExisting();
    await this.btnExport[0].click();
  }

  async pageSTW() {
    await expect(this.titlePage).toHaveText("Spin The Wheel");
    await browser.pause(7000);
  }

  async tombolBuat() {
    await this.buttonBuat.click();
    await browser.pause(15000);
    await expect(browser).toHaveUrlContaining("dte/spin-the-wheel/create");
  }

  async btnSetupSTW() {
    //await this.buttonSetupSTWMitra[2].toBeClickable()
    await this.buttonSetupSTWMitra.click();
    await browser.pause(15000);
    await expect(browser).toHaveUrlContaining(
      "dte/spin-the-wheel/setup-stw-mitra"
    );
  }

  async btnBuatPushNotif() {
    await this.buttonBuatPushNotif.click();
    await browser.pause(15000);
    await expect(browser).toHaveUrlContaining("dte/spin-the-wheel/notif");
  }

  async Search(nama_program) {
    await this.inputSearch.scrollIntoView();
    await this.inputSearch.setValue(nama_program);
    await browser.pause(5000);
  }

  async Edit() {
    await this.datatable.scrollIntoView();
    await this.iconEdit[0].scrollIntoView();
    await this.iconEdit[0].click();
    await pause();
  }

  async Delete() {
    await this.datatable.scrollIntoView();
    await this.iconDelete[0].scrollIntoView();
    await this.iconDelete[0].click();
    await browser.pause(2000);
    await this.buttonHapus.click();
    await browser.pause(5000);
  }

  async pageSTW() {
    await expect(this.titlePage).toHaveText("Spin The Wheel");
    await browser.pause(7000);
  }

  async tombolBuat() {
    await this.buttonBuat.click();
    await browser.pause(15000);
    await expect(browser).toHaveUrlContaining("dte/spin-the-wheel/create");
  }

  async Search(nama_program) {
    await this.inputSearch.scrollIntoView();
    await this.inputSearch.setValue(nama_program);
    await browser.pause(5000);
  }

  async Delete() {
    await this.datatable.scrollIntoView();
    await this.iconDelete[0].scrollIntoView();
    await this.iconDelete[0].click();
    await browser.pause(2000);
    await this.buttonHapus.click();
    await browser.pause(5000);
  }
  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/spin-the-wheel");
  }
}

export default new SpinTheWheelPage();
