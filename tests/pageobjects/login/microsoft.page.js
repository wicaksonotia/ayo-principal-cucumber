import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class LoginMicrosoftPage extends Page {
    
    //define selectors using getter methods
    get logo () { return $('#lightbox > div:nth-child(2) > img') }
    get loginHeader () { return $('#loginHeader') }

    get inputEmail () { return $('#i0116') }
    get btnNext () { return $('#idSIButton9') }

    //https://stsprd03.pmiapps.biz/
    get pmiappsLogo () { return $('#bannerLogo') }
    get pmiappsUserName () { return $('#userNameInput') }
    get pmiappsPassword () { return $('[type="password"]') }
    get pmiappsBtnSignIn () { return $('#idSIButton9') }

    //Verify your Identity
    get approveReq () { return $$('[role="listitem"]') }

    get btnVerify () {return $('#idSubmit_SAOTCC_Continue')}

    //Stay signed in? /login.srf
    get headerStaySignedin () { return $('div.row.text-title') }
    get checkboxDontshowagain () { return $('#KmsiCheckboxField') }
    get btnYes () { return $('#idSIButton9') }
    get btnNo () { return $('#idBtn_Back') }

    //https://ayo-principal-dev.auth.ap-southeast-1.amazoncognito.com/
    get envTitlePage () { return $('form > div > span') } //Sign in with your corporate ID
    get btnEnv () { return $('form > div > input') }

    //SignOut
    get btnMeInitials () { return $('#meInitialsButton') }
    get btnSignOut () { return $('#mectrl_body_signOut') }

    get headerOfficeSignoutPage () { return $('#personalization-header') }

    //a method to encapsule automation code to interact with the page
    async microsoftPage () {
        await this.logo.waitForDisplayed({timeout:6000})
        await expect(this.logo).toBeDisplayed({timeout:5000})
        await expect(this.loginHeader).toBeDisplayed()
        await expect(browser).toHaveUrlContaining('login.microsoftonline.com/')
        await browser.pause(3000)
    }

    async loginMicrosoft (pmintlEmail) { //hanifah.budianto@pmintl.net
        await this.inputEmail.setValue(pmintlEmail)
        await this.btnNext.click()
        await browser.pause(5000)
    }

    async pmiappsPage () {
        await this.pmiappsLogo.waitForDisplayed({timeout:10000})
        await expect(this.pmiappsLogo).toBeDisplayed({timeout:5000})
        // await expect(this.pmiappsHeader).toHaveText('ADFS Logon Page')
        // await expect(browser).toHaveUrlContaining('pmiapps.biz/')
        // await browser.pause(3000)
    }

    async signInPmiapps (password) { //PMI\hbudiant1 Hani_2525
        await this.pmiappsPassword.setValue(password)
        await this.pmiappsBtnSignIn.click()
        await this.approveReq[0].waitForDisplayed({timeout:15000})
    }

    async selectEnvPage () {
        await this.envTitlePage.waitForDisplayed({timeout:6000})
        await expect(this.envTitlePage).toBeDisplayed({timeout:6000})
        await expect(browser).toHaveUrlContaining('ayo-principal-')
        await this.btnEnv.click()
        await browser.pause(3000)
    }

    async signOutMicrosoft () {
        await this.btnMeInitials.click()
        await this.btnSignOut.click()
    }

    async officeSignoutPage () {
        await this.headerOfficeSignoutPage.waitForDisplayed({timeout:6000})
        await expect(this.headerOfficeSignoutPage).toBeDisplayed({timeout:6000})
        await expect(this.headerOfficeSignoutPage).toHaveTextContaining('signed out now.')
        await expect(browser).toHaveUrlContaining('?ref=logout')
        await browser.pause(3000)
    }

    async verifIdentity () {
        await this.approveReq[0].click()
        await browser.pause(15000)
    }

    async VerifyButton () {
        await this.btnVerify.scrollIntoView()
        await this.btnVerify.toBeClickable()
        await this.btnVerify.click()
        await browser.pause(10000)
    }

    async staySignedInPage () {
        await this.headerStaySignedin.waitForDisplayed({timeout:6000})
        await expect(this.headerStaySignedin).toBeDisplayed({timeout:6000})
        await expect(this.headerStaySignedin).toHaveTextContaining('Stay signed in?')
        await expect(browser).toHaveUrlContaining('https://login.microsoftonline.com/common/SAS/ProcessAuth')
        await browser.pause(3000)
    }

    async staySinInYes () {
        await this.btnYes.click()
    }

    async staySinInNo () {
        await this.btnNo.click()
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.openOffice();
    }
}

export default new LoginMicrosoftPage();