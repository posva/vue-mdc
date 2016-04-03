import MdlBadge from './directives/badge'
import Mdl from './directives/mdl'
import MdlRippleEffect from './directives/ripple-effect'

import MdlCheckbox from './toggles/checkbox.vue'
import MdlRadio from './toggles/radio.vue'
import MdlButton from './button.vue'
import MdlAnchorButton from './anchor-button.vue'
import MdlProgress from './progress.vue'
import MdlSpinner from './spinner.vue'
import MdlIconToggle from './toggles/icon-toggle.vue'
import MdlSlider from './slider.vue'
import MdlSwitch from './toggles/switch.vue'
import MdlTextfield from './textfield.vue'
import MdlTooltip from './tooltip.vue'
import MdlMenu from './menu/menu.vue'
import MdlMenuItem from './menu/menu-item.vue'
import MdlCard from './card.vue'
import MdlSnackbar from './snackbar.vue'
import MdlSelect from './select.vue'
import MdlDialog from './dialog.vue'

export const components = {
  MdlCheckbox,
  MdlSwitch,
  MdlIconToggle,
  MdlRadio,
  MdlProgress,
  MdlButton,
  MdlAnchorButton,
  MdlSpinner,
  MdlSlider,
  MdlTextfield,
  MdlTooltip,
  MdlMenu,
  MdlMenuItem,
  MdlCard,
  MdlSnackbar,
  MdlSelect,
  MdlDialog
}

export const directives = {
  Mdl,
  MdlBadge,
  MdlRippleEffect
}

export default {
  install (Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name])
    })
    Object.keys(directives).forEach((name) => {
      Vue.directive(name, directives[name])
    })
  }
}
export {
  // directives
  Mdl,
  MdlBadge,
  MdlRippleEffect,
  // components
  MdlCheckbox,
  MdlSwitch,
  MdlRadio,
  MdlIconToggle,
  MdlButton,
  MdlAnchorButton,
  MdlProgress,
  MdlSpinner,
  MdlSlider,
  MdlTextfield,
  MdlTooltip,
  MdlMenu,
  MdlMenuItem,
  MdlCard,
  MdlSnackbar,
  MdlSelect,
  MdlDialog
}
