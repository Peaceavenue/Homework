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
import { LoginPage } from "./LoginPage";

async function visitLoginPage() {
  const service = new Chrome.ServiceBuilder(path);
  const driver: WebDriver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeService(service)
    .build();
  const basePage = new BasePage(driver);
  const PageLogin = new LoginPage(driver);
  await PageLogin.visitPage();
  const login: WebElement = await basePage.FindElement_XPath(
    '(//*[@class="large-6 small-12 columns"]/*[@name="username"])'
  );
  await login.sendKeys("Tina");
  const password: WebElement = await basePage.FindElement_CSS(
    "[name='password']"
  );
  await password.sendKeys("Turner");
  const button: WebElement = await basePage.FindElement_className("radius");
  await button.click();
  const flash: WebElement = await basePage.FindElement_XPath(
    '(//*[contains(text(), "Your")])'
  );
  await driver.wait(until.elementIsVisible(flash), 2000);
  assert.equal(await flash.isDisplayed(), true);
  const flashMessage = await basePage.FindElement_XPath(
    '(//*[contains(text(), "Your")])'
  );
  assert.equal(await flashMessage.getText(), "Your username is invalid!\n×");
  const exit = await basePage.closeBrowser();
  await exit;
  console.log(flashMessage);
}

visitLoginPage();
