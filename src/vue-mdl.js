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
    'mdl-tooltip': require('./tooltip.vue'),
    'mdl-menu': require('./menu/menu.vue'),
    'mdl-menu-item': require('./menu/menu-item.vue'),
  },
  directives: {
    'mdl-ripple-effect': require('./directives/ripple-effect.coffee'),
    'mdl-badge': require('./directives/badge.coffee'),
    'mdl': require('./directives/mdl.coffee'),
  },

  register: function(Vue, name) {
    var comp, func, that;
    that = this;
    var setComp = function(name) {
      if (name in that.components) {
        comp = that.components[name];
        func = 'component';
      } else if (name in that.directives) {
        comp = that.directives[name];
        func = 'directive';
      }
    };
    setComp(name);
    if (!comp) {
      name = 'mdl-' + name;
      setComp(name);
      if (!comp) {
        throw new Error('Cannot register component ' + name + " because it doesn't exist");
      }
    }
    return Vue[func](name, comp);
  },
  registerAll: function(Vue) {
    for (var comp in this.components) {
      Vue.component(comp, this.components[comp]);
    }
    for (var dir in this.directives) {
      var a = Vue.directive(dir, this.directives[dir]);
    }
  }
};
