import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class FormGroupTradeProgramPage extends Page {
    
    //define selectors using getter methods
    get titlePage () { return $('#headerGroupTradeProgram') }

    //Form


    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 10000,
                timeoutMsg: 'expected title page not displayed after 10s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
    }

    async pageCreate () {
        await expect(this.titlePage).toHaveText('Buat Group Trade Program')
        await expect(browser).toHaveUrlContaining('dte/group-trade-program/create')
    }

    async pageEdit () {
        await expect(this.titlePage).toHaveText('Ubah Group Trade Program')
        await expect(browser).toHaveUrlContaining('dte/group-trade-program/edit')
    }

    async pageDetail () {
        await expect(this.titlePage).toHaveText('Detil Group Trade Program')
        await expect(browser).toHaveUrlContaining('dte/group-trade-program/detail')
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('');
    }
}

export default new FormGroupTradeProgramPage();