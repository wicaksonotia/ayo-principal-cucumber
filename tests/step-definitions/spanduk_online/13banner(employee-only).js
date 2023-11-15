import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import bannerEmployee from "../../pageobjects/spanduk_online/13employee-only.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 13. Employee Only");
allureReporter.addFeature("Create Employee Only");

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
  await bannerEmployee.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await bannerEmployee.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await bannerEmployee.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await bannerEmployee.Page();
});

When(/^I select date in Sampai$/, async () => {
  await bannerEmployee.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await bannerEmployee.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await bannerEmployee.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await bannerEmployee.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await bannerEmployee.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await bannerEmployee.Page();
});

When(/^I click Employee Only in Tipe Employee$/, async () => {
  await bannerEmployee.tipeEmployee();
});

Then(/^System should be click Employee Only$/, async () => {
  await bannerEmployee.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await bannerEmployee.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await bannerEmployee.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await bannerEmployee.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await bannerEmployee.Page();
});

When(/^I click Button Simpan$/, async () => {
  await bannerEmployee.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await bannerEmployee.Page();
});

When(/^I click Button Ya$/, async () => {
  await bannerEmployee.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await bannerEmployee.Page();
  }
);
