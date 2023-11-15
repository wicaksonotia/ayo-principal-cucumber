import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spinthewheelPage from "../../pageobjects/spinthewheel/spinthewheel.page";
import STWRewardNonCoin from "../../pageobjects/spinthewheel/73crud-spinthewheel(reward-noncoin).page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 73. CRUD Spin the Wheel (Reward Non Coin)"
);
allureReporter.addFeature("CRUD Spin the Wheel (Reward Non Coin)");

//Scenario Outline: As a user, I can create Spin The Wheel reward noncoin
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
  await STWRewardNonCoin.NamaProgramSTW(nama_program);
});

Then(/^System should be able to input Nama Program$/, async () => {});

When(
  /^I search and select data in Nama Trade Program (.*)$/,
  async (nama_trade_program) => {
    await STWRewardNonCoin.namaTradeProgram(nama_trade_program);
  }
);

Then(
  /^System should be able to search and select data in Nama Trade Program$/,
  async () => {}
);

When(/^I select date in Tanggal Mulai$/, async () => {
  await STWRewardNonCoin.tanggalMulai();
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
  await STWRewardNonCoin.simpanSTW();
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
  await STWRewardNonCoin.tabAudience();
});

Then(
  /^System should be click tab Audience and leading to form tab Audience$/,
  async () => {}
);

When(/^I select Fixed Panel$/, async () => {
  await STWRewardNonCoin.FixedPanel();
});

Then(/^System should be able to select Fixed Panel$/, async () => {});

When(/^I click button Import XLSX and submit data$/, async () => {
  await STWRewardNonCoin.ImportTamplate();
  await STWRewardNonCoin.btnKirim();
});

Then(
  /^System should be click button Import XLSX and submit data$/,
  async () => {}
);

When(/^I click button Export Template$/, async () => {
  await STWRewardNonCoin.ExportTamplate();
});

Then(/^System should be able to download Template$/, async () => {});

When(/^I click button check$/, async () => {
  await STWRewardNonCoin.btnCheck();
});

Then(/^System should be check data and update panel blast$/, async () => {});

When(/^I click button Simpan$/, async () => {
  await STWRewardNonCoin.btnSimpanAudience();
});

Then(/^System should be submit data in tab Audience$/, async () => {});

When(/^I click tab pengaturan mekanisme$/, async () => {
  await STWRewardNonCoin.tabPengaturanMekanisme();
});

Then(
  /^System should be leading to form tab pengaturan mekanisme$/,
  async () => {}
);

When(
  /^I input frekuensi belanja B2C Mingguan yang Dibutuhkan (.*)$/,
  async (frekuensi_belanja) => {
    await STWRewardNonCoin.frekuensiBelanja(frekuensi_belanja);
  }
);

Then(
  /^System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan$/,
  async () => {}
);

When(
  /^I input Maksimal Frekuensi Reward User per Minggu (.*)$/,
  async (maksimal_frekuensi) => {
    await STWRewardNonCoin.maksimalFrekuensi(maksimal_frekuensi);
  }
);

Then(
  /^System should be input Maksimal Frekuensi Reward User per Minggu$/,
  async () => {}
);

When(/^I select radio button Pembatasan Produk dan Kategori$/, async () => {
  await STWRewardNonCoin.pembatasanProdukdanKategori();
});

Then(
  /^System should be select radio button Pembatasan Produk and Kategori$/,
  async () => {}
);

When(/^I select radio button Batasi dengan Produk$/, async () => {
  await STWRewardNonCoin.batasiDenganProduk();
});

Then(
  /^System should be select radio button Batasi dengan Produk$/,
  async () => {}
);

When(
  /^I search and select data in Batasan Berdasarkan Produk (.*)$/,
  async (batasan_berdasarkan_produk) => {
    await STWRewardNonCoin.batasanBerdasarkanProduk(batasan_berdasarkan_produk);
  }
);

Then(
  /^System should be able to search and select data in Batasan Berdasarkan Produk$/,
  async () => {}
);

When(
  /^I input Nilai Transaksi Minimal (.*)$/,
  async (nilai_transaksi_minimal) => {
    await STWRewardNonCoin.nilaiTransaksiMinimal(nilai_transaksi_minimal);
  }
);

Then(/^System should be input Nilai Transaksi Minimal$/, async () => {});

When(
  /^I input minimum nilai transaksi (.*)$/,
  async (minimum_nilai_transaksi) => {
    await STWRewardNonCoin.minimumNilaiTransaksi(minimum_nilai_transaksi);
  }
);

Then(/^System should be input minimum nilai transaksi$/, async () => {});

When(/^I input Limit spin (.*)$/, async (limit_spin) => {
  await STWRewardNonCoin.limitSpin(limit_spin);
});

Then(/^System should be input Limit Spin$/, async () => {});

When(/^I click button Reward Non coin$/, async () => {
  await STWRewardNonCoin.btnRewardNonCoin();
});

Then(/^System should be show input form non coin$/, async () => {});

When(/^I input non coin (.*)$/, async (noncoin) => {
  await STWRewardNonCoin.nonCoin(noncoin);
});

Then(/^System should be input non coin$/, async () => {});

When(/^I input slice (.*)$/, async (slice) => {
  await STWRewardNonCoin.Slice(slice);
});

Then(/^System should be input slice$/, async () => {});

When(/^I input probability (.*)$/, async (probability) => {
  await STWRewardNonCoin.Probability(probability);
});

Then(/^System should be input probability$/, async () => {});

Then(/^System should be input probability3$/, async () => {});

When(/^I click button Simpan in form tab Pengaturan Mekanisme$/, async () => {
  await STWRewardNonCoin.simpanTabPengaturanMekanisme();
});

Then(
  /^System should be able to submit data in form tab Pengaturan Mekanisme$/,
  async () => {}
);

When(/^I click tab Preview$/, async () => {
  await STWRewardNonCoin.tabPreview();
});

Then(/^System should be leading to form tab Preview$/, async () => {});

When(
  /^I insert Floating Icon and input Nama Program in form tab Preview (.*)$/,
  async (nama_program) => {
    await STWRewardNonCoin.NamaProgramPreview(nama_program);
    await STWRewardNonCoin.InsertGambar1();
  }
);

Then(
  /^System should be insert floating icon and input Nama Program in form tab Preview$/,
  async () => {}
);

When(/^I click button Simpan and Publish in form tab Preview$/, async () => {
  await STWRewardNonCoin.simpanPreview();
  await STWRewardNonCoin.publishTabPreview();
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
