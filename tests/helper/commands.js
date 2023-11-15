export const pause = async () => {
  await browser.pause(3000);
};

export const frameHome = async () => {
  await browser.pause(10000);
  await browser.switchToFrame(0);
  await browser.pause(5000);
};

export const frameForm = async () => {
  await browser.switchToParentFrame();
  await browser.pause(10000);
  await browser.switchToFrame(0);
  await browser.pause(5000);
};

export const selectRadio = async (form, value) => {
  for (const radio of await form) {
    const element = await radio.getValue();
    if (element === value) {
      await radio.click();
      break;
    }
  }
};

export const setText = async (form, text) => {
  await (await form).setValue(text);
};

export const setDropdown = async (form, value) => {
  for (const [index, span] of await form.entries()) {
    const element = await span.getText();
    if (value == element.toString()) {
      await click(form[index]);
      break;
    }
  }
  await pause();
};

export const setDropdownCheckbox = async (form, checkbox, value) => {
  for (const [index, span] of await form.entries()) {
    const element = await span.getText();
    if (value.includes(String(element))) {
      await click(checkbox[index]);
    }
  }
  await browser.keys("Escape");
  await pause();
};

export const importCsv = async (
  buttonImport,
  filePath,
  fieldUploadFile,
  btnKirim
) => {
  await click(buttonImport);
  await pause();
  // const remoteFilePath = await browser.uploadFile(filePath);
  await browser.execute(function () {
    document.querySelector('input[type="file"]').style.display = "block";
  });
  await fieldUploadFile.waitForDisplayed();
  await fieldUploadFile.setValue(filePath);
  await browser.pause(7000);
  await click(btnKirim);
  await pause();
};

export const importImage = async (filePath, fieldUploadFile) => {
  await browser.execute(function () {
    document.querySelector('input[type="file"]').style.display = "block";
  });
  await fieldUploadFile.setValue(filePath);
  await pause();
};

export const click = async (button) => {
  await (await button).click();
};

export const setStartEndDate = async (
  formStartDate,
  formEndDate,
  popUpCalendar
) => {
  await formStartDate.click();
  await pause();
  await popUpCalendar.$$("tr")[2].$$("td")[5].$("div").click(); //baris x kolom, contoh: 1,4: 6 Januari 2022
  await pause();

  await formEndDate.click();
  await pause();
  await popUpCalendar.$$("tr")[4].$$("td")[4].$("div").click(); //contoh: 4,6: 29 Januari 2022
  await pause();
};

export const setStartEndDateTime = async (
  formStartDate,
  formEndDate,
  popUpCalendar,
  formStartTime,
  formEndTime
) => {
  await formStartDate.click();
  await pause();
  await popUpCalendar.$$("tr")[3].$$("td")[1].$("div").click(); //baris x kolom, contoh: 1,4: 6 Januari 2022
  await pause();

  await formStartTime.click();
  await pause();
  await $$(
    '[class="clock-face__number clock-face__number--outer ng-star-inserted"]'
  )[0]
    .$("span")
    .click(); // maksud dari [0] adalah jam = 1. Ini untuk jam 1-12 pagi
  await pause();
  await $$('[class="timepicker-button"]')[1].click();
  await pause();

  await formEndDate.click();
  await pause();
  await popUpCalendar.$$("tr")[3].$$("td")[2].$("div").click(); //contoh: 4,6: 29 Januari 2022
  await pause();

  await formEndTime.click();
  await pause();
  await $$(
    '[class="clock-face__number clock-face__number--inner ng-star-inserted"]'
  )[10]
    .$("span")
    .click(); // maksud dari [10] adalah jam = 11. Ini Untuk jam 1-12 malam
  await pause();
  await $$('[class="timepicker-button"]')[1].click();
  await pause();
};

export const setStartEndDateTP = async (
  formStartDate,
  formEndDate,
  popUpCalendar
) => {
  await formStartDate.click();
  await pause();
  await popUpCalendar.$$("tr")[3].$$("td")[0].$("div").click(); //baris x kolom, contoh: 1,4: 6 Januari 2022
  await pause();

  await formEndDate.click();
  await pause();
  await popUpCalendar.$$("tr")[3].$$("td")[1].$("div").click(); //contoh: 4,6: 29 Januari 2022
  await pause();
};

export const setStartDate = async (formDate, popUpCalendar) => {
  await formDate.click();
  await pause();
  await popUpCalendar.$$("tr")[3].$$("td")[2].$("div").click(); //contoh: 4,6: 29 Januari 2022
  await pause();
};

export const setEndDate = async (formDate, popUpCalendar) => {
  await formDate.click();
  await pause();
  await popUpCalendar.$$("tr")[3].$$("td")[1].$("div").click(); //contoh: 4,6: 29 Januari 2022
  await pause();
};
