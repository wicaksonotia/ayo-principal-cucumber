import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spinthewheelPage from "../../pageobjects/spinthewheel/spinthewheel.page";
import RewardCoinNoncoinXP from "../../pageobjects/spinthewheel/75crud-spinthewheel(reward-coin-noncoin-dan-xp).page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 75. CRUD Spin the Wheel (Reward Coin, Non Coin dan XP)"
);
allureReporter.addFeature("CRUD Spin the Wheel (Reward Coin, Non Coin dan XP)");

//Scenario Outline: As a user, I can create Spin The Wheel reward coin, non coin, dan xp
Given(/^I am on the Spin The Wheel page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SpinTheWheel();
});

When(/^I click button Buat$/, async () => {
  await spinthewheelPage.tombolBuat();
});

Then(
  /^System should be leading to form Buat Spin The Wheel page$/,
  async () => {}
);

Given(/^I am on the Buat Spin The Wheel page$/, async () => {});

When(/^I input Nama Program$/, async () => {
  await RewardCoinNoncoinXP.NamaProgramSTW(
    dataTest.spinTheWheel.namaProgramSTW75
  );
});

Then(/^System should be able to input Nama Program$/, async () => {});

When(/^I search and select data in Nama Trade Program$/, async () => {
  await RewardCoinNoncoinXP.namaTradeProgram(
    dataTest.spinTheWheel.tradeProgram75
  );
});

Then(
  /^System should be able to search and select data in Nama Trade Program$/,
  async () => {}
);

When(/^I select date in Tanggal Mulai$/, async () => {
  await RewardCoinNoncoinXP.tanggalMulai();
});

Then(/^System should be able to select date in Tanggal Mulai$/, async () => {});

When(/^I select time in Jam Terbit$/, async () => {});

Then(/^System should be able to select time in Jam Terbit$/, async () => {});

When(/^I select date in Tanggal Berakhir$/, async () => {});

Then(
  /^System should be able to select date in Tanggal Berakhir$/,
  async () => {}
);

When(/^I select time in Jam Berakhir$/, async () => {});

Then(/^System should be able to select time in Jam Berakhir$/, async () => {});

When(/^I click button Simpan in form tab Spin The Wheel$/, async () => {
  await RewardCoinNoncoinXP.simpanSTW();
});

Then(
  /^System should be able to submit data and leading to Spin The Wheel Page$/,
  async () => {}
);

When(/^I search in Spin The Wheel Page$/, async () => {
  await spinthewheelPage.Search(dataTest.spinTheWheel.namaProgramSTW75);
});

Then(/^System should be able to search and find data$/, async () => {});

When(/^I click button Edit in Spin The Wheel Page$/, async () => {
  await spinthewheelPage.Edit();
});

Then(
  /^System should be click button and leading to form Buat Spin The Wheel page$/,
  async () => {}
);

When(/^I click tab Audience$/, async () => {
  await RewardCoinNoncoinXP.tabAudience();
});

Then(
  /^System should be click tab Audience and leading to form tab Audience$/,
  async () => {}
);

When(/^I select Fixed Panel$/, async () => {
  await RewardCoinNoncoinXP.FixedPanel();
});

Then(/^System should be able to select Fixed Panel$/, async () => {});

When(/^I click button Import XLSX and submit data$/, async () => {
  await RewardCoinNoncoinXP.ImportTamplate();
  await RewardCoinNoncoinXP.btnKirim();
});

Then(
  /^System should be click button Import XLSX and submit data$/,
  async () => {}
);

When(/^I click button Export Template$/, async () => {
  await RewardCoinNoncoinXP.ExportTamplate();
});

Then(/^System should be able to download Template$/, async () => {});

When(/^I click button check$/, async () => {
  await RewardCoinNoncoinXP.btnCheck();
});

Then(/^System should be check data and update panel blast$/, async () => {});

When(/^I click button Simpan$/, async () => {
  await RewardCoinNoncoinXP.btnSimpanAudience();
});

Then(/^System should be submit data in tab Audience$/, async () => {});

When(/^I click tab pengaturan mekanisme$/, async () => {
  await RewardCoinNoncoinXP.tabPengaturanMekanisme();
});

Then(
  /^System should be leading to form tab pengaturan mekanisme$/,
  async () => {}
);

When(/^I input frekuensi belanja B2C Mingguan yang Dibutuhkan$/, async () => {
  await RewardCoinNoncoinXP.frekuensiBelanja(dataTest.spinTheWheel.FBelanja75);
});

Then(
  /^System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan$/,
  async () => {}
);

When(/^I input Maksimal Frekuensi Reward User per Minggu$/, async () => {
  await RewardCoinNoncoinXP.maksimalFrekuensi(dataTest.spinTheWheel.FReward75);
});

Then(
  /^System should be input Maksimal Frekuensi Reward User per Minggu$/,
  async () => {}
);

When(/^I click button tambah in Tier 1$/, async () => {
  await RewardCoinNoncoinXP.TambahTier();
});

Then(/^System should be show Tier 2$/, async () => {});

