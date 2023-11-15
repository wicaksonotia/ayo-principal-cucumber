import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spinthewheelPage from "../../pageobjects/spinthewheel/spinthewheel.page";
import SetupStwMitraPage from "../../pageobjects/spinthewheel/110setup-stwmitra.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 110. Setup STW Mitra");
allureReporter.addFeature("Setup STW Mitra");

//Scenario Outline: As a user, I can create Setup STW Mitra
Given(/^I am on the Spin The Wheel page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SpinTheWheel();
});

When(/^I click button Setup STW Mitra$/, async () => {
  await spinthewheelPage.btnSetupSTW();
});

Then(
  /^System should be leading to Buat Spin The Wheel Mitra Setup Page$/,
  async () => {}
);

Given(/^I am on the Buat Spin The Wheel Mitra Setup Page$/, async () => {});

When(/^I insert image in Floating Icon AYO SRC Toko Home Page$/, async () => {
  await SetupStwMitraPage.insertFloating();
});

Then(/^System should be insert Floating Icon$/, async () => {});

When(/^I input Judul (.*)$/, async (judul_setup) => {
  await SetupStwMitraPage.Judul(judul_setup);
});

Then(/^System should be able to input Judul$/, async () => {});

When(/^I input Deskripsi Push Notifikasi (.*)$/, async (input_deskripsi) => {
  await SetupStwMitraPage.Deskripsi(input_deskripsi);
});

Then(
  /^System should be able to input Deskripsi Push Notifikasi$/,
  async () => {}
);

When(/^I select date in Tanggal Mulai$/, async () => {
  await SetupStwMitraPage.TanggalMulai();
});

Then(/^System should be able to select date in Tanggal Mulai$/, async () => {});

When(/^I select date in Tanggal Berakhir$/, async () => {});

Then(
  /^System should be able to select date in Tanggal Berakhir$/,
  async () => {}
);

When(/^I select time in Set Waktu$/, async () => {
  await SetupStwMitraPage.SetWaktu();
});

Then(/^System should be able to select time in Set Waktu$/, async () => {});

When(/^I select in Interval Program$/, async () => {
  await SetupStwMitraPage.IntervalProgram();
});

Then(/^System should be able to select in Interval Program$/, async () => {});

When(/^I click button Simpan$/, async () => {
  await SetupStwMitraPage.Simpan();
});

Then(
  /^System should be submit data and leading to Spin The Wheel Page$/,
  async () => {}
);

When(/^I click button Setup STW Mitra2$/, async () => {
  await spinthewheelPage.btnSetupSTW();
});

Then(
  /^System should be leading to Buat Spin The Wheel Mitra Setup Page2$/,
  async () => {}
);

When(/^I input Judul2 (.*)$/, async (judul_setup2) => {
  await SetupStwMitraPage.Judul(judul_setup2);
});

Then(/^System should be able to input Judul2$/, async () => {});

When(/^I input Deskripsi Push Notifikasi2 (.*)$/, async (input_deskripsi2) => {
  await SetupStwMitraPage.Deskripsi(input_deskripsi2);
});

Then(
  /^System should be able to input Deskripsi Push Notifikasi2$/,
  async () => {}
);

When(/^I select date in Tanggal Mulai2$/, async () => {
  await SetupStwMitraPage.TanggalMulai();
});

Then(
  /^System should be able to select date in Tanggal Mulai2$/,
  async () => {}
);

When(/^I select date in Tanggal Berakhir2$/, async () => {
  await SetupStwMitraPage.TanggalBerakhir2();
});

Then(
  /^System should be able to select date in Tanggal Berakhir2$/,
  async () => {}
);

When(/^I select in Interval Program2$/, async () => {
  await SetupStwMitraPage.IntervalProgram2();
});

Then(/^System should be able to select in Interval Program2$/, async () => {});

When(/^I click button Simpan2$/, async () => {
  await SetupStwMitraPage.Simpan();
});

Then(
  /^System should be submit data and leading to Spin The Wheel Page2$/,
  async () => {}
);
