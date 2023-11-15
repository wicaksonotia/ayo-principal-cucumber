import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spinthewheelPage from "../../pageobjects/spinthewheel/spinthewheel.page";
import ExcludeProduk1 from "../../pageobjects/spinthewheel/71crud-spinthewheel(exclude-produk-1).page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 71. CRUD Spin the Wheel (Exclude 1 Produk)"
);
allureReporter.addFeature("CRUD Spin the Wheel (Exclude 1 Produk)");

//Scenario Outline: As a user, I can create Spin The Wheel exclude produk 1
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

When(/^I input Nama Program (.*)$/, async (nama_program) => {
  await ExcludeProduk1.NamaProgramSTW(nama_program);
});

Then(/^System should be able to input Nama Program$/, async () => {});

When(
  /^I search and select data in Nama Trade Program (.*)$/,
  async (nama_trade_program) => {
    await ExcludeProduk1.namaTradeProgram(nama_trade_program);
  }
);

Then(
  /^System should be able to search and select data in Nama Trade Program$/,
  async () => {}
);

When(/^I select date in Tanggal Mulai$/, async () => {
  await ExcludeProduk1.tanggalMulai();
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
  await ExcludeProduk1.simpanSTW();
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
  await ExcludeProduk1.tabAudience();
});

Then(
  /^System should be click tab Audience and leading to form tab Audience$/,
  async () => {}
);

When(/^I select Fixed Panel$/, async () => {
  await ExcludeProduk1.FixedPanel();
});

Then(/^System should be able to select Fixed Panel$/, async () => {});

When(/^I click button Import XLSX and submit data$/, async () => {
  await ExcludeProduk1.ImportTamplate();
  await ExcludeProduk1.btnKirim();
});

Then(
  /^System should be click button Import XLSX and submit data$/,
  async () => {}
);

When(/^I click button Export Template$/, async () => {
  await ExcludeProduk1.ExportTamplate();
});

Then(/^System should be able to download Template$/, async () => {});

When(/^I click button check$/, async () => {
  await ExcludeProduk1.btnCheck();
});

Then(/^System should be check data and update panel blast$/, async () => {});

When(/^I click button Simpan$/, async () => {
  await ExcludeProduk1.btnSimpanAudience();
});

Then(/^System should be submit data in tab Audience$/, async () => {});

When(/^I click tab pengaturan mekanisme$/, async () => {
  await ExcludeProduk1.tabPengaturanMekanisme();
});

Then(
  /^System should be leading to form tab pengaturan mekanisme$/,
  async () => {}
);

When(
  /^I input frekuensi belanja B2C Mingguan yang Dibutuhkan (.*)$/,
  async (frekuensi_belanja) => {
    await ExcludeProduk1.frekuensiBelanja(frekuensi_belanja);
  }
);

Then(
  /^System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan$/,
  async () => {}
);

When(
  /^I input Maksimal Frekuensi Reward User per Minggu (.*)$/,
  async (maksimal_frekuensi) => {
    await ExcludeProduk1.maksimalFrekuensi(maksimal_frekuensi);
  }
);

Then(
  /^System should be input Maksimal Frekuensi Reward User per Minggu$/,
  async () => {}
);

When(/^I select radio button Exclude$/, async () => {
  await ExcludeProduk1.Exclude();
});

Then(/^System should be select radio button Exclude$/, async () => {});

When(/^I select radio button Batasi dengan Produk$/, async () => {
  await ExcludeProduk1.batasiDenganProduk();
});

Then(
  /^System should be select radio button Batasi dengan Produk$/,
  async () => {}
);

When(
  /^I search and select data in Batasan Berdasarkan Produk (.*)$/,
  async (batasan_berdasarkan_produk) => {
    await ExcludeProduk1.batasanBerdasarkanProduk(batasan_berdasarkan_produk);
  }
);

Then(
  /^System should be able to search and select data in Batasan Berdasarkan Produk$/,
  async () => {}
);

When(
  /^I input minimum nilai transaksi (.*)$/,
  async (minimum_nilai_transaksi) => {
    await ExcludeProduk1.minimumNilaiTransaksi(minimum_nilai_transaksi);
  }
);

Then(/^System should be input minimum nilai transaksi$/, async () => {});

When(/^I input Limit spin (.*)$/, async (limit_spin) => {
  await ExcludeProduk1.limitSpin(limit_spin);
});

Then(/^System should be input Limit Spin$/, async () => {});

When(/^I input Jumlah Variasi Koin (.*)$/, async (jumlah_variasi_koin) => {
  await ExcludeProduk1.jumlahVariasiCoin(jumlah_variasi_koin);
});

Then(/^System should be input Jumlah Variasi Koin$/, async () => {});

When(/^I input coin1 (.*)$/, async (coin1) => {
  await ExcludeProduk1.Coin1(coin1);
});

Then(/^System should be input coin1$/, async () => {});

When(/^I input coin2 (.*)$/, async (coin2) => {
  await ExcludeProduk1.Coin2(coin2);
});

Then(/^System should be input coin2$/, async () => {});

When(/^I input slice1 (.*)$/, async (slice1) => {
  await ExcludeProduk1.Slice1(slice1);
});

Then(/^System should be input slice1$/, async () => {});

When(/^I input slice2 (.*)$/, async (slice2) => {
  await ExcludeProduk1.Slice2(slice2);
});

Then(/^System should be input slice2$/, async () => {});

When(/^I input probability1 (.*)$/, async (probability1) => {
  await ExcludeProduk1.Probability1(probability1);
});

Then(/^System should be input probability1$/, async () => {});

When(/^I input probability2 (.*)$/, async (probability2) => {
  await ExcludeProduk1.Probability2(probability2);
});

Then(/^System should be input probability2$/, async () => {});

When(/^I click button Simpan in form tab Pengaturan Mekanisme$/, async () => {
  await ExcludeProduk1.simpanTabPengaturanMekanisme();
});

Then(
  /^System should be able to submit data in form tab Pengaturan Mekanisme$/,
  async () => {}
);

When(/^I click tab Preview$/, async () => {
  await ExcludeProduk1.tabPreview();
});

Then(/^System should be leading to form tab Preview$/, async () => {});

When(
  /^I insert Floating Icon and input Nama Program in form tab Preview (.*)$/,
  async (nama_program) => {
    await ExcludeProduk1.NamaProgramPreview(nama_program);
    await ExcludeProduk1.InsertGambar1();
  }
);

Then(
  /^System should be insert floating icon and input Nama Program in form tab Preview$/,
  async () => {}
);

When(/^I click button Simpan and Publish in form tab Preview$/, async () => {
  await ExcludeProduk1.simpanPreview();
  await ExcludeProduk1.publishTabPreview();
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
