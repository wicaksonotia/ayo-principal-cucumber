import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import MainmenuPage from "../../pageobjects/mainmenu.page";
import DteAutomationPage from '../../pageobjects/dteautomation/dteautomation.page';
import FormDTEAutomationPage from '../../pageobjects/dteautomation/form.page';
const dataTest = require('../../testdata/dte.data');

    // use allure API for allure reporter
    allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[PRINCIPAL] 25. DTE Automation Referral Code (TSM)');
    allureReporter.addFeature('Create DTE Automation referral code tsm');

Given(/^I am on the DTE Automation page$/, async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.dteAutomation()
    await DteAutomationPage.page()
    await DteAutomationPage.pageList()
});

When(/^I select tab TSM and click button 'Buat TSM'$/, async () => {
    await DteAutomationPage.viewTabTsm()
    await DteAutomationPage.createNew()
});

Then(/^System should be leading to form create DTE Automation$/, async () => {
    await FormDTEAutomationPage.page()
});

Given(/^I am on the form create DTE Automation TSM page$/, async () => {
    await FormDTEAutomationPage.pageCreateTsm()
});

When(/^I input form with select Automation 'Referral Code' and submit$/, async () => {
    await FormDTEAutomationPage.automationReferralCode()
    await FormDTEAutomationPage.tradeProgram(dataTest.dteAutomation.searchTP)
    await FormDTEAutomationPage.selectDate()
    await FormDTEAutomationPage.fillFrekuensi (dataTest.dteAutomation.coinRewardperFrekTSM, dataTest.dteAutomation.frekuensiTSM)
    await FormDTEAutomationPage.judulDeskripsiButton (dataTest.dteAutomation.judulTantanganRCTSM, dataTest.dteAutomation.deskripsiTantanganRCTSM, dataTest.dteAutomation.teksButton)
    await FormDTEAutomationPage.notifTambahanYes()
    await FormDTEAutomationPage.submitForm()
});

Then(/^System should be able to submit Referral Code TSM and leading to DTE Automation page$/, async () => {
    await DteAutomationPage.page()
    await DteAutomationPage.pageList()
    await DteAutomationPage.viewTabTsm()
    await DteAutomationPage.expectNewTaskRow1(dataTest.dteAutomation.typeRC, dataTest.dteAutomation.coinRewardperFrekTSM, dataTest.dteAutomation.frekuensiTSM, dataTest.dteAutomation.statusBerjalan)
});