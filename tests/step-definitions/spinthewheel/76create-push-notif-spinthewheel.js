import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spinthewheelPage from "../../pageobjects/spinthewheel/spinthewheel.page";
import STWPushNotif from "../../pageobjects/spinthewheel/76create-push-notif-spinthewheel.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 76. Create Push Notif Spin the Wheel");
allureReporter.addFeature("Create Push Notif Spin the Wheel");

//Scenario Outline: As a user, I can create push notif spin the wheel
Given(/^I am on the Spin The Wheel page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SpinTheWheel();

  //await spinthewheelPage.pageList()
});

When(/^I click button Buat Push Notif$/, async () => {
  await spinthewheelPage.btnBuatPushNotif();
});

Then(
  /^System should be leading to form Buat Spin The Wheel Notifikasi Page$/,
  async () => {}
);

When(/^I input Judul (.*)$/, async (judul) => {
  await STWPushNotif.Judul(judul);
});

Then(/^System should be input Judul$/, async () => {});

When(/^I input Deskripsi Push Notifikasi (.*)$/, async (deskripsi) => {
  await STWPushNotif.Deskripsi(deskripsi);
});

Then(/^System should be input Deskripsi Push Notifikasi$/, async () => {});

When(/^I select date in Tanggal Mulai$/, async () => {
  await STWPushNotif.TanggalMulai();
});

Then(/^System should be select date in Tanggal Mulai$/, async () => {});

When(/^I select date in Tanggal Berakhir$/, async () => {});

Then(/^System should be select date in Tanggal Berakhir$/, async () => {});

When(/^I select time in Set Waktu$/, async () => {
  await STWPushNotif.SetWaktu();
});

Then(/^System should be select time in Set Waktu$/, async () => {});

When(/^I select day in Interval Pengiriman$/, async () => {
  await STWPushNotif.IntervalPengiriman();
});

Then(/^System should be select day in Interval Pengiriman$/, async () => {});

When(/^I click button Simpan$/, async () => {
  await STWPushNotif.Simpan();
});

Then(
  /^System should be submit data and leading to Spin The Wheel Page$/,
  async () => {}
);
