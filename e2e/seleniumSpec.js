const { Builder, By, Capabilities } = require('selenium-webdriver');

jasmine.getEnv().defaultTimeoutInterval = 10000; // in microseconds.
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000; // in microseconds.
const JasmineConsoleReporter = require('jasmine-console-reporter');

let consoleReporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false
});

jasmine.getEnv().addReporter(consoleReporter);
describe('Home page user journey', function () {
  const APP_URL = "http://localhost:8100";
  let driver;
  // go to home page before starting tests
  beforeEach(function (done) {
    driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    driver.get(APP_URL).then(done);
  });
  // Close the website after each test is run (so that it is opened fresh each time)
  afterEach(function (done) {
    driver.quit().then(done);
  });

  it("Should have a link to Ionic Framework documentation page", function (done) {
    const DOC_PAGE = "http://ionicframework.com/docs/v3";
    driver.findElement(By.linkText("docs"))
      .then(link => link.getAttribute("href"))
      .then(url => {
        expect(url).toBe(DOC_PAGE);
        done();
      })
      .catch(err => fail(e));
  });
});
