import Page from "../page";
import {
  click,
  setText,
  selectRadio,
  setDropdown,
  setDropdownCheckbox,
  pause,
  importCsv,
} from "../../helper/commands";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class OsemPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get searchInput() {
    return $("#search");
  }
  get buttonCreate() {
    return $(
      'button[class="MuiButtonBase-root MuiButton-root MuiButton-contained jss7 MuiButton-containedPrimary"]'
    );
  }
  get buttonTambahData() {
    return $(
      '[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"]'
    );
  }
  get buttonCheck() {
    return $(
      '[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth"]'
    );
  }
  get buttonExport() {
    return $('[class="MuiButtonBase-root MuiButton-root MuiButton-contained"]');
  }
  get buttonSimpan() {
    return $(
      '[class="MuiButtonBase-root MuiButton-root MuiButton-contained jss5 MuiButton-containedPrimary"'
    );
  }
  get fieldNamaGroup() {
    return $("#field-group_name");
  }
  get fieldIsianTextBox() {
    return $$('[class="MuiInputBase-input jss72"]');
  }
  get divSelectBox() {
    return $$('[role="button"]');
  }
  get liMultiSelect() {
    return $$(
      'span[class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock"]'
    );
  }
  get liSingleSelect() {
    return $$('[role="option"]');
  }
  get checkboxMultiSelect() {
    return $$("#checkbox");
  }
  get radioButton() {
    return $$('input[id="field-audience_filter"]');
  }
  get buttonImport() {
    return $("#btnImport");
  }
  get buttonKirim() {
    return $("#btnSubmit");
  }
  get fieldUploadFile() {
    return $('input[type="file"]');
  }
  get fieldCheckbox() {
    return $(".jss41");
  }
  // ==============================================

  async buttonBuat() {
    await click(this.buttonCreate);
  }
  async inputNamaGroup(value) {
    await setText(this.fieldNamaGroup, value);
    await pause();
  }
  async inputIsianTextBox(index, value) {
    await setText(this.fieldIsianTextBox[index], value);
    await pause();
  }
  async inputSelectBoxMultiple(index, value) {
    // await this.divSelectBox[index].scrollIntoView();
    await click(this.divSelectBox[index]);
    await pause();
    await setDropdownCheckbox(
      this.liMultiSelect,
      this.checkboxMultiSelect,
      value
    );
    // if (index == 4) {
    //   await this.divSelectBox[5].scrollIntoView();
    //   await pause();
    // }
  }
  async inputSelectBoxSingle(index, value) {
    if (index == 7) {
      await this.divSelectBox[index].scrollIntoView();
      await pause();
    }
    await click(this.divSelectBox[index]);
    await pause();
    await setDropdown(this.liSingleSelect, value);
  }
  async clickRadioButton(value) {
    await selectRadio(this.radioButton, value);
    await pause();
  }
  async importCsvFixedPanel() {
    const filePath = path.join(
      __dirname,
      "../../files-to-upload/5592/retailer.csv"
    );
    await importCsv(
      this.buttonImport,
      filePath,
      this.fieldUploadFile,
      this.buttonKirim
    );
  }
  async clickButtonTambahData() {
    await click(this.buttonTambahData);
    await pause();
  }
  async clickButtonCheck() {
    await click(this.buttonCheck);
    await browser.pause(60000);
  }
  async clickButtonExport() {
    await click(this.buttonExport);
    await pause();
  }
  async clickButtonSimpan() {
    await click(this.buttonSimpan);
    await pause();
  }
  async clickCheckboxRecommended() {
    await click(this.fieldCheckbox);
    await pause();
  }
}

export default new OsemPage();
