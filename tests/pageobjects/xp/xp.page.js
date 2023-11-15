import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class XPPage extends Page {
    
    //define selectors using getter methods
    get titlePage () { return $('#contentTitle') }
    get btnCreate () { return $('#btnCreate') }
    get searchInput () { return $('#search') }

    //Table
    get columnTitle () { return $$('[class="MuiDataGrid-columnHeaderTitle"]') }
    get cellNamaProgramXP () { return $$('[data-field="name"]') }
    get cellStatus () { return $$('[data-field="status"]') }

    get btnReqExport () { return $$('#') }
    get btnExport () { return $$('#') }
    get btnEdit () { return $$('#') }
    get btnDelete () { return $$('#') }
      get popUptitle () { return $('#responsive-dialog-title') }
      get popUpDesc () { return $('#dialogCaption') }
      get btnConfirmDelete () { return $('#btnConfirm') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 60000,
                timeoutMsg: 'expected title page not displayed after 60s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:60000})
    }

    
    async pageList () {
        await browser.switchToParentFrame()
        await browser.pause(20000)
        await browser.switchToFrame(0)
        await browser.pause(3000)
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 100000,
                timeoutMsg: 'expected title page not displayed after 10s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
    }

    async createNew () {
        await expect(this.btnCreate).toBeClickable()
        await this.btnCreate.click()
    }

    async search (nama) {
        await expect(this.searchInput).toBeDisplayed()
        await this.searchInput.setValue(nama)
        // await browser.pause(3000)
    }

    async searchResult (nama) {
        await browser.waitUntil(
            async () => (await (this.cellNamaProgramXP[0]).isExisting()),
            {
                timeout: 20000,
                timeoutMsg: 'expected search result not displayed after 20s'
            }
        )
        await browser.pause(3000)
        await expect(this.cellNamaProgramXP[0]).toBeExisting();
        await expect(this.cellNamaProgramXP[0]).toHaveText(nama);
        // await this.nama[0].click();
    }

    async editXP () { 
        // await browser.execute(() => document.body.style.zoom='70%')
        await browser.pause(3000)
        await expect(this.btnEdit[0]).toBeExisting()
        await this.btnEdit[0].click()
    }

    async deleteXP () { 
        // await browser.execute(() => document.body.style.zoom='70%')
        await browser.pause(3000)
        await expect(this.btnDelete[0]).toBeExisting()
        await this.btnDelete[0].click()
        await expect(this.btnConfirmDelete).toBeExisting()
        await this.btnConfirmDelete.click()
    }
    
    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('dte/xp');
    }
}

export default new XPPage();