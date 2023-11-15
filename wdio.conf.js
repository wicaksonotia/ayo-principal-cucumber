// cons url = req = require('./urls')
// const ENV = process.env.ENV
// if(!ENV || !['dev','qa', 'prod'].includes(ENV)){
//   console.log('please pass the correct ENV value : ENV=dev|qa|prod')
//   process.exit()
// }

const video = require("wdio-video-reporter");
const allure = require("allure-commandline");
// import report from "@wdio/allure-reporter";
const report = require("@wdio/allure-reporter");
const { generate } = require("multiple-cucumber-html-reporter");
const { removeSync } = require("fs-extra");

exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called.
  //
  // The specs are defined as an array of spec files (optionally using wildcards
  // that will be expanded). The test for each spec file will be run in a separate
  // worker process. In order to have a group of spec files run in the same worker
  // process simply enclose them in an array within the specs array.
  //
  // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
  // then the current working directory is where your `package.json` resides, so `wdio`
  // will be called from there.
  //
  specs: [
    //'./tests/features/**/*.feature'
    // './tests/features/login/0signout.feature'
    // "./tests/features/login/1login-internal.feature",
    //'./tests/features/login/1login-external.feature'
    // "./tests/features/tasksequencing/53createtsm1000kaudience.feature",
    // "./tests/features/tasksequencing/53createtsm1000kaudienceedit.feature",
    // "./tests/features/tasksequencing/42createtsm-xp.feature",
    // "./tests/features/tasksequencing/47createtsmwithplanogrammission.feature",
    // "./tests/features/tasksequencing/4createtsm-pinupmission.feature",
    // "./tests/features/tasksequencing/5createtsm-without-pinupmission.feature",
    // "./tests/features/tasksequencing/17createmissiontaskbasedresponse.feature",
    // "./tests/features/tasksequencing/18createquizmission.feature",
    // "./tests/features/tasksequencing/19createtaskbasedresponse-pushtoff.feature",
    // "./tests/features/tasksequencing/16createmission-ir-tsm.feature",
    // "./tests/features/tasksequencing/26publish-tsm.feature",
    // "./tests/features/tasksequencing/28unpublish-tsm.feature",
    // "./tests/features/tasksequencing/6exportimportcoin.feature", //export & import
    // "./tests/features/tasksequencing/27requestapproval-coinadjustment.feature", //import, sama dengan scenario 6
    // "./tests/features/templatetugas/2createtemplatemission-custombackground.feature", //manual saat upload image
    // "./tests/features/templatetugas/3createtemplatemission-backgrounddefault.feature",
    // "./tests/features/templatetugas/29importimage.feature", //manual saat upload image
    // "./tests/features/templatetugas/30importvideo.feature", //manual saat upload video
    // "./tests/features/templatetugas/31selectattributemisi.feature",
    // "./tests/features/templatetugas/32selectpertanyaan.feature",
    // "./tests/features/templatetugas/33sharablelink.feature",
    // "./tests/features/templatetugas/46templatetugasplanogram.feature",
    // "./tests/features/templatetugas/49templatetugasupc.feature",
    // "./tests/features/templatetugas/55templatetugastbrsemua.feature",
    // "./tests/features/produk/56createproductupc.feature", //import gambar manual
    // "./tests/features/audience/8export-import.feature", //manual saat upload file
    "./tests/features/audience/50importaudiencepersonalize.feature", //manual saat upload file
    // "./tests/features/audience/51import200kaudiencepersonalize.feature", //manual saat upload file
    // "./tests/features/audience/52import1000kaudiencenonpersonalize.feature", //manual saat upload file
    // "./tests/features/audience/57createaudiencemitranonpersonalize.feature", //manual saat upload file
    // "./tests/features/approvalcoinadjustment/9approve.feature",
    // "./tests/features/approvalcoinadjustment/10reject.feature",
    // "./tests/features/coinredemptionapproval/39rejectrequest.feature", //pakai cron
    // "./tests/features/coinredemptionapproval/37approverequest.feature", // pakai cron
    // "./tests/features/coindisbursement/38uploadresultpayment.feature", // manual upload file
    // "./tests/features/coindisbursement/13publish-coindisbursement.feature",
    // "./tests/features/coindisbursement/15unpublish-coindisbursement.feature",
    // "./tests/features/coindisbursement/14setupprogrampenukarancoinTB.feature",
    // "./tests/features/coindisbursement/14setupprogrampenukarancoinPB.feature",
    // "./tests/features/dteautomation/20digitalcoupon-nontsm.feature", //create TP dan Audience dulu
    // "./tests/features/dteautomation/21digitalcoupon-tsm.feature", //create TP dan Audience dulu
    // "./tests/features/dteautomation/22eorder-nontsm.feature", //create TP dan Audience dulu
    // "./tests/features/dteautomation/23eorder-tsm.feature", //create TP dan Audience dulu
    // "./tests/features/dteautomation/24referralcode-nontsm.feature", //create TP dan Audience dulu
    // "./tests/features/dteautomation/25referralcode-tsm.feature", //create TP dan Audience dulu
    // "./tests/features/employeemapping/34crudemployeemappingpb.feature",
    // "./tests/features/employeemapping/35crudemployeemappingtb.feature",
    // "./tests/features/subgtp/36crudsubgtp.feature",
    // "./tests/features/taskverification2.0/40taskverification2.0.feature", //edit tanggal deadline assignment -- geser ke kanan manual
    // "./tests/features/taskverification2.0/58taskverificationmitra.feature", //edit tanggal deadline assignment -- geser ke kanan manual
    // './tests/features/taskverification2.0/54importverificationassignment150kdata.feature' //siapin task verifnya dulu
    // "./tests/features/xp/43crudxp-audiencefixedpanel.feature", //edit startDate dan endDate, manual import sampe submit dialog
    // "./tests/features/xp/44createxp-audiencepopulationblast.feature", //edit startDate dan endDate, manual import sampe submit dialog
    // "./tests/features/spinthewheel/41crudespinthewheel-audiencefixedpanel.feature", // upload data manual
    // "./tests/features/spinthewheel/41crudespinthewheel-audiencepopulationblast.feature",
    // "./tests/features/imagerecognition/45irtemplateplanogram.feature", //upload image
    // "./tests/features/imagerecognition/48ir-checkimage.feature", //upload image
    // "./tests/features/calltoaction/59crudcta.feature", //upload file
    // "./tests/features/calltoaction/62ctacustomized.feature", //upload file
    // "./tests/features/principalnotesforretailer/61principalnotesforretailer.feature", //edit date
    // "./tests/features/fieldforce/60fieldforce.feature",
    //spanduk_online ada import gambar manual
    // "./tests/features/spanduk_online/01banner(inapp-reguler).feature",
    // "./tests/features/spanduk_online/02banner(toko-terdekat-reguler).feature",
    // "./tests/features/spanduk_online/03banner(info-src-reguler).feature",
    // "./tests/features/spanduk_online/04banner(flying-button-reguler).feature",
    // "./tests/features/spanduk_online/05banner(inapp-cc).feature",
    // "./tests/features/spanduk_online/06banner(toko-terdekat-cc).feature",
    // "./tests/features/spanduk_online/07banner(info-src-cc).feature",
    // "./tests/features/spanduk_online/08banner(flying-button-cc).feature",
    // "./tests/features/spanduk_online/09banner(inapp-rrp).feature",
    // "./tests/features/spanduk_online/10banner(toko-terdekat-rrp).feature",
    // "./tests/features/spanduk_online/11banner(info-src-rrp).feature",
    // "./tests/features/spanduk_online/12banner(flying-button-rrp).feature",
    // "./tests/features/spanduk_online/13banner(employee-only).feature",
    // "./tests/features/spanduk_online/14banner(berlangganan).feature",
    // "./tests/features/spanduk_online/15banner(tidak-berlangganan).feature",
    //popup-notifikasi ada import gambar manual
    // "./tests/features/notification/16notification(popup-notifikasi-reguler).feature",
    // "./tests/features/notification/17notification(popup-notifikasi-cc).feature",
    // "./tests/features/notification/18notification(popup-notifikasi-rrp).feature",
    // "./tests/features/notification/19notification(popup-notifikasi-employee).feature",
    // "./tests/features/notification/20notification(popup-notifikasi-berlangganan).feature",
    // "./tests/features/notification/21notification(popup-notifikasi-tidak-berlangganan).feature",
    // "./tests/features/notification/22notification(push-notif-reguler).feature",
    // "./tests/features/notification/23notification(push-notif-cc).feature",
    // "./tests/features/notification/24notification(push-notif-rrp).feature",
    // "./tests/features/notification/25notification(push-notif-employee).feature",
    // "./tests/features/notification/26notification(push-notif-berlangganan).feature",
    // "./tests/features/notification/27notification(push-notif-tidak-berlangganan).feature",
    //voucher ada import gambar manual
    // "./tests/features/voucher/28voucher(tipe-semua).feature",
    // "./tests/features/voucher/29voucher(tipe-perokok-cc).feature",
    // "./tests/features/voucher/30voucher(tipe-pengguna-iqos).feature",
    // "./tests/features/voucher/31voucher(tipe-bukan-perokok).feature",
    // "./tests/features/voucher/32voucher(tipe-perokok-cc-dan-iqos).feature",
    //undian dan stw ada import gambar dan file
    // "./tests/features/kpisetting/63kpisetting.feature",
    // "./tests/features/undian/64crud(undian-dan-pemenang).feature",
    // "./tests/features/spinthewheel/65crud-spinthewheel(batasan-produk-1).feature",
    // "./tests/features/spinthewheel/66crud-spinthewheel(batasan-produk-1-dengan-OR).feature",
    // "./tests/features/spinthewheel/67crud-spinthewheel(batasan-produk-1-dengan-AND).feature",
    // "./tests/features/spinthewheel/68crud-spinthewheel(batasan-kategori-1).feature",
    // "./tests/features/spinthewheel/69crud-spinthewheel(batasan-kategori-1-dengan-OR).feature",
    // "./tests/features/spinthewheel/70crud-spinthewheel(batasan-kategori-1-dengan-AND).feature",
    // "./tests/features/spinthewheel/71crud-spinthewheel(exclude-produk-1).feature",
    // "./tests/features/spinthewheel/72crud-spinthewheel(exclude-kategori-1).feature",
    // "./tests/features/spinthewheel/73crud-spinthewheel(reward-noncoin).feature",
    // "./tests/features/spinthewheel/74crud-spinthewheel(reward-xp).feature",
    // "./tests/features/spinthewheel/75crud-spinthewheel(reward-coin-noncoin-dan-xp).feature",
    // "./tests/features/spinthewheel/76create-push-notif-spinthewheel.feature",
    // "./tests/features/spinthewheel/77edit-push-notif-spinthewheel.feature",
    // "./tests/features/spinthewheel/110setup-stwmitra.feature",
    /// "./tests/features/employeemapping/94crudemployeemapping(coin-potongan-belanja).feature",
    // "./tests/features/koinpotonganbelanja/95createkoinpotonganbelanja(batasanproduk).feature", //buat group trade program terlebih dahulu, edit date
    // "./tests/features/koinpotonganbelanja/96createkoinpotonganbelanja(batasankategori).feature", //buat group trade program terlebih dahulu, edit date
    // "./tests/features/tradeprogram/98editbudget-tradeprogram.feature", //upload gambar, edit tanggal
    // "./tests/features/tradeprogram/98editbudget-tradeprogram2.feature",
    // "./tests/features/tasksequencing/99createtsm-semuatipe-kecualiirdanupc.feature", //edit tanggal
    // "./tests/features/tasksequencing/100createtsm-reblastoff-lebihdari1misi.feature", //edit tanggal
    //reblaston--------------------------------------------------------------------------------------------
    // "./tests/features/tasksequencing/101edittsm(checklist-checkbox-verification-perquestion).feature", //edit tanggal, nama tsm= misi reda checklist, template tugas: question based test
    // "./tests/features/taskverification2.0/106misinonpersonalizereblaston.feature", //, buat dulu tsm (contoh : misi reda checklist), submit misi toko, edit deadline, setelah export adjust file lalu import file manual, scroll manual
    // "./tests/features/taskverification2.0/112verificationapproval-exportdanapprovehasilverifikasimisiperbaikan2.feature", //, buat dulu tsm (contoh : misi reda checklist), submit misi toko, edit deadline, setelah export adjust file lalu import file manual, scroll manual
    //-----------------------------------------------------------------------------------------------------------
    // "./tests/features/taskverification2.0/104exportverificationassignment-misiverifperquestion.feature", //buat dulu tsm , submit misi toko, edit tanggal deadline assignment, scroll manual
    // "./tests/features/taskverification2.0/105misinonpersonalizereblastoff.feature", //, buat dulu tsm , submit misi toko, edit deadline, setelah export adjust file lalu import file manual, scroll manual
    // "./tests/features/taskverification2.0/107detailverificationapproval-semuaapproved.feature", //, buat dulu tsm , submit misi toko, edit deadline, setelah export adjust file lalu import file manual, scroll manual
    // "./tests/features/taskverification2.0/108detailverificationapproval-semuarejected.feature", //, buat dulu tsm , submit misi toko, edit deadline, setelah export adjust file lalu import file manual, scroll manual
    // "./tests/features/taskverification2.0/109exporttsmmisiverif(semuasoaladarewardXP).feature", //, buat dulu tsm , submit misi toko, edit deadline, setelah export adjust file lalu import file manual, scroll manual
    // "./tests/features/taskverification2.0/110exportverificationassignment-misiperbaikanlebihdari1retailer.feature", //, buat dulu tsm , submit misi toko, edit deadline, setelah export adjust file lalu import file manual, scroll manual
    // "./tests/features/taskverification2.0/110exportverificationassignment-misiperbaikanlebihdari1retailer2.feature", //, buat dulu tsm , submit misi perbaikan toko , edit deadline, scroll manual
    // "./tests/features/taskverification2.0/111importmisiperbaikan-sebelumnyaapprovedoriginal.feature", //, buat dulu tsm , submit misi toko, edit deadline, setelah export adjust file lalu import file manual, scroll manual
    // "./tests/features/taskverification2.0/111importmisiperbaikan-sebelumnyaapprovedoriginal2.feature", //, buat dulu tsm , submit misi perbaikan toko , edit deadline,setelah export adjust file lalu import file manual,  scroll manual
    //tsm
    // "./tests/features/tasksequencing/113createtsm-lebihdari1retailler.feature", //edit tanggal
    // "./tests/features/tasksequencing/102edittsm(unchecklist-checkbox-verification-perquestion).feature", //edit tanggal
    // "./tests/features/tasksequencing/103duplicate-tsm.feature", //edit tanggal
    // tiawicaksono
    // "./tests/features/flushcoin/5205flushcoin.feature",
    // "./tests/features/spinthewheel/5242PartialCoin.feature",
    //-----------------------------------------------------------------------------------------------------------
    // "./tests/features/audience/5592osemretailerfixedpanel.feature",
    // "./tests/features/audience/5592osemretailerpopulationblast.feature",
    // "./tests/features/audience/5592osemwholesalerpopulationblast.feature",
    //-----------------------------------------------------------------------------------------------------------
    // "./tests/features/employeemapping/5032crudemployeemapping(coin-potongan-belanja).feature", /// NO. 2
    // "./tests/features/koinpotonganbelanja/5032createkoinpotonganbelanja(batasanproduk).feature", /// NO. 3 terus ke toko
    // "./tests/features/koinpotonganbelanja/5032createkoinpotonganbelanja(batasankategori).feature", /// NO. 5 terus ke toko
    // "./tests/features/coinredemptionapproval/5032approverequest.feature", /// NO. 7 setelah cron dijalankan
    //-----------------------------------------------------------------------------------------------------------
    // "./tests/features/subgtp/5206subgrouptradeprogram.feature", /// NO. 1
    // "./tests/features/tradeprogram/5206tradeprogram.feature", /// NO. 2
    // "./tests/features/tasksequencing/5206createquizmission.feature", /// NO. 3 terus ke toko
    // "./tests/features/coinredemptionapproval/5206approverequest.feature", /// NO. 6
    // "./tests/features/coinredemptionapproval/5206rejectrequest.feature", /// NO. 7
    //-----------------------------------------------------------------------------------------------------------
    // "./tests/features/trs/5159.feature", /// NO. 1
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  //to run: npx wdio wdio.conf.js --suite alltest
  suites: {
    alltest: [],
    // banner: ["./tests/features/spanduk_online/01banner(inapp-reguler).feature"],
  },

  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 10,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 5,
      // browserName: "chrome",
      browserName: "MicrosoftEdge",
      acceptInsecureCerts: true,
      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
      /*'cjson:metadata': {
            browser: {
                name: 'chrome',
                version: '95.0.4638.69',
            },
            device: 'Lenovo ThinkPad',
            platform: {
                name: 'windows',
                version: '10'
            },
        },*/
    },
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "error",
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/appium-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: "http://localhost",
  // baseUrl: url[process.env.ENV], //npm test -- --spec ./test
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 60000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  // services: ["chromedriver"],
  services: ["edgedriver"],

  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: "cucumber",
  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter
  reporters: [
    [
      "spec",
      {
        symbols: {
          passed: "[PASS]",
          failed: "[FAIL]",
        },
        addConsoleLogs: true,
      },
    ],

    // [
    //   video,
    //   {
    //     outputDir: "./reports/video",
    //     //recordAllActions: true,
    //     saveAllVideos: true, // If true, also saves videos for successful test cases
    //     videoSlowdownMultiplier: 5, // Higher to get slower videos, lower for faster videos [Value 1-100]
    //     // maxTestNameCharacters: 1000,   //Default 250
    //     videoRenderTimeout: 600000, //Default 5
    //   },
    // ],

    [
      "allure",
      {
        outputDir: "./allure-results",
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true,
        addConsoleLogs: true,
      },
    ],

    [
      "cucumberjs-json",
      {
        jsonFolder: "./reports/cucumberjs-json/json",
        language: "en",
      },
    ],
  ],

  //
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    // require: ["./tests/step-definitions/**/*.js"],
    require: [
      //'./tests/step-definitions/*.ts'
      //'./tests/step-definitions/login/0signout.js'
      // "./tests/step-definitions/login/1login-internal.js",
      //'./tests/step-definitions/login/1login-external.js'
      // "./tests/step-definitions/tasksequencing/53createtsm1000kaudience.js",
      // "./tests/step-definitions/tasksequencing/53createtsm1000kaudienceedit.js",
      // "./tests/step-definitions/tasksequencing/42createtsm-xp.js",
      // "./tests/step-definitions/tasksequencing/47createtsmwithplanogrammission.js",
      // "./tests/step-definitions/tasksequencing/4createtsm-pinupmission.js",
      // "./tests/step-definitions/tasksequencing/5createtsm-without-pinupmission.js",
      // "./tests/step-definitions/tasksequencing/5createtsm-without-pinupmission2.js", //tambah -2 nameWithoutPinUp5
      // "./tests/step-definitions/tasksequencing/17createmissiontaskbasedresponse.js",
      // "./tests/step-definitions/tasksequencing/18createquizmission.js",
      // "./tests/step-definitions/tasksequencing/19createtaskbasedresponse-pushtoff.js",
      // "./tests/step-definitions/tasksequencing/16createmission-ir-tsm.js",
      // "./tests/step-definitions/tasksequencing/26publish-tsm.js",
      // "./tests/step-definitions/tasksequencing/28unpublish-tsm.js",
      // "./tests/step-definitions/tasksequencing/6exportimportcoin.js",
      // "./tests/step-definitions/tasksequencing/27requestapproval-coinadjustment.js",
      // "./tests/step-definitions/templatetugas/2createtemplatemission-custombackground.js",
      // "./tests/step-definitions/templatetugas/3createtemplatemission-backgrounddefault.js",
      // "./tests/step-definitions/templatetugas/29importimage.js",
      // "./tests/step-definitions/templatetugas/30importvideo.js",
      // "./tests/step-definitions/templatetugas/31selectattributemisi.js",
      // "./tests/step-definitions/templatetugas/32selectpertanyaan.js",
      // "./tests/step-definitions/templatetugas/33sharablelink.js",
      // "./tests/step-definitions/templatetugas/46templatetugasplanogram.js",
      // "./tests/step-definitions/templatetugas/49templatetugasupc.js",
      // "./tests/step-definitions/templatetugas/55templatetugastbrsemua.js",
      // "./tests/step-definitions/produk/56createproductupc.js",
      // "./tests/step-definitions/audience/8export-import.js",
      "./tests/step-definitions/audience/50importaudiencepersonalize.js",
      // "./tests/step-definitions/audience/51import200kaudiencepersonalize.js",
      // "./tests/step-definitions/audience/52import1000kaudiencenonpersonalize.js",
      // "./tests/step-definitions/audience/57createaudiencemitranonpersonalize.js",
      // "./tests/step-definitions/approvalcoinadjustment/9approve.js",
      // "./tests/step-definitions/approvalcoinadjustment/10reject.js",
      // "./tests/step-definitions/coinredemptionapproval/39rejectrequest.js",
      // './tests/step-definitions/coinredemptionapproval/37approverequest.js'
      // "./tests/step-definitions/coindisbursement/38uploadresultpayment.js",
      // "./tests/step-definitions/coindisbursement/13publish-coindisbursement.js",
      // "./tests/step-definitions/coindisbursement/15unpublish-coindisbursement.js",
      // "./tests/step-definitions/coindisbursement/14setupprogrampenukarancoinTB.js",
      // "./tests/step-definitions/coindisbursement/14setupprogrampenukarancoinPB.js",
      // "./tests/step-definitions/dteautomation/20digitalcoupon-nontsm.js",
      // "./tests/step-definitions/dteautomation/21digitalcoupon-tsm.js",
      // "./tests/step-definitions/dteautomation/22eorder-nontsm.js",
      // "./tests/step-definitions/dteautomation/23eorder-tsm.js",
      // "./tests/step-definitions/dteautomation/24referralcode-nontsm.js",
      // "./tests/step-definitions/dteautomation/25referralcode-tsm.js",
      // "./tests/step-definitions/employeemapping/34crudemployeemappingpb.js",
      // "./tests/step-definitions/employeemapping/35crudemployeemappingtb.js",
      // "./tests/step-definitions/subgtp/36crudsubgtp.js",
      // "./tests/step-definitions/taskverification2.0/40taskverification2.0.js",
      // "./tests/step-definitions/taskverification2.0/58taskverificationmitra.js",
      // './tests/step-definitions/taskverification2.0/54importverificationassignment150kdata.js'
      // "./tests/step-definitions/xp/43crudxp-audiencefixedpanel.js",
      // "./tests/step-definitions/xp/44createxp-audiencepopulationblast.js",
      // "./tests/step-definitions/spinthewheel/41crudespinthewheel-audiencefixedpanel.js",
      // "./tests/step-definitions/spinthewheel/41crudespinthewheel-audiencepopulationblast.js",
      // "./tests/step-definitions/imagerecognition/45irtemplateplanogram.js",
      // "./tests/step-definitions/imagerecognition/48ir-checkimage.js",
      // "./tests/step-definitions/calltoaction/59crudcta.js",
      // "./tests/step-definitions/calltoaction/62ctacustomized.js",
      // "./tests/step-definitions/principalnotesforretailer/61principalnotesforretailer.js",
      // "./tests/step-definitions/fieldforce/60fieldforce.js",
      //spanduk_online ada edit datesampai dan import gambar manual
      // "./tests/step-definitions/spanduk_online/01banner(inapp-reguler).js",
      // "./tests/step-definitions/spanduk_online/02banner(toko-terdekat-reguler).js",
      // "./tests/step-definitions/spanduk_online/03banner(info-src-reguler).js",
      // "./tests/step-definitions/spanduk_online/04banner(flying-button-reguler).js",
      // "./tests/step-definitions/spanduk_online/05banner(inapp-cc).js",
      // "./tests/step-definitions/spanduk_online/06banner(toko-terdekat-cc).js",
      // "./tests/step-definitions/spanduk_online/07banner(info-src-cc).js",
      // "./tests/step-definitions/spanduk_online/08banner(flying-button-cc).js",
      // "./tests/step-definitions/spanduk_online/09banner(inapp-rrp).js",
      // "./tests/step-definitions/spanduk_online/10banner(toko-terdekat-rrp).js",
      // "./tests/step-definitions/spanduk_online/11banner(info-src-rrp).js",
      // "./tests/step-definitions/spanduk_online/12banner(flying-button-rrp).js",
      // "./tests/step-definitions/spanduk_online/13banner(employee-only).js",
      // "./tests/step-definitions/spanduk_online/14banner(berlangganan).js",
      // "./tests/step-definitions/spanduk_online/15banner(tidak-berlangganan).js",
      //popup-notifikasi ada import gambar manual
      // "./tests/step-definitions/notification/16notification(popup-notifikasi-reguler).js",
      // "./tests/step-definitions/notification/17notification(popup-notifikasi-cc).js",
      // "./tests/step-definitions/notification/18notification(popup-notifikasi-rrp).js",
      // "./tests/step-definitions/notification/19notification(popup-notifikasi-employee).js",
      // "./tests/step-definitions/notification/20notification(popup-notifikasi-berlangganan).js",
      // "./tests/step-definitions/notification/21notification(popup-notifikasi-tidak-berlangganan).js",
      // "./tests/step-definitions/notification/22notification(push-notif-reguler).js",
      // "./tests/step-definitions/notification/23notification(push-notif-cc).js",
      // "./tests/step-definitions/notification/24notification(push-notif-rrp).js",
      // "./tests/step-definitions/notification/25notification(push-notif-employee).js",
      // "./tests/step-definitions/notification/26notification(push-notif-berlangganan).js",
      // "./tests/step-definitions/notification/27notification(push-notif-tidak-berlangganan).js",
      //voucher ada import gambar manual
      // "./tests/step-definitions/voucher/28voucher(tipe-semua).js",
      // "./tests/step-definitions/voucher/29voucher(tipe-perokok-cc).js",
      // "./tests/step-definitions/voucher/30voucher(tipe-pengguna-iqos).js",
      // "./tests/step-definitions/voucher/31voucher(tipe-bukan-perokok).js",
      // "./tests/step-definitions/voucher/32voucher(tipe-perokok-cc-dan-iqos).js",
      //undian dan stw ada import gambar dan file
      // "./tests/step-definitions/kpisetting/63kpisetting.js",
      // "./tests/step-definitions/undian/64crud(undian-dan-pemenang).js",
      // "./tests/step-definitions/spinthewheel/65crud-spinthewheel(batasan-produk-1).js",
      // "./tests/step-definitions/spinthewheel/66crud-spinthewheel(batasan-produk-1-dengan-OR).js",
      // "./tests/step-definitions/spinthewheel/67crud-spinthewheel(batasan-produk-1-dengan-AND).js",
      // "./tests/step-definitions/spinthewheel/68crud-spinthewheel(batasan-kategori-1).js",
      // "./tests/step-definitions/spinthewheel/69crud-spinthewheel(batasan-kategori-1-dengan-OR).js",
      // "./tests/step-definitions/spinthewheel/70crud-spinthewheel(batasan-kategori-1-dengan-AND).js",
      // "./tests/step-definitions/spinthewheel/71crud-spinthewheel(exclude-produk-1).js",
      // "./tests/step-definitions/spinthewheel/72crud-spinthewheel(exclude-kategori-1).js",
      // "./tests/step-definitions/spinthewheel/73crud-spinthewheel(reward-noncoin).js",
      // "./tests/step-definitions/spinthewheel/74crud-spinthewheel(reward-xp).js",
      // "./tests/step-definitions/spinthewheel/75crud-spinthewheel(reward-coin-noncoin-dan-xp).js",
      // "./tests/step-definitions/spinthewheel/76create-push-notif-spinthewheel.js",
      // "./tests/step-definitions/spinthewheel/77edit-push-notif-spinthewheel.js",
      // "./tests/step-definitions/spinthewheel/110setup-stwmitra.js",
      /// "./tests/step-definitions/employeemapping/94crudemployeemapping(coin-potongan-belanja).js",
      // "./tests/step-definitions/koinpotonganbelanja/95createkoinpotonganbelanja(batasanproduk).js",
      // "./tests/step-definitions/koinpotonganbelanja/96createkoinpotonganbelanja(batasankategori).js",
      // "./tests/step-definitions/subgtp/97editsgpt.js",
      //'./tests/step-definitions/subgtp/97editsgpt2.js'
      // "./tests/step-definitions/tradeprogram/98editbudget-tradeprogram.js",
      // "./tests/step-definitions/tradeprogram/98editbudget-tradeprogram2.js",
      // "./tests/step-definitions/tasksequencing/99createtsm-semuatipe-kecualiirdanupc.js",
      // "./tests/step-definitions/tasksequencing/100createtsm-reblastoff-lebihdari1misi.js",
      //reblaston--------------------------------------------------------------------------------------------
      // "./tests/step-definitions/tasksequencing/101edittsm(checklist-checkbox-verification-perquestion).js",
      // "./tests/step-definitions/taskverification2.0/106misinonpersonalizereblaston.js",
      // "./tests/step-definitions/taskverification2.0/112verificationapproval-exportdanapprovehasilverifikasimisiperbaikan2.js",
      //-----------------------------------------------------------------------------------------------------------
      // "./tests/step-definitions/taskverification2.0/104exportverificationassignment-misiverifperquestion.js",
      // "./tests/step-definitions/taskverification2.0/105misinonpersonalizereblastoff.js",
      // "./tests/step-definitions/taskverification2.0/107detailverificationapproval-semuaapproved.js",
      // "./tests/step-definitions/taskverification2.0/108detailverificationapproval-semuarejected.js",
      // "./tests/step-definitions/taskverification2.0/109exporttsmmisiverif(semuasoaladarewardXP).js",
      // "./tests/step-definitions/taskverification2.0/110exportverificationassignment-misiperbaikanlebihdari1retailer.js",
      // "./tests/step-definitions/taskverification2.0/110exportverificationassignment-misiperbaikanlebihdari1retailer2.js",
      // "./tests/step-definitions/taskverification2.0/111importmisiperbaikan-sebelumnyaapprovedoriginal.js",
      // "./tests/step-definitions/taskverification2.0/111importmisiperbaikan-sebelumnyaapprovedoriginal2.js",
      //tsm
      // "./tests/step-definitions/tasksequencing/113createtsm-lebihdari1retailler.js",
      // "./tests/step-definitions/tasksequencing/102edittsm(unchecklist-checkbox-verification-perquestion).js",
      // "./tests/step-definitions/tasksequencing/103duplicate-tsm.js",
      // tiawicaksono
      // "./tests/step-definitions/flushcoin/5205flushcoin.step.js",
      // "./tests/step-definitions/spinthewheel/5242PartialCoin.js",
      //-----------------------------------------------------------------------------------------------------------
      // "./tests/step-definitions/audience/5592osemretailerfixedpanel.step.js",
      // "./tests/step-definitions/audience/5592osemretailerpopulationblast.step.js",
      // "./tests/step-definitions/audience/5592osemwholesalerpopulationblast.step.js",
      //-----------------------------------------------------------------------------------------------------------
      // "./tests/step-definitions/employeemapping/5032crudemployeemapping(coin-potongan-belanja).js", /// NO. 2
      // "./tests/step-definitions/koinpotonganbelanja/5032createkoinpotonganbelanja(batasanproduk).js", /// NO. 3 terus ke toko
      // "./tests/step-definitions/koinpotonganbelanja/5032createkoinpotonganbelanja(batasankategori).js", /// NO. 5 terus ke toko
      // './tests/step-definitions/coinredemptionapproval/5032approverequest.js'
      //-----------------------------------------------------------------------------------------------------------
      // "./tests/step-definitions/subgtp/5206subgrouptradeprogram.js", /// NO. 1
      // "./tests/step-definitions/tradeprogram/5206tradeprogram.js", /// NO. 2
      // "./tests/step-definitions/tasksequencing/5206createquizmission.js", /// NO. 3 terus ke toko
      // "./tests/step-definitions/coinredemptionapproval/5206approverequest.js", /// NO. 6
      // "./tests/step-definitions/coinredemptionapproval/5206rejectrequest.js", /// NO. 7
      //-----------------------------------------------------------------------------------------------------------
      //TRS
      // "./tests/step-definitions/trs/5159.js", /// NO. 1
    ],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: ["@babel/register"],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ["pretty", "io.qameta.allure:allure-cucumber-jvm"],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "",
    // <number> timeout for step definitions
    timeout: 1000000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
    retry: 0,
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  // onPrepare: () => {
  //     // Remove the `.tmp/` folder that holds the json and report files
  //     removeSync('./reports/cucumberjs-json/');
  //   },
  /**
   * Gets executed before a worker process is spawned and can be used to initialise specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {String} cid      capability id (e.g 0-0)
   * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {[type]} specs    specs to be run in the worker process
   * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
   * @param  {[type]} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   * @param {String} cid worker id (e.g. 0-0)
   */
  // beforeSession: function (config, capabilities, specs, cid) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {Object}         browser      instance of created browser/device session
   */
  // before: function (capabilities, specs) {
  // },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Cucumber Hooks
   *
   * Runs before a Cucumber Feature.
   * @param {String}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // beforeFeature: function (uri, feature) {
  // },
  /**
   *
   * Runs before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world world object containing information on pickle and test step
   */
  // beforeScenario: function (world) {
  // },
  beforeScenario: function (world) {
    browser.maximizeWindow();
  },
  /**
   *
   * Runs before a Cucumber Step.
   * @param {Pickle.IPickleStep} step     step data
   * @param {IPickle}            scenario scenario pickle
   */
  // beforeStep: function (step, scenario) {
  // },
  /**
   *
   * Runs after a Cucumber Step.
   * @param {Pickle.IPickleStep} step     step data
   * @param {IPickle}            scenario scenario pickle
   * @param {Object}             result   results object containing scenario results
   * @param {boolean}            result.passed   true if scenario has passed
   * @param {string}             result.error    error stack if scenario failed
   * @param {number}             result.duration duration of scenario in milliseconds
   */
  // afterStep: function (step, scenario, result) {
  // },
  afterStep: function (test, scenario, { error, duration, passed }) {
    if (error) {
      browser.takeScreenshot();
      var date = Date.now();
      browser.saveScreenshot("./reports/screenshots/error - " + date + ".png");
      // browser.saveScreenshot('./reports/screenshots/'+scenario+'-'+step+'-'+result+'-'+date+'.png');
    }
  },
  /**
   *
   * Runs before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world  world object containing information on pickle and test step
   * @param {Object}                 result results object containing scenario results
   * @param {boolean}                result.passed   true if scenario has passed
   * @param {string}                 result.error    error stack if scenario failed
   * @param {number}                 result.duration duration of scenario in milliseconds
   */
  // afterScenario: function (world, result) {
  // },
  /**
   *
   * Runs after a Cucumber Feature.
   * @param {String}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // afterFeature: function (uri, feature) {
  // },
  afterFeature: function (uri, feature) {
    report.addEnvironment("Platform", "Laptop");
    report.addEnvironment("Device", "Lenovo");
    // report.addEnvironment("ENV URL", appbaseURL)
    // report.addEnvironment("Platform", process.platform)
  },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  // onComplete: function() {
  //     const reportError = new Error('Could not generate Allure report')
  //     const generation = allure(['generate', 'allure-results-oklatest', '--clean'])
  //     return new Promise((resolve, reject) => {
  //         const generationTimeout = setTimeout(
  //             () => reject(reportError),
  //             5000)

  //         generation.on('exit', function(exitCode) {
  //             clearTimeout(generationTimeout)

  //             if (exitCode !== 0) {
  //                 return reject(reportError)
  //             }

  //             console.log('Allure report successfully generated')
  //             resolve()
  //         })
  //     })
  // },
  /*onComplete: function(exitCode, config, capabilities, results) {
        generate({
            jsonDir: './reports/cucumberjs-json/json',
            reportPath: './reports/cucumberjs-json/html',
            openReportInBrowser: true,
            saveCollectedJSON: true,
            displayDuration: true,
            displayReportTime: true,
            customData: {
              title: 'Run info',
              data: [
                  {label: 'Project', value: 'Principal DTE'},
                  {label: 'Sprint', value: '53'},
                  {label: 'Environment', value: 'QA'},
                  {label: 'Execution Time', value: 'Nov 17th 2021'},
              ]
          },
          // pageFooter:<div><p>Weekend Inc</p></div>,
        }
      );
    },*/
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  //onReload: function(oldSessionId, newSessionId) {
  //}
};
