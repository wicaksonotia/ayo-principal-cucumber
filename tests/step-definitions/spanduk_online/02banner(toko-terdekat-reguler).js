import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import tokoTerdekatReguler from "../../pageobjects/spanduk_online/02toko-terdekat-reguler.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 02. Toko Terdekat Reguler");
allureReporter.addFeature("Create Toko Terdekat Reguler");

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
  await tokoTerdekatReguler.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await tokoTerdekatReguler.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await tokoTerdekatReguler.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await tokoTerdekatReguler.Page();
});

When(/^I select date in Sampai$/, async () => {
  await tokoTerdekatReguler.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await tokoTerdekatReguler.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await tokoTerdekatReguler.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await tokoTerdekatReguler.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await tokoTerdekatReguler.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await tokoTerdekatReguler.Page();
});

When(/^I click Toko Terdekat in Tipe Spanduk$/, async () => {
  await tokoTerdekatReguler.tipeSpandukTokoTerdekat();
});

Then(/^System should be click Toko Terdekat$/, async () => {
  await tokoTerdekatReguler.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await tokoTerdekatReguler.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await tokoTerdekatReguler.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await tokoTerdekatReguler.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await tokoTerdekatReguler.Page();
});

When(/^I click Button Simpan$/, async () => {
  await tokoTerdekatReguler.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await tokoTerdekatReguler.Page();
});

When(/^I click Button Ya$/, async () => {
  await tokoTerdekatReguler.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await spandukOnlinePage.Page();
    await spandukOnlinePage.lihatTokoTerdekat();
  }
);
