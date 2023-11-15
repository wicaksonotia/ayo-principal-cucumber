import ChromeDriverService from "wdio-chromedriver-service";
import Page from "../page";
const path = require("path");
import { importCsv, importImage } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class FormXPPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }

  //tab XP
  get inpNamaProgram() {
    return $("#field-name");
  }
  get inpStartDate() {
    return $('[name="started_at"]');
  }
  get inpEndDate() {
    return $("#field-ended_at");
  }
  get inpEndAtDate() {
    return $('[name="show_ended_at"]');
  }
  get inpJumlahLevel() {
    return $(
      '[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"]'
    );
  }
  get btnTambah() {
    return $('[class="MuiButtonBase-root MuiButton-root MuiButton-contained"]');
  }
  get inpNamaLevel1() {
    return $('[id="field-data_level.0.name_level"]');
  }
  get inpNamaLevel2() {
    return $('[id="field-data_level.1.name_level"]');
  }
  get inpNamaLevel3() {
    return $('[id="field-data_level.2.name_level"]');
  }
  get inpNamaBatasXP1() {
    return $('[id="field-data_level.0.limit_level"]');
  }
  get inpNamaBatasXP2() {
    return $('[id="field-data_level.1.limit_level"]');
  }
  get inpNamaBatasXP3() {
    return $('[id="field-data_level.2.limit_level"]');
  }
  get inpAppVer() {
    return $("#field-app_version");
  }
  get tab() {
    return $$('[class="MuiTab-wrapper"]');
  }
  get tab2() {
    return $$('[role="tab"]');
  }
  get btnEdit() {
    return $$("#btnEdit");
  }
  get dropdownPopUp() {
    return $$('[role="button"]');
  }
  get listStatus() {
    return $$("#list-status");
  }
  get listMenu() {
    return $$('[role="option"]');
  }
  get inputText() {
    return $('[role="textbox"][aria-label="rdw-editor"]');
  }
  get imageIcon() {
    return $$('[role="button"]');
  }
  get btnKirim() {
    return $$("#btnSubmit");
  }

  //tabAudience
  get audienceFilter() {
    return $$('[name="audience_filter"]');
  }
  get btnExportImport() {
    return $$(
      '[class="MuiButtonBase-root MuiButton-root MuiButton-contained"]'
    );
  }
  get listbox() {
    return $$('[aria-haspopup="listbox"]');
  }
  get checkbox() {
    return $$("#checkbox");
  }
  get btnKirim() {
    return $("#btnSubmit");
  }
  get btnCheck() {
    return $(
      '[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary"]'
    );
  }

  //tabPengaturanXP
  get headerXP() {
    return $(
      '[class="MuiSvgIcon-root MuiSvgIcon-colorDisabled MuiSvgIcon-fontSizeLarge"]'
    );
  }
  get inpDeskSK() {
    return $$('[role="textbox"]');
  }
  get center() {
    return $$('[title="Center"]');
  }
  get bold() {
    return $$('[title="Bold"]');
  }
  get italic() {
    return $$('[title="Italic"]');
  }
  get emoji() {
    return $$('[aria-label="rdw-emoji-control"]');
  }
  get emojiIcon() {
    return $$('[class="rdw-emoji-icon"]');
  }
  get toggleSwitch() {
    return $('[name="tnc_flag"]');
  }
  get inpEmptyTop() {
    return $("#field-empty_top");
  }
  get inpEmptyBottom() {
    return $("#field-empty_bottom");
  }
  get inpFullTop() {
    return $("#field-full_top");
  }
  get inpFullBottom() {
    return $("#field-full_bottom");
  }
  get fieldUploadFile() {
    return $('input[type="file"]');
  }

  //tabPreview
  get progressBar() {
    return $$(
      '[class="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel"]'
    );
  }

  get btnSimpan() {
    return $(
      '[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]'
    );
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.switchToParentFrame();
    await browser.pause(10000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 60s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageList() {
    await browser.switchToParentFrame();
    await browser.pause(10000);
    await browser.switchToFrame(0);
    await browser.pause(5000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 60000,
      timeoutMsg: "expected title page not displayed after 60s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat XP");
    await expect(browser).toHaveUrlContaining("dte/xp/create/xp");
  }

  async name(programName) {
    await this.inpNamaProgram.setValue(programName);
  }

  async date(start, end, endAt) {
    await this.inpStartDate.setValue(start);
    await browser.pause(1500);
    await this.inpEndDate.setValue(end);
    await browser.pause(1500);
    await this.inpEndAtDate.setValue(endAt);
  }

  async level(jmlLevel, nama1, batas1, nama2, batas2) {
    await this.inpJumlahLevel.addValue(jmlLevel);
    await this.btnTambah.click();
    await this.inpNamaLevel1.addValue(nama1);
    await this.inpNamaBatasXP1.addValue(batas1);
    await this.inpNamaLevel2.addValue(nama2);
    await this.inpNamaBatasXP2.addValue(batas2);
  }

  async levelFP(jmlLevel, nama1, batas1, nama2, batas2, nama3, batas3) {
    await this.inpJumlahLevel.addValue(jmlLevel);
    await this.btnTambah.click();
    await this.inpNamaLevel1.addValue(nama1);
    await this.inpNamaBatasXP1.addValue(batas1);
    await this.inpNamaLevel2.addValue(nama2);
    await this.inpNamaBatasXP2.addValue(batas2);
    await this.inpNamaLevel3.addValue(nama3);
    await this.inpNamaBatasXP3.addValue(batas3);
  }

  async appVer(versi) {
    await this.inpAppVer.addValue(versi);
    await browser.pause(5000);
    await browser.keys("Enter");
  }

  async submitForm() {
    await this.btnSimpan.click();
  }

  async viewTabAudience() {
    await this.tab[1].click();
  }

  async populationBlast() {
    await browser.pause(15000);
    await this.btnCheck.scrollIntoView();
    await this.listbox[1].click();
    await this.checkbox[5].click();
    // await this.audienceFilter[0].click()
    await browser.keys("Escape");
    await browser.pause(8000);
    await this.listbox[2].click();
    await this.checkbox[2].click();
    // await this.audienceFilter[0].click()
    await browser.keys("Escape");
    await browser.pause(8000);
    await this.listbox[3].click();
    await this.checkbox[2].click();
    // await this.audienceFilter[0].click()
    await browser.keys("Escape");
    await browser.pause(8000);
    await this.btnCheck.click();
    await browser.pause(10000);
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
    await browser.pause(5000);
  }

  async EditLevel1(inputLV1) {
    await browser.pause(3000);
    await this.btnEdit[0].click();
    await this.dropdownPopUp[0].click();
    await this.listStatus[0].click();
    await browser.pause(3000);
    await this.dropdownPopUp[1].click();
    await this.listMenu[1].click();
    await browser.pause(3000);
    await this.dropdownPopUp[2].click();
    await this.listMenu[3].click();
    await browser.pause(3000);
    await this.inputText.setValue(inputLV1);
    await this.imageIcon[3].scrollIntoView();
    const remoteFilePath = path.join(__dirname, "../../files-to-upload/43.PNG");
    await importImage(remoteFilePath, this.fieldUploadFile);
    await browser.pause(9000);
    await this.btnKirim.click();
  }

  async EditLevel2(inputLV2) {
    await browser.pause(3000);
    await this.btnEdit[1].click();
    await this.dropdownPopUp[0].click();
    await this.listStatus[0].click();
    await browser.pause(3000);
    await this.dropdownPopUp[1].click();
    await this.listMenu[1].click();
    await browser.pause(3000);
    await this.dropdownPopUp[2].click();
    await this.listMenu[4].click();
    await browser.pause(3000);
    await this.inputText.setValue(inputLV2);
    await this.imageIcon[3].scrollIntoView();
    const remoteFilePath = path.join(__dirname, "../../files-to-upload/43.PNG");
    await importImage(remoteFilePath, this.fieldUploadFile);
    await browser.pause(9000);
    await this.btnKirim.click();
  }

  async EditLevel3(inputLV3) {
    await browser.pause(3000);
    await this.btnEdit[2].click();
    await this.dropdownPopUp[0].click();
    await this.listStatus[0].click();
    await browser.pause(3000);
    await this.dropdownPopUp[1].click();
    await this.listMenu[1].click();
    await browser.pause(3000);
    await this.dropdownPopUp[2].click();
    await this.listMenu[5].click();
    await browser.pause(3000);
    await this.inputText.setValue(inputLV3);
    await this.imageIcon[3].scrollIntoView();
    const remoteFilePath = path.join(__dirname, "../../files-to-upload/43.PNG");
    await importImage(remoteFilePath, this.fieldUploadFile);
    await browser.pause(9000);
    await this.btnKirim.click();
  }

  async fixedPanel() {
    await this.audienceFilter[1].click();
    const filePath = path.join(
      __dirname,
      "../../files-to-upload/43crudxp-audiencefixedpanel.csv"
    );
    await importCsv(
      this.btnExportImport[1],
      filePath,
      this.fieldUploadFile,
      this.btnKirim
    );
    await this.btnCheck.click();
    await browser.pause(10000);
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
    await browser.pause(5000);
  }

  async viewTabPengaturanXP() {
    await this.tab[2].click();
  }

  async pengaturanXPPB(progressbar, fullbar, etop, ebottom, ftop, fbottom) {
    const remoteFilePath = path.join(__dirname, "../../files-to-upload/43.jpg");
    await browser.execute(function () {
      document.querySelector('input[type="file"]').style.display = "block";
    });
    await this.fieldUploadFile.waitForDisplayed();
    await this.fieldUploadFile.setValue(remoteFilePath);
    await this.inpDeskSK[0].scrollIntoView();
    await this.inpDeskSK[0].addValue(progressbar);
    await this.inpDeskSK[1].addValue(fullbar);
    await this.toggleSwitch.scrollIntoView();
    await this.toggleSwitch.click();
    await browser.pause(1000);
    await this.toggleSwitch.click();
    await this.btnSimpan.scrollIntoView();
    await this.inpEmptyTop.addValue(etop);
    await this.inpEmptyBottom.addValue(ebottom);
    await this.inpFullTop.addValue(ftop);
    await this.inpFullBottom.addValue(fbottom);
    await browser.pause(2000);
    await this.btnSimpan.click();
    await browser.pause(5000);
  }

  async progressBarFP(
    progressbar1,
    progressbar2,
    progressbar3,
    progressbar4,
    progressbar5,
    progressbar6,
    progressbar7
  ) {
    // await this.headerXP.click()
    await browser.pause(15000);
    await this.inpDeskSK[0].scrollIntoView();
    await this.inpDeskSK[0].addValue(progressbar1);
    await this.bold[0].click();
    await this.inpDeskSK[0].addValue(progressbar2);
    await this.bold[0].click();
    await this.inpDeskSK[0].addValue(progressbar3);
    await this.bold[0].click();
    await this.italic[0].click();
    await this.inpDeskSK[0].addValue(progressbar4);
    await this.bold[0].click();
    await this.italic[0].click();
    await this.inpDeskSK[0].addValue(progressbar5);
    await this.bold[0].click();
    await this.inpDeskSK[0].addValue(progressbar6);
    await this.bold[0].click();
    await this.inpDeskSK[0].addValue(progressbar7);
    await this.emoji[0].click();
    await this.emojiIcon[0].click();
  }

  async fullBarFP(fullbar1, fullbar2) {
    await browser.pause(2000);
    await this.center[1].click();
    await this.inpDeskSK[1].addValue(fullbar1);
    await this.center[1].click();
    await browser.keys("Enter");
    await browser.keys("Enter");
    await this.inpDeskSK[1].addValue(fullbar2);
  }

  async snkFP(snk1, snk2, snk3, snk4) {
    await this.toggleSwitch.click();
    await this.inpDeskSK[2].scrollIntoView();
    await this.inpDeskSK[2].addValue(snk1);
    await browser.keys("Enter");
    await this.inpDeskSK[2].addValue(snk2);
    await browser.keys("Enter");
    await this.inpDeskSK[2].addValue(snk3);
    await browser.keys("Enter");
    await this.inpDeskSK[2].addValue(snk4);
  }

  async cwBarFP(etop, ebottom, ftop, fbottom) {
    await this.btnSimpan.scrollIntoView();
    await this.inpEmptyTop.addValue(etop);
    await this.inpEmptyBottom.addValue(ebottom);
    await this.inpFullTop.addValue(ftop);
    await this.inpFullBottom.addValue(fbottom);
    await browser.pause(2000);
    await this.btnSimpan.click();
    await browser.pause(5000);
  }

  async viewTabPreview() {
    await this.tab[3].scrollIntoView();
    await browser.pause(3000);
    await this.tab[3].click();
    //await this.tab[3].click()
    await browser.pause(9000);
  }

  async publish() {
    await this.progressBar[1].click();
    await this.progressBar[2].click();
    await this.btnCheck.scrollIntoView();
    await this.btnCheck.click();
  }

  async publishFP() {
    await this.progressBar[1].scrollIntoView();
    await this.progressBar[1].click();
    await this.progressBar[2].click();
    await this.progressBar[3].click();
    await this.btnCheck.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/xp/edit/51/xp");
  }
}

export default new FormXPPage();