When(/^I input data in Tier 1$/, async () => {
  await RewardCoinNoncoinXP.minimumNilaiTransaksiT1(
    dataTest.spinTheWheel.minTransaksiT1
  );
  await RewardCoinNoncoinXP.maksimumNilaiTransaksiT1(
    dataTest.spinTheWheel.makTransaksiT1
  );
  await RewardCoinNoncoinXP.limitSpinT1(dataTest.spinTheWheel.limitSpinT1);
  await RewardCoinNoncoinXP.jumlahVariasiCoinT1(
    dataTest.spinTheWheel.jlmVarCoinT1
  );
  await RewardCoinNoncoinXP.Coin1T1(dataTest.spinTheWheel.coin1T1);
  await RewardCoinNoncoinXP.Coin2T1(dataTest.spinTheWheel.coin1T2);
  await RewardCoinNoncoinXP.Coin3T1(dataTest.spinTheWheel.coin3T1);
  await RewardCoinNoncoinXP.RewardXP1T1();
  await RewardCoinNoncoinXP.XP1T1(dataTest.spinTheWheel.xp1T1);
  await RewardCoinNoncoinXP.RewardXP1T1();
  await RewardCoinNoncoinXP.XP2T1(dataTest.spinTheWheel.xp2T1);
  await RewardCoinNoncoinXP.Slice1T1(dataTest.spinTheWheel.slice1T1);
  await RewardCoinNoncoinXP.Slice2T1(dataTest.spinTheWheel.slice2T1);
  await RewardCoinNoncoinXP.Slice3T1(dataTest.spinTheWheel.slice3T1);
  await RewardCoinNoncoinXP.Slice4T1(dataTest.spinTheWheel.slice4T1);
  await RewardCoinNoncoinXP.Slice5T1(dataTest.spinTheWheel.slice5T1);
  await RewardCoinNoncoinXP.Probability1T1(dataTest.spinTheWheel.prob1T1);
  await RewardCoinNoncoinXP.Probability2T1(dataTest.spinTheWheel.prob2T1);
  await RewardCoinNoncoinXP.Probability3T1(dataTest.spinTheWheel.prob3T1);
  await RewardCoinNoncoinXP.Probability4T1(dataTest.spinTheWheel.prob4T1);
  await RewardCoinNoncoinXP.Probability5T1(dataTest.spinTheWheel.prob5T1);
});

Then(/^System should be input in Tier 1$/, async () => {});

When(/^I input data in Tier 2$/, async () => {
  await RewardCoinNoncoinXP.limitSpinT2(dataTest.spinTheWheel.limitSpinT2);
  await RewardCoinNoncoinXP.jumlahVariasiCoinT2(
    dataTest.spinTheWheel.jlmVarCoinT2
  );
  await RewardCoinNoncoinXP.btnRewardNonCoinT2();
  await RewardCoinNoncoinXP.Coin1T2(dataTest.spinTheWheel.coin1T2);
  await RewardCoinNoncoinXP.Coin2T2(dataTest.spinTheWheel.coin2T2);
  await RewardCoinNoncoinXP.nonCoinT2(dataTest.spinTheWheel.noncoinT2);
  await RewardCoinNoncoinXP.RewardXPT2();
  await RewardCoinNoncoinXP.XP1T2(dataTest.spinTheWheel.xpT2);
  await RewardCoinNoncoinXP.Slice1T2(dataTest.spinTheWheel.slice1T2);
  await RewardCoinNoncoinXP.Slice2T2(dataTest.spinTheWheel.slice2T2);
  await RewardCoinNoncoinXP.Slice3T2(dataTest.spinTheWheel.slice3T2);
  await RewardCoinNoncoinXP.Slice4T2(dataTest.spinTheWheel.slice4T2);
  await RewardCoinNoncoinXP.Probability1T2(dataTest.spinTheWheel.prob1T2);
  await RewardCoinNoncoinXP.Probability2T2(dataTest.spinTheWheel.prob2T2);
  await RewardCoinNoncoinXP.Probability3T2(dataTest.spinTheWheel.prob3T2);
  await RewardCoinNoncoinXP.Probability4T2(dataTest.spinTheWheel.prob4T2);
});

Then(/^System should be input in Tier 2$/, async () => {});

When(/^I click button Simpan in form tab Pengaturan Mekanisme$/, async () => {
  await RewardCoinNoncoinXP.simpanTabPengaturanMekanisme();
});

Then(
  /^System should be able to submit data in form tab Pengaturan Mekanisme$/,
  async () => {}
);

When(/^I click tab Preview$/, async () => {
  await RewardCoinNoncoinXP.tabPreview();
});

Then(/^System should be leading to form tab Preview$/, async () => {});

When(
  /^I insert Floating Icon and input Nama Program in form tab Preview$/,
  async () => {
    await RewardCoinNoncoinXP.NamaProgramPreview(
      dataTest.spinTheWheel.namaProgramSTW75
    );
    await RewardCoinNoncoinXP.InsertGambar1();
  }
);

Then(
  /^System should be insert floating icon and input Nama Program in form tab Preview$/,
  async () => {}
);

When(/^I click button Simpan and Publish in form tab Preview$/, async () => {
  await RewardCoinNoncoinXP.simpanPreview();
  await RewardCoinNoncoinXP.publishTabPreview();
});

Then(
  /^System should be submit data and leading to Spin The Wheel Page$/,
  async () => {}
);

When(/^I search and click button Delete in Spin The Wheel Page$/, async () => {
  await spinthewheelPage.Search(dataTest.spinTheWheel.namaProgramSTW75);
  await spinthewheelPage.Delete();
});

Then(/^System should be able to find and Delete data$/, async () => {});
