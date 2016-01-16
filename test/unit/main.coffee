Vue = require 'vue'
require 'material-design-lite/material.js'
require 'material-design-lite/material.css'

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
      'ripple-effect'
      'icon-toggle'
      'radio'
      'slider'
      'switch'
      'textfield'
      'tooltip'
      'menu'
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
    testRippleEffect: require '../components/ripple-effect.vue'
    testIconToggle: require '../components/icon-toggle.vue'
    testRadio: require '../components/radio.vue'
    testSlider: require '../components/slider.vue'
    testSwitch: require '../components/switch.vue'
    testTextfield: require '../components/textfield.vue'
    testTooltip: require '../components/tooltip.vue'
    testMenu: require '../components/menu.vue'

window.app = app
window.Vue = Vue
describe 'Vue MDL', ->
  require './specs/checkbox.coffee'
  require './specs/badge.coffee'
  require './specs/button.coffee'
  require './specs/progress.coffee'
  require './specs/spinner.coffee'
  require './specs/ripple-effect.coffee'
  require './specs/icon-toggle.coffee'
  require './specs/radio.coffee'
  require './specs/slider.coffee'
  require './specs/switch.coffee'
  require './specs/textfield.coffee'
  require './specs/tooltip.coffee'
  require './specs/menu.coffee'
  # This must be the last
  require './specs/vue-mdl.coffee'
