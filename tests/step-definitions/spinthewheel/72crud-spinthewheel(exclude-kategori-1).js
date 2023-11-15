import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spinthewheelPage from "../../pageobjects/spinthewheel/spinthewheel.page";
import ExcludeKategori1 from "../../pageobjects/spinthewheel/72crud-spinthewheel(exclude-kategori-1).page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 72. CRUD Spin the Wheel (Exclude 1 Kategori)"
);
allureReporter.addFeature("CRUD Spin the Wheel (Exclude 1 Kategori)");

//Scenario Outline: As a user, I can create Spin The Wheel exclude kategori 1
Given(/^I am on the Spin The Wheel page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SpinTheWheel();
});

When(/^I click button Buat$/, async () => {
  // await spinthewheelPage.tombolBuat();
});

Then(
  /^System should be leading to form Buat Spin The Wheel page$/,
  async () => {}
);

Given(/^I am on the Buat Spin The Wheel page$/, async () => {});

When(/^I input Nama Program (.*)$/, async (nama_program) => {
  // await ExcludeKategori1.NamaProgramSTW(nama_program);
});

Then(/^System should be able to input Nama Program$/, async () => {});

When(
  /^I search and select data in Nama Trade Program (.*)$/,
  async (nama_trade_program) => {
    // await ExcludeKategori1.namaTradeProgram(nama_trade_program);
  }
);

Then(
  /^System should be able to search and select data in Nama Trade Program$/,
  async () => {}
);

When(/^I select date in Tanggal Mulai$/, async () => {
  // await ExcludeKategori1.tanggalMulai();
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
  // await ExcludeKategori1.simpanSTW();
});

Then(
  /^System should be able to submit data and leading to Spin The Wheel Page$/,
  async () => {}
);

When(/^I search in Spin The Wheel Page (.*)$/, async (nama_program) => {
  await spinthewheelPage.Search(nama_program);
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
  // await ExcludeKategori1.tabAudience();
});

Then(
  /^System should be click tab Audience and leading to form tab Audience$/,
  async () => {}
);

When(/^I select Fixed Panel$/, async () => {
  // await ExcludeKategori1.FixedPanel();
});

Then(/^System should be able to select Fixed Panel$/, async () => {});

When(/^I click button Import XLSX and submit data$/, async () => {
  // await ExcludeKategori1.ImportTamplate();
  // await ExcludeKategori1.btnKirim();
});

Then(
  /^System should be click button Import XLSX and submit data$/,
  async () => {}
);

When(/^I click button Export Template$/, async () => {
  // await ExcludeKategori1.ExportTamplate();
});

Then(/^System should be able to download Template$/, async () => {});

When(/^I click button check$/, async () => {
  // await ExcludeKategori1.btnCheck();
});

Then(/^System should be check data and update panel blast$/, async () => {});

When(/^I click button Simpan$/, async () => {
  // await ExcludeKategori1.btnSimpanAudience();
});

Then(/^System should be submit data in tab Audience$/, async () => {});

When(/^I click tab pengaturan mekanisme$/, async () => {
  await ExcludeKategori1.tabPengaturanMekanisme();
});

Then(
  /^System should be leading to form tab pengaturan mekanisme$/,
  async () => {}
);

When(
  /^I input frekuensi belanja B2C Mingguan yang Dibutuhkan (.*)$/,
  async (frekuensi_belanja) => {
    await ExcludeKategori1.frekuensiBelanja(frekuensi_belanja);
  }
);

Then(
  /^System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan$/,
  async () => {}
);

When(
  /^I input Maksimal Frekuensi Reward User per Minggu (.*)$/,
  async (maksimal_frekuensi) => {
    await ExcludeKategori1.maksimalFrekuensi(maksimal_frekuensi);
  }
);

Then(
  /^System should be input Maksimal Frekuensi Reward User per Minggu$/,
  async () => {}
);

When(/^I select radio button Exclude$/, async () => {
  await ExcludeKategori1.Exclude();
});

Then(/^System should be select radio button Exclude$/, async () => {});

When(/^I select radio button Batasi dengan Kategori$/, async () => {
  await ExcludeKategori1.batasiDenganKategori();
});

Then(
  /^System should be select radio button Batasi dengan Kategori$/,
  async () => {}
);

When(/^I select data in Batasan Berdasarkan Kategori$/, async () => {
  await ExcludeKategori1.batasanBerdasarkanKategori();
});

Then(
  /^System should be able to select data in Batasan Berdasarkan Kategori$/,
  async () => {}
);

