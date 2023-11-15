import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class GroupTradeProgramPage extends Page {
    
    //define selectors using getter methods
    get titlePage () { return $('#headerGroupTradeProgram') }
    get btnCreate () { return $('#btn-create-group_trades') }
    get searchInput () { return $('input[id="search"]')}  //masih pakai default id Angular

    //Table
    get datatableBody () { return $('#datatable-body') }
    get dataRow () { return $$('#data-row') }
    get dataCell () { return $$('#data-cell') }
    get btnEdit () { return $$('#btn-edit') }
    get btnDelete () { return $$('#btn-delete') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 20000,
                timeoutMsg: 'expected title page not displayed after 20s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
    }
    async pageList () {
        await this.searchInput.waitForExist();
        await expect(this.searchInput).toBeExisting()
        await expect(this.titlePage).toHaveText('Daftar Group Trade Program')
        await expect(browser).toHaveUrlContaining('dte/group-trade-program')
    }
    
    async createGroupTradeProgram () {
        await this.btnCreate.click()
    }

    async searchGroupTradeProgram (grouptradeprogramName) {
        await expect(this.searchInput).toBeDisplayed()
        await this.searchInput.setValue(grouptradeprogramName)
        await browser.pause(3000)
    }

    async searchResult (grouptradeprogramName) {
        await browser.waitUntil(
            async () => (await (this.dataCell[1].$('div > span')).isExisting()),
            {
                timeout: 25000,
                timeoutMsg: 'expected search result not displayed after 25s'
            }
        )
        await browser.pause(3000)
        await this.dataCell[1].$('div > span').waitForExist();
        await expect(this.dataCell[1].$('div > span')).toBeExisting();
        await expect(this.dataCell[1].$('div > span')).toHaveText(grouptradeprogramName);
    }

    async detailGroupTradeProgram () {  //click name
        await this.dataRow.$$('option')[25].click();
    }

    async editGroupTradeProgram () {    //click edit button
        await this.btnEdit.$$('option')[25].click();
    }

    async editGroupTradeProgram (namaTemplate) {  //detail by click name
        await expect(this.dataRow.$$('#data-cell')[0].$('div > span')).toHaveText(namaTsm);
        await this.btnEdit[0].click();
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('');
    }
}

export default new GroupTradeProgramPage();