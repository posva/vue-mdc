Vue = require 'vue'

Vue.config.debug = true
app = new Vue
  el: '#test'
  data:
    tests: [
      'none'
      'checkbox'
      'badge'
      'button'
      'progress'
      'spinner'
    ]
    current: 0
  computed:
    currentTest: -> @tests[@current]
    currentComponent:
      set: (val) ->
        i = @tests.indexOf val
        if i < 0
          throw new Error 'Ivalid component: ' + val
        @current = i
      get: -> 'test-' + @currentTest
  methods:
    previous: ->
      if --@current < 0
        @current = @tests.length - 1
    next: ->
      if ++@current >= @tests.length
        @current = 0
  directives:
    attach:
      bind: -> window.vm = @vm.$children[0]
  components:
    testNone: template: '<p>Choose a valid component</p>'
    testCheckbox: require '../components/checkbox.vue'
    testBadge: require '../components/badge.vue'
    testButton: require '../components/button.vue'
    testProgress: require '../components/progress.vue'
    testSpinner: require '../components/spinner.vue'

window.app = app
describe 'Vue MDL', ->
  require './specs/checkbox.coffee'
  require './specs/badge.coffee'
  require './specs/button.coffee'
  require './specs/progress.coffee'
  require './specs/spinner.coffee'
