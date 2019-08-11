/**
 * just a dirty way to set jasmine reporter globally
 */

jasmine.getEnv().defaultTimeoutInterval = 60000; // in microseconds.
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000; // in microseconds.
const JasmineConsoleReporter = require('jasmine-console-reporter');

let consoleReporter = new JasmineConsoleReporter({
  colors: 1,           // (0|false)|(1|true)|2
  cleanStack: 1,       // (0|false)|(1|true)|2|3
  verbosity: 4,        // (0|false)|1|2|(3|true)|4
  listStyle: 'indent', // "flat"|"indent"
  activity: true
});

jasmine.getEnv().addReporter(consoleReporter);