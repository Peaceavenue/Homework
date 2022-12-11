import { WebDriver, By } from "selenium-webdriver";

export class BasePage {
  constructor(protected driver: WebDriver) {}

  async FindElement_XPath(str: string) {
    return this.driver.findElement(By.xpath(str));
  }

  async FindElement_CSS(str: string) {
    return this.driver.findElement(By.css(str));
  }

  async FindElement_className(str: string) {
    return this.driver.findElement(By.className(str));
  }

  async closeBrowser() {
    return this.driver.quit();
  }
}
