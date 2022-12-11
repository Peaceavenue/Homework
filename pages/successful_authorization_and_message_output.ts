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

async function visitAuthorizationPage() {
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
  await login.sendKeys("tomsmith");
  const password: WebElement = await basePage.FindElement_CSS(
    "[name='password']"
  );
  await password.sendKeys("SuperSecretPassword!");
  const button: WebElement = await basePage.FindElement_className("radius");
  await button.click();
  const url = await driver.getCurrentUrl();
  assert.equal(url, "https://the-internet.herokuapp.com/secure");

  const flash: WebElement = await basePage.FindElement_XPath(
    '(//*[@id="flash"])'
  );
  await driver.wait(until.elementIsVisible(flash), 2000);
  assert.equal(await flash.isDisplayed(), true);
  const flashMessage = await basePage.FindElement_XPath('(//*[@id="flash"])');
  assert.equal(
    await flashMessage.getText(),
    "You logged into a secure area!\n×"
  );
  const buttonLogin: WebElement = await basePage.FindElement_className(
    "button secondary radius"
  );
  await buttonLogin.click();
  const formURL = await driver.getCurrentUrl();
  assert.equal(formURL, PageLogin.getUrl());
  const exit = await basePage.closeBrowser();
  await exit;
}

visitAuthorizationPage();
