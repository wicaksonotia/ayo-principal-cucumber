import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import bannerTidakBerlangganan from "../../pageobjects/spanduk_online/15tidak-berlangganan.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 15. Tidak Berlangganan");
allureReporter.addFeature("Create InApp Banner Tidak Berlangganan");

Given(/^I am on the Spanduk Online page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.spandukOnline();
});

When(/^I click button Buat$/, async () => {
  await spandukOnlinePage.tombolBuat();
});

Then(/^System should be leading to Buat Spanduk Online page$/, async () => {
  await bannerTidakBerlangganan.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await bannerTidakBerlangganan.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await bannerTidakBerlangganan.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await bannerTidakBerlangganan.Page();
});

When(/^I select date in Sampai$/, async () => {
  await bannerTidakBerlangganan.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await bannerTidakBerlangganan.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await bannerTidakBerlangganan.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await bannerTidakBerlangganan.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await bannerTidakBerlangganan.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await bannerTidakBerlangganan.Page();
});

When(/^I click CC in Tipe Konten$/, async () => {
  await bannerTidakBerlangganan.tipeKontenCC();
});

Then(/^System should be click CC$/, async () => {
  await bannerTidakBerlangganan.Page();
});

When(/^I click Tidak Berlangganan in Status Berlangganan$/, async () => {
  await bannerTidakBerlangganan.tipeBerlangganan();
});

Then(/^System should be click Tidak Berlangganan$/, async () => {
  await bannerTidakBerlangganan.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await bannerTidakBerlangganan.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await bannerTidakBerlangganan.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await bannerTidakBerlangganan.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await bannerTidakBerlangganan.Page();
});

When(/^I click Button Simpan$/, async () => {
  await bannerTidakBerlangganan.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await bannerTidakBerlangganan.Page();
});

When(/^I click Button Ya$/, async () => {
  await bannerTidakBerlangganan.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await bannerTidakBerlangganan.Page();
  }
);
