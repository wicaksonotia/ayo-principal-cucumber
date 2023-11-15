import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import notifikasiPage from "../../pageobjects/notification/buat-notifikasi.page";
import createNotifikasiPushRrp from "../../pageobjects/notification/24push-notif-rrp.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 24. Push Notifikasi RRP");
allureReporter.addFeature("Create Push Notifikasi RRP");

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
  await createNotifikasiPushRrp.Page();
});

Given(/^I am on the Buat Notifikasi page$/, async () => {
  await createNotifikasiPushRrp.formPage();
});

When(/^I input Judul Notifikasi (.*)$/, async (judul_notifkasi) => {
  await createNotifikasiPushRrp.buatNotifikasiInput(judul_notifkasi);
});

Then(/^System should be input Judul Notifikasi$/, async () => {
  await createNotifikasiPushRrp.Page();
});

When(/^I input Konten Notifikasi (.*)$/, async (konten_notifikasi) => {
  await createNotifikasiPushRrp.kontenNotifikasi(konten_notifikasi);
});

Then(/^System should be input Konten Notifikasi$/, async () => {
  await createNotifikasiPushRrp.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await createNotifikasiPushRrp.grupPengguna();
});

Then(/^System should be click Customer$/, async () => {
  await createNotifikasiPushRrp.Page();
});

When(/^I select time in Jam Terbit$/, async () => {
  await createNotifikasiPushRrp.jamTerbit();
});

Then(/^System should be select select Jam Terbit$/, async () => {
  await createNotifikasiPushRrp.Page();
});

When(/^I input Nama Halaman(.*)$/, async (nama_halaman) => {
  await createNotifikasiPushRrp.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await createNotifikasiPushRrp.Page();
});

When(/^I input Isi Halaman(.*)$/, async (isi_halaman) => {
  await createNotifikasiPushRrp.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await createNotifikasiPushRrp.Page();
});

When(/^I click RRP in Tipe Konten$/, async () => {
  await createNotifikasiPushRrp.tipeKonten();
});

Then(/^System should be click RRP$/, async () => {
  await createNotifikasiPushRrp.Page();
});

When(/^I click Semua in Batas Umur$/, async () => {
  await createNotifikasiPushRrp.batasUmur();
});

Then(/^System should be click Semua in Batas Umur$/, async () => {
  await createNotifikasiPushRrp.Page();
});

When(/^I click button Simpan$/, async () => {
  await createNotifikasiPushRrp.btnSimpan();
});

Then(
  /^System should be submit data and leading to Daftar Notifikasi page$/,
  async () => {
    await notifikasiPage.Page();
  }
);
