import { BasePage } from "./BasePage";
import { WebDriver } from "selenium-webdriver";

export class CheckboxesPage extends BasePage {
  private readonly url: string;

  constructor(protected driver: WebDriver) {
    super(driver);

    this.url = "https://the-internet.herokuapp.com/checkboxes";
  }
  async visitPage() {
    await this.driver.manage().window().maximize();
    await this.driver.manage().deleteAllCookies();
    return await this.driver.get(this.url);
  }
}
