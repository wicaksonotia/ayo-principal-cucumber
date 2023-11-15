import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class VerifikasiPerangkatPage extends Page {
    
    //define selectors using getter methods
    get titlePage () { return $('#ayoLogin > div > div > div.top > div.big-title') }
    get email () { return $('#ayoLogin > div > div > div.top > div:nth-child(2)') }

    get inputCode () { return $('#input-otp') }
    get btnVerifikasiPerangkat () { return $('#btn-verifikasi') }

    //a method to encapsule automation code to interact with the page
    async verifAccountPage (email) {
        await this.titlePage.waitForDisplayed({timeout:15000})
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
        await expect(browser).toHaveUrlContaining('device/authentication')
        await expect(this.titlePage).toHaveText('Verifikasi Akun')
        await expect(this.email).toHaveTextContaining(email) //hanifah.budianto@contracted.sampoerna.com
        await browser.pause(5000)
    }

    async verif (code) {
        await this.inputCode.setValue(code);  //default 123456
        await this.btnVerifikasiPerangkat.click();
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('');
    }
}

export default new VerifikasiPerangkatPage();