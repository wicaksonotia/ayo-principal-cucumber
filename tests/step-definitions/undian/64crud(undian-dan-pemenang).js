import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import undianPage from "../../pageobjects/undian/undian.page";
import crudPemenangdanUndian from "../../pageobjects/undian/64crud(undian-dan-pemenang).page";

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 64. CRUD Undian dan Upload Pemenang");
allureReporter.addFeature("CRUD Undian dan Upload Pemenang");

//Scenario Outline: As a user, I can create Undian dan Pemenang
Given(/^I am on the Undian page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.DropdownUndian();
  await MainmenuPage.Undian();
});

When(/^I click button Tambah$/, async () => {
  await undianPage.tombolBuat();
});

Then(/^System should be leading to Buat Undian page1$/, async () => {});

Given(/^I am on the Buat Undian page$/, async () => {});

When(/^I input nama program kupon undian (.*)$/, async (nama_program) => {
  await crudPemenangdanUndian.namaProgram(nama_program);
});

Then(/^System should be input nama program kupon undian$/, async () => {});

When(
  /^I input jumlah koin yang dibutuhkan per kupon (.*)$/,
  async (jumlah_koin) => {
    await crudPemenangdanUndian.jumlahKoin(jumlah_koin);
  }
);

Then(
  /^System should be input jumlah koin yang dibutuhkan per kupon$/,
  async () => {}
);

When(/^I select date in Tanggal awal penukaran kupon undian$/, async () => {
  await crudPemenangdanUndian.tanggalAwalPenukaranKupon();
});

Then(
  /^System should be input date in Tanggal awal penukaran kupon undian$/,
  async () => {}
);

When(/^I select time in Jam Terbit$/, async () => {});

Then(/^System should be select time in Jam Terbit$/, async () => {});

When(
  /^I select date in Tanggal Berakhir Penukaran Kupon Undian$/,
  async () => {}
);

Then(
  /^System should be select date in Tanggal Berakhir Penukaran Kupon Undian$/,
  async () => {}
);

When(/^I select time in Jam Berakhir$/, async () => {});

Then(/^System should be select time in Jam Berakhir$/, async () => {});

When(/^I select date in Tanggal Pengumuman Pemenang Berakhir$/, async () => {
  await crudPemenangdanUndian.tanggalPengumumanPemenang();
});

Then(
  /^System should be select date in Tanggal Pengumuman Pemenang Berakhir$/,
  async () => {}
);

When(/^I select time in Jam Pengumuman Pemenang Berakhir$/, async () => {
  await crudPemenangdanUndian.jamPengumumanPemenang();
});

Then(
  /^System should be select time in Jam Pengumuman Pemenang Berakhir$/,
  async () => {}
);

When(/^I click Sub Group Trade Program$/, async () => {
  await crudPemenangdanUndian.SubGroupTradeProgram();
});

Then(/^System show input search$/, async () => {});

When(/^I input Sub GTP Weekend 2023 in searchbox (.*)$/, async (input_sgtp) => {
  await crudPemenangdanUndian.inputSubGTP(input_sgtp);
});

Then(/^System show Sub GTP Weekend 2023$/, async () => {});

When(/^I select Sub GTP Weekend 2023 in Sub Group Trade Program$/, async () => {
  await crudPemenangdanUndian.selectSGPT();
});

Then(
  /^System should be select Sub GTP Weekend 2023 in Sub Group Trade Program$/,
  async () => {}
);

When(/^I click button Simpan in Tab Undian$/, async () => {
  await crudPemenangdanUndian.SimpanUndian();
});

Then(
  /^System should be submit data in Tab Undian and leading to Undian Page$/,
  async () => {}
);

When(/^I click button Edit (.*)$/, async (nama_program) => {
  await undianPage.Search(nama_program);
  await undianPage.Edit();
});

Then(/^System should be leading to Buat Undian Page2$/, async () => {});

When(/^I click tab Audience$/, async () => {
  await crudPemenangdanUndian.tabAudience();
});

Then(/^System show form in Tab Audience$/, async () => {});

When(/^I click radio button Fixed Panel$/, async () => {
  await crudPemenangdanUndian.FixedPanel();
});

