module.exports = {
  mdlCheckbox: require('./toggles/checkbox.vue'),
  mdlSwitch: require('./toggles/switch.vue'),
  mdlIconToggle: require('./toggles/icon-toggle.vue'),
  mdlRadio: require('./toggles/radio.vue'),
  mdlProgress: require('./progress.vue'),

  register: function(Vue, name) {
    // TODO
    Vue.component(name, {});
  },
  registerAll: function(Vue) {
    // TODO
  }
};
