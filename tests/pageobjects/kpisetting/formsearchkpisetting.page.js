import Page from "../page";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class FormSearchKPISettingPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerCreateKpiSetting");
  }
  get titlePageEdit() {
    return $("#headerEditKpiSetting");
  }
  get cellGroupId() {
    return $('datatable-header-cell[title="Group ID"]');
  }
  get selectValue() {
    return $$('[class="mat-select-value"]');
  }
  get option() {
    return $$('[role="option"]');
  }

  async searchKPI() {
    await this.selectValue[1].click(); //zone
    await this.option[5].click();
    await browser.pause(3000);
    await browser.keys("Escape");
    await this.cellGroupId.click();
    await browser.pause(7000);
  }
}

export default new FormSearchKPISettingPage();
