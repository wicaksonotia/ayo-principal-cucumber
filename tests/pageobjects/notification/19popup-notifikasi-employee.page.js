import Page from "../page";
const path = require("path");
import { pause, setDropdown } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class popupNotifEmployee extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerPopupNotifikasi");
  }
  get formCreatePage() {
    return $(
      "#wrapper > div > fuse-content > app-popup-notification-create > div > div.content.p-24 > div > form > div.px-24 > h2"
    );
  }
  get inputJudulNotif() {
    return $('[placeholder="Judul Popup Notifikasi"]');
  }
  get timeBuatNotifikasi() {
    return $('[formcontrolname="time"]');
  }
  //jam
  get findJam() {
    return $$([
      '[class="clock-face__number clock-face__number--outer ng-star-inserted"]',
    ]);
  }
  get jam1() {
    return $$('[style="transform: rotateZ(-30deg);"]');
  }
  get jam2() {
    return $$('[style="transform: rotateZ(-60deg);"]');
  }
  get jam3() {
    return $$('[style="transform: rotateZ(-90deg);"]');
  }
  get jam4() {
    return $$('[style="transform: rotateZ(-120deg);"]');
  }
  get jam5() {
    return $$('[style="transform: rotateZ(-150deg);"]');
  }
  get jam6() {
    return $$('[style="transform: rotateZ(-180deg);"]');
  }
  get jam7() {
    return $$('[style="transform: rotateZ(-210deg);"]');
  }
  get jam8() {
    return $$('[style="transform: rotateZ(-240deg);"]');
  }
  get jam9() {
    return $$('[style="transform: rotateZ(-270deg);"]');
  }
  get jam10() {
    return $$('[style="transform: rotateZ(-300deg);"]');
  }
  get jam11() {
    return $$('[style="transform: rotateZ(-330deg);"]');
  }
  get jam12() {
    return $$('[style="transform: rotateZ(-360deg);"]');
  }
  get jam13() {
    return $$('[style="transform: rotateZ(-390deg);"]');
  }
  get jam14() {
    return $$('[style="transform: rotateZ(-420deg);"]');
  }
  get jam15() {
    return $$('[style="transform: rotateZ(-450deg);"]');
  }
  get jam16() {
    return $$('[style="transform: rotateZ(-480deg);"]');
  }
  get jam17() {
    return $$('[style="transform: rotateZ(-510deg);"]');
  }
  get jam18() {
    return $$('[style="transform: rotateZ(-540deg);"]');
  }
  get jam19() {
    return $$('[style="transform: rotateZ(-570deg);"]');
  }
  get jam20() {
    return $$('[style="transform: rotateZ(-600deg);"]');
  }

  get timeBtnOkBuatNotifikasi() {
    return $$('[class="timepicker-button"][type="button"]');
  }
  get klikJam() {
    return $$(
      "#time > div > div.mat-form-field-flex > div.mat-form-field-infix > ngx-material-timepicker > div.timepicker-overlay.ng-tns-c36-592.ng-star-inserted > div > div > div.timepicker__body > div > ngx-material-timepicker-24-hours-face > ngx-material-timepicker-face > div > div > div.clock-face__inner.ng-star-inserted > div:nth-child(3)"
    );
  }
  get klikMenit() {
    return $$(
      "#time > div > div.mat-form-field-flex > div.mat-form-field-infix > ngx-material-timepicker > div.timepicker-overlay.ng-tns-c36-592.ng-star-inserted > div > div > div.timepicker__body > ngx-material-timepicker-minutes-face > ngx-material-timepicker-face > div > div > div:nth-child(31)"
    );
  }
  get timeJamBerakhir() {
    return $('[formcontrolname="endtime"]');
  }
  get timeBtnOkJamBerakhir() {
    return $$('[class="timepicker-button"][type="button"]');
  }
  get inputPositifButton() {
    return $('[placeholder="Positif Button"]');
  }
  get inputNegatifButton() {
    return $('[placeholder="Negatif Button"]');
  }
  get insertGambarPopupNotif() {
    return $('[class="rectangle-16"]');
  }
  get textGambar() {
    return $(
      "#wrapper > div > fuse-content > app-popup-notification-create > div > div.content.p-24 > div > form > div.ayo-middle > div:nth-child(5) > h3 > strong"
    );
  }
  get listboxGrupPengguna() {
    return $$('[formcontrolname="user_group"]');
  }
  get selectCustomer() {
    return $$('[role="option"]');
  }
  get employeeOnly() {
    return $$('[formcontrolname="employee"]');
  }
  get optionTipeEmployee() {
    return $$('[role="option"]');
  }
  get inputDari() {
    return $('[placeholder="Dari"]');
  }
  get inputSampai() {
    return $('[placeholder="Sampai"]');
  }
  get listboxTipeKonten() {
    return $$('[formcontrolname="content_type"]');
  }
  get selectStatisticPage() {
    return $$('[role="option"]');
  }
  get scrollNamaHalaman() {
    return $(
      "#wrapper > div > fuse-content > app-popup-notification-create > div > div.content.p-24 > div > form > div.ayo-middle > div:nth-child(10) > div.left_content > div > div:nth-child(1) > h3"
    );
  }
  get inputIsiHalaman() {
    return $$('[spellcheck="true"]');
  }
  get buttonSimpan() {
    return $(
      "#wrapper > div > fuse-content > app-popup-notification-create > div > div.content.p-24 > div > form > div.confirm.p-24 > button"
    );
  }
  get inputAddFile() {
    return $('input[type="file"]');
  }

  //a method to encapsule automation code to interact with the page
  async Page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 600000,
      timeoutMsg: "expected title page not displayed after 600s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 600000 });
  }

  async formPage() {
    async () => {
      expect(this.formCreatePage).toHaveTextContaining("Buat Notifikasi");
    };
  }

  async inputJudul(judul_popup_notifkasi) {
    await this.inputJudulNotif.setValue(judul_popup_notifkasi);
  }

  async buatNotifikasi() {
    await expect(this.timeBuatNotifikasi).toBeClickable();
    await this.timeBuatNotifikasi.click();
    await this.jam8[0].click();
    await this.timeBtnOkBuatNotifikasi[1].click();
  }

  async jamBerakhir() {
    await expect(this.timeJamBerakhir).toBeClickable();
    await this.timeJamBerakhir.click();
    await this.jam20[0].click();
    await this.timeBtnOkJamBerakhir[1].click();
  }

  async positifButton(positif_button) {
    await this.inputPositifButton.setValue(positif_button);
  }

  async negatifButton(negatif_button) {
    await this.inputNegatifButton.setValue(negatif_button);
  }

  async insertGambar() {
    await this.textGambar.scrollIntoView();
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/48ir-checkimage.jpg"
    );
    await browser.execute(function () {
      document.querySelector(".rectangle-16 > label").style =
        "visibility:visible; overflow:visible;";
    });
    await this.inputAddFile.waitForDisplayed();
    await this.inputAddFile.setValue(remoteFilePath);
  }

  async grupPengguna() {
    await expect(this.listboxGrupPengguna[0]).toBeClickable();
    await this.listboxGrupPengguna[0].click();
    await this.selectCustomer[3].click();
  }

  async tipeEmployee() {
    await expect(this.employeeOnly[0]).toBeClickable();
    await this.employeeOnly[0].click();
    await this.optionTipeEmployee[2].click();
  }

  async BatasanUmurDari(input_dari) {
    await this.inputDari.scrollIntoView();
    await this.inputDari.setValue(input_dari);
  }

  async BatasanUmurSampai(input_sampai) {
    await this.inputSampai.setValue(input_sampai);
  }

  async tipeKonten() {
    await expect(this.listboxTipeKonten[0]).toBeClickable();
    await this.listboxTipeKonten[0].click();
    await this.selectStatisticPage[1].click();
  }

  async isiHalaman(isi_halaman) {
    await this.scrollNamaHalaman.scrollIntoView();
    await this.inputIsiHalaman[0].setValue(isi_halaman);
  }

  async btnSimpan() {
    await this.buttonSimpan.scrollIntoView();
    await this.buttonSimpan.waitForClickable();
    await expect(this.buttonSimpan).toBeClickable();
    await this.buttonSimpan.click();
    await browser.pause(15000);
  }

  open() {
    return super.open("notifications/popup-notification");
  }
}
export default new popupNotifEmployee();
