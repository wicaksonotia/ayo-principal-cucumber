import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import notifikasiPage from "../../pageobjects/notification/buat-notifikasi.page";
import createNotifikasiPushTdkLangganan from "../../pageobjects/notification/27push-notif-tidak-berlangganan.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 27. Push Notifikasi Tidak Berlangganan");
allureReporter.addFeature("Create Push Notifikasi Tidak Berlangganan");

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
  await createNotifikasiPushTdkLangganan.Page();
});

Given(/^I am on the Buat Notifikasi page$/, async () => {
  await createNotifikasiPushTdkLangganan.formPage();
});

When(/^I input Judul Notifikasi (.*)$/, async (judul_notifkasi) => {
  await createNotifikasiPushTdkLangganan.buatNotifikasiInput(judul_notifkasi);
});

Then(/^System should be input Judul Notifikasi$/, async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

When(/^I input Konten Notifikasi (.*)$/, async (konten_notifikasi) => {
  await createNotifikasiPushTdkLangganan.kontenNotifikasi(konten_notifikasi);
});

Then(/^System should be input Konten Notifikasi$/, async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await createNotifikasiPushTdkLangganan.grupPengguna();
});

Then(/^System should be click Customer$/, async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

When(/^I select time in Jam Terbit$/, async () => {
  await createNotifikasiPushTdkLangganan.jamTerbit();
});

Then(/^System should be select select Jam Terbit$/, async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

When(/^I input Nama Halaman(.*)$/, async (nama_halaman) => {
  await createNotifikasiPushTdkLangganan.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

When(/^I input Isi Halaman(.*)$/, async (isi_halaman) => {
  await createNotifikasiPushTdkLangganan.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

When(
  /^I select Tidak Berlangganan only in Filter Pengguna Tipe Berlangganan$/,
  async () => {
    await createNotifikasiPushTdkLangganan.tipeTdkBerlangganan();
  }
);

Then(/^System should be select Tidak Berlangganan only$/, async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

When(/^I click CC in Tipe Konten$/, async () => {
  await createNotifikasiPushTdkLangganan.tipeKonten();
});

Then(/^System should be click CC$/, async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

When(/^I click Semua in Batas Umur$/, async () => {
  await createNotifikasiPushTdkLangganan.batasUmur();
});

Then(/^System should be click Semua in Batas Umur$/, async () => {
  await createNotifikasiPushTdkLangganan.Page();
});

When(/^I click button Simpan$/, async () => {
  await createNotifikasiPushTdkLangganan.btnSimpan();
});

Then(
  /^System should be submit data and leading to Daftar Notifikasi page$/,
  async () => {
    await notifikasiPage.Page();
  }
);
