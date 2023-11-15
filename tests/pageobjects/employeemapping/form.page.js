import Page from "../page";
const path = require("path");
import {
  click,
  setDropdown,
  setDropdownCheckbox,
  pause,
} from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class FormEmployeeMappingPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }

  get btnSimpan() {
    return $("#btnSave");
  }

  get inpName() {
    return $("#field-pic_name");
  }
  get clrName() {
    return $('[title="Clear"]');
  }
  get valueName() {
    return $(
      'input[class="MuiInputBase-input MuiInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd"]'
    );
  }
  get liMultiSelect() {
    return $$(
      'span[class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock"]'
    );
  }
  get drpdwn() {
    return $$("#fieldSelect");
  }
  get drpdwnValue() {
    return $$("#checkbox");
  }
  get drpdwnMetode() {
    return $$("#field-payment_method");
  }
  get drpdwnMetodeValue() {
    return $$("#list-payment_method");
  }

  //Notifikasi Tambahan
  get notif() {
    return $$('div[class="MuiSnackbarContent-message"]');
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
    await expect(this.titlePage).toHaveText("Buat Employee Mapping");
    await expect(browser).toHaveUrlContaining("dte/employee-mapping/create");
  }

  async pageDetail() {
    await expect(this.titlePage).toHaveText("Employee Mapping");
  }

  async pageEdit() {
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await expect(this.titlePage).toHaveText("Ubah Employee Mapping");
  }

  async name(employeeName) {
    await this.inpName.setValue(employeeName);
    await pause();
    await browser.keys("Enter");
    await pause();
  }

  async clearName() {
    await this.drpdwnMetode[1].scrollIntoView();
    await this.inpName.click();
    await pause();
    await this.clrName.click();
    await pause();
  }

  async zone(value) {
    await click(this.drpdwn[1]);
    await pause();
    await setDropdownCheckbox(this.liMultiSelect, this.drpdwnValue, value);
    await pause();
    await this.titlePage.scrollIntoView();
  }

  async region(value) {
    await this.drpdwn[2].click();
    await pause();
    await setDropdownCheckbox(this.liMultiSelect, this.drpdwnValue, value);
    await pause();
  }

  async area() {
    await expect(this.drpdwn[3]).toBeExisting();
    await this.drpdwn[3].click();
    await this.drpdwnValue[4].waitForExist();
    await expect(this.drpdwnValue[4]).toBeExisting();
    await this.drpdwnValue[4].click();
    await browser.keys("Escape");
  }

  async metodeTB() {
    await this.drpdwnMetode[1].scrollIntoView();
    await this.drpdwnMetode[1].click();
    await pause();
    await this.drpdwnMetodeValue[0].click();
    await pause();
  }

  async metodePB(value) {
    await this.drpdwnMetode[1].scrollIntoView();
    await this.drpdwnMetode[1].click();
    await pause();
    await setDropdown(this.drpdwnMetodeValue, value);
    await pause();
  }

  async metodeKoinPotonganBelanja() {
    await this.drpdwnMetode[1].scrollIntoView();
    await browser.pause(5000);
    // await expect(this.drpdwnMetode).toBeExisting()
    await this.drpdwnMetode[1].click();
    // await browser.pause(3000)
    await this.drpdwnMetodeValue[1].waitForExist();
    await expect(this.drpdwnMetodeValue[1]).toBeExisting();
    await this.drpdwnMetodeValue[2].click();
  }
  async metodeKoinPotonganBelanja() {
    await this.drpdwnMetode[1].scrollIntoView();
    await browser.pause(5000);
    // await expect(this.drpdwnMetode).toBeExisting()
    await this.drpdwnMetode[1].click();
    // await browser.pause(3000)
    await this.drpdwnMetodeValue[1].waitForExist();
    await expect(this.drpdwnMetodeValue[1]).toBeExisting();
    await this.drpdwnMetodeValue[2].click();
  }
  async submitForm() {
    await this.btnSimpan.click();
    await pause();
  }

  async notification() {
    await this.notif.waitForExist();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new FormEmployeeMappingPage();
