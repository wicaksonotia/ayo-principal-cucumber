import Page from "../page";
import { setStartEndDateTime, setDropdown, pause } from "../../helper/commands";

//sub page containing specific selectors and methods for a specific page
class MissionBuilderPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerMissionBuilder");
  } //create/detail
  get titlePageEdit() {
    return $("#headerEditMissionBuilder");
  }

  //Event
  get btnMisi() {
    return $("#btn-misi");
  }
  get btnPushNotif() {
    return $("#btn-push_notif");
  }
  get btnPopUpNotif() {
    return $("#btn-pop_up_notif");
  }
  get btnCoin() {
    return $("#btn-coin");
  }
  //Flow Control
  get btnSplitDecision() {
    return $("#btn-split_decision");
  }
  get btnYaTidak() {
    return $$('[style="font-size: 12px; text-decoration: none;"]');
  }
  get btnWaktuTunggu() {
    return $("#btn-tunggu");
  }
  get btnEnd() {
    return $("#btn-end");
  }

  get cardMission() {
    return $("#card-mission");
  } //pas edit belum ada id-nya

  get cardMissionEdit() {
    return $$("div.cardContainer");
  }

  get cardTime() {
    return $("#card-time");
  }

  get inputWaktuTunggu() {
    return $('[placeholder="Waktu Tunggu"]');
  }

  get dropdownTipe() {
    return $('[formcontrolname="type"]');
  }

  get optionJam() {
    return $('[value="hour"]');
  }

  get btnSimpanWaitingPeriode() {
    return $('[class="mat-raised-button mat-success"]');
  }
  get cardMission2() {
    return $$("#card-mission");
  }

  get cardFinish() {
    return $("#card-finish");
  }

  get namaTsm() {
    return $(
      "div:nth-child(1) > mat-card > div > div:nth-child(1) > p:nth-child(3)"
    );
  }

  get btnSimpan() {
    return $("#btn-submit-mission-builder");
  }
  get btnSaveAsDraft() {
    return $("#btn-save-as-draft");
  }
  get btnPublish() {
    return $("#btn-publish");
  }
  get btnConfirmPublish() {
    return $("#btn-confirm-import");
  }

  //Pengaturan Misi
  get headerCardMission() {
    return $("#header-card-mission");
  }
  get checkboxPinUpMisi() {
    return $("#pin-up");
  }
  get checkboxRewardHadiahNonCoin() {
    return $("#nonCoinReward");
  } //masih pakai default id Angular
  get dropdownTemplateMisi() {
    return $('//*[@id="task-template-id"]');
  }
  get searchTemplateMisi() {
    return $("#select-search-template div input");
  }
  get selectTemplateMisi() {
    return $$('[role="option"]');
  } //Misi 01
  get dropdownNamaLainMisi() {
    return $("#task-template-other-name-id");
  }
  get searchNamaLainMisi() {
    return $('div > input[id="search-namaLain"]');
  }
  get selectNamaLainMisi() {
    return $$('[role="option"]');
  } //Belum ada id, Misi 01
  get startDate() {
    return $('div > input[formcontrolname="start_date"]');
  }
  get endDate() {
    return $('div > input[formcontrolname="end_date"]');
  }
  get popUpCalendar() {
    return $("mat-datepicker-content tbody.mat-calendar-body");
  }
  get startTime() {
    return $('div > input[formcontrolname="start_time"]');
  }
  get endTime() {
    return $('div > input[formcontrolname="end_time"]');
  }
  get popUpTimeStart() {
    return $("div.clock-face__container.ng-star-inserted");
  }
  get popUpTimeEnd() {
    return $("div.clock-face__inner.ng-star-inserted");
  }
  get btnTimePicker() {
    return $$('[class="timepicker-button"]');
  }
  get pushToFF() {
    return $("#toggle-pushToFF");
  }
  get verifikasiFF() {
    return $("#toggle-verifikasiFF");
  } //
  get verifikasiManual() {
    return $("#toggle-verifikasiManual");
  }
  get coinSubmission() {
    return $("#coinSubmission");
  } //input[formcontrolname="coin_submission"]
  get coinVerification() {
    return $("#coinVerification");
  }
  get coinSubmission1() {
    return $$('[formcontrolname="coin_submission"]');
  } //input[formcontrolname="coin_submission"]
  get coinVerification1() {
    return $$('[formcontrolname="coin_verification"]');
  }
  get XPSubmission() {
    return $$('[placeholder="XP Submission"]');
  }
  get XPVerification() {
    return $$('[placeholder="XP Verification"]');
  }
  get btnSimpanSetMisi() {
    return $("#btn-submit-card-mission");
  }
  get btnBatalSetMisi() {
    return $("#btn-cancel-card-mission");
  }
  get checkboxVerificationPerQst() {
    return $("#verification-per-question");
  }

  get btnReblastOn() {
    return $$("#toggle-reblast");
  }
  //a method to encapsule automation code to interact with the page
  async page() {
    await this.titlePage.waitForExist();
    await expect(this.titlePage).toBeExisting({ timeout: 10000 });
    await this.titlePage.isDisplayed();
    await expect(this.titlePage).toBeDisplayed({ timeout: 10000 });
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat Mission Builder");
    await expect(browser).toHaveUrlContaining("dte/mission-builder/create");
  }

  async pageEdit() {
    await this.titlePageEdit.waitForExist();
    await expect(this.titlePageEdit).toBeExisting();
    await expect(this.titlePageEdit).toBeDisplayed();
    await expect(this.titlePageEdit).toHaveText("Edit Mission Builder");
    await expect(browser).toHaveUrlContaining("dte/mission-builder/edit");
    // await expect(this.namaTsm).toHaveText(nameTSM)
  }

  async pageDetail() {
    await expect(this.titlePage).toHaveText("Detil Mission Builder");
    await expect(browser).toHaveUrlContaining("dte/mission-builder/detail");
    await browser.pause(2000);
  }

  async createMissionBuilder() {
    await this.btnMisi.waitForClickable();
    await expect(this.btnMisi).toBeClickable();
    await this.btnMisi.click();
    await pause();
    await expect(this.cardMission).toBeDisplayed({ timeout: 6000 });
    await this.btnEnd.waitForClickable();
    await expect(this.btnEnd).toBeClickable();
    await this.btnEnd.click();
    await expect(this.cardFinish).toBeDisplayed({ timeout: 6000 });
    await pause();
  }

  async createMissionBuilder2() {
    await this.btnMisi.waitForClickable();
    await expect(this.btnMisi).toBeClickable();
    await this.btnMisi.click();
    await pause();
    await this.btnSplitDecision.waitForClickable();
    await expect(this.btnSplitDecision).toBeClickable();
    await this.btnSplitDecision.click();
    await pause();
    await this.btnYaTidak[0].scrollIntoView();
    await this.btnYaTidak[0].click();
    await pause();
    await this.btnMisi.waitForClickable();
    await expect(this.btnMisi).toBeClickable();
    await this.btnMisi.click();
    await pause();
    await expect(this.cardMission).toBeDisplayed({ timeout: 6000 });
    await this.btnEnd.waitForClickable();
    await expect(this.btnEnd).toBeClickable();
    await this.btnEnd.click();
    await expect(this.cardFinish).toBeDisplayed({ timeout: 6000 });
    await pause();
    await this.btnYaTidak[1].click();
    await pause();
    await this.btnWaktuTunggu.waitForClickable();
    await expect(this.btnWaktuTunggu).toBeClickable();
    await this.btnWaktuTunggu.click();
    await expect(this.cardMission).toBeDisplayed({ timeout: 6000 });
    await this.btnEnd.waitForClickable();
    await expect(this.btnEnd).toBeClickable();
    await this.btnEnd.click();
    await pause();
  }

  async verificationPerQuestion() {
    await this.checkboxVerificationPerQst.waitForClickable();
    await this.checkboxVerificationPerQst.click();
  }

  async setMission() {
    await this.cardMission.waitForClickable();
    await expect(this.cardMission).toBeClickable();
    await this.cardMission.doubleClick();
    await this.headerCardMission.waitForDisplayed();
    await pause();
  }

  async setMission2() {
    await this.cardMission2[1].waitForClickable();
    await expect(this.cardMission2[1]).toBeClickable();
    await this.cardMission2[1].doubleClick();
    await this.headerCardMission.waitForDisplayed();
    await pause();
  }

  async waitingPeriod() {
    await this.cardTime.waitForClickable();
    await expect(this.cardTime).toBeClickable();
    await this.cardTime.doubleClick();
    await this.cardTime.waitForDisplayed();
    await pause();
  }

  async setWaitingPeriod(inputWaktu) {
    await this.inputWaktuTunggu.setValue(inputWaktu);
    await browser.pause(2000);
    await this.dropdownTipe.waitForClickable();
    await this.dropdownTipe.click();
    await browser.pause(2000);
    await this.optionJam.scrollIntoView();
    await this.optionJam.click();
    await browser.pause(2000);
    await this.btnSimpanWaitingPeriode.click();
    await pause();
  }

  async setMissionEdit() {
    await this.cardMissionEdit[0].waitForClickable();
    await expect(this.cardMissionEdit[0]).toBeClickable();
    await this.cardMissionEdit[0].doubleClick();
    await this.headerCardMission.waitForDisplayed();
    await pause();
  }

  //with Pin Up
  async setPinUpMisi() {
    await this.checkboxPinUpMisi.click();
  }

  //Scenario 16, 17, 18, 19 without Pin Up
  async settingMissionWithoutPinUp(templateMisi) {
    await this.dropdownTemplateMisi.click();
    await pause();
    await this.searchTemplateMisi.setValue(templateMisi);
    await pause();
    await setDropdown(this.selectTemplateMisi, templateMisi);
    await pause();

    await setStartEndDateTime(
      this.startDate,
      this.endDate,
      this.popUpCalendar,
      this.startTime,
      this.endTime
    );
  }
  //Scenario 19
  async setPushToFF() {
    await this.pushToFF.waitForClickable();
    await this.pushToFF.click();
  }

  //Scenario
  async setVerifikasiFF() {
    await this.verifikasiFF.waitForClickable();
    await this.verifikasiFF.click();
  }

  //Scenario 13
  async setCoin13(
    coinSubmission1,
    coinVerification1,
    coinSubmission2,
    coinVerification2,
    coinSubmission3,
    coinVerification3,
    coinSubmission4,
    coinVerification4,
    coinSubmission5,
    coinVerification5,
    coinSubmission6,
    coinVerification6,
    coinSubmission7,
    coinVerification7,
    coinSubmission8,
    coinVerification8,
    coinSubmission9,
    coinVerification9,
    coinSubmission10,
    coinVerification10,
    coinSubmission11,
    coinVerification11,
    coinSubmission12,
    coinVerification12,
    coinSubmission13,
    coinVerification13,
    coinSubmission14,
    coinVerification14
  ) {
    await this.coinSubmission1[0].scrollIntoView();
    await this.coinSubmission1[0].setValue(coinSubmission1);
    await this.coinVerification1[0].setValue(coinVerification1);
    await this.coinSubmission1[1].scrollIntoView();
    await this.coinSubmission1[1].setValue(coinSubmission2);
    await this.coinVerification1[1].setValue(coinVerification2);
    await this.coinSubmission1[2].scrollIntoView();
    await this.coinSubmission1[2].setValue(coinSubmission3);
    await this.coinVerification1[2].setValue(coinVerification3);
    await this.coinSubmission1[3].scrollIntoView();
    await this.coinSubmission1[3].setValue(coinSubmission4);
    await this.coinVerification1[3].setValue(coinVerification4);
    await this.coinSubmission1[4].scrollIntoView();
    await this.coinSubmission1[4].setValue(coinSubmission5);
    await this.coinVerification1[4].setValue(coinVerification5);
    await this.coinSubmission1[5].scrollIntoView();
    await this.coinSubmission1[5].setValue(coinSubmission6);
    await this.coinVerification1[5].setValue(coinVerification6);
    await this.coinSubmission1[6].scrollIntoView();
    await this.coinSubmission1[6].setValue(coinSubmission7);
    await this.coinVerification1[6].setValue(coinVerification7);
    await this.coinSubmission1[7].scrollIntoView();
    await this.coinSubmission1[7].setValue(coinSubmission8);
    await this.coinVerification1[7].setValue(coinVerification8);
    await this.coinSubmission1[8].scrollIntoView();
    await this.coinSubmission1[8].setValue(coinSubmission9);
    await this.coinVerification1[8].setValue(coinVerification9);
    await this.coinSubmission1[9].scrollIntoView();
    await this.coinSubmission1[9].setValue(coinSubmission10);
    await this.coinVerification1[9].setValue(coinVerification10);
    await this.coinSubmission1[10].scrollIntoView();
    await this.coinSubmission1[10].setValue(coinSubmission11);
    await this.coinVerification1[10].setValue(coinVerification11);
    await this.coinSubmission1[11].scrollIntoView();
    await this.coinSubmission1[11].setValue(coinSubmission12);
    await this.coinVerification1[11].setValue(coinVerification12);
    await this.coinSubmission1[12].scrollIntoView();
    await this.coinSubmission1[12].setValue(coinSubmission13);
    await this.coinVerification1[12].setValue(coinVerification13);
    await this.coinSubmission1[13].scrollIntoView();
    await this.coinSubmission1[13].setValue(coinSubmission14);
    await this.coinVerification1[13].setValue(coinVerification14);
  }

  //Scenario 113
  async setCoin113(
    coinSubmission1,
    coinVerification1,
    XPSub1,
    XPVerif1,
    coinSubmission2,
    coinVerification2,
    XPSub2,
    XPVerif2,
    coinSubmission3,
    coinVerification3,
    XPSub3,
    XPVerif3,
    coinSubmission4,
    coinVerification4,
    XPSub4,
    XPVerif4,
    coinSubmission5,
    coinVerification5,
    XPSub5,
    XPVerif5,
    coinSubmission6,
    coinVerification6,
    XPSub6,
    XPVerif6,
    coinSubmission7,
    coinVerification7,
    XPSub7,
    XPVerif7,
    coinSubmission8,
    coinVerification8,
    XPSub8,
    XPVerif8,
    coinSubmission9,
    coinVerification9,
    XPSub9,
    XPVerif9,
    coinSubmission10,
    coinVerification10,
    XPSub10,
    XPVerif10,
    coinSubmission11,
    coinVerification11,
    XPSub11,
    XPVerif11,
    coinSubmission12,
    coinVerification12,
    XPSub12,
    XPVerif12,
    coinSubmission13,
    coinVerification13,
    XPSub13,
    XPVerif13,
    coinSubmission14,
    coinVerification14,
    XPSub14,
    XPVerif14
  ) {
    await this.coinSubmission1[0].scrollIntoView();
    await this.coinSubmission1[0].setValue(coinSubmission1);
    await this.coinVerification1[0].setValue(coinVerification1);
    await this.XPSubmission[0].setValue(XPSub1);
    await this.XPVerification[0].setValue(XPVerif1);
    await this.coinSubmission1[1].scrollIntoView();
    await this.coinSubmission1[1].setValue(coinSubmission2);
    await this.coinVerification1[1].setValue(coinVerification2);
    await this.XPSubmission[1].setValue(XPSub2);
    await this.XPVerification[1].setValue(XPVerif2);
    await this.coinSubmission1[2].scrollIntoView();
    await this.coinSubmission1[2].setValue(coinSubmission3);
    await this.coinVerification1[2].setValue(coinVerification3);
    await this.XPSubmission[2].setValue(XPSub3);
    await this.XPVerification[2].setValue(XPVerif3);
    await this.coinSubmission1[3].scrollIntoView();
    await this.coinSubmission1[3].setValue(coinSubmission4);
    await this.coinVerification1[3].setValue(coinVerification4);
    await this.XPSubmission[3].setValue(XPSub4);
    await this.XPVerification[3].setValue(XPVerif4);
    await this.coinSubmission1[4].scrollIntoView();
    await this.coinSubmission1[4].setValue(coinSubmission5);
    await this.coinVerification1[4].setValue(coinVerification5);
    await this.XPSubmission[4].setValue(XPSub5);
    await this.XPVerification[4].setValue(XPVerif5);
    await this.coinSubmission1[5].scrollIntoView();
    await this.coinSubmission1[5].setValue(coinSubmission6);
    await this.coinVerification1[5].setValue(coinVerification6);
    await this.XPSubmission[5].setValue(XPSub6);
    await this.XPVerification[5].setValue(XPVerif6);
    await this.coinSubmission1[6].scrollIntoView();
    await this.coinSubmission1[6].setValue(coinSubmission7);
    await this.coinVerification1[6].setValue(coinVerification7);
    await this.XPSubmission[6].setValue(XPSub7);
    await this.XPVerification[6].setValue(XPVerif7);
    await this.coinSubmission1[7].scrollIntoView();
    await this.coinSubmission1[7].setValue(coinSubmission8);
    await this.coinVerification1[7].setValue(coinVerification8);
    await this.XPSubmission[7].setValue(XPSub8);
    await this.XPVerification[7].setValue(XPVerif8);
    await this.coinSubmission1[8].scrollIntoView();
    await this.coinSubmission1[8].setValue(coinSubmission9);
    await this.coinVerification1[8].setValue(coinVerification9);
    await this.XPSubmission[8].setValue(XPSub9);
    await this.XPVerification[8].setValue(XPVerif9);
    await this.coinSubmission1[9].scrollIntoView();
    await this.coinSubmission1[9].setValue(coinSubmission10);
    await this.coinVerification1[9].setValue(coinVerification10);
    await this.XPSubmission[9].setValue(XPSub10);
    await this.XPVerification[9].setValue(XPVerif10);
    await this.coinSubmission1[10].scrollIntoView();
    await this.coinSubmission1[10].setValue(coinSubmission11);
    await this.coinVerification1[10].setValue(coinVerification11);
    await this.XPSubmission[10].setValue(XPSub11);
    await this.XPVerification[10].setValue(XPVerif11);
    await this.coinSubmission1[11].scrollIntoView();
    await this.coinSubmission1[11].setValue(coinSubmission12);
    await this.coinVerification1[11].setValue(coinVerification12);
    await this.XPSubmission[11].setValue(XPSub12);
    await this.XPVerification[11].setValue(XPVerif12);
    await this.coinSubmission1[12].scrollIntoView();
    await this.coinSubmission1[12].setValue(coinSubmission13);
    await this.coinVerification1[12].setValue(coinVerification13);
    await this.XPSubmission[12].setValue(XPSub13);
    await this.XPVerification[12].setValue(XPVerif13);
    await this.coinSubmission1[13].scrollIntoView();
    await this.coinSubmission1[13].setValue(coinSubmission14);
    await this.coinVerification1[13].setValue(coinVerification14);
    await this.XPSubmission[13].setValue(XPSub14);
    await this.XPVerification[13].setValue(XPVerif14);
  }

  //Scenario 14
  async setCoin14m1(
    coinSubmission1,
    coinVerification1,
    XPSub1,
    XPVerif1,
    coinSubmission2,
    coinVerification2,
    XPSub2,
    XPVerif2,
    coinSubmission3,
    coinVerification3,
    XPSub3,
    XPVerif3
  ) {
    await this.coinSubmission1[0].scrollIntoView();
    await this.coinSubmission1[0].setValue(coinSubmission1);
    await this.coinVerification1[0].setValue(coinVerification1);
    await this.XPSubmission[0].setValue(XPSub1);
    await this.XPVerification[0].setValue(XPVerif1);
    await this.coinSubmission1[1].scrollIntoView();
    await this.coinSubmission1[1].setValue(coinSubmission2);
    await this.coinVerification1[1].setValue(coinVerification2);
    await this.XPSubmission[1].setValue(XPSub2);
    await this.XPVerification[1].setValue(XPVerif2);
    await this.coinSubmission1[2].scrollIntoView();
    await this.coinSubmission1[2].setValue(coinSubmission3);
    await this.coinVerification1[2].setValue(coinVerification3);
    await this.XPSubmission[2].setValue(XPSub3);
    await this.XPVerification[2].setValue(XPVerif3);
  }

  //Scenario 14
  async setCoin14m2(
    coinSubmission1,
    coinVerification1,
    coinSubmission2,
    coinVerification2,
    coinSubmission3,
    coinVerification3
  ) {
    await this.coinSubmission1[0].scrollIntoView();
    await this.coinSubmission1[0].setValue(coinSubmission1);
    await this.coinVerification1[0].setValue(coinVerification1);
    await this.coinSubmission1[1].scrollIntoView();
    await this.coinSubmission1[1].setValue(coinSubmission2);
    await this.coinVerification1[1].setValue(coinVerification2);
    await this.coinSubmission1[2].scrollIntoView();
    await this.coinSubmission1[2].setValue(coinSubmission3);
    await this.coinVerification1[2].setValue(coinVerification3);
  }
  //Scenario 15

  async setCoin15m1(coinSubmission1, coinVerification1) {
    await this.coinSubmission1[0].scrollIntoView();
    await this.coinSubmission1[0].setValue(coinSubmission1);
    await this.coinVerification1[0].setValue(coinVerification1);
  }

  async setCoin15m2(
    coinSubmission1,
    coinVerification1,
    XPSubmission1,
    XPVerification1,
    coinSubmission2,
    coinVerification2,
    XPSubmission2,
    XPVerification2,
    coinSubmission3,
    coinVerification3,
    XPSubmission3,
    XPVerification3
  ) {
    await this.coinSubmission1[0].scrollIntoView();
    await this.coinSubmission1[0].setValue(coinSubmission1);
    await this.coinVerification1[0].setValue(coinVerification1);
    await this.XPSubmission[0].scrollIntoView();
    await this.XPSubmission[0].setValue(XPSubmission1);
    await this.XPVerification[0].setValue(XPVerification1);
    await this.coinSubmission1[1].scrollIntoView();
    await this.coinSubmission1[1].setValue(coinSubmission2);
    await this.coinVerification1[1].setValue(coinVerification2);
    await this.XPSubmission[1].scrollIntoView();
    await this.XPSubmission[1].setValue(XPSubmission2);
    await this.XPVerification[1].setValue(XPVerification2);
    await this.coinSubmission1[2].scrollIntoView();
    await this.coinSubmission1[2].setValue(coinSubmission3);
    await this.coinVerification1[2].setValue(coinVerification3);
    await this.XPSubmission[2].scrollIntoView();
    await this.XPSubmission[2].setValue(XPSubmission3);
    await this.XPVerification[2].setValue(XPVerification3);
  }

  //Scenario 16, 17, 18
  async setVerifikasiManual() {
    await this.verifikasiManual.click();
    await pause();
  }
  //Scenario 18
  async setCoinSubmission(coinSubmission) {
    await this.coinSubmission.setValue(coinSubmission);
  }
  //Scenario 16, 17
  async setCoin(coinSubmission, coinVerification) {
    await this.coinSubmission.setValue(coinSubmission);
    await pause();
    await this.coinVerification.setValue(coinVerification);
    await pause();
  }

  //Scenario 25
  async setCoin25(
    coinSubmission1,
    coinVerification1,
    coinSubmission2,
    coinVerification2,
    coinSubmission3,
    coinVerification3
  ) {
    await this.coinSubmission1[0].scrollIntoView();
    await this.coinSubmission1[0].setValue(coinSubmission1);
    await this.coinVerification1[0].setValue(coinVerification1);
    await this.coinSubmission1[1].scrollIntoView();
    await this.coinSubmission1[1].setValue(coinSubmission2);
    await this.coinVerification1[1].setValue(coinVerification2);
    await this.coinSubmission1[2].scrollIntoView();
    await this.coinSubmission1[2].setValue(coinSubmission3);
    await this.coinVerification1[2].setValue(coinVerification3);
  }

  //Scenario 98
  async setCoin98(coinSubmission1, coinVerification1) {
    await this.coinSubmission1[0].scrollIntoView();
    await this.coinSubmission1[0].setValue(coinSubmission1);
    await this.coinVerification1[0].setValue(coinVerification1);
  }

  //Scenario 25
  async setCoin25edit(coinSubmission1, coinVerification1) {
    await this.coinSubmission1[0].scrollIntoView();
    await this.coinSubmission1[0].setValue(coinSubmission1);
    await this.coinVerification1[0].setValue(coinVerification1);
  }

  //Scenario 42
  async setXP(XPSubmission, XPVerification) {
    await this.XPSubmission[0].setValue(XPSubmission);
    await pause();
    await this.XPVerification[0].setValue(XPVerification);
  }

  async simpanSettingMission() {
    await this.btnSimpanSetMisi.scrollIntoView();
    await this.btnSimpanSetMisi.waitForClickable();
    await expect(this.btnSimpanSetMisi).toBeClickable();
    await this.btnSimpanSetMisi.click();
    await pause();
  }

  async batalSettingMission() {
    await this.btnBatalSetMisi.waitForClickable();
    await expect(this.btnBatalSetMisi).toBeClickable();
    await this.btnBatalSetMisi.click();
  }

  async simpan() {
    await this.btnSimpan.waitForClickable();
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
  }

  async publish() {
    await this.btnPublish.waitForClickable();
    await expect(this.btnPublish).toBeClickable();
    await this.btnPublish.click();
  }

  async saveAsDraft() {
    await this.btnSaveAsDraft.waitForClickable();
    await expect(this.btnSaveAsDraft).toBeClickable();
    await this.btnSaveAsDraft.click();
  }

  async reblastOn() {
    //await this.btnReblastOn.scrollIntoView();
    //await this.btnReblastOn.waitForClickable();
    //await expect(this.btnReblastOn).toBeClickable();
    await this.btnReblastOn[0].click();
    await browser.pause(3000);
  }

  async confirmPublish() {
    await this.btnConfirmPublish.waitForClickable();
    await expect(this.btnConfirmPublish).toBeClickable();
    await this.btnConfirmPublish.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new MissionBuilderPage();
