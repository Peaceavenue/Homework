import { BasePage } from "./BasePage";
import { WebDriver } from "selenium-webdriver";

export class LoginPage extends BasePage {
  private readonly url: string;

  constructor(protected driver: WebDriver) {
    super(driver);

    this.url = "https://the-internet.herokuapp.com/login";
  }

  async visitPage() {
    await this.driver.manage().window().maximize();
    await this.driver.manage().deleteAllCookies();
    return await this.driver.get(this.url);
  }
  async getUrl() {
    return this.url;
  }
}
