import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import notifikasiPage from "../../pageobjects/notification/buat-notifikasi.page";
import createNotifikasiPushCc from "../../pageobjects/notification/23push-notif-cc.page";

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 23. Push Notifikasi CC");
allureReporter.addFeature("Create Push Notifikasi cc");

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
  await createNotifikasiPushCc.Page();
});

Given(/^I am on the Buat Notifikasi page$/, async () => {
  await createNotifikasiPushCc.formPage();
});

When(/^I input Judul Notifikasi (.*)$/, async (judul_notifkasi) => {
  await createNotifikasiPushCc.buatNotifikasiInput(judul_notifkasi);
});

Then(/^System should be input Judul Notifikasi$/, async () => {
  await createNotifikasiPushCc.Page();
});

When(/^I input Konten Notifikasi (.*)$/, async (konten_notifikasi) => {
  await createNotifikasiPushCc.kontenNotifikasi(konten_notifikasi);
});

Then(/^System should be input Konten Notifikasi$/, async () => {
  await createNotifikasiPushCc.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await createNotifikasiPushCc.grupPengguna();
});

Then(/^System should be click Customer$/, async () => {
  await createNotifikasiPushCc.Page();
});

When(/^I select time in Jam Terbit$/, async () => {
  await createNotifikasiPushCc.jamTerbit();
});

Then(/^System should be select select Jam Terbit$/, async () => {
  await createNotifikasiPushCc.Page();
});

When(/^I input Nama Halaman(.*)$/, async (nama_halaman) => {
  await createNotifikasiPushCc.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await createNotifikasiPushCc.Page();
});

When(/^I input Isi Halaman(.*)$/, async (isi_halaman) => {
  await createNotifikasiPushCc.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await createNotifikasiPushCc.Page();
});

When(/^I click CC in Tipe Konten$/, async () => {
  await createNotifikasiPushCc.tipeKonten();
});

Then(/^System should be click CC$/, async () => {
  await createNotifikasiPushCc.Page();
});

When(/^I click Semua in Batas Umur$/, async () => {
  await createNotifikasiPushCc.batasUmur();
});

Then(/^System should be click Semua in Batas Umur$/, async () => {
  await createNotifikasiPushCc.Page();
});

When(/^I click button Simpan$/, async () => {
  await createNotifikasiPushCc.btnSimpan();
});

Then(
  /^System should be submit data and leading to Daftar Notifikasi page$/,
  async () => {
    await notifikasiPage.Page();
  }
);
