import { expect, test } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";
import { faker } from "@faker-js/faker";
import { argosScreenshot } from "@argos-ci/playwright";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("navigate to form page @smoke @regression", async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutsPage();
  await argosScreenshot(page, "form layouts page");
  await pm.navigateTo().datepickerPage();
  await argosScreenshot(page, "datepicker page");
  await pm.navigateTo().smartTablePage();
  await pm.navigateTo().toastrPage();
  await pm.navigateTo().tooltipPage();
});

// test("parametrized methods @smoke", async ({ page }) => {
//   const pm = new PageManager(page);
//   const randomFullName = faker.person.fullName();
//   const randomEmail = `${randomFullName.replace(" ", "")}${faker.number.int(1000)}@test.com`;

//   await pm.navigateTo().formLayoutsPage();
//   await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, "Option 1");
//   // await page.screenshot({ path: "screenshots/formLayoytsPage.png" });
//   // const buffer = await page.screenshot();
//   // console.log(buffer.toString("base64"));
//   await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false);
//   // await page.locator("nb-card", { hasText: "Inline form" }).screenshot({ path: "screenshots/inlineForm.png" });
//   await pm.navigateTo().datepickerPage();
//   await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(2);
//   await pm.onDatePickerPage().selectDatePickerWithRangeFromToday(4, 8);
// });
