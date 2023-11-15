import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import popupPage from "../../pageobjects/notification/popup-notifikasi.page";
import popupNotifTidakBerlangganan from "../../pageobjects/notification/21popup-notifikasi-tidak-berlangganan.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 21. Popup Notifikasi Tidak Berlangganan");
allureReporter.addFeature("Create Popup Notifikasi Tidak Berlangganan");

Given(/^I am on the Daftar Popup Notifikasi page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.popupNotifikasi();
});

When(/^I click button Buat$/, async () => {
  await popupPage.tombolBuat();
});

Then(/^System should be leading to Buat Popup Notifikasi page$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

Given(/^I am on the Buat Popup Notifikasi page$/, async () => {
  await popupNotifTidakBerlangganan.formPage();
});

When(/^I input Judul Popup Notifikasi (.*)$/, async (judul_popup_notifkasi) => {
  await popupNotifTidakBerlangganan.inputJudul(judul_popup_notifkasi);
});

Then(/^System should be input Judul Popup Notifikasi$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

When(/^I select time in Buat Notifikasi$/, async () => {
  await popupNotifTidakBerlangganan.buatNotifikasi();
});

Then(/^System should be select Buat Notifikasi$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

When(/^I select time in Jam Berakhir$/, async () => {
  await popupNotifTidakBerlangganan.jamBerakhir();
});

Then(/^System should be select Jam Berakhir$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

When(/^I input Yes in Positif Button (.*)$/, async (positif_button) => {
  await popupNotifTidakBerlangganan.positifButton(positif_button);
});

Then(/^System should be input in Positif Button$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

When(/^I input No in Negatif Button (.*)$/, async (negatif_button) => {
  await popupNotifTidakBerlangganan.negatifButton(negatif_button);
});

Then(/^System should be input in Negatif Button$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

When(
  /^I insert gambar in Tarik Gambar Popup Notifikasi in Gambar Popup Notifikasi$/,
  async () => {
    await popupNotifTidakBerlangganan.insertGambar();
  }
);

Then(/^System show Gambar Popup Notifikasi$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

When(/^I select Customer in Grup Pengguna$/, async () => {
  await popupNotifTidakBerlangganan.grupPengguna();
});

Then(/^System should be select Customer in Grup Pengguna$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

When(/^I select Tidak Berlangganan in Status Berlangganan$/, async () => {
  await popupNotifTidakBerlangganan.tipeBerlangganan();
});

Then(/^System should be select Tidak Berlangganan$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

When(/^I click radio button CC in Tipe Konten$/, async () => {
  await popupNotifTidakBerlangganan.tipeKontenCC();
});

Then(/^System should be select radio button CC$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

When(/^I input Dari in Batasan Umur (.*)$/, async (input_dari) => {
  await popupNotifTidakBerlangganan.BatasanUmurDari(input_dari);
});

Then(/^System should be input Dari in Batasan Umur$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

When(/^I input Sampai in Batasan Umur (.*)$/, async (input_sampai) => {
  await popupNotifTidakBerlangganan.BatasanUmurSampai(input_sampai);
});

Then(/^System should be input Sampai in Batasan Umur$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

When(/^I select Statistic Page in Tipe Konten$/, async () => {
  await popupNotifTidakBerlangganan.tipeKonten();
});

Then(/^System should be select Statistic Page$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await popupNotifTidakBerlangganan.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await popupNotifTidakBerlangganan.Page();
});

When(/^I click button Simpan$/, async () => {
  await popupNotifTidakBerlangganan.btnSimpan();
});

Then(
  /^System should be submit data and leading to Daftar Popup Notifikasi page$/,
  async () => {
    await popupPage.Page();
  }
);
