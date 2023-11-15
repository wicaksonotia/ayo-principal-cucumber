import Page from "../page";
import { setStartEndDate, setEndDate, pause } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class SetupStwMitraPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerSpinTheWheelMitraSetup");
  }
  get table() {
    return $('[class="ayo-middle py-24"]');
  }
  get titletable() {
    return $$('[class="px-24"]');
  }
  get inputJudul() {
    return $('[formcontrolname="title"]');
  }
  get inputDeskripsi() {
    return $('[formcontrolname="content"]');
  }
  get popupTanggalMulai() {
    return $('[formcontrolname="started_at"]');
  }
  get popupTanggalBerakhir() {
    return $('[formcontrolname="ended_at"]');
  }
  get popUpCalendar() {
    return $("mat-datepicker-content tbody.mat-calendar-body");
  }
  get popupSetWaktu() {
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
  get timebtnOK() {
    return $$('[class="timepicker-button"][type="button"]');
  }

  get dropdownIntervalProgram() {
    return $('[formcontrolname="day"]');
  }
  get checkboxDay() {
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

  async insertFloating() {
    await browser.pause(3000);
  }

  async Content() {
    await this.table.scrollIntoView();
    await this.titletable[1].scrollIntoView();
  }
  async Judul(judul_setup) {
    await this.inputJudul.scrollIntoView();
    await this.inputJudul.clearValue();
    await this.inputJudul.setValue(judul_setup);
    await browser.pause(1000);
  }

  async Deskripsi(input_deskripsi) {
    await this.inputDeskripsi.clearValue();
    await this.inputDeskripsi.setValue(input_deskripsi);
    await browser.pause(1000);
  }

  async TanggalMulai() {
    await setStartEndDate(
      this.popupTanggalMulai,
      this.popupTanggalBerakhir,
      this.popUpCalendar
    );
    // await this.popupTanggalMulai.click()
    // await this.popUpCalendar.waitForDisplayed()
    // await this.popUpCalendar.$$('tr')[1].$$('td')[3].$('div').click();
  }

  async TanggalBerakhir() {
    // await this.popupTanggalBerakhir.click()
    // await this.popUpCalendar.waitForDisplayed()
    // await this.popUpCalendar.$$('tr')[3].$$('td')[0].$('div').click();
  }

  async TanggalBerakhir2() {
    await setEndDate(this.popupTanggalBerakhir, this.popUpCalendar);
    // await this.popupTanggalBerakhir.click();
    // await this.popUpCalendar.waitForDisplayed();
    // await this.popUpCalendar.$$("tr")[2].$$("td")[0].$("div").click();
  }

  async SetWaktu() {
    await this.popupSetWaktu.click();
    await this.jam16.click();
    await this.timebtnOK[1].click();
  }

  async IntervalProgram() {
    await this.dropdownIntervalProgram.click();
    await this.checkboxDay[2].click();
    await this.checkboxDay[3].click();
    await this.checkboxDay[4].click();
    await browser.keys("Escape");
    await browser.pause(1000);
  }

  async IntervalProgram2() {
    await this.dropdownIntervalProgram.click();
    await this.checkboxDay[2].click();
    await this.checkboxDay[3].click();
    await browser.keys("Escape");
    await browser.pause(1000);
  }

  async Simpan() {
    await this.buttonSimpan.scrollIntoView();
    await this.buttonSimpan.click();
    await pause();
  }
}

export default new SetupStwMitraPage();
