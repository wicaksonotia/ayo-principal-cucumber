import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class TemplatePlanogramPage extends Page {
    
    //define selectors using getter methods
    get titlePage () { return $('#contentTitle') }
    get btnCreate () { return $('#btnCreate') }

    get cellPlanogramName () { return $$('#cellName') }

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
                timeoutMsg: 'expected title page not displayed after 6s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
    }
    
    async pageList () {
        await browser.pause(3000)
        await browser.switchToParentFrame()
        await browser.pause(3000)
        await browser.switchToFrame(0)
        await browser.pause(3000)
        await this.btnCreate.waitForExist();
        await expect(this.titlePage).toHaveText('Template : Planogram')
        await expect(browser).toHaveUrlContaining('dte/template-planogram')
    }

    async createNew () {
        await expect(this.btnCreate).toBeClickable()
        await this.btnCreate.click()
    }

    async editTemplatePlanogram () { 
        // await browser.execute(() => document.body.style.zoom='70%')
        await browser.pause(3000)
        await expect(this.btnEdit[0]).toBeExisting()
        await this.btnEdit[0].click()
    }

    async deleteTemplatePlanogram () { 
        // await browser.execute(() => document.body.style.zoom='70%')
        await browser.pause(3000)
        await expect(this.btnDelete[0]).toBeExisting()
        await this.btnDelete[0].click()
        await expect(this.btnConfirmDelete).toBeExisting()
        await this.btnConfirmDelete.click()
    }

    async expectNewTemplatePlanogramRow1 (planogramname) {
        await expect(this.cellPlanogramName[0]).toHaveText(planogramname)
        await browser.pause(5000)
    }
    
    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('dte/template-planogram');
    }
}

export default new TemplatePlanogramPage();