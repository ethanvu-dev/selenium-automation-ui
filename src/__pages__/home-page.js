import { By } from "selenium-webdriver";
import { findElementBy } from "../utils";

class HomePage {
  get searchInputLocator() {
    return By.css("#searchInput");
  }

  // get searchButtonLocator() {
  //   return By.xpath(
  //     "//button[@class='pure-button pure-button-primary-progressive']"
  //   );
  // }

  get headingTextLocator() {
    return By.css(".site-brand h1");
  }

  get repositoryUrlLocator() {
    return By.css(".social-links a.github");
  }

  doSearch(item) {
    return findElementBy(this.searchInputLocator).sendKeys(item);
  }

  getSearchValue() {
    return findElementBy(this.searchInputLocator).getAttribute("value");
  }

  // searchButton() {
  //   return findElementBy(this.searchButtonLocator).click();
  // }

  getHeadingText() {
    return findElementBy(this.headingTextLocator).getText();
  }

  getRepositoryUrl() {
    return findElementBy(this.repositoryUrlLocator).getAttribute("href");
  }
}

export default HomePage;
