import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import LoginPage from "../../pageobjects/login/login.page";
import SpinTheWheelPage from "../../pageobjects/spinthewheel/spinthewheel.page";
import FormSpinTheWheelPage from "../../pageobjects/spinthewheel/form.page";
import TradeProgramPage from "../../pageobjects/tradeprogram/tradeprogram";
import FormTradeProgramPage from "../../pageobjects/tradeprogram/formtradeprogram.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 5242. Create Trade Program and Spin The Wheel"
);
allureReporter.addFeature(
  "Trade Program Tidak Cukup dan Cukup, untuk spin the wheel"
);
// ================================================
// HALAMAN TRADE PROGRAM
Given(/^I am on the Trade Program page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.tradeProgram();
});

When(/^I click button 'Tambah'$/, async () => {
  await TradeProgramPage.createTradeProgram();
});

Then(/^I input form and submit trade program$/, async () => {
  await FormTradeProgramPage.createTP(
    "tia group trade program",
    "tia sub group trade program",
    "tia trade program for spin the wheel 07072023",
    1000
  );
  await FormTradeProgramPage.submit();
});

// ================================================
// HALAMAN SPIN THE WHEEL
// TRADE PROGRAM TIDAK MENCUKUPI
When(
  /^I am on the Spin The Wheel page for edit trade program tidak mencukupi$/,
  async () => {
    await MainmenuPage.SpinTheWheel();
  }
);

Then(/^I click button 'Tambah' SPT$/, async () => {
  await SpinTheWheelPage.createNew();
});

Then(/^I input form tab Spin The Wheel and submit$/, async () => {
  await FormSpinTheWheelPage.name("TIA STW 07072023");
  await FormSpinTheWheelPage.tradeProgram(
    "tia trade program for spin the wheel 07072023"
  );
  await FormSpinTheWheelPage.date();
  await FormSpinTheWheelPage.clickSimpan();
});

Then(
  /^List STW, search, click edit, and input form tab audience$/,
  async () => {
    await SpinTheWheelPage.search("TIA STW 07072023");
    await SpinTheWheelPage.editSTW();
    await FormSpinTheWheelPage.viewTabAudience();
    await FormSpinTheWheelPage.fixedPanel();
  }
);

Then(/^Click tab Pengaturan Mekanisme and input form$/, async () => {
  await FormSpinTheWheelPage.viewTabPengaturanMekanisme();
  await FormSpinTheWheelPage.pengaturanSTWFP(
    dataTest.spinTheWheel.frekBelanjaFP,
    dataTest.spinTheWheel.frekRewardFP,
    dataTest.spinTheWheel.minTransaksiFP,
    dataTest.spinTheWheel.limitSpinFP,
    dataTest.spinTheWheel.jmlVarKoinFP,
    dataTest.spinTheWheel.coin1FP,
    dataTest.spinTheWheel.slice1FP,
    dataTest.spinTheWheel.prob1FP,
    dataTest.spinTheWheel.coin2FP,
    dataTest.spinTheWheel.slice2FP,
    dataTest.spinTheWheel.prob2FP
  );
});

Then(/^Click tab Preview$/, async () => {
  await FormSpinTheWheelPage.viewTabPreview();
  await FormSpinTheWheelPage.inputFormPreview(dataTest.spinTheWheel.previewFP);
  await FormSpinTheWheelPage.clickSimpanPublish();
  await FormSpinTheWheelPage.clickBatalkan();
});

// ================================================
// HALAMAN SPIN THE WHEEL
// UBAH TRADE PROGRAM AGAR MENCUKUPI
When(/^Edit trade program tab spin the wheel$/, async () => {
  await FormSpinTheWheelPage.viewTabAudience();
  await FormSpinTheWheelPage.tradeProgram("tia trade program");
  await FormSpinTheWheelPage.setEndDateTP();
  await FormSpinTheWheelPage.clickSimpan();
});

Then(/^Click tab Preview again$/, async () => {
  await FormSpinTheWheelPage.viewTabPreview();
  await FormSpinTheWheelPage.inputFormPreview(dataTest.spinTheWheel.previewFP);
  await FormSpinTheWheelPage.clickSimpanPublish();
});

// ================================================
// HALAMAN SPIN THE WHEEL
// EDIT PUBLISH DAN TRADE PROGRAM
When(/^System should be leading to Spin The Wheel Page$/, async () => {
  await SpinTheWheelPage.search("TIA STW 07072023");
  await SpinTheWheelPage.editSTW();
  console.log("Maka, Nama Trade Program Disabled");
});

// ================================================
// HALAMAN SPIN THE WHEEL
// EDIT UNPUBLISH DAN TRADE PROGRAM TIDAK CUKUP
When(
  /^I am on the Spin The Wheel page for edit and check trade program disable$/,
  async () => {
    await MainmenuPage.SpinTheWheel();
    await SpinTheWheelPage.search("TIA STW 07072023");
    await SpinTheWheelPage.editSTW0();
  }
);

Then(/^I edit trade program in tab Spin The Wheel$/, async () => {
  await FormSpinTheWheelPage.tradeProgram(
    "tia trade program for spin the wheel 07072023"
  );
  await FormSpinTheWheelPage.setEndDateTP();
  await FormSpinTheWheelPage.clickSimpan();
});

Then(/^Click tab Preview and save publish$/, async () => {
  await FormSpinTheWheelPage.viewTabPreview();
  await FormSpinTheWheelPage.inputFormPreview(dataTest.spinTheWheel.previewFP);
  await FormSpinTheWheelPage.clickSimpanPublish();
  await FormSpinTheWheelPage.clickBatalkan();
});

// ================================================
// HALAMAN SPIN THE WHEEL
// EDIT UNPUBLISH DAN TRADE PROGRAM CUKUP
When(/^I am on the Spin The Wheel page$/, async () => {
  await MainmenuPage.SpinTheWheel();
  await SpinTheWheelPage.search("TIA STW 07072023");
  await SpinTheWheelPage.editSTW0();
});

Then(
  /^I input form tab Spin The Wheel and change trade program mencukupi$/,
  async () => {
    await FormSpinTheWheelPage.tradeProgram("tia trade program");
    await FormSpinTheWheelPage.setEndDateTP();
    await FormSpinTheWheelPage.clickSimpan();
  }
);

Then(/^Click tab Preview and save$/, async () => {
  await FormSpinTheWheelPage.viewTabPreview();
  await FormSpinTheWheelPage.inputFormPreview(dataTest.spinTheWheel.previewFP);
  await FormSpinTheWheelPage.clickSimpanPublish();
});
