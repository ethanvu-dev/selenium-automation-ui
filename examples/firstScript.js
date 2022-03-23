// Load chromedriver from project dir
const path = require("path")
const CHROME_DRIVER_PATH=`${path.dirname(__dirname).split(path.basename).pop()}/chromedriver`;
console.log(CHROME_DRIVER_PATH);

// Instance selenium-webdriver
const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder(CHROME_DRIVER_PATH);

const assert = require('assert');


(async function firstScript() {

  const searchString = 'Selenium';

  try {
    let driver = await new Builder().forBrowser('chrome').setChromeService(service).build();

    await driver.get('https://www.google.com');
    await driver.getTitle();

    driver.manage().setTimeouts({implicit: 1000})
    driver.manage().window().maximize();

    let searchBox = await driver.findElement(By.name('q'));
    let searchButton = await driver.findElement(By.name('btnK'));

    await searchBox.sendKeys(searchString);
    await searchButton.click();

    const text = await driver.findElement(By.name('q')).getAttribute("value");

    assert.equal(searchString, await driver.findElement(By.name('q')).getAttribute("value")) 

    await driver.quit();

  } catch (error) {
    console.log(error)
  }
})();