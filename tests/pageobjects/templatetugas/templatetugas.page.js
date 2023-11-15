import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class TemplateTugasPage extends Page {

    //define selectors using getter methods
    get titlePage () { return $('#headerTugas') }
    get btnCreate () { return $('#btn-buatTugas') }
    get searchInput () { return $('//*[@id="search"]')}   //masih pakai default id Angular
    get tabMenu () { return $$('mat-tab-header div[role="tab"]') } // Default, Personalize
    get titleTab () { return $('div.top-table > h2') }

    get filterKategoriToolbox () { return $('') }
    get filterTipeMisi () { return $('') }
    get filterInternalKategori () { return $('') }
    get filterKategoriMisi () { return $('') }
    get filterProjectMisi () { return $('') }
    get btnReset () { return $('') }
    get btnLoadData () { return $('') }

    //Table
    get datatableBody () { return $('#datatable-body') }
    get checkboxData () { return $('#mat-checkbox-6') }    //masih pakai default id Angular
    get dataRow () { return $$('#data-row') }
    get dataCell () { return $$('#data-cell') }
    get btnDuplicate () { return $$('#btn-duplicate') }
    get btnEdit () { return $$('#btn-edit') }
    get btnDelete () { return $$('#btn-delete') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 40000,
                timeoutMsg: 'expected title page not displayed after 40s'
            }
        )
        await expect(this.titlePage).toBeDisplayed()
        await expect(this.titlePage).toHaveText('Daftar Tugas')
        await expect(browser).toHaveUrlContaining('dte/template-task')
        // await expect(this.btnCreate).toBeClickable()
        // await dataCell.waitForDisplayed({ timeout: 5000 });
        await browser.pause(6000)
    }

    async tabDefault () {
        await this.tabMenu[0].click()
        await expect(this.titleTab).toHaveText('Daftar Tugas')
    }

    async tabPersonalize () {
        await this.tabMenu[1].click()
        await expect(this.titleTab).toHaveText('Daftar Tugas Personalize')
    }

    async createTemplateTugas () {
        await this.btnCreate.click()
    }

    async searchTemplateTugas (templateTugasName) {
        await expect(this.searchInput).toBeDisplayed()
        await this.searchInput.setValue(templateTugasName)
        // await browser.pause(7000)
    }

    async searchResult (templateTugasName) {
        await this.dataCell[1].scrollIntoView();
        await browser.waitUntil(
            async () => (await this.dataRow[1].isExisting()),
            {
                timeout: 50000,
                timeoutMsg: 'expected search result not displayed after 50s'
            }
        )
        await browser.pause(5000)
        await this.dataCell[1].$('div > span').waitForExist();
        await expect(this.dataCell[1].$('div > span')).toBeExisting();
        await expect(this.dataCell[1].$('div > span')).toHaveText(templateTugasName);
    }

    async searchResultTemplate (templateTugasName) {
        const titleTemplateTugas = await this.dataCell[1].$('div > span')
        titleTemplateTugas.forEach(element => {
            const templateTugas = element.getText()
                // console.log(missions)       //output: Promise { <pending> }
            templateTugas.then(function(result) {
                console.log(result)         //output: Mission list
                if (String(result) == templateTugasName) {
                    console.log('Template Tugas yang dicari ditemukan')
                } else {
                    console.log('Template Tugas yang dicari tidak ditemukan')
                }
            })
    })
}

    async reset () {
        await this.btnCreate.click()
    }

    async loadData () {
        await this.btnCreate.click()
    }

    async detailTemplate () {  //click name
        await this.dataRow.$$('option')[25].click();
    }

    async editTemplate () {    //click edit button
        await browser.pause(3000)
        await expect(this.btnEdit[0]).toBeExisting()
        await this.btnEdit[0].click();
    }

    async editTemplatetugas (namaTemplate) {  //detail by click name
        await expect(this.dataRow.$$('#data-cell')[0].$('div > span')).toHaveText(namaTsm);
        await this.btnEdit[0].click();
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('dte/template-task');
    }
}

export default new TemplateTugasPage();
