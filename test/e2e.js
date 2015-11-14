var context = require.context('./e2e', false, /.js$/);
var path = require('path');

var tests = {};
context.keys().forEach(function(test) {
  tests[test] = context(test);
});

var e2e = {};
for (component in tests) {
  for (test in tests[component]) {
    if (test !== 'teardown' && tests[component].hasOwnProperty(test)) {
      e2e[path.basename(component) + ': ' + test] = tests[component][test];
    }
  }
}
e2e['teardown'] = function(browser) {
  browser.end();
};

module.exports = e2e;
