/* global describe */
import Vue from 'vue'
require('material-design-lite/material.js')
require('material-design-lite/material.css')

require('mocha/mocha')
require('mocha/mocha.css')

import jQuery from 'jquery'

import chai from 'chai'
import chaiJquery from 'chai-jquery'

chai.use(function (chai, utils) {
  return chaiJquery(chai, utils, jQuery)
})

import utils from './utils'

if (window.initMochaPhantomJS) {
  window.initMochaPhantomJS()
}
window.mocha.setup({
  ui: 'bdd'
})
window.expect = chai.expect
chai.should()
window.onload = function () {
  (window.mochaPhantomJS || window.mocha).run()
}

Vue.config.debug = true
const app = new Vue({
  el: '#test',
  data: {
    tests: [
      'none',
      'checkbox',
      'badge',
      'button',
      'progress',
      'spinner',
      'ripple-effect',
      'icon-toggle',
      'radio',
      'slider',
      'switch',
      'textfield',
      'tooltip',
      'menu',
      'card',
      'snackbar',
      'select',
      'dialog'
    ],
    current: 0
  },
  computed: {
    currentTest () {
      return this.tests[this.current]
    },
    currentComponent: {
      set (val) {
        let i = this.tests.indexOf(val)
        if (i < 0) {
          throw new Error('Ivalid component: ' + val)
        }
        this.current = i
      },
      get () {
        return 'test-' + this.currentTest
      }
    }
  },
  methods: {
    previous () {
      if (--this.current < 0) {
        this.current = this.tests.length - 1
      }
    },
    next () {
      if (++this.current >= this.tests.length) {
        this.current = 0
      }
    }
  },
  directives: {
    attach: utils.attachDirective
  },
  components: {
    testNone: {
      template: '<p>Choose a valid component</p>'
    },
    testCheckbox: require('../components/checkbox.vue'),
    testBadge: require('../components/badge.vue'),
    testButton: require('../components/button.vue'),
    testProgress: require('../components/progress.vue'),
    testSpinner: require('../components/spinner.vue'),
    testRippleEffect: require('../components/ripple-effect.vue'),
    testIconToggle: require('../components/icon-toggle.vue'),
    testRadio: require('../components/radio.vue'),
    testSlider: require('../components/slider.vue'),
    testSwitch: require('../components/switch.vue'),
    testTextfield: require('../components/textfield.vue'),
    testTooltip: require('../components/tooltip.vue'),
    testMenu: require('../components/menu.vue'),
    testCard: require('../components/card.vue'),
    testSnackbar: require('../components/snackbar.vue'),
    testSelect: require('../components/select.vue'),
    testDialog: require('../components/dialog.vue')
  }
})

window.app = app
window.Vue = Vue
describe('Vue MDL', function () {
  require('./specs/checkbox')
  require('./specs/badge')
  require('./specs/button')
  require('./specs/progress')
  require('./specs/spinner')
  require('./specs/ripple-effect')
  require('./specs/icon-toggle')
  require('./specs/radio')
  require('./specs/slider')
  require('./specs/switch')
  require('./specs/textfield')
  require('./specs/tooltip')
  require('./specs/menu')
  require('./specs/card')
  require('./specs/snackbar')
  require('./specs/select')
  require('./specs/dialog')
  // This must be the last
  require('./specs/vue-mdl')
})
