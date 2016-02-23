let context = require.context('./e2e', false, /.js$/)
import path from 'path'

let tests = {}
context.keys().forEach(test => tests[test] = context(test))

let e2e = {}
for (let component in tests) {
  for (let test in tests[component]) {
    if (test !== 'teardown' && tests[component].hasOwnProperty(test)) {
      e2e[path.basename(component) + ': ' + test] = tests[component][test]
    }
  }
}
e2e['teardown'] = function (browser) {
  browser.end()
}

export default e2e
