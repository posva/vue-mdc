var Vue = require('vue');
Vue.config.debug = true;
var test = new Vue({
  el: '#test',
  data: {
    tests: [
      'none',
      'checkbox',
      'button',
    ],
    current: 0,
  },
  computed: {
    currentTest: function() {
      return this.tests[this.current];
    },
    currentComponent: {
      set: function(val) {
        var i = this.tests.indexOf(val);
        if (i < 0) {
          throw new Error('Ivalid component: ' + val);
        }
        this.current = i;
      },
      get: function() {
        this.current;
        this.tests;
        return 'test-' + this.currentTest;
      }
    }
  },
  methods: {
    previous: function() {
      if (--this.current < 0)
        this.current = this.tests.length - 1;
    },
    next: function() {
      if (++this.current >= this.tests.length)
        this.current = 0;
    }
  },
  components: {
    testNone: {
      template: '<p>Choose a valid component</p>'
    },
    testCheckbox: require('../test/components/checkbox.vue'),
    testButton: require('../test/components/button.vue'),
  }
});

window.Vue = Vue;
document.tester = test;

require('./tests/checkbox.js');
