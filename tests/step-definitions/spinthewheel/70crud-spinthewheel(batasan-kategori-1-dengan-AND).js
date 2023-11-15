import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spinthewheelPage from "../../pageobjects/spinthewheel/spinthewheel.page";
import stwBatasanKategori1AND from "../../pageobjects/spinthewheel/70crud-spinthewheel(batasan-kategori-1-dengan-AND).page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 70. CRUD Spin the Wheel (Batasan > 1 Kategori dengan AND)"
);
allureReporter.addFeature(
  "CRUD Spin the Wheel (Batasan > 1 Kategori dengan AND)"
);

//Scenario Outline: As a user, I can create Spin The Wheel batasan kategori 1 dengan AND
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
  await stwBatasanKategori1AND.NamaProgramSTW(nama_program);
});

Then(/^System should be able to input Nama Program$/, async () => {});

When(
  /^I search and select data in Nama Trade Program (.*)$/,
  async (nama_trade_program) => {
    await stwBatasanKategori1AND.namaTradeProgram(nama_trade_program);
  }
);

Then(
  /^System should be able to search and select data in Nama Trade Program$/,
  async () => {}
);

When(/^I select date in Tanggal Mulai$/, async () => {
  await stwBatasanKategori1AND.tanggalMulai();
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
  await stwBatasanKategori1AND.simpanSTW();
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
  await stwBatasanKategori1AND.tabAudience();
});

Then(
  /^System should be click tab Audience and leading to form tab Audience$/,
  async () => {}
);

When(/^I select Fixed Panel$/, async () => {
  await stwBatasanKategori1AND.FixedPanel();
});

Then(/^System should be able to select Fixed Panel$/, async () => {});

When(/^I click button Import XLSX and submit data$/, async () => {
  await stwBatasanKategori1AND.ImportTamplate();
  await stwBatasanKategori1AND.btnKirim();
});

Then(
  /^System should be click button Import XLSX and submit data$/,
  async () => {}
);

When(/^I click button Export Template$/, async () => {
  await stwBatasanKategori1AND.ExportTamplate();
});

Then(/^System should be able to download Template$/, async () => {});

When(/^I click button check$/, async () => {
  await stwBatasanKategori1AND.btnCheck();
});

Then(/^System should be check data and update panel blast$/, async () => {});

When(/^I click button Simpan$/, async () => {
  await stwBatasanKategori1AND.btnSimpanAudience();
});

Then(/^System should be submit data in tab Audience$/, async () => {});

When(/^I click tab pengaturan mekanisme$/, async () => {
  await stwBatasanKategori1AND.tabPengaturanMekanisme();
});

Then(
  /^System should be leading to form tab pengaturan mekanisme$/,
  async () => {}
);

When(
  /^I input frekuensi belanja B2C Mingguan yang Dibutuhkan (.*)$/,
  async (frekuensi_belanja) => {
    await stwBatasanKategori1AND.frekuensiBelanja(frekuensi_belanja);
  }
);

Then(
  /^System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan$/,
  async () => {}
);

When(
  /^I input Maksimal Frekuensi Reward User per Minggu (.*)$/,
  async (maksimal_frekuensi) => {
    await stwBatasanKategori1AND.maksimalFrekuensi(maksimal_frekuensi);
  }
);

Then(
  /^System should be input Maksimal Frekuensi Reward User per Minggu$/,
  async () => {}
);

When(/^I select radio button Pembatasan Produk dan Kategori$/, async () => {
  await stwBatasanKategori1AND.pembatasanProdukdanKategori();
});

Then(
  /^System should be select radio button Pembatasan Produk and Kategori$/,
  async () => {}
);

When(/^I select radio button Batasi dengan Kategori$/, async () => {
  await stwBatasanKategori1AND.batasiDenganKategori();
});

Then(
  /^System should be select radio button Batasi dengan Kategori$/,
  async () => {}
);

When(
  /^I click dropdown Batasan Berdasarkan Kategori and select data$/,
  async () => {
    await stwBatasanKategori1AND.BatasanBerdasarkanKategori();
  }
);

Then(/^System should be select data$/, async () => {});

When(
  /^I input Nilai Transaksi Minimal1 (.*)$/,
  async (nilai_transaksi_minimal1) => {
    await stwBatasanKategori1AND.nilaiTransaksiMinimal1(
      nilai_transaksi_minimal1
    );
  }
);

