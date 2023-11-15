import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import tokoTerdekatCC from "../../pageobjects/spanduk_online/06toko-terdekat-cc.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 06. Toko Terdekat CC");
allureReporter.addFeature("Create Toko Terdekat CC");

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
  await tokoTerdekatCC.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await tokoTerdekatCC.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await tokoTerdekatCC.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await tokoTerdekatCC.Page();
});

When(/^I select date in Sampai$/, async () => {
  await tokoTerdekatCC.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await tokoTerdekatCC.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await tokoTerdekatCC.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await tokoTerdekatCC.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await tokoTerdekatCC.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await tokoTerdekatCC.Page();
});

When(/^I click CC in Tipe Konten$/, async () => {
  await tokoTerdekatCC.tipeKontenCC();
});

Then(/^System should be click CC$/, async () => {
  await tokoTerdekatCC.Page();
});

When(/^I click Toko Terdekat in Tipe Spanduk$/, async () => {
  await tokoTerdekatCC.tipeSpandukTokoTerdekat();
});

Then(/^System should be click Toko Terdekat$/, async () => {
  await tokoTerdekatCC.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await tokoTerdekatCC.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await tokoTerdekatCC.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await tokoTerdekatCC.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await tokoTerdekatCC.Page();
});

When(/^I click Button Simpan$/, async () => {
  await tokoTerdekatCC.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await tokoTerdekatCC.Page();
});

When(/^I click Button Ya$/, async () => {
  await tokoTerdekatCC.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await spandukOnlinePage.Page();
    await spandukOnlinePage.lihatTokoTerdekat();
  }
);