When(
  /^I input minimum nilai transaksi (.*)$/,
  async (minimum_nilai_transaksi) => {
    await ExcludeKategori1.minimumNilaiTransaksi(minimum_nilai_transaksi);
  }
);

Then(/^System should be input minimum nilai transaksi$/, async () => {});

When(/^I input Limit spin (.*)$/, async (limit_spin) => {
  await ExcludeKategori1.limitSpin(limit_spin);
});

Then(/^System should be input Limit Spin$/, async () => {});

When(/^I input Jumlah Variasi Koin (.*)$/, async (jumlah_variasi_koin) => {
  await ExcludeKategori1.jumlahVariasiCoin(jumlah_variasi_koin);
});

Then(/^System should be input Jumlah Variasi Koin$/, async () => {});

When(/^I click button Reward Non coin$/, async () => {
  await ExcludeKategori1.btnRewardNonCoin();
});

Then(/^System should be show input form non coin$/, async () => {});

When(/^I input coin1 (.*)$/, async (coin1) => {
  await ExcludeKategori1.Coin1(coin1);
});

Then(/^System should be input coin1$/, async () => {});

When(/^I input coin2 (.*)$/, async (coin2) => {
  await ExcludeKategori1.Coin2(coin2);
});

Then(/^System should be input coin2$/, async () => {});

When(/^I input coin3 (.*)$/, async (coin3) => {
  await ExcludeKategori1.Coin3(coin3);
});

Then(/^System should be input coin3$/, async () => {});

When(/^I input non coin (.*)$/, async (noncoin) => {
  await ExcludeKategori1.nonCoin(noncoin);
});

Then(/^System should be input non coin$/, async () => {});

When(/^I input slice1 (.*)$/, async (slice1) => {
  await ExcludeKategori1.Slice1(slice1);
});

Then(/^System should be input slice1$/, async () => {});

When(/^I input slice2 (.*)$/, async (slice2) => {
  await ExcludeKategori1.Slice2(slice2);
});

Then(/^System should be input slice2$/, async () => {});

When(/^I input slice3 (.*)$/, async (slice3) => {
  await ExcludeKategori1.Slice3(slice3);
});

Then(/^System should be input slice3$/, async () => {});

When(/^I input slice4 (.*)$/, async (slice4) => {
  await ExcludeKategori1.Slice4(slice4);
});

Then(/^System should be input slice4$/, async () => {});

When(/^I input probability1 (.*)$/, async (probability1) => {
  await ExcludeKategori1.Probability1(probability1);
});

Then(/^System should be input probability1$/, async () => {});

When(/^I input probability2 (.*)$/, async (probability2) => {
  await ExcludeKategori1.Probability2(probability2);
});

Then(/^System should be input probability2$/, async () => {});

When(/^I input probability3 (.*)$/, async (probability3) => {
  await ExcludeKategori1.Probability3(probability3);
});

Then(/^System should be input probability3$/, async () => {});

When(/^I input probability4 (.*)$/, async (probability4) => {
  await ExcludeKategori1.Probability4(probability4);
});

Then(/^System should be input probability4$/, async () => {});

When(/^I click button Simpan in form tab Pengaturan Mekanisme$/, async () => {
  await ExcludeKategori1.simpanTabPengaturanMekanisme();
});

Then(
  /^System should be able to submit data in form tab Pengaturan Mekanisme$/,
  async () => {}
);

When(/^I click tab Preview$/, async () => {
  await ExcludeKategori1.tabPreview();
});

Then(/^System should be leading to form tab Preview$/, async () => {});

When(
  /^I insert Floating Icon and input Nama Program in form tab Preview (.*)$/,
  async (nama_program) => {
    await ExcludeKategori1.NamaProgramPreview(nama_program);
    await ExcludeKategori1.InsertGambar1();
  }
);

Then(
  /^System should be insert floating icon and input Nama Program in form tab Preview$/,
  async () => {}
);

When(/^I click button Simpan and Publish in form tab Preview$/, async () => {
  await ExcludeKategori1.simpanPreview();
  await ExcludeKategori1.publishTabPreview();
});

Then(
  /^System should be submit data and leading to Spin The Wheel Page$/,
  async () => {}
);

When(
  /^I search and click button Delete in Spin The Wheel Page (.*)$/,
  async (nama_program) => {
    await spinthewheelPage.Search(nama_program);
    await spinthewheelPage.Delete();
  }
);

Then(/^System should be able to find and Delete data$/, async () => {});
