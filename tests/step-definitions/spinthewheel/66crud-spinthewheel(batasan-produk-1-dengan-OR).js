import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spinthewheelPage from "../../pageobjects/spinthewheel/spinthewheel.page";
import stwBatasanProduk1OR from "../../pageobjects/spinthewheel/66crud-spinthewheel(batasan-produk-1-dengan-OR).page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 66. CRUD Spin the Wheel (Batasan > 1 Produk dengan OR)"
);
allureReporter.addFeature("CRUD Spin the Wheel (Batasan > 1 Produk dengan OR)");

//Scenario Outline: As a user, I can create Spin The Wheel batasan produk 1 dengan OR
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
  await stwBatasanProduk1OR.NamaProgramSTW(nama_program);
});

Then(/^System should be able to input Nama Program$/, async () => {});

When(
  /^I search and select data in Nama Trade Program (.*)$/,
  async (nama_trade_program) => {
    await stwBatasanProduk1OR.namaTradeProgram(nama_trade_program);
  }
);

Then(
  /^System should be able to search and select data in Nama Trade Program$/,
  async () => {}
);

When(/^I select date in Tanggal Mulai$/, async () => {
  await stwBatasanProduk1OR.tanggalMulai();
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
  await stwBatasanProduk1OR.simpanSTW();
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
  await stwBatasanProduk1OR.tabAudience();
});

Then(
  /^System should be click tab Audience and leading to form tab Audience$/,
  async () => {}
);

When(/^I select Fixed Panel$/, async () => {
  await stwBatasanProduk1OR.FixedPanel();
});

Then(/^System should be able to select Fixed Panel$/, async () => {});

When(/^I click button Import XLSX and submit data$/, async () => {
  await stwBatasanProduk1OR.ImportTamplate();
  await stwBatasanProduk1OR.btnKirim();
});

Then(
  /^System should be click button Import XLSX and submit data$/,
  async () => {}
);

When(/^I click button Export Template$/, async () => {
  await stwBatasanProduk1OR.ExportTamplate();
});

Then(/^System should be able to download Template$/, async () => {});

When(/^I click button check$/, async () => {
  await stwBatasanProduk1OR.btnCheck();
});

Then(/^System should be check data and update panel blast$/, async () => {});

When(/^I click button Simpan$/, async () => {
  await stwBatasanProduk1OR.btnSimpanAudience();
});

Then(/^System should be submit data in tab Audience$/, async () => {});

When(/^I click tab pengaturan mekanisme$/, async () => {
  await stwBatasanProduk1OR.tabPengaturanMekanisme();
});

Then(
  /^System should be leading to form tab pengaturan mekanisme$/,
  async () => {}
);

When(
  /^I input frekuensi belanja B2C Mingguan yang Dibutuhkan (.*)$/,
  async (frekuensi_belanja) => {
    await stwBatasanProduk1OR.frekuensiBelanja(frekuensi_belanja);
  }
);

Then(
  /^System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan$/,
  async () => {}
);

When(
  /^I input Maksimal Frekuensi Reward User per Minggu (.*)$/,
  async (maksimal_frekuensi) => {
    await stwBatasanProduk1OR.maksimalFrekuensi(maksimal_frekuensi);
  }
);

Then(
  /^System should be input Maksimal Frekuensi Reward User per Minggu$/,
  async () => {}
);

When(/^I select radio button Pembatasan Produk dan Kategori$/, async () => {
  await stwBatasanProduk1OR.pembatasanProdukdanKategori();
});

Then(
  /^System should be select radio button Pembatasan Produk and Kategori$/,
  async () => {}
);

When(/^I select radio button Batasi dengan Produk$/, async () => {
  await stwBatasanProduk1OR.batasiDenganProduk();
});

Then(
  /^System should be select radio button Batasi dengan Produk$/,
  async () => {}
);

When(
  /^I search and select data in Batasan Berdasarkan Produk1 (.*)$/,
  async (batasan_berdasarkan_produk1) => {
    await stwBatasanProduk1OR.batasanBerdasarkanProduk1(
      batasan_berdasarkan_produk1
    );
  }
);

Then(
  /^System should be able to search and select data in Batasan Berdasarkan Produk1$/,
  async () => {}
);

When(
  /^I search and select data in Batasan Berdasarkan Produk2 (.*)$/,
  async (batasan_berdasarkan_produk2) => {
    await stwBatasanProduk1OR.batasanBerdasarkanProduk2(
      batasan_berdasarkan_produk2
    );
  }
);

Then(
  /^System should be able to search and select data in Batasan Berdasarkan Produk2$/,
  async () => {}
);

