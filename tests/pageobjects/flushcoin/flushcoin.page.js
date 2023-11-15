import Page from "../page";
import {
  click,
  setText,
  setDropdownCheckbox,
  pause,
  importCsv,
  selectRadio,
} from "../../helper/commands";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class FlushCoinPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get searchInput() {
    return $("#search");
  }
  get buttonCreate() {
    return $("#btnCreate");
  }
  get buttonSimpan() {
    return $("#btnSave");
  }
  get buttonCheck() {
    return $("#btnCheck");
  }
  get buttonExecute() {
    return $("#btnExecute");
  }
  get buttonEdit() {
    return $$("#btnEdit");
  }
  get buttonDelete() {
    return $$("#btnDelete");
  }
  get buttonImport() {
    return $("#btnImport");
  }
  get buttonKirim() {
    return $("#btnSubmit");
  }
  get radioFixedPanel() {
    return $$('input[name="audience_filter"]');
  }
  get linkListGrid() {
    return $(".jss10");
  }
  get tab() {
    return $$('[class="MuiTab-wrapper"]');
  }
  get fieldUploadFile() {
    return $('input[type="file"]');
  }
  get dropdownLotteryProgram() {
    return $("#field-lottery_program");
  }
  get multiSelect() {
    return $$("#fieldSelect");
  }
  get liMultiSelect() {
    return $$(
      'span[class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock"]'
    );
  }
  get checkboxMultiSelect() {
    return $$("#checkbox");
  }

  async buttonBuat() {
    await click(this.buttonCreate);
  }
  async backToListGrid() {
    await click(this.linkListGrid);
  }
  async simpan() {
    await click(this.buttonSimpan);
    await browser.pause(10000);
  }

  async tabSetupFlushCoin() {
    await click(this.tab[0]);
    await pause();
  }
  async tabAudience() {
    await click(this.tab[1]);
    await browser.pause(10000);
  }
  async clickFixedPanel(value) {
    await selectRadio(this.radioFixedPanel, value);
    await pause();
  }

  async inputLotteryprogram(value) {
    await click(this.dropdownLotteryProgram);
    await pause();
    await setText(this.dropdownLotteryProgram, value);
    await pause();
    await browser.keys("Enter");
    await pause();
  }

  async inputFieldTabSetupFlushCoin(field, value) {
    await click(this.multiSelect[field]);
    await pause();
    //ini untuk uncheck semua
    if (field != 2) {
      await click(this.checkboxMultiSelect[0]);
      await pause();
    }
    //ini untuk check sesuai value
    await setDropdownCheckbox(
      this.liMultiSelect,
      this.checkboxMultiSelect,
      value
    );
    await pause();
  }

  async inputFieldTabAudience(field, value) {
    await click(this.multiSelect[field]);
    await pause();
    //ini untuk check sesuai value
    await setDropdownCheckbox(
      this.liMultiSelect,
      this.checkboxMultiSelect,
      value
    );
    await pause();
  }

  async prosesAudience() {
    await click(this.buttonCheck);
    await browser.pause(30000);
    await click(this.buttonSimpan);
    await browser.pause(30000);
    await click(this.buttonExecute);
    await pause();
  }

  async searchData(value) {
    await setText(this.searchInput, value);
    await browser.keys("Enter");
    await pause();
  }

  async edit() {
    await this.buttonEdit[0].scrollIntoView();
    await click(this.buttonEdit[0]);
    await pause();
  }

  async importCsvFixedPanel() {
    const filePath = path.join(__dirname, "../../files-to-upload/5205.csv");
    await importCsv(
      this.buttonImport,
      filePath,
      this.fieldUploadFile,
      this.buttonKirim
    );
  }
}

export default new FlushCoinPage();
