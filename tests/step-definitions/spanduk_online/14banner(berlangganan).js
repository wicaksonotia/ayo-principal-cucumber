import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import bannerBerlangganan from "../../pageobjects/spanduk_online/14berlangganan.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 14. Berlangganan");
allureReporter.addFeature("Create InApp Banner Berlangganan");

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
  await bannerBerlangganan.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await bannerBerlangganan.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await bannerBerlangganan.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await bannerBerlangganan.Page();
});

When(/^I select date in Sampai$/, async () => {
  await bannerBerlangganan.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await bannerBerlangganan.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await bannerBerlangganan.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await bannerBerlangganan.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await bannerBerlangganan.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await bannerBerlangganan.Page();
});

When(/^I click CC in Tipe Konten$/, async () => {
  await bannerBerlangganan.tipeKontenCC();
});

Then(/^System should be click CC$/, async () => {
  await bannerBerlangganan.Page();
});

When(/^I click Berlangganan in Status Berlangganan$/, async () => {
  await bannerBerlangganan.tipeBerlangganan();
});

Then(/^System should be click Berlangganan$/, async () => {
  await bannerBerlangganan.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await bannerBerlangganan.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await bannerBerlangganan.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await bannerBerlangganan.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await bannerBerlangganan.Page();
});

When(/^I click Button Simpan$/, async () => {
  await bannerBerlangganan.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await bannerBerlangganan.Page();
});

When(/^I click Button Ya$/, async () => {
  await bannerBerlangganan.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await bannerBerlangganan.Page();
  }
);
