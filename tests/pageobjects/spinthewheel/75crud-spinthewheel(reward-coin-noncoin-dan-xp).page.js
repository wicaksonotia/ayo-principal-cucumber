import Page from "../page";
const path = require("path");
import { setStartEndDateTime, pause } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class RewardCoinNoncoinXP extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerSpinTheWheel");
  }
  get titleTabPage() {
    return $$('[class="mat-tab-label-content"]');
  }
  get inputNamaProgram() {
    return $('[formcontrolname="name"]');
  }
  get selectNamaTradeProgram() {
    return $('[formcontrolname="trade_creator_id"]');
  }
  get searchInputTradeProgram() {
    return $('[placeholder="Pilih Trade Program"]');
  }
  get optionTradeProgram() {
    return $$('[class="mat-option ng-star-inserted mat-active"]');
  }
  get popUpCalendar() {
    return $("mat-datepicker-content tbody.mat-calendar-body");
  }
  get calendarMulaiDari() {
    return $('[formcontrolname="start_date"]');
  }
  get popupJamTerbit() {
    return $('[formcontrolname="start_time"]');
  }
  get calendarTanggalBerakhir() {
    return $('[formcontrolname="end_date"]');
  }
  get popupJamBerakhir() {
    return $('[formcontrolname="end_time"]');
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

  get buttonSimpanSTW() {
    return $("#btn-simpan");
  }

  get inputSearchSTW() {
    return $("#search");
  }
  get iconEdit() {
    return $("#btn-edit");
  }
  get roleTab() {
    return $$('[role="tab"]');
  }
  get roleTabList() {
    return $$('[role="tablist"]');
  }

  get radioButtonFixedPanel() {
    return $$('[class="mat-radio-container"]');
  }
  get buttonExport() {
    return $$('[class="is-danger mat-raised-button"]');
  }
  get buttonImport() {
    return $$('[class="is-danger mat-raised-button"]');
  }
  get buttonKirim() {
    return $('[class="mat-raised-button mat-primary"]');
  }
  get buttonCheck() {
    return $$('[class="confirmation-button mat-raised-button"]');
  }
  get buttonSimpanTabAudience() {
    return $$('[class="confirmation-button mat-raised-button"]');
  }

  get frekuensiBelanjaMingguan() {
    return $('[formcontrolname="shop_freq"]');
  }
  get maksimalFrekuensiReward() {
    return $('[formcontrolname="reward_freq"]');
  }
  get btnTambahTier() {
    return $('[class="mat-raised-button ng-star-inserted"]');
  }
  get inputMaksimumNilaiTransaksi() {
    return $$('[formcontrolname="maximum_transaction"]');
  }
  get inputMinimumNilaiTransaksi() {
    return $$('[formcontrolname="minimum_transaction"]');
  }
  get inputLimitSpin() {
    return $$('[formcontrolname="limit_spin"]');
  }
  get inputJumlahVariasiCoin() {
    return $$('[formcontrolname="coin_variation"]');
  }
  get buttonReward() {
    return $$('[class="mat-raised-button mat-primary ng-star-inserted"]');
  }
  get buttonRewardNonCoin() {
    return $$('[class="mat-raised-button mat-primary ng-star-inserted"]');
  }
  get buttonDelete() {
    return $$('[class="mat-icon-button mat-primary ng-star-inserted"]');
  }
  get inputCoin() {
    return $$('[formcontrolname="value"]');
  }
  get inputSlice() {
    return $$('[formcontrolname="slice"]');
  }
  get inputProbability() {
    return $$('[formcontrolname="probability"]');
  }
  get btnSimpanPengaturanMekanisme() {
    return $('[class="confirmation-button mat-raised-button"]');
  }
  get ContainerPB() {
    return $$('[class="p-16"]');
  }
  get inputNamaProgramPreview() {
    return $('[formcontrolname="preview_header"]');
  }
  get buttonSimpanPreview() {
    return $("#btn-simpan");
  }
  get buttonPublish() {
    return $('[class="ml-24 confirmation-button mat-raised-button"]');
  }
  get dialogBtnPublish() {
    return $("#btn-confirm-import");
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

  async AudienceTabPage() {
    await expect(this.titleTabPage[2]).toBeDisplayed();
  }

  async PengaturanMekanismeTabPage() {
    await expect(this.titleTabPage[3]).toBeDisplayed();
  }

  async PreviewtabPage() {
    await expect(this.roleTab[3]).toBeDisplayed();
  }

  async tabAudience() {
    await this.roleTab[1].scrollIntoView();
    await this.roleTab[1].click();
  }

  async tabPengaturanMekanisme() {
    await this.roleTab[1].scrollIntoView();
    await this.roleTab[2].click();
  }

  async tabPreview() {
    await this.roleTab[2].scrollIntoView();
    await this.roleTab[3].click();
  }

  async NamaProgramSTW(nama_program) {
    await this.inputNamaProgram.scrollIntoView();
    await this.inputNamaProgram.setValue(nama_program);
  }

  async namaTradeProgram(nama_trade_program) {
    await this.selectNamaTradeProgram.click();
    await this.searchInputTradeProgram.setValue(nama_trade_program);
    await browser.pause(3000);
    await this.optionTradeProgram[0].click();
    await browser.pause(2000);
  }

  async tanggalMulai() {
    await setStartEndDateTime(
      this.calendarMulaiDari,
      this.calendarTanggalBerakhir,
      this.popUpCalendar,
      this.popupJamTerbit,
      this.popupJamBerakhir
    );
  }

  async simpanSTW() {
    await this.buttonSimpanSTW.click();
    await browser.pause(10000);
  }

  async FixedPanel() {
    await this.radioButtonFixedPanel[1].scrollIntoView();
    await this.radioButtonFixedPanel[1].click();
    await browser.pause(5000);
  }

  async ExportTamplate() {
    await this.buttonExport[0].click();
    await browser.pause(5000);
  }

  async ImportTamplate() {
    await this.buttonImport[1].click();
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/41crudespinthewheel-audiencefixedpanel.xlsx"
    );
    await browser.execute(function () {
      document.querySelector(".rectangle-16 > label").style =
        "visibility:visible; overflow:visible;";
    });
    await this.inputAddFile.setValue(remoteFilePath);
    await pause();
  }

  async btnKirim() {
    await this.buttonKirim.click();
  }

  async btnCheck() {
    await this.buttonCheck[0].click();
  }

  async btnSimpanAudience() {
    await $("#btn-simpan").click();
    await browser.pause(2000);
  }

  async FixedPanel() {
    await this.radioButtonFixedPanel[1].scrollIntoView();
    await this.radioButtonFixedPanel[1].click();
    await browser.pause(5000);
  }

  async InsertGambar1() {
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/41floating.png"
    );
    await browser.execute(function () {
      document.querySelector(".rectangle-16 > label").style =
        "visibility:visible; overflow:visible;";
    });
    await this.inputAddFile.setValue(remoteFilePath);
    await pause();
  }

  async frekuensiBelanja(frekuensi_belanja) {
    await this.frekuensiBelanjaMingguan.scrollIntoView();
    await this.frekuensiBelanjaMingguan.setValue(frekuensi_belanja);
  }

  async maksimalFrekuensi(maksimal_frekuensi) {
    await this.maksimalFrekuensiReward.setValue(maksimal_frekuensi);
    await browser.pause(2000);
  }

  async TambahTier() {
    await this.btnTambahTier.scrollIntoView();
    await this.btnTambahTier.click();
    await browser.pause(1000);
  }

  async minimumNilaiTransaksiT1(minimum_nilai_transaksi_t1) {
    //await this.inputMinimumNilaiTransaksi.scrollIntoView()
    await this.inputMinimumNilaiTransaksi[0].setValue(
      minimum_nilai_transaksi_t1
    );
    await browser.pause(1000);
  }

  async maksimumNilaiTransaksiT1(maksimum_nilai_transaksi_t1) {
    //await this.inputMinimumNilaiTransaksi.scrollIntoView()
    await this.inputMaksimumNilaiTransaksi[0].setValue(
      maksimum_nilai_transaksi_t1
    );
    await browser.pause(1000);
  }

  async limitSpinT1(limit_spin_t1) {
    //await this.inputLimitSpin.scrollIntoView()
    await this.inputLimitSpin[0].setValue(limit_spin_t1);
    await browser.pause(1000);
  }

  async jumlahVariasiCoinT1(jumlah_variasi_coin_t1) {
    await this.inputJumlahVariasiCoin[0].setValue(jumlah_variasi_coin_t1);
    await browser.pause(1000);
  }

  async Coin1T1(coin1_t1) {
    await this.inputCoin[0].scrollIntoView();
    await this.inputCoin[0].setValue(coin1_t1);
    await browser.pause(1000);
  }

  async Coin2T1(coin2_t1) {
    await this.inputCoin[1].setValue(coin2_t1);
    await browser.pause(1000);
  }

  async Coin3T1(coin3_t1) {
    //await this.inputCoin[0].scrollIntoView();
    await this.inputCoin[2].setValue(coin3_t1);
    await browser.pause(1000);
  }

  async RewardXP1T1() {
    await this.buttonReward[2].scrollIntoView();
    await this.buttonReward[2].click();
    await browser.pause(1000);
  }

  async XP1T1(xp1_t1) {
    await this.inputCoin[3].scrollIntoView();
    await this.inputCoin[3].setValue(xp1_t1);
    await browser.pause(1000);
  }

  async XP2T1(xp2_t1) {
    await this.inputCoin[4].scrollIntoView();
    await this.inputCoin[4].setValue(xp2_t1);
    await browser.pause(1000);
  }

  async Slice1T1(slice1_t1) {
    await this.inputSlice[0].scrollIntoView();
    await this.inputSlice[0].setValue(slice1_t1);
    await browser.pause(1000);
  }

  async Slice2T1(slice2_t1) {
    await this.inputSlice[1].setValue(slice2_t1);
    await browser.pause(1000);
  }

  async Slice3T1(slice3_t1) {
    await this.inputSlice[2].setValue(slice3_t1);
    await browser.pause(1000);
  }

  async Slice4T1(slice4_t1) {
    await this.inputSlice[3].setValue(slice4_t1);
    await browser.pause(1000);
  }

  async Slice5T1(slice5_t1) {
    await this.inputSlice[4].setValue(slice5_t1);
    await browser.pause(1000);
  }

  async Probability1T1(probability1_t1) {
    await this.inputProbability[0].setValue(probability1_t1);
    await browser.pause(1000);
  }

  async Probability2T1(probability2_t1) {
    await this.inputProbability[1].setValue(probability2_t1);
    await browser.pause(1000);
  }

  async Probability3T1(probability3_t1) {
    await this.inputProbability[2].setValue(probability3_t1);
    await browser.pause(1000);
  }

  async Probability4T1(probability4_t1) {
    await this.inputProbability[3].setValue(probability4_t1);
    await browser.pause(1000);
  }

  async Probability5T1(probability5_t1) {
    await this.inputProbability[4].setValue(probability5_t1);
    await browser.pause(1000);
  }

  //tier2
  async limitSpinT2(limit_spin_t2) {
    await this.inputLimitSpin[1].scrollIntoView();
    await this.inputLimitSpin[1].setValue(limit_spin_t2);
    await browser.pause(1000);
  }

  async jumlahVariasiCoinT2(jumlah_variasi_coin_t2) {
    await this.inputJumlahVariasiCoin[1].setValue(jumlah_variasi_coin_t2);
    await browser.pause(1000);
  }

  async btnRewardNonCoinT2() {
    await this.buttonRewardNonCoin[4].scrollIntoView();
    await this.buttonRewardNonCoin[4].click();
    await browser.pause(1000);
  }

  async Coin1T2(coin1_t2) {
    //await this.inputCoin[0].scrollIntoView();
    await this.inputCoin[5].setValue(coin1_t2);
    await browser.pause(1000);
  }

  async Coin2T2(coin2_t2) {
    await this.inputCoin[6].setValue(coin2_t2);
    await browser.pause(1000);
  }

  async nonCoinT2(noncoin) {
    //await this.inputCoin[6].scrollIntoView();
    await this.inputCoin[7].setValue(noncoin);
    await browser.pause(1000);
  }

  async RewardXPT2() {
    //await this.buttonReward[5].scrollIntoView()
    await this.buttonReward[5].click();
    await browser.pause(1000);
  }

  async XP1T2(xp1_t1) {
    await this.inputCoin[8].scrollIntoView();
    await this.inputCoin[8].setValue(xp1_t1);
    await browser.pause(1000);
  }

  async Slice1T2(slice1_t2) {
    await this.inputSlice[5].scrollIntoView();
    await this.inputSlice[5].setValue(slice1_t2);
    await browser.pause(1000);
  }

  async Slice2T2(slice2_t2) {
    await this.inputSlice[6].setValue(slice2_t2);
    await browser.pause(1000);
  }

  async Slice3T2(slice3_t2) {
    await this.inputSlice[7].setValue(slice3_t2);
    await browser.pause(1000);
  }

  async Slice4T2(slice4_t2) {
    await this.inputSlice[8].setValue(slice4_t2);
    await browser.pause(1000);
  }

  async Probability1T2(probability1_t2) {
    await this.inputProbability[5].setValue(probability1_t2);
    await browser.pause(1000);
  }

  async Probability2T2(probability2_t2) {
    await this.inputProbability[6].setValue(probability2_t2);
    await browser.pause(1000);
  }

  async Probability3T2(probability3_t2) {
    await this.inputProbability[7].setValue(probability3_t2);
    await browser.pause(1000);
  }

  async Probability4T2(probability4_t2) {
    await this.inputProbability[8].setValue(probability4_t2);
    await browser.pause(1000);
  }

  async simpanTabPengaturanMekanisme() {
    await this.btnSimpanPengaturanMekanisme.scrollIntoView();
    await this.btnSimpanPengaturanMekanisme.click();
    await browser.pause(2000);
  }

  async simpanTabPreview() {
    await this.buttonSimpanPreview.click();
  }

  async NamaProgramPreview(nama_program) {
    await this.inputNamaProgramPreview.scrollIntoView();
    await this.inputNamaProgramPreview.setValue(nama_program);
  }

  async simpanPreview() {
    await this.buttonSimpanSTW.scrollIntoView();
    await this.buttonSimpanSTW.click();
    await browser.pause(10000);
  }

  async publishTabPreview() {
    await this.buttonPublish.click();
    await pause();
    await this.dialogBtnPublish.click();
    await pause();
  }
}
export default new RewardCoinNoncoinXP();
