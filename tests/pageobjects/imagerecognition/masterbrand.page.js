import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class MasterBrandPage extends Page {
    
    //define selectors using getter methods
    get titlePage () { return $('#contentTitle') }
    get btnCreate () { return $('#btnCreate') }

    get cellGroupName () { return $$('#cellName') }
    get cellSKUName () { return $$('#cellSKUName') }

    get btnEdit () { return $$('#btnEdit') }
    get btnDelete () { return $$('#btnDelete') }
    get popUptitle () { return $('#dialogTitle') }
    get popUpDesc () { return $('#dialogCaption') }
    get btnConfirmDelete () { return $('#btnConfirm') }
    get btnCancelDelete () { return $('#btnCancel') }

    //a method to encapsule automation code to interact with the page
    async page () {
        // await browser.switchToParentFrame()
        // await browser.pause(3000)
        await browser.switchToFrame(0)
        await browser.pause(3000)
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 10000,
                timeoutMsg: 'expected title page not displayed after 10s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
    }

    async page1 () {
        // await browser.switchToParentFrame()
        // await browser.pause(3000)
        await browser.switchToFrame(0)
        await browser.pause(3000)
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 10000,
                timeoutMsg: 'expected title page not displayed after 10s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
    }
    
    async pageList1 () {
        await browser.pause(3000)
        await browser.switchToParentFrame()
        await browser.pause(3000)
        await browser.switchToFrame(0)
        await browser.pause(3000)
        await this.btnCreate.waitForExist();
        await expect(this.titlePage).toHaveText('Master Brand')
        await expect(browser).toHaveUrlContaining('dte/master-brand')
    }

    async pageList () {
        await browser.pause(3000)
        await browser.switchToParentFrame()
        await browser.pause(3000)
        await browser.switchToFrame(0)
        await browser.pause(3000)
        await this.btnCreate.waitForExist();
        await expect(this.titlePage).toHaveText('Master Brand')
        await expect(browser).toHaveUrlContaining('dte/master-brand')
    }

    async createNew () {
        await expect(this.btnCreate).toBeClickable()
        await this.btnCreate.click()
    }

    async editSKU () { 
        // await browser.execute(() => document.body.style.zoom='70%')
        await browser.pause(3000)
        await expect(this.btnEdit[0]).toBeExisting()
        await this.btnEdit[0].click()
    }

    async deleteSKU () { 
        // await browser.execute(() => document.body.style.zoom='70%')
        await browser.pause(3000)
        await expect(this.btnDelete[0]).toBeExisting()
        await this.btnDelete[0].click()
        await expect(this.btnConfirmDelete).toBeExisting()
        await this.btnConfirmDelete.click()
    }

    async expectNewSKURow1 (groupname, SKUname) {
        await expect(this.cellGroupName[0]).toHaveText(groupname)
        await expect(this.cellSKUName[0]).toHaveText(SKUname)
        await browser.pause(5000)
    }
    
    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('dte/master-brand');
    }
}

export default new MasterBrandPage();