import ChromeDriverService from 'wdio-chromedriver-service';
import Page from '../page';
const path = require('path');

//sub page containing specific selectors and methods for a specific page
class FormTemplatePlanogramPage extends Page {

    //define selectors using getter methods
    get titlePage () { return $('#contentTitle') }
    
    get btnSimpan () { return $('#btnSave') }

    get inpTemplateName () { return $('#field-template_name') }
    get inpGroupName () { return $('#field-brand_group_id') }
    get columnRow () { return $$('#field-number') }
    get btnBuatLayout () { return $('#btnCreateLayout') }
    get clCompetitorBrand () { return $('[name="is_competitor"]') }
    get inpImage () { return $$('#imageSKU') }
    get btnTambah () { return $('#btnAdd') }
    get inpListBrandCompetitor () { return $$('[aria-autocomplete="list"]') }
    get toggleStatus () { return $('[name="status"]') }
    
    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.switchToParentFrame()
        await browser.pause(3000)
        await browser.switchToFrame(0)
        await browser.pause(5000)
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 60000,
                timeoutMsg: 'expected title page not displayed after 6s'
            }
        )
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
    }

    async pageCreate () {
        await expect(this.titlePage).toHaveText('Buat Template Planogram')
        await expect(browser).toHaveUrlContaining('dte/template-planogram')
    }

    async pageEdit () {
        await browser.switchToParentFrame()
        await browser.pause(3000)
        await browser.switchToFrame(0)
        await browser.pause(5000)
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 60000,
                timeoutMsg: 'expected title page not displayed after 6s'
            }
        )
        await expect(this.titlePage).toHaveText('Ubah Template Planogram')
        // await expect(browser).toHaveUrlContaining('dte/template-planogram')
    }

    async template (templateName) {
        await this.inpTemplateName.setValue(templateName)
    }

    async templateEdit (templateNameEdit) {
        // await this.inpTemplateName.clearValue()
        await this.inpTemplateName.setValue(templateNameEdit)
    }

    async group (groupName) {
        await this.inpGroupName.addValue(groupName)
        await browser.pause(5000)
        await browser.keys("Enter")
    }

    async status () {
        await this.toggleStatus.click()
    }

    async rowxColumn (row, column) {
        await this.columnRow[0].setValue(row)
        await this.columnRow[1].setValue(column)
        await this.btnBuatLayout.click()
        await browser.pause(3000)
    }

    async addImage () {
        // await this.btnSimpan.scrollIntoView();
        await this.clCompetitorBrand.scrollIntoView()
        await this.inpImage[0].click()
        await this.btnTambah.click()
        await this.inpImage[0].click()
        await this.btnTambah.click()
        await this.inpImage[0].click()
        await this.btnTambah.click()
        await this.inpImage[1].click()
        await this.btnTambah.click()
        await this.inpImage[1].click()
        await this.btnTambah.click()
        await this.inpImage[1].click()
        await this.btnTambah.click()
        await browser.pause(2000)
    }

    async competitorBrand (competitor) {
        await this.clCompetitorBrand.click()
        await this.inpListBrandCompetitor[1].setValue(competitor)
        await browser.keys("Enter")
    }

    async submitForm () {
        await this.btnSimpan.waitForClickable();
        await expect(this.btnSimpan).toBeClickable()
        await this.btnSimpan.click()
        await browser.pause(5000)
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('dte/template-planogram');
    }
}

export default new FormTemplatePlanogramPage();
