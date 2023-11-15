import { AfterAll } from '@wdio/cucumber-framework';
import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class KPISettingPage extends Page {

    //define selectors using getter methods
    get titlePage () { return $('#headerKpiSetting') }
    get btnCreate () { return $('[aria-label="Login"][class="mat-raised-button"]') }
    get searchInput () { return $('[placeholder="Cari"]') }
    get menuKPISetting () {return $('#menu-305')}
    //Table
    get datatableBody () { return $('[class="visible"]') }
    get dataRow () { return $$('[class="datatable-row-center datatable-row-group ng-star-inserted"]') }
    get dataCellStatusInactive () { return $$('[class="text-boxed mat-red-700-bg ng-star-inserted"]') }
    get dataCellStatusActive () { return $$('[class="text-boxed mat-green-700-bg ng-star-inserted"]') }
    get btnEdit () { return $$('[class="secondary-text mat-icon material-icons"]') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.waitUntil(
            async () => (await (this.titlePage).isExisting()),
            {
                timeout: 90000,
                timeoutMsg: 'expected search input not existing after 90s'
            }
        )
        // await expect(this.btnCreate).toBeDisplayed()
        await expect(this.searchInput).toBeDisplayed()
    }

    async page1 () {
        await browser.waitUntil(
            async () => (await (this.titlePage).isExisting()),
            {
                timeout: 90000,
                timeoutMsg: 'expected expected title not existing after 90s'
            }
        )
        // await expect(this.btnCreate).toBeDisplayed()
        await expect(this.titlePage).toBeDisplayed()
    }
    async pageList () {
        await this.menuKPISetting.scrollIntoView()
        await this.menuKPISetting.click()
        await expect(this.titlePage).toHaveText('KPI Setting')
        await expect(browser).toHaveUrlContaining('kpisetting/kpi-groups-list')
    }

    async createKPI () {
        await browser.pause(8000)
        await this.btnCreate.click()
    }

    async expectNewKPI (status) {
        await this.dataCellStatusActive[0].scrollIntoView();
        await expect(this.dataCellStatusActive[0]).toHaveText(status)
    }

    async expectNewKPIEdited (status) {
        await this.dataCellStatusInactive[0].scrollIntoView();
        await expect(this.dataCellStatusInactive[0]).toHaveText(status)
        await browser.pause(5000)
    }

    async editKPI () {
        await this.btnEdit[0].click();
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('kpisetting/kpi-groups-list');
    }
}

export default new KPISettingPage();