When(
  /^I input Nilai Transaksi Minimal1 (.*)$/,
  async (nilai_transaksi_minimal1) => {
    await stwBatasanProduk1OR.nilaiTransaksiMinimal1(nilai_transaksi_minimal1);
  }
);

Then(/^System should be input Nilai Transaksi Minimal1$/, async () => {});

When(
  /^I input Nilai Transaksi Minimal2 (.*)$/,
  async (nilai_transaksi_minimal2) => {
    await stwBatasanProduk1OR.nilaiTransaksiMinimal2(nilai_transaksi_minimal2);
  }
);

Then(/^System should be input Nilai Transaksi Minimal2$/, async () => {});

When(
  /^I select radio button OR in Kombinasi Pembatasan Produk Kategori$/,
  async () => {
    await stwBatasanProduk1OR.OR();
  }
);

Then(/^System should be select radio button OR$/, async () => {});

When(
  /^I input minimum nilai transaksi (.*)$/,
  async (minimum_nilai_transaksi) => {
    await stwBatasanProduk1OR.minimumNilaiTransaksi(minimum_nilai_transaksi);
  }
);

Then(/^System should be input minimum nilai transaksi$/, async () => {});

When(/^I input Limit spin (.*)$/, async (limit_spin) => {
  await stwBatasanProduk1OR.limitSpin(limit_spin);
});

Then(/^System should be input Limit Spin$/, async () => {});

When(/^I input Jumlah Variasi Koin (.*)$/, async (jumlah_variasi_koin) => {
  await stwBatasanProduk1OR.jumlahVariasiCoin(jumlah_variasi_koin);
});

Then(/^System should be input Jumlah Variasi Koin$/, async () => {});

When(/^I click button RewardXP$/, async () => {
  await stwBatasanProduk1OR.RewardXP();
});

Then(/^System should be show input form$/, async () => {});

When(/^I input coin1 (.*)$/, async (coin1) => {
  await stwBatasanProduk1OR.Coin1(coin1);
});

Then(/^System should be input coin1$/, async () => {});

When(/^I input coin2 (.*)$/, async (coin2) => {
  await stwBatasanProduk1OR.Coin2(coin2);
});

Then(/^System should be input coin2$/, async () => {});

When(/^I input XP(.*)$/, async (xp) => {
  await stwBatasanProduk1OR.XP(xp);
});

Then(/^System should be input XP$/, async () => {});

When(/^I input slice1 (.*)$/, async (slice1) => {
  await stwBatasanProduk1OR.Slice1(slice1);
});

Then(/^System should be input slice1$/, async () => {});

When(/^I input slice2 (.*)$/, async (slice2) => {
  await stwBatasanProduk1OR.Slice2(slice2);
});

Then(/^System should be input slice2$/, async () => {});

When(/^I input slice3 (.*)$/, async (slice3) => {
  await stwBatasanProduk1OR.Slice3(slice3);
});

Then(/^System should be input slice3$/, async () => {});

When(/^I input probability1 (.*)$/, async (probability1) => {
  await stwBatasanProduk1OR.Probability1(probability1);
});

Then(/^System should be input probability1$/, async () => {});

When(/^I input probability2 (.*)$/, async (probability2) => {
  await stwBatasanProduk1OR.Probability2(probability2);
});

Then(/^System should be input probability2$/, async () => {});

When(/^I input probability3 (.*)$/, async (probability3) => {
  await stwBatasanProduk1OR.Probability3(probability3);
});

Then(/^System should be input probability3$/, async () => {});

When(/^I click button Simpan in form tab Pengaturan Mekanisme$/, async () => {
  await stwBatasanProduk1OR.simpanTabPengaturanMekanisme();
});

Then(
  /^System should be able to submit data in form tab Pengaturan Mekanisme$/,
  async () => {}
);

When(/^I click tab Preview$/, async () => {
  await stwBatasanProduk1OR.tabPreview();
});

Then(/^System should be leading to form tab Preview$/, async () => {});

When(
  /^I insert Floating Icon and input Nama Program in form tab Preview (.*)$/,
  async (nama_program) => {
    await stwBatasanProduk1OR.NamaProgramPreview(nama_program);
    await stwBatasanProduk1OR.InsertGambar1();
  }
);

Then(
  /^System should be insert floating icon and input Nama Program in form tab Preview$/,
  async () => {}
);

When(/^I click button Simpan and Publish in form tab Preview$/, async () => {
  await stwBatasanProduk1OR.simpanPreview();
  await stwBatasanProduk1OR.publishTabPreview();
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

Then(/^System should be able to find data and Delete data$/, async () => {});
