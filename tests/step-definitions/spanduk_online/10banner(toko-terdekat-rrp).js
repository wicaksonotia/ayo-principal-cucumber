import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import tokoTerdekatRrp from "../../pageobjects/spanduk_online/10toko-terdekat-rrp.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 10. Toko Terdekat RRP");
allureReporter.addFeature("Create Toko Terdekat RRP");

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
  await tokoTerdekatRrp.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await tokoTerdekatRrp.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await tokoTerdekatRrp.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await tokoTerdekatRrp.Page();
});

When(/^I select date in Sampai$/, async () => {
  await tokoTerdekatRrp.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await tokoTerdekatRrp.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await tokoTerdekatRrp.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await tokoTerdekatRrp.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await tokoTerdekatRrp.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await tokoTerdekatRrp.Page();
});

When(/^I click RRP in Tipe Konten$/, async () => {
  await tokoTerdekatRrp.tipeKontenRrp();
});

Then(/^System should be click RRP$/, async () => {
  await tokoTerdekatRrp.Page();
});

When(/^I click Toko Terdekat in Tipe Spanduk$/, async () => {
  await tokoTerdekatRrp.tipeSpandukTokoTerdekat();
});

Then(/^System should be click Toko Terdekat$/, async () => {
  await tokoTerdekatRrp.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await tokoTerdekatRrp.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await tokoTerdekatRrp.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await tokoTerdekatRrp.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await tokoTerdekatRrp.Page();
});

When(/^I click Button Simpan$/, async () => {
  await tokoTerdekatRrp.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await tokoTerdekatRrp.Page();
});

When(/^I click Button Ya$/, async () => {
  await tokoTerdekatRrp.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await spandukOnlinePage.Page();
    await spandukOnlinePage.lihatTokoTerdekat();
  }
);
