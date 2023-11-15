import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import MainmenuPage from "../../pageobjects/mainmenu.page";
import VerificationAssignmentPage from '../../pageobjects/taskverification2.0/verificationassignment.page';
import DetailVerificationAssignmentPage from '../../pageobjects/taskverification2.0/detailverificationassignment.page';
const dataTest = require('../../testdata/dte.data');

// use allure API for allure reporter
allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[PRINCIPAL] 54. Import Verification Assignment 150k Data');
allureReporter.addFeature('Import Verification Assignment 150k Data');

//  Scenario Outline: As a user, I can import Verification Assignment 150k data
Given(/^I am on the Task Verification page$/, async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.DropTaskVerif2()
    await MainmenuPage.verificationAssignment()
    await VerificationAssignmentPage.pageList2()
});
 
When(/^I view detail task then import xls file$/, async () => {
    await VerificationAssignmentPage.viewATask()
    await browser.pause(10000)
    await DetailVerificationAssignmentPage.page()
});

Then(/^System should be able submit form$/, async () => {
    await DetailVerificationAssignmentPage.importData150(dataTest.taskVerification.approverName)
});