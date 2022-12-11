import { BasePage } from "./BasePage";
import { WebDriver } from "selenium-webdriver";

export class ModalWindowPage extends BasePage {
  private readonly url: string;

  constructor(protected driver: WebDriver) {
    super(driver);

    this.url = "https://the-internet.herokuapp.com/entry_ad";
  }
  async visitPage() {
    await this.driver.manage().window().maximize();
    await this.driver.manage().deleteAllCookies();
    return await this.driver.get(this.url);
  }
}
