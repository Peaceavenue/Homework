import {
  Builder,
  Browser,
  WebDriver,
  By,
  WebElement,
  until,
} from "selenium-webdriver";
import Chrome from "selenium-webdriver/chrome";

import { path } from "chromedriver";
import * as assert from "assert";

async function visitGoogle() {
  const service = new Chrome.ServiceBuilder(path);
  const driver: WebDriver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeService(service)
    .build();
  await driver.manage().deleteAllCookies();
  await driver.manage().window().maximize();
  await driver.get("https://the-internet.herokuapp.com/login");
  const login = await driver.findElement(
    By.xpath('(//*[@class="large-6 small-12 columns"]/*[@name="username"])')
  );
  await login.sendKeys("Елизавета");
  const pass = await driver.findElement(By.css("[name='password']"));
  await pass.sendKeys("Захарова");
  await driver.findElement(By.className("radius")).click();
  const flash = await driver.findElement(
    By.xpath('(//*[contains(text(), "Your")])')
  );
  await driver.wait(until.elementIsVisible(flash), 2000);
  const elementStatus3 = await flash.isDisplayed();
  assert.equal(await flash.isDisplayed(), true);
  const flashMessage = await driver
    .findElement(By.xpath('(//*[contains(text(), "Your")])'))
    .getText();
  assert.equal(flashMessage, "Your username is invalid!\n×");

  await driver.quit();
  console.log(flashMessage);
  console.log(
    "An error message has been printed and contains the correct error message"
  );
}

visitGoogle();

async function visitGoogle1() {
  const service = new Chrome.ServiceBuilder(path);
  const driver: WebDriver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeService(service)
    .build();
  await driver.manage().deleteAllCookies();
  await driver.manage().window().maximize();
  await driver.get("https://the-internet.herokuapp.com/checkboxes");
  const check = await driver.findElement(
    By.xpath('(//*[@id="checkboxes"]/input[2])')
  );
  const elementStatus = await check.isEnabled();
  assert.equal(await elementStatus, true);

  await driver.quit();
  console.log("When you go to the page, the checkbox is active");
}

visitGoogle1();

async function visitGoogle2() {
  const service = new Chrome.ServiceBuilder(path);
  const driver: WebDriver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeService(service)
    .build();
  await driver.manage().deleteAllCookies();
  await driver.manage().window().maximize();
  await driver.get("https://the-internet.herokuapp.com/checkboxes");
  await driver
    .findElement(By.xpath('(//*[@id="checkboxes"]/input[1])'))
    .click();
  const checkOn = await driver.findElement(
    By.xpath('(//*[@id="checkboxes"]/input[1])')
  );
  await driver.wait(until.elementIsEnabled(checkOn), 2000);
  const status = await checkOn.isEnabled();
  assert.equal(await checkOn.isEnabled(), true);

  await driver.quit();
  console.log("Clicking on a checkbox makes it active");
}

visitGoogle2();

async function visitGoogle3() {
  const service = new Chrome.ServiceBuilder(path);
  const driver: WebDriver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeService(service)
    .build();
  await driver.manage().deleteAllCookies();
  await driver.manage().window().maximize();
  await driver.get("https://the-internet.herokuapp.com/login");
  const log = await driver.findElement(
    By.xpath('(//*[@class="large-6 small-12 columns"]/*[@name="username"])')
  );
  await log.sendKeys("tomsmith");
  const password = await driver.findElement(By.css("[name='password']"));
  await password.sendKeys("SuperSecretPassword!");
  await driver.findElement(By.className("radius")).click();
  const URL = await driver.getCurrentUrl();
  assert.equal(await URL, "https://the-internet.herokuapp.com/secure");
  const exp = await driver.findElement(By.xpath('(//*[@id="flash"])'));
  await driver.wait(until.elementIsEnabled(exp), 2000);
  const flashMessage = await driver
    .findElement(By.xpath('(//*[@id="flash"])'))
    .getText();
  assert.equal(flashMessage, "You logged into a secure area!\n×");
  await driver.findElement(By.className("button secondary radius")).click();
  const formURL = await driver.getCurrentUrl();
  assert.equal(await formURL, "https://the-internet.herokuapp.com/login");

  await driver.quit();
  console.log(flashMessage);
  console.log(
    "Successful authorization and transition to the form page upon deauthorization"
  );
}

visitGoogle3();

async function visitGoogle4() {
  const service = new Chrome.ServiceBuilder(path);
  const driver: WebDriver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeService(service)
    .build();
  await driver.manage().deleteAllCookies();
  await driver.manage().window().maximize();
  await driver.get("https://the-internet.herokuapp.com/entry_ad");
  await driver.findElement(By.xpath('(//*[@id="restart-ad"])')).click();
  const modal = await driver.findElement(By.className("modal"));
  await driver.wait(until.elementIsVisible(modal), 4000);
  const textModal = await driver
    .findElement(By.xpath('(//*[contains(text(),"It\'s")])'))
    .getText();
  await driver.findElement(By.xpath('(//*[contains(text(),"Cl")])')).click();
  assert.equal(await modal.isDisplayed(), false);

  await driver.quit();
  console.log(textModal);
  console.log(
    "\n" +
      "Clicking a button displays a modal window, clicking a button in a modal window closes the modal window"
  );
}

visitGoogle4();
