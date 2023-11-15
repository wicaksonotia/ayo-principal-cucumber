import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import MainmenuPage from "../../pageobjects/mainmenu.page";
import CoinRedemptionApprovalPage from '../../pageobjects/coinredemptionapproval/coinredemptionapproval.page';
const dataTest = require('../../testdata/dte.data');

    // use allure API for allure reporter
    allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[PRINCIPAL] 39. Reject Request - Coin Redemption Approval');
    allureReporter.addFeature('Reject Request - Coin Redemption Approval');

//Scenario Outline: As a user, I can reject request approval coin redemption
Given(/^I am on Coin Redemption Approval page$/, async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.coinRedemptionApproval()
    await CoinRedemptionApprovalPage.page2()
});

When(/^I click button 'TOLAK'$/, async () => {
    await CoinRedemptionApprovalPage.searchGTP(dataTest.coinRedemptionApproval.GTP)
    //await CoinRedemptionApprovalPage.searchResult(dataTest.coinRedemptionApproval.GTP)
    await browser.pause(15000)
    await CoinRedemptionApprovalPage.rejectRequest()
});

Then(/^System should be able to save and reject request coin redemption$/, async () => {
    await browser.pause(3000)
    await CoinRedemptionApprovalPage.dialogConfirmReject()
    await browser.pause(5000)
    //tambahin export detail
    
    // await CoinRedemptionApprovalPage.open()
    // await LoginPage.acceptCookie()
    // await browser.pause(10000)
    // await CoinRedemptionApprovalPage.page()
    // await CoinRedemptionApprovalPage.searchGTP(dataTest.coinRedemptionApproval.GTP)
    // await CoinRedemptionApprovalPage.searchResult(dataTest.coinRedemptionApproval.GTP)
    // await browser.pause(10000)
    // await CoinRedemptionApprovalPage.getStatusRow1(dataTest.coinRedemptionApproval.statusRejected)
});