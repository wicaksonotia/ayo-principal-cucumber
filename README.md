# Regression Test The Principal SRC Website (DTE)
## Based on
This project currently based on **WebdriverIO:** `7.##.#`, **Cucumber**
## Installation
1. Running `git clone https://tig.weekendinc.com/jimmyoctavious/ayo-principal.git`
2. Running `npm install`
3. Set specs feature file and also step-definition file, Example: 
    specs: [
        './tests/features/tasksequencing/4createtsm-pinupmission.feature'
    cucumberOpts: {
        require: [
            './tests/step-definitions/tasksequencing/4createtsm-pinupmission.js'
4. Running tests `npm run principal` or `npx wdio wdio.conf.js`

## NOTES
- This project is for Webdriver V7 where the tests are written with `async`/`await`.
- This project only handles local execution on 1 em/simulator at a time, not parallel execution.
- Issue "MaxTokenizationLineLenght" di function setLocalStorage Login, maka sebaiknya run test case di text editor selain VSCode, contoh: Cmd.exe
- Selain test case login: Selalu ganti await LoginPage.setLclStorage() jika session habis di /pageobjects/login/login.page
- Semua scenario yang membuat task sebaiknya dibuat unique agar search result mudah ditemukan. Contoh: nama task ditambah suffix 1801 yg artinya tanggal 18 Januari run scenario task tersebut dibuat.
- Scenario 4, 5, 16-19: Ubah startDate Tsm & mission builder ke hari ini. EndDate Tsm & Mission Builder harus < EndDate TradeProgram yg dipilih
- 26 & 28: Cek status terakhir "Aktif Tidak Aktif Wknd"
- 7. Task verify: Cari yang button Verified-nya active
- 6. export-import-coin: Run test case 4 atau 5 dulu
- 9 & 10: Run test case 4 atau 5 dulu -> run test case 6 -> set Penerima di Tsm (scenario 6) agar button Approve & Reject muncul di detail Approval Coin Adjustment. Ubah function ApprovalCoinAdjPage.filterApproverName() pakai foreach jika nama approver yang disearch cuma 1 di list. *Ada issue window size jadi kecil ketika lihat detail (sebelum approve/reject)"
- 27: Sama dengan scenario 6
- Run scenario 5createtsm-without-pinupmission.js untuk Template Tugas 'Mission - Hanifah' (Dipakai untuk scenario Ayo Toko)
- Run scenario 5createtsm-without-pinupmission2.js untuk Template Tugas 'Mission 02 - Hanifah' (Dipakai untuk scenario Ayo Toko
### Allure Reporter
Execute command:
- `allure generate allure-results --clean` && `allure open`
- OR `npx allure generate allure-results --clean` && `npx allure open`
- OR `npm install allure-commandline --save-dev`, `npx allure generate allure-results --clean`, `npm install allure-commandline --save-dev`, `npx allure open`


    tsm.page.js: get btnCreate () { return $('#btn-create-task_sequencing') } //btnBuatTaskSequencing
    audience.page.js: get searchInput () { return $('input#search-audience') } //input#search
    rearch result audienc belum verify row yang muncul