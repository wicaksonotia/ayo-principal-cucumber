import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';

import LoginPage from '../../pageobjects/login/login.page';
import VerifikasiPerangkatPage from '../../pageobjects/login/verifaccount.page';
import MainmenuPage from '../../pageobjects/mainmenu.page';

import { assert } from "chai";
import UserAPI from "../../pageobjects/login/user.api.js";
import * as data from "../../testdata/apiuser.data.js";

Given(/^I am on the login page Ayo SRC$/, async () => {    
    await LoginPage.open()
    await LoginPage.welcome()
    await LoginPage.acceptCookie()
    await browser.pause(5000)
});

When(/^I login internal with (.*) and (.*)$/, async (email,password) => {
    await LoginPage.loginExternal(email,password)
    await browser.pause(5000)
});

Then(/^System will leading to Verification Account page for (.*)$/, async (email) => {
    await VerifikasiPerangkatPage.verifAccountPage(email)
});

When(/^I input verification code (.*) and submit$/, async (code) => {
    await VerifikasiPerangkatPage.verif(code)
});

Then(/^System should be leading to Dashboard page and show Account Name (.*)$/, async (accountname) => {
    await MainmenuPage.dashboard(accountname)
    await browser.pause(8000)
});


describe('As a user, I want to login', () => {
    it('Should success try to login using valid account', async () => {
        const response = await UserAPI.login(data.VALID_TOKENLOGIN);

        assert.equal(response.status, 200);
        assert.hasAllKeys(response.data, ["token"])
        assert.isString(response.data.token)
    });