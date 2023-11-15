import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import notifikasiPage from "../../pageobjects/notification/buat-notifikasi.page";
import createNotifikasiPushLangganan from "../../pageobjects/notification/26push-notif-berlangganan.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 26. Push Notifikasi Berlangganan");
allureReporter.addFeature("Create Push Notifikasi Berlangganan");

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
  await createNotifikasiPushLangganan.Page();
});

Given(/^I am on the Buat Notifikasi page$/, async () => {
  await createNotifikasiPushLangganan.formPage();
});

When(/^I input Judul Notifikasi (.*)$/, async (judul_notifkasi) => {
  await createNotifikasiPushLangganan.buatNotifikasiInput(judul_notifkasi);
});

Then(/^System should be input Judul Notifikasi$/, async () => {
  await createNotifikasiPushLangganan.Page();
});

When(/^I input Konten Notifikasi (.*)$/, async (konten_notifikasi) => {
  await createNotifikasiPushLangganan.kontenNotifikasi(konten_notifikasi);
});

Then(/^System should be input Konten Notifikasi$/, async () => {
  await createNotifikasiPushLangganan.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await createNotifikasiPushLangganan.grupPengguna();
});

Then(/^System should be click Customer$/, async () => {
  await createNotifikasiPushLangganan.Page();
});

When(/^I select time in Jam Terbit$/, async () => {
  await createNotifikasiPushLangganan.jamTerbit();
});

Then(/^System should be select select Jam Terbit$/, async () => {
  await createNotifikasiPushLangganan.Page();
});

When(/^I input Nama Halaman(.*)$/, async (nama_halaman) => {
  await createNotifikasiPushLangganan.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await createNotifikasiPushLangganan.Page();
});

When(/^I input Isi Halaman(.*)$/, async (isi_halaman) => {
  await createNotifikasiPushLangganan.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await createNotifikasiPushLangganan.Page();
});

When(
  /^I select Berlangganan only in Filter Pengguna Tipe Berlangganan$/,
  async () => {
    await createNotifikasiPushLangganan.tipeBerlangganan();
  }
);

Then(/^System should be select Berlangganan only$/, async () => {
  await createNotifikasiPushLangganan.Page();
});

When(/^I click CC in Tipe Konten$/, async () => {
  await createNotifikasiPushLangganan.tipeKonten();
});

Then(/^System should be click CC$/, async () => {
  await createNotifikasiPushLangganan.Page();
});

When(/^I click Semua in Batas Umur$/, async () => {
  await createNotifikasiPushLangganan.batasUmur();
});

Then(/^System should be click Semua in Batas Umur$/, async () => {
  await createNotifikasiPushLangganan.Page();
});

When(/^I click button Simpan$/, async () => {
  await createNotifikasiPushLangganan.btnSimpan();
});

Then(
  /^System should be submit data and leading to Daftar Notifikasi page$/,
  async () => {
    await notifikasiPage.Page();
  }
);
