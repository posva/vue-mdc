import mdlBadge from './directives/badge'
import mdl from './directives/mdl'
import mdlRippleEffect from './directives/ripple-effect'

import mdlCheckbox from './toggles/checkbox.vue'
import mdlRadio from './toggles/radio.vue'
import mdlButton from './button.vue'
import mdlAnchorButton from './anchor-button.vue'
import mdlProgress from './progress.vue'
import mdlSpinner from './spinner.vue'
import mdlIconToggle from './toggles/icon-toggle.vue'
import mdlSlider from './slider.vue'
import mdlSwitch from './toggles/switch.vue'
import mdlTextfield from './textfield.vue'
import mdlTooltip from './tooltip.vue'
import mdlMenu from './menu/menu.vue'
import mdlMenuItem from './menu/menu-item.vue'
import mdlCard from './card.vue'

const vmdl = {
  components: {
    mdlCheckbox,
    mdlSwitch,
    mdlIconToggle,
    mdlRadio,
    mdlProgress,
    mdlButton,
    mdlAnchorButton,
    mdlSpinner,
    mdlSlider,
    mdlTextfield,
    mdlTooltip,
    mdlMenu,
    mdlMenuItem,
    mdlCard
  },
  directives: {
    mdl,
    mdlBadge,
    mdlRippleEffect
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
      name = 'mdl' + name[0].toUpperCase() + name.substr(1)
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
export const Mdl = mdl
export const MdlBadge = mdlBadge
export const MdlRippleEffect = mdlRippleEffect
export const MdlCheckbox = mdlCheckbox
export const MdlSwitch = mdlSwitch
export const MdlRadio = mdlRadio
export const MdlIconToggle = mdlIconToggle
export const MdlButton = mdlButton
export const MdlAnchorButton = mdlAnchorButton
export const MdlProgress = mdlProgress
export const MdlSpinner = mdlSpinner
export const MdlSlider = mdlSlider
export const MdlTextfield = mdlTextfield
export const MdlTooltip = mdlTooltip
export const MdlMenu = mdlMenu
export const MdlMenuItem = mdlMenuItem
export const MdlCard = mdlCard
