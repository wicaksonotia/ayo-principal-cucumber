import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import notifikasiPage from "../../pageobjects/notification/buat-notifikasi.page";
import createNotifikasiPushReguler from "../../pageobjects/notification/22push-notif-reguler.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 22. Push Notifikasi Reguler");
allureReporter.addFeature("Create Push Notifikasi reguler");

Given(/^I am on the Daftar Notifikasi page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.buatNotifikasi();
});

When(/^I click button Buat$/, async () => {
  await notifikasiPage.tombolBuat();
});

Then(/^System should be leading to Buat Notifikasi page$/, async () => {
  await createNotifikasiPushReguler.Page();
});

Given(/^I am on the Buat Notifikasi page$/, async () => {
  await createNotifikasiPushReguler.formPage();
});

When(/^I input Judul Notifikasi (.*)$/, async (judul_notifkasi) => {
  await createNotifikasiPushReguler.buatNotifikasiInput(judul_notifkasi);
});

Then(/^System should be input Judul Notifikasi$/, async () => {
  await createNotifikasiPushReguler.Page();
});

When(/^I input Konten Notifikasi (.*)$/, async (konten_notifikasi) => {
  await createNotifikasiPushReguler.kontenNotifikasi(konten_notifikasi);
});

Then(/^System should be input Konten Notifikasi$/, async () => {
  await createNotifikasiPushReguler.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await createNotifikasiPushReguler.grupPengguna();
});

Then(/^System should be click Customer$/, async () => {
  await createNotifikasiPushReguler.Page();
});

When(/^I select time in Jam Terbit$/, async () => {
  await createNotifikasiPushReguler.jamTerbit();
});

Then(/^System should be select select Jam Terbit$/, async () => {
  await createNotifikasiPushReguler.Page();
});

When(/^I input Nama Halaman(.*)$/, async (nama_halaman) => {
  await createNotifikasiPushReguler.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await createNotifikasiPushReguler.Page();
});

When(/^I input Isi Halaman(.*)$/, async (isi_halaman) => {
  await createNotifikasiPushReguler.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await createNotifikasiPushReguler.Page();
});

When(/^I click Semua in Batas Umur$/, async () => {
  await createNotifikasiPushReguler.batasUmur();
});

Then(/^System should be click Semua in Batas Umur$/, async () => {
  await createNotifikasiPushReguler.Page();
});

When(/^I click button Simpan$/, async () => {
  await createNotifikasiPushReguler.btnSimpan();
});

Then(
  /^System should be submit data and leading to Daftar Notifikasi page$/,
  async () => {
    await notifikasiPage.Page1();
    //await notifikasiPage.PageNotif()
  }
);
