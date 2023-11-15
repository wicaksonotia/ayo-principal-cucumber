import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class UndianPage extends Page {

    //define selectors using getter methods
    get titlePage () { return $('#headerUndian')}
    get buttonBuat () {return $('#btn-create-trade')}
    get datatable () {return $('[class="material ngx-datatable fixed-header virtualized scroll-horz selectable checkbox-selection"]')}
    get buttonEdit () {return $$('#btn-edit')}
    get iconDelete () {return $$('#btn-delete')}
    get buttonHapus () {return $('#btn-confirm-import')}
    get inputSearch () {return $('#search')}

    //a method to encapsule automation code to interact with the page
    async Page () {
        await browser.waitUntil(
        async () => (await (this.titlePage).isDisplayed()),
        {
        timeout: 600000,
        timeoutMsg: 'expected title page not displayed after 600s'
        })
        await expect(this.titlePage).toBeDisplayed({timeout:600000})
    }

    async pageUndian () {
        await expect(this.titlePage).toHaveText('Undian')
        await browser.pause(7000);
    }
    
    async tombolBuat () {
        await this.buttonBuat.click()
        await browser.pause(15000);
        await expect(browser).toHaveUrlContaining('dte/lottery/create')
    }

    async Edit () {
        await this.datatable.scrollIntoView()
        await this.buttonEdit[0].scrollIntoView()
        await this.buttonEdit[0].click()
    }

    async Search (nama_program) {
        await this.inputSearch.scrollIntoView()
        await this.inputSearch.setValue(nama_program)
        await browser.pause(5000);
    }

    async Delete () {
        await this.datatable.scrollIntoView()
        await this.iconDelete[0].scrollIntoView()
        await this.iconDelete[0].click()
        await browser.pause(2000)
        await this.buttonHapus.click()
        await browser.pause(5000)
    }

}

export default new UndianPage ();