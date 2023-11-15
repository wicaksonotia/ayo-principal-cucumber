import Page from "../page";
import { setStartEndDate } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class STWPushNotif extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerSpinTheWheelNotifikasi");
  }
  get inputJudul() {
    return $('[formcontrolname="title"]');
  }
  get inputDeskripsi() {
    return $('[formcontrolname="content"]');
  }
  get calendarTanggalMulai() {
    return $('[formcontrolname="start_date"]');
  }
  get calendarTanggalBerakhir() {
    return $('[formcontrolname="end_date"]');
  }
  get popUpCalendar() {
    return $("mat-datepicker-content tbody.mat-calendar-body");
  }
  get timeSetWaktu() {
    return $('[formcontrolname="at"]');
  }
  //jam
  get jam1() {
    return $('[style="transform: rotateZ(-30deg);"]');
  }
  get jam2() {
    return $('[style="transform: rotateZ(-60deg);"]');
  }
  get jam3() {
    return $('[style="transform: rotateZ(-90deg);"]');
  }
  get jam4() {
    return $('[style="transform: rotateZ(-120deg);"]');
  }
  get jam5() {
    return $('[style="transform: rotateZ(-150deg);"]');
  }
  get jam6() {
    return $('[style="transform: rotateZ(-180deg);"]');
  }
  get jam7() {
    return $('[style="transform: rotateZ(-210deg);"]');
  }
  get jam8() {
    return $('[style="transform: rotateZ(-240deg);"]');
  }
  get jam9() {
    return $('[style="transform: rotateZ(-270deg);"]');
  }
  get jam10() {
    return $('[style="transform: rotateZ(-300deg);"]');
  }
  get jam11() {
    return $('[style="transform: rotateZ(-330deg);"]');
  }
  get jam12() {
    return $('[style="transform: rotateZ(-360deg);"]');
  }
  get jam13() {
    return $('[style="transform: rotateZ(-390deg);"]');
  }
  get jam14() {
    return $('[style="transform: rotateZ(-420deg);"]');
  }
  get jam15() {
    return $('[style="transform: rotateZ(-450deg);"]');
  }
  get jam16() {
    return $('[style="transform: rotateZ(-480deg);"]');
  }
  get jam17() {
    return $('[style="transform: rotateZ(-510deg);"]');
  }
  get jam18() {
    return $('[style="transform: rotateZ(-540deg);"]');
  }
  get jam19() {
    return $('[style="transform: rotateZ(-570deg);"]');
  }
  get jam20() {
    return $('[style="transform: rotateZ(-600deg);"]');
  }
  get jam00() {
    return $('[style="transform: rotateZ(-720deg);"]');
  }
  get timebtnOK() {
    return $$('[class="timepicker-button"][type="button"]');
  }
  get dropdownIntervalPengiriman() {
    return $('[formcontrolname="day"]');
  }
  get selectDay() {
    return $$('[role="option"]');
  }
  get buttonSimpan() {
    return $("#btn-simpan");
  }

  //a method to encapsule automation code to interact with the page
  async Page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 600000,
      timeoutMsg: "expected title page not displayed after 600s",
    });

    await expect(this.titlePage).toBeDisplayed({ timeout: 600000 });
  }

  async Judul(judul) {
    await this.inputJudul.clearValue();
    await this.inputJudul.setValue(judul);
  }

  async Deskripsi(deskripsi) {
    await this.inputDeskripsi.clearValue();
    await this.inputDeskripsi.setValue(deskripsi);
  }

  async TanggalMulai() {
    await setStartEndDate(
      this.calendarTanggalMulai,
      this.calendarTanggalBerakhir,
      this.popUpCalendar
    );
  }

  async SetWaktu() {
    await this.timeSetWaktu.scrollIntoView();
    await this.timeSetWaktu.click();
    await this.jam1.click();
    await this.timebtnOK[1].click();
  }

  async IntervalPengiriman() {
    await this.dropdownIntervalPengiriman.click();
    await this.selectDay[1].click();
    await this.selectDay[2].click();
    await this.selectDay[3].click();
    await this.selectDay[4].click();
    await this.selectDay[5].scrollIntoView();
    await this.selectDay[5].click();
    await this.selectDay[6].click();
    await browser.keys("Escape");
  }

  async Simpan() {
    await this.buttonSimpan.click();
    await browser.pause(5000);
  }

  async Simpan2() {
    await this.buttonSimpan.scrollIntoView();
    await this.buttonSimpan.click();
    await browser.pause(5000);
  }
}
export default new STWPushNotif();
