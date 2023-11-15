import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class DteAutomationPage extends Page {
    
    //define selectors using getter methods
    get titlePage () { return $('#headerDteAutomation') }
    get btnCreate () { return $('div[class="button-header"] button') }
    get searchInput () { return $('input.mat-input-element') }

    get tabMenu () { return $$('div[class="mat-tab-labels"] div[role="tab"]') }

    //Table
    get datatableBody () { return $('datatable-body.datatable-body') }
    get dataRow () { return $$('datatable-row-wrapper.datatable-row-wrapper') }
    get dataCell () { return $$('datatable-body-cell.datatable-body-cell div span') }
    get cellNamaProgram () { return $('datatable-header-cell[title="Trade Program"]') }

    get tradeProgram () { return $$('datatable-body-cell > div > span.row-name') }
    get type () { return $$('datatable-body-cell > div > span[class="ng-star-inserted"]') }
    get coinReward () { return $$('datatable-body-cell:nth-child(3) > div') }
    get coinPerFrek () { return $$('datatable-body-cell:nth-child(4) > div') }
    get status () { return $$('datatable-body-cell > div > p.status') }

    get btnExport () { return $$('button[mattooltip="Export Detail"]') }
    get btnEdit () { return $$('datatable-body-cell:nth-child(11) > div > div > button:nth-child(2)') }
    get btnDelete () { return $$('button[mattooltip="Hapus Coin Disbursement"]') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 600000,
                timeoutMsg: 'expected title page not displayed after 600s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
    }
    
    async pageList () {
        await this.searchInput.waitForExist();
        await expect(this.searchInput).toBeExisting()
        await expect(this.titlePage).toHaveText('DTE Automation')
        await expect(browser).toHaveUrlContaining('dte/automation')
        await expect(this.datatableBody).toBeExisting()
        await expect(this.dataRow).toBeExisting()
    }

    // async getAlert () { 
    //     const alertSuccess = await browser.getAlertText();
    //     console.log(alertSuccess);
    // }
    
    async viewTabNonTsm () {
        await this.tabMenu[0].waitForClickable();
        await expect(this.tabMenu[0]).toBeClickable()
        await this.tabMenu[0].click()
    }

    async viewTabTsm () {
        await this.tabMenu[1].waitForClickable();
        await expect(this.tabMenu[1]).toBeClickable()
        await this.tabMenu[1].click()
    }

    async createNew () {
        await this.btnCreate.waitForExist()
        await expect(this.btnCreate).toBeClickable()
        await this.btnCreate.click()
    }

    async search (tradeProgram) {
        await expect(this.searchInput).toBeDisplayed()
        await this.searchInput.setValue(tradeProgram)
        // await browser.pause(3000)
    }

    async searchResult (tradeProgram) {
        await browser.waitUntil(
            async () => (await (this.tradeProgram[0]).isExisting()),
            {
                timeout: 20000,
                timeoutMsg: 'expected search result not displayed after 20s'
            }
        )
        await browser.pause(3000)
        // await this.dataCell[1].$('div > span').waitForExist();
        await expect(this.tradeProgram[0]).toBeExisting();
        await expect(this.tradeProgram[0]).toHaveText(tradeProgram);
    }

    // async checkStatus (status) {
    //     console.log('Status' + await this.statusTask.toHaveText(status))
    // }

    async viewDetailATask (tradeProgram) {
        await this.cellNamaProgram.scrollIntoView()
        console.log('List DTE Automation: ')
        const titleTask = await this.tradeProgram
        titleTask.forEach(element => {
            const tasks = element.getText()
                // console.log(tasks)       //output: Promise { <pending> }
                tasks.then(function(result) {
                console.log(result)         //output: DTE Automation list
                if (String(result) == tradeProgram) {
                    element.click()
                }
            })
        })
    }

    async editTask () {           //click edit button
        // await browser.execute(() => document.body.style.zoom='70%')
        await browser.pause(3000)
        await expect(this.btnEdit[0]).toBeExisting()
        await this.btnEdit[0].click()
    }


    async expectNewTaskRow1 (type,coinReward,coinPerFrek,status) {
        // await expect(this.tradeProgram[0]).toHaveText(tradeProgram)
        await expect(this.type[0]).toHaveText(type)
        await expect(this.coinReward[0]).toHaveText(coinReward)
        await expect(this.coinPerFrek[0]).toHaveText(coinPerFrek)
        await this.status[0].scrollIntoView()
        await expect(this.status[0]).toHaveText(status)
    }
        //overwrite specifc options to adapt it to page object
    open () {
        return super.open('dte/automation');
    }
}

export default new DteAutomationPage();