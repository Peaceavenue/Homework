import { Builder, Browser, WebDriver, WebElement } from "selenium-webdriver";
import Chrome from "selenium-webdriver/chrome";
import { path } from "chromedriver";
import * as assert from "assert";
import { BasePage } from "./BasePage";
import { CheckboxesPage } from "./CheckboxesPage";

async function viewCheckbox() {
  const service = new Chrome.ServiceBuilder(path);
  const driver: WebDriver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeService(service)
    .build();
  const basePage = new BasePage(driver);
  const PageCheckboxes = new CheckboxesPage(driver);
  await PageCheckboxes.visitPage();
  const checkbox: WebElement = await basePage.FindElement_XPath(
    '(//*[@id="checkboxes"]/input[1])'
  );
  await checkbox.click();
  const checkOn = await basePage.FindElement_XPath(
    '(//*[@id="checkboxes"]/input[2])'
  );
  assert.equal(await checkOn.isEnabled(), true);
  const exit = await basePage.closeBrowser();
  await exit;
}
viewCheckbox();
