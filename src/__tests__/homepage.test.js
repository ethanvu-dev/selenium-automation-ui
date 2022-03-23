import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { driver } from "../driver-factory";
import HomePage from "../__pages__/home-page";

let homePage = new HomePage();

const SITE_URL = 'https://www.ethanvu.dev/';

beforeAll(async () => {
  await driver.navigate().to(SITE_URL);
});

afterAll(async () => {
  await driver.quit();
});

describe("Selenium wiki page", () => {
  test("should be opened as successfully", async () => {
    expect(await homePage.getHeadingText()).toEqual("Ethan Vu");
  });
  test("contains the correct repository URL", async () => {
    expect(await homePage.getRepositoryUrl()).toEqual("https://github.com/ethanvu-dev");
  });
  test("should be input search field", async () => {
    await homePage.doSearch("Backend Engineer");
    expect(await homePage.getSearchValue()).toEqual("Backend Engineer");
  });
});
