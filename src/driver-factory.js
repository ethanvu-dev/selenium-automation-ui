import { Builder } from "selenium-webdriver";
import { Browser, PageLoadStrategy } from "selenium-webdriver/lib/capabilities";
import chrome from "selenium-webdriver/chrome";
import "chromedriver";

const getChromeOptions = () => {
  let options = new chrome.Options();
  options.headless();
  options.addArguments([
    "--ignore-certificate-errors",
    "--disable-extensions",
    "--disable-popup-blocking",
    "enable-automation",
  ]);
  options.setPageLoadStrategy(PageLoadStrategy.NORMAL);
  options.setAcceptInsecureCerts(true);
  return options;
};

const getChromeDriver = () => {
  return new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(getChromeOptions())
    .build();
};

export const driver = getChromeDriver();
