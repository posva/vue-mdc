Vue = require('vue')
Vue.config.debug = true
test = new Vue(
  el: '#test'
  data:
    tests: [
      'none'
      'checkbox'
      'button'
    ]
    current: 0
  computed:
    currentTest: ->
      @tests[@current]
    currentComponent:
      set: (val) ->
        i = @tests.indexOf(val)
        if i < 0
          throw new Error('Ivalid component: ' + val)
        @current = i
        return
      get: ->
        @current
        @tests
        'test-' + @currentTest
  methods:
    previous: ->
      if --@current < 0
        @current = @tests.length - 1
      return
    next: ->
      if ++@current >= @tests.length
        @current = 0
      return
  components:
    testNone: template: '<p>Choose a valid component</p>'
    testCheckbox: require('../test/components/checkbox.vue')
    testButton: require('../test/components/button.vue'))
window.Vue = Vue
document.tester = test
require './tests/checkbox.js'
require './tests/lol.coffee'