Then(/^System should be click Fixed Panel$/, async () => {});

When(/^I click button Import XLSX$/, async () => {
  await crudPemenangdanUndian.ImportTamplate();
});

Then(/^System show popup Unggah File XLSX$/, async () => {});

When(/^I unggah file XLSX$/, async () => {
  await crudPemenangdanUndian.InsertFile1();
});

Then(/^System show data penjual$/, async () => {});

When(/^I click button Kirim$/, async () => {
  await crudPemenangdanUndian.btnKirim();
});

Then(
  /^System should be submit data and close popup Unggah File XLSX$/,
  async () => {}
);

When(/^I click button Export Template$/, async () => {
  await crudPemenangdanUndian.ExportTamplate();
});

Then(/^System should be able to download Template$/, async () => {});

When(/^I click button check$/, async () => {
  await crudPemenangdanUndian.btnCheck();
});

Then(/^System update panel blast$/, async () => {});

When(/^I click button Simpan in Tab Audience$/, async () => {
  await crudPemenangdanUndian.btnSimpanAudience();
});

Then(/^System should be submit data in Tab Audience$/, async () => {
  await crudPemenangdanUndian.AudienceTabPage();
});

When(/^I click Tab Preview$/, async () => {
  await crudPemenangdanUndian.tabPreview();
});

Then(/^System show form in Tab Preview$/, async () => {
  await crudPemenangdanUndian.PreviewTabPage();
});

When(/^I insert Visual Header Kupon Undian$/, async () => {
  await crudPemenangdanUndian.InsertGambar1();
});

Then(/^System show Visual Header Kupon Undian$/, async () => {});

When(/^I insert Visual Header di List Program Kupon Undian$/, async () => {});

Then(
  /^System show Visual Header di List Program Kupon Undian$/,
  async () => {}
);

When(/^I input Deskripsi Kupon Undian (.*)$/, async (deskripsi_kupon) => {
  await crudPemenangdanUndian.deskripsiKuponUndian(deskripsi_kupon);
});

Then(/^System should be input Deskripsi Kupon Undian$/, async () => {});

When(/^I click toggle bar Aktifkan$/, async () => {
  await crudPemenangdanUndian.toggleBar();
});

Then(/^System should be click toggle bar Aktifkan$/, async () => {});

When(/^I input Deksripsi T&C (.*)$/, async (deskripsi_tc) => {
  await crudPemenangdanUndian.deskripsiTC(deskripsi_tc);
});

Then(/^System should be input Deksripsi T&C$/, async () => {});

When(/^I click button Simpan in Tab Preview$/, async () => {
  await crudPemenangdanUndian.simpanPreview();
});

Then(/^System submit data in Tab Preview$/, async () => {});

When(/^I click tab List Pemenang$/, async () => {
  await crudPemenangdanUndian.tabListPemenang();
});

Then(/^System show form in Tab List Pemenang$/, async () => {});

When(/^I insert Gambar Visual Header Pemenang Undian$/, async () => {
  await crudPemenangdanUndian.InsertGambar3();
});

Then(/^System show Visual Header Pemenang Undian$/, async () => {});

When(/^I click button download list pemenang$/, async () => {
  await crudPemenangdanUndian.btnDownloadListPemenang();
});

Then(/^System should be download Template list pemenang$/, async () => {});

When(/^I insert file List Pemenang Undian$/, async () => {
  await crudPemenangdanUndian.InsertFile2();
});

Then(/^System show file List Pemenang Undian$/, async () => {});

When(/^I click button simpan in tab List Pemenang$/, async () => {
  await crudPemenangdanUndian.btnSimpanListPemenang();
});

Then(/^System should be submit data List Pemenang$/, async () => {});

When(/^I click button Publish$/, async () => {
  await crudPemenangdanUndian.btnPublish();
});

Then(/^System should be leading to Undian Page3$/, async () => {
  await undianPage.pageUndian();
});

When(
  /^I search and click button Delete in Undian Page (.*)$/,
  async (nama_program) => {
    await undianPage.Search(nama_program);
    await undianPage.Delete();
  }
);

Then(/^System should be able to find and Delete data$/, async () => {
  await browser.pause(5000);
});
