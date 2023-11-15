import Page from '../page';
const path = require('path');

//sub page containing specific selectors and methods for a specific page
class FormApprovalCoinAdjPage extends Page {

    //define selectors using getter methods
    get titlePage () { return $('div#headerApprovalCoinAdjustment') }

    get btnKirimNotif () { return $('div.ayo-main-wrapper > div > div > button[class="confirmation-button mat-raised-button"]') }
    get groupTradeProgram () { return $('input[name="group_trade_program_name"]') }
    get tradeProgram () { return $('input[name="trade_program_name"]') }
    get namaPengaturJadwal () { return $('input[name="task_sequencing_management_name"]') }
    get totalCoinInject () { return $('input[name="total_coin_inject_flush"]') }
    get tglRequestApproval () { return $('input[name="requested_at"]') }
    get requestor () { return $('input[name="requestor"]') }
    get reason () { return $('input[name="reason"]') }
    get tglApproval () { return $('input[name="responded_at"]') }
    get approver () { return $('input[name="approver"]') }
    
    get searchInput () { return $('input[placeholder="Cari"]') }

    get filterZone () { return $('') }
    get filterRegional () { return $('') }
    get filterArea () { return $('') }
    get filterSalespoint () { return $('') }
    get filterDistrict () { return $('') }
    get filterTerritory () { return $('') }
    get btnReset () { return $('div[class="confirm p-10"] button.publish-button') }
    get btnLoaddata () { return $('div[class="confirm p-10"] button.confirmation-button') }

    get btnApprove () { return $('button.primary-green') }
    get btnReject () { return $('div.p-16 > button.confirmation-button') }
    get popUpApproveReject () { return $('h1.mat-dialog-title') }
    get btnYaPopUp () { return $('div > button.confirm') }
    get btnBatalPopUp () { return $('div > button.reject') }

    get backToPageApprovalCA () { return $('#contentHeader div > div > span > a') }
    
    //a method to encapsule automation code to interact with the page
    async page () {
        await this.titlePage.waitForExist()
        await expect(this.titlePage).toBeDisplayed({timeout:6000})
        await expect(this.titlePage).toHaveText('Detail Approval Coin Adjustment')
        await expect(browser).toHaveUrlContaining('dte/approval-coin-adjusment/detail-tsm/')
    }

    async approve () {
        await this.btnApprove.scrollIntoView()
        await expect(this.btnApprove).toBeClickable()
        await this.btnApprove.click()
    }

    async reject () {
        await this.btnReject.scrollIntoView()
        await expect(this.btnReject).toBeClickable()
        await this.btnReject.click()
    }

    async confirmApproveReject (headerPopUpConfirm) {
        await this.popUpApproveReject.waitForExist()
        await this.popUpApproveReject.waitForDisplayed()
        await expect(this.popUpApproveReject).toHaveText(headerPopUpConfirm)
        await this.btnYaPopUp.click()
        await browser.pause(6000)
        await this.popUpApproveReject.waitForExist({ reverse: true })
    }

    async successApprove () {
        await this.btnApprove.waitForExist({ reverse: true })
    }

    async successReject () {
        await this.btnReject.waitForExist({ reverse: true })
    }

    async backToApprovalCoinAdj () {
        await this.backToPageApprovalCA.scrollIntoView() 
        await this.backToPageApprovalCA.click()
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('');
    }
}

export default new FormApprovalCoinAdjPage();