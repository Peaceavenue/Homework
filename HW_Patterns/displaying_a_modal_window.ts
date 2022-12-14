import {
  Builder,
  Browser,
  WebDriver,
  WebElement,
  until,
} from "selenium-webdriver";
import Chrome from "selenium-webdriver/chrome";
import { path } from "chromedriver";
import * as assert from "assert";
import { BasePage } from "./BasePage";
import { ModalWindowPage } from "./ModalWindowPage";

async function visitAuthorizationPage() {
  const service = new Chrome.ServiceBuilder(path);
  const driver: WebDriver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeService(service)
    .build();
  const basePage = new BasePage(driver);
  const modalWindow = new ModalWindowPage(driver);
  await modalWindow.visitPage();
  const link: WebElement = await basePage.FindElement_XPath(
    '(//*[@id="restart-ad"])'
  );
  await link.click();
  const modal = await basePage.FindElement_className("modal");
  await driver.wait(until.elementIsVisible(modal), 4000);
  const textModal = await basePage.FindElement_XPath(
    '(//*[contains(text(),"It\'s")])'
  );
  assert.equal(
    await textModal.getText(),
    "It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker)."
  );

  const text = await basePage.FindElement_XPath('(//*[contains(text(),"Cl")])');
  await text.click();
  assert.equal(await modal.isDisplayed(), false);

  const exit = await basePage.closeBrowser();
  await exit;
}
visitAuthorizationPage();
