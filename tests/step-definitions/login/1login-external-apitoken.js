import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../../pageobjects/login/login.page';
import MainmenuPage from '../../pageobjects/mainmenu.page';

Given(/^I am on the login page Ayo SRC$/, async () => {    
    await LoginPage.open()
    await LoginPage.welcome()
    await LoginPage.acceptCookie()
    await browser.pause(5000)
});

When(/^I login internal$/, async () => {
    await LoginPage.loginapi()
});

When(/^I input verification code (.*) and submit$/, async (code) => {
    await VerifikasiPerangkatPage.verif(code)
});

Then(/^System should be leading to Dashboard page and show Account Name (.*)$/, async (accountname) => {
    await MainmenuPage.dashboard(accountname)
    await browser.pause(8000)
});