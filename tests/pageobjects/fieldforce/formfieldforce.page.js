import Page from "../page";
const path = require("path");
import { setDropdownCheckbox, pause } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class FormFieldForcePage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerFieldForce");
  }

  get name() {
    return $('[formcontrolname="name"]');
  }
  get username() {
    return $('[formcontrolname="username"]');
  }
  get type() {
    return $('[formcontrolname="type"]');
  }
  get option() {
    return $$('[role="option"]');
  }
  get classification() {
    return $('[formcontrolname="classification"]');
  }
  get zone() {
    return $('[formcontrolname="division"]');
  }
  get region() {
    return $('[formcontrolname="region"]');
  }
  get area() {
    return $('[formcontrolname="area"]');
  }
  get salespoint() {
    return $('[formcontrolname="salespoint"]');
  }
  get district() {
    return $('[formcontrolname="district"]');
  }
  get territory() {
    return $('[formcontrolname="territory"]');
  }
  get status() {
    return $('[formcontrolname="status"]');
  }
  get btnSimpan() {
    return $('[class="confirmation-button mat-raised-button"]');
  }
  get liMultiSelect() {
    return $$(".mat-option-text");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.titlePage.isExisting(), {
      timeout: 20000,
      timeoutMsg: "expected title page not existing after 20s",
    });
    await expect(this.btnSimpan).toBeDisplayed();
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat Field Force");
    await expect(browser).toHaveUrlContaining(
      "user-management/field-force/create"
    );
  }

  async pageEdit() {
    await expect(this.titlePage).toHaveText("Ubah Field Force");
    // await expect(browser).toHaveUrlContaining('user-management/field-force/edit/')
  }

  async createFF(name, usn) {
    await browser.pause(10000);
    await this.name.setValue(name);
    await this.username.setValue(usn);
    await this.type.click();
    await this.option[2].click();
    await browser.pause(20000);
    await this.classification.click();
    await this.option[0].click();
    await browser.pause(10000);
    await this.btnSimpan.scrollIntoView();
    await pause();
    await this.zone.click();
    await pause();
    await this.option[4].click();
    await pause();
    await this.region.click();
    await pause();
    await this.option[1].click();
    await pause();
    await this.area.click();
    await pause();
    await this.option[1].click();
    await pause();
    await this.salespoint.click();
    await pause();
    await this.option[0].click();
    await pause();
    await this.district.click();
    await pause();
    await this.option[0].click();
    await pause();
    await this.territory.click();
    await pause();
    await this.option[0].click();
    await pause();
  }

  async editFF() {
    await this.btnSimpan.scrollIntoView();
    await this.type.click();
    await this.option[1].click();
    await browser.pause(15000);
    await this.status.click();
    await pause();
    await this.zone.click();
    await pause();
    await this.option[5].click();
    await pause();
    await this.region.click();
    await pause();
    await this.option[2].click();
    await pause();
    await this.area.click();
    await pause();
    await this.option[4].click();
    await pause();
    await this.salespoint.click();
    await pause();
    await this.option[2].click();
    await pause();
    await this.district.click();
    await pause();
    await this.option[0].click();
    await pause();
  }

  async submitFF() {
    await this.btnSimpan.scrollIntoView();
    await expect(this.btnSimpan).toBeClickable();
    await browser.pause(7000);
    await this.btnSimpan.click();
  }

  async submitFF2() {
    await this.btnSimpan.click();
  }

  open() {
    return super.open("");
  }
}

export default new FormFieldForcePage();
