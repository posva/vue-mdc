'use strict';
module.exports = {
  components: {
    'mdl-checkbox': require('./toggles/checkbox.vue'),
    'mdl-switch': require('./toggles/switch.vue'),
    'mdl-icon-toggle': require('./toggles/icon-toggle.vue'),
    'mdl-radio': require('./toggles/radio.vue'),
    'mdl-progress': require('./progress.vue'),
    'mdl-button': require('./button.vue'),
    'mdl-spinner': require('./spinner.vue'),
    'mdl-slider': require('./slider.vue'),
    'mdl-textfield': require('./textfield.vue'),
  },
  directives: {
    'mdl-ripple-effect': require('coffee!./directives/ripple-effect.coffee'),
    'mdl-badge': require('coffee!./directives/badge.coffee'),
  },

  register: function(Vue, name) {
    // TODO
    Vue.component(name, {});
  },
  registerAll: function(Vue) {
    // TODO
    Vue.component('foo', {});
  }
};
