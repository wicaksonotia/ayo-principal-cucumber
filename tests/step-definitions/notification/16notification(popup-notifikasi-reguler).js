import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import popupPage from "../../pageobjects/notification/popup-notifikasi.page";
import popupNotifReguler from "../../pageobjects/notification/16popup-notifikasi-reguler.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 16. Popup Notifikasi Reguler");
allureReporter.addFeature("Create Popup Notifikasi Reguler");

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
  await popupNotifReguler.Page();
});

Given(/^I am on the Buat Popup Notifikasi page$/, async () => {
  await popupNotifReguler.formPage();
});

When(/^I input Judul Popup Notifikasi (.*)$/, async (judul_popup_notifkasi) => {
  await popupNotifReguler.inputJudul(judul_popup_notifkasi);
});

Then(/^System should be input Judul Popup Notifikasi$/, async () => {
  await popupNotifReguler.Page();
});

When(/^I select time in Buat Notifikasi$/, async () => {
  await popupNotifReguler.buatNotifikasi();
});

Then(/^System should be select Buat Notifikasi$/, async () => {
  await popupNotifReguler.Page();
});

When(/^I select time in Jam Berakhir$/, async () => {
  await popupNotifReguler.jamBerakhir();
});

Then(/^System should be select Jam Berakhir$/, async () => {
  await popupNotifReguler.Page();
});

When(/^I input Yes in Positif Button (.*)$/, async (positif_button) => {
  await popupNotifReguler.positifButton(positif_button);
});

Then(/^System should be input in Positif Button$/, async () => {
  await popupNotifReguler.Page();
});

When(/^I input No in Negatif Button (.*)$/, async (negatif_button) => {
  await popupNotifReguler.negatifButton(negatif_button);
});

Then(/^System should be input in Negatif Button$/, async () => {
  await popupNotifReguler.Page();
});

When(
  /^I insert gambar in Tarik Gambar Popup Notifikasi in Gambar Popup Notifikasi$/,
  async () => {
    await popupNotifReguler.insertGambar();
  }
);

Then(/^System show Gambar Popup Notifikasi$/, async () => {
  await popupNotifReguler.Page();
});

When(/^I select Customer in Grup Pengguna$/, async () => {
  await popupNotifReguler.grupPengguna();
});

Then(/^System should be select Customer in Grup Pengguna$/, async () => {
  await popupNotifReguler.Page();
});

When(/^I input Dari in Batasan Umur (.*)$/, async (input_dari) => {
  await popupNotifReguler.BatasanUmurDari(input_dari);
});

Then(/^System should be input Dari in Batasan Umur$/, async () => {
  await popupNotifReguler.Page();
});

When(/^I input Sampai in Batasan Umur (.*)$/, async (input_sampai) => {
  await popupNotifReguler.BatasanUmurSampai(input_sampai);
});

Then(/^System should be input Sampai in Batasan Umur$/, async () => {
  await popupNotifReguler.Page();
});

When(/^I select Statistic Page in Tipe Konten$/, async () => {
  await popupNotifReguler.tipeKonten();
});

Then(/^System should be select Statistic Page$/, async () => {
  await popupNotifReguler.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await popupNotifReguler.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await popupNotifReguler.Page();
});

When(/^I click button Simpan$/, async () => {
  await popupNotifReguler.btnSimpan();
});

Then(
  /^System should be submit data and leading to Daftar Popup Notifikasi page$/,
  async () => {
    await popupPage.Page();
  }
);
