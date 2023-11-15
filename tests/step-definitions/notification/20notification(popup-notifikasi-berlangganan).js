import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import popupPage from "../../pageobjects/notification/popup-notifikasi.page";
import popupNotifBerlangganan from "../../pageobjects/notification/20popup-notifikasi-berlangganan.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 20. Popup Notifikasi Berlangganan");
allureReporter.addFeature("Create Popup Notifikasi Berlangganan");

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
  await popupNotifBerlangganan.Page();
});

Given(/^I am on the Buat Popup Notifikasi page$/, async () => {
  await popupNotifBerlangganan.formPage();
});

When(/^I input Judul Popup Notifikasi (.*)$/, async (judul_popup_notifkasi) => {
  await popupNotifBerlangganan.inputJudul(judul_popup_notifkasi);
});

Then(/^System should be input Judul Popup Notifikasi$/, async () => {
  await popupNotifBerlangganan.Page();
});

When(/^I select time in Buat Notifikasi$/, async () => {
  await popupNotifBerlangganan.buatNotifikasi();
});

Then(/^System should be select Buat Notifikasi$/, async () => {
  await popupNotifBerlangganan.Page();
});

When(/^I select time in Jam Berakhir$/, async () => {
  await popupNotifBerlangganan.jamBerakhir();
});

Then(/^System should be select Jam Berakhir$/, async () => {
  await popupNotifBerlangganan.Page();
});

When(/^I input Yes in Positif Button (.*)$/, async (positif_button) => {
  await popupNotifBerlangganan.positifButton(positif_button);
});

Then(/^System should be input in Positif Button$/, async () => {
  await popupNotifBerlangganan.Page();
});

When(/^I input No in Negatif Button (.*)$/, async (negatif_button) => {
  await popupNotifBerlangganan.negatifButton(negatif_button);
});

Then(/^System should be input in Negatif Button$/, async () => {
  await popupNotifBerlangganan.Page();
});

When(
  /^I insert gambar in Tarik Gambar Popup Notifikasi in Gambar Popup Notifikasi$/,
  async () => {
    await popupNotifBerlangganan.insertGambar();
  }
);

Then(/^System show Gambar Popup Notifikasi$/, async () => {
  await popupNotifBerlangganan.Page();
});

When(/^I select Customer in Grup Pengguna$/, async () => {
  await popupNotifBerlangganan.grupPengguna();
});

Then(/^System should be select Customer in Grup Pengguna$/, async () => {
  await popupNotifBerlangganan.Page();
});

When(/^I select Berlangganan in Status Berlangganan$/, async () => {
  await popupNotifBerlangganan.tipeBerlangganan();
});

Then(/^System should be select Berlangganan$/, async () => {
  await popupNotifBerlangganan.Page();
});

When(/^I click radio button CC in Tipe Konten$/, async () => {
  await popupNotifBerlangganan.tipeKontenCC();
});

Then(/^System should be select radio button CC$/, async () => {
  await popupNotifBerlangganan.Page();
});

When(/^I input Dari in Batasan Umur (.*)$/, async (input_dari) => {
  await popupNotifBerlangganan.BatasanUmurDari(input_dari);
});

Then(/^System should be input Dari in Batasan Umur$/, async () => {
  await popupNotifBerlangganan.Page();
});

When(/^I input Sampai in Batasan Umur (.*)$/, async (input_sampai) => {
  await popupNotifBerlangganan.BatasanUmurSampai(input_sampai);
});

Then(/^System should be input Sampai in Batasan Umur$/, async () => {
  await popupNotifBerlangganan.Page();
});

When(/^I select Statistic Page in Tipe Konten$/, async () => {
  await popupNotifBerlangganan.tipeKonten();
});

Then(/^System should be select Statistic Page$/, async () => {
  await popupNotifBerlangganan.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await popupNotifBerlangganan.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await popupNotifBerlangganan.Page();
});

When(/^I click button Simpan$/, async () => {
  await popupNotifBerlangganan.btnSimpan();
});

Then(
  /^System should be submit data and leading to Daftar Popup Notifikasi page$/,
  async () => {
    await popupPage.Page();
  }
);
