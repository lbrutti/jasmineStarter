const { Builder, By, Capabilities, until, Key } = require('selenium-webdriver');

describe('A stub for selenium based tests', function () {
  const APP_URL = "https://www.google.com/?hl=it";
  let driver;
  // go to home page before starting tests
  beforeEach(function (done) {
    let chrome = require("selenium-webdriver/chrome");
    let options = new chrome.Options();
    let caps = Capabilities.chrome();
    options.addArguments("--no-sandbox");
    options.addArguments("--headless");
    options.addArguments("--disable-gpu");
    // options.addArguments("start-maximized");
    caps.merge(options);
    driver = new Builder().withCapabilities(caps).build();
    driver.get(APP_URL).then(done);
  });
  // Close the website after each test is run (so that it is opened fresh each time)
  afterEach(function (done) {
    driver.quit().then(done);
  });

  it("Should show Selenium related sites - without async/await", (done) => {
    const EXPECTED_TITLE = "selenium-webdriver npm - Cerca con Google";
    driver.findElement(By.name("q"))
      .sendKeys("selenium-webdriver npm", Key.RETURN)
      .then(_ => driver.wait(until.elementLocated(By.id('rcnt')), 10000))
      .then(_ => driver.getTitle())
      .then(title => {
        expect(title).toBe(EXPECTED_TITLE);
        done();
      })
      .catch(err => fail(err));
  });

  it("Should show Selenium related sites - with async/await", async (done) => {
    const EXPECTED_TITLE = "selenium-webdriver npm - Cerca con Google";
    try {
      await driver.findElement(By.name("q"))
        .sendKeys("selenium-webdriver npm", Key.RETURN);
      await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
      let title = await driver.getTitle();
      expect(title).toBe(EXPECTED_TITLE);
      done();
    } catch (error) {
      fail(error);
    }
  });
});
