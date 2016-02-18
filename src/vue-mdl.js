import mdlBadge from './directives/badge'
import mdlCheckbox from './toggles/checkbox.vue'
import mdlButton from './button.vue'
import mdlAnchorButton from './anchor-button.vue'
import mdlProgress from './progress.vue'

const vmdl = {
  components: {
    mdlCheckbox,
    // 'mdl-switch': require('./toggles/switch.vue'),
    // 'mdl-icon-toggle': require('./toggles/icon-toggle.vue'),
    // 'mdl-radio': require('./toggles/radio.vue'),
    mdlProgress,
    mdlButton,
    mdlAnchorButton
    // 'mdl-spinner': require('./spinner.vue'),
    // 'mdl-slider': require('./slider.vue'),
    // 'mdl-textfield': require('./textfield.vue'),
    // 'mdl-tooltip': require('./tooltip.vue'),
    // 'mdl-menu': require('./menu/menu.vue'),
    // 'mdl-menu-item': require('./menu/menu-item.vue'),
    // 'mdl-card': require('./card.vue'),
  },
  directives: {
    mdlBadge
    // 'mdl-ripple-effect': require('./directives/ripple-effect.coffee'),
    // 'mdl': require('./directives/mdl.coffee'),
  },

  register: function (Vue, name) {
    let comp, func, that
    that = this
    const setComp = function (name) {
      if (name in that.components) {
        comp = that.components[name]
        func = 'component'
      } else if (name in that.directives) {
        comp = that.directives[name]
        func = 'directive'
      }
    }
    setComp(name)
    if (!comp) {
      name = 'mdl-' + name
      setComp(name)
      if (!comp) {
        throw new Error('Cannot register component ' + name + " because it doesn't exist")
      }
    }
    return Vue[func](name, comp)
  },
  registerAll: function (Vue) {
    for (let comp in this.components) {
      Vue.component(comp, this.components[comp])
    }
    for (let dir in this.directives) {
      Vue.directive(dir, this.directives[dir])
    }
  }
}

export default vmdl
export const MdlBadge = mdlBadge
export const MdlCheckbox = mdlCheckbox
export const MdlButton = mdlButton
export const MdlAnchorButton = mdlAnchorButton
export const MdlProgress = mdlProgress

