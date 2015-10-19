module.exports = {
  mdlCheckbox: require('./checkbox.vue'),
  mdlSwitch: require('./switch.vue'),
  mdlIconToggle: require('./icon-toggle.vue'),
  mdlRadio: require('./radio.vue'),
  mdlProgress: require('./progress.vue'),

  register: function(Vue, name) {
    // TODO
    Vue.component(name, {});
  },
  registerAll: function(Vue) {
    // TODO
  }
};