Then(/^System should be input Nilai Transaksi Minimal1$/, async () => {});

When(
  /^I input Nilai Transaksi Minimal2 (.*)$/,
  async (nilai_transaksi_minimal2) => {
    await stwBatasanKategori1AND.nilaiTransaksiMinimal2(
      nilai_transaksi_minimal2
    );
  }
);

Then(/^System should be input Nilai Transaksi Minimal2$/, async () => {});

When(
  /^I input minimum nilai transaksi (.*)$/,
  async (minimum_nilai_transaksi) => {
    await stwBatasanKategori1AND.minimumNilaiTransaksi(minimum_nilai_transaksi);
  }
);

Then(/^System should be input minimum nilai transaksi$/, async () => {});

When(/^I input Limit spin (.*)$/, async (limit_spin) => {
  await stwBatasanKategori1AND.limitSpin(limit_spin);
});

Then(/^System should be input Limit Spin$/, async () => {});

When(/^I click button Reward Non coin$/, async () => {
  await stwBatasanKategori1AND.btnRewardNonCoin();
});

Then(/^System should be show input form$/, async () => {});

When(/^I input non coin(.*)$/, async (noncoin) => {
  await stwBatasanKategori1AND.nonCoin(noncoin);
});

Then(/^System should be input non coin$/, async () => {});

When(/^I click button Reward XP1$/, async () => {
  await stwBatasanKategori1AND.RewardXP();
});

Then(/^System should be show input form XP1$/, async () => {});

When(/^I input XP1 (.*)$/, async (xp1) => {
  await stwBatasanKategori1AND.XP1(xp1);
});

Then(/^System should be input XP1$/, async () => {});

When(/^I click button Reward XP2$/, async () => {
  await stwBatasanKategori1AND.RewardXP();
});

Then(/^System should be show input form XP2$/, async () => {});

When(/^I input XP2 (.*)$/, async (xp2) => {
  await stwBatasanKategori1AND.XP2(xp2);
});

Then(/^System should be input XP2$/, async () => {});

When(/^I input slice1 (.*)$/, async (slice1) => {
  await stwBatasanKategori1AND.Slice1(slice1);
});

Then(/^System should be input slice1$/, async () => {});

When(/^I input slice2 (.*)$/, async (slice2) => {
  await stwBatasanKategori1AND.Slice2(slice2);
});

Then(/^System should be input slice2$/, async () => {});

When(/^I input slice3 (.*)$/, async (slice3) => {
  await stwBatasanKategori1AND.Slice3(slice3);
});

Then(/^System should be input slice3$/, async () => {});

When(/^I input probability1 (.*)$/, async (probability1) => {
  await stwBatasanKategori1AND.Probability1(probability1);
});

Then(/^System should be input probability1$/, async () => {});

When(/^I input probability2 (.*)$/, async (probability2) => {
  await stwBatasanKategori1AND.Probability2(probability2);
});

Then(/^System should be input probability2$/, async () => {});

When(/^I input probability3 (.*)$/, async (probability3) => {
  await stwBatasanKategori1AND.Probability3(probability3);
});

Then(/^System should be input probability3$/, async () => {});

When(/^I click button Simpan in form tab Pengaturan Mekanisme$/, async () => {
  await stwBatasanKategori1AND.simpanTabPengaturanMekanisme();
});

Then(
  /^System should be able to submit data in form tab Pengaturan Mekanisme$/,
  async () => {}
);

When(/^I click tab Preview$/, async () => {
  await stwBatasanKategori1AND.tabPreview();
});

Then(/^System should be leading to form tab Preview$/, async () => {});

When(
  /^I insert Floating Icon and input Nama Program in form tab Preview (.*)$/,
  async (nama_program) => {
    await stwBatasanKategori1AND.NamaProgramPreview(nama_program);
    await stwBatasanKategori1AND.InsertGambar1();
  }
);

Then(
  /^System should be insert floating icon and input Nama Program in form tab Preview$/,
  async () => {}
);

When(/^I click button Simpan and Publish in form tab Preview$/, async () => {
  await stwBatasanKategori1AND.simpanPreview();
  await stwBatasanKategori1AND.publishTabPreview();
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
