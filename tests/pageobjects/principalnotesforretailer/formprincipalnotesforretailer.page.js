import Page from "../page";
const path = require("path");
import {
  setStartEndDate,
  setDropdownCheckbox,
  pause,
} from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class FormPrincipalNotesforRetailerPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerCreateNotes");
  }
  get titlePageEdit() {
    return $("#headerEditNotes");
  }

  get name() {
    return $('[name="notesMdl.name"]');
  }
  get description() {
    return $('[placeholder="Description Notes"]');
  }
  get iconOpenCalendar() {
    return $$('[aria-label="Open calendar"]');
  }
  get popUpCalendar() {
    return $("mat-datepicker-content tbody.mat-calendar-body");
  }
  get option() {
    // return $$(
    //   '[class="mat-option-pseudo-checkbox mat-pseudo-checkbox ng-star-inserted"]'
    // );
    return $$('[role="option"]');
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
    return $('[class="mat-slide-toggle-bar"]');
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
    await expect(this.titlePage).toHaveText("Create Notes");
    await expect(browser).toHaveUrlContaining(
      "notesretailer/notes-retailer-create"
    );
  }

  async pageEdit() {
    await expect(this.titlePageEdit).toBeDisplayed();
    await expect(this.titlePageEdit).toHaveText("Edit Notes");
    // await expect(browser).toHaveUrlContaining('user-management/field-force/edit/')
  }

  async createNotes(name, desc) {
    await browser.pause(25000);
    await this.name.setValue(name);
    await browser.pause(5000);
    await this.description.setValue(desc);
    await browser.pause(5000);

    await setStartEndDate(
      this.iconOpenCalendar[0],
      this.iconOpenCalendar[1],
      this.popUpCalendar
    );
    await pause();
    await this.zone.click();
    await pause();
    await setDropdownCheckbox(this.liMultiSelect, this.option, [
      "ZONENORTHSUM",
    ]);
    await pause();
    await this.region.click();
    await pause();
    await setDropdownCheckbox(this.liMultiSelect, this.option, ["SLSSW1"]);
    await pause();
    await this.area.click();
    await pause();
    await setDropdownCheckbox(this.liMultiSelect, this.option, ["SLSPPW"]);
    await pause();
    await this.salespoint.click();
    await pause();
    await setDropdownCheckbox(this.liMultiSelect, this.option, ["SSIW"]);
    await pause();
    await this.district.click();
    await pause();
    await setDropdownCheckbox(this.liMultiSelect, this.option, ["DPPW002"]);
    await pause();
    await this.territory.click();
    await pause();
    await setDropdownCheckbox(this.liMultiSelect, this.option, ["TPPW006"]);
    await pause();
  }

  async editNotes() {
    await this.status.click();
  }

  async submitNotes() {
    await this.btnSimpan.scrollIntoView();
    await this.btnSimpan.click();
  }

  open() {
    return super.open("");
  }
}

export default new FormPrincipalNotesforRetailerPage();
