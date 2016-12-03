import Mdl from './directives/mdl'

import MdlCheckbox from './toggles/checkbox.vue'
import MdlRadio from './toggles/radio.vue'
import MdlBadge from './badge.js'
import MdlButton from './button.vue'
import MdlAnchorButton from './anchor-button.vue'
import MdlProgress from './progress.vue'
import MdlSpinner from './spinner.vue'
import MdlIconToggle from './toggles/icon-toggle.vue'
import MdlLayout from './layout/layout.vue'
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
import MdlTabs from './tabs/tabs.vue'
import MdlTab from './tabs/tab.vue'
import MdlChip from './chip.vue'
import MdlHeaderRow from './layout/header-row.vue'
import MdlDrawer from './layout/drawer.vue'
import MdlContent from './layout/content.vue'
import MdlLayoutTab from './layout/layout-tab.vue'

export const components = {
  MdlCheckbox,
  MdlSwitch,
  MdlIconToggle,
  MdlRadio,
  MdlProgress,
  MdlButton,
  MdlAnchorButton,
  MdlLayout,
  MdlSpinner,
  MdlSlider,
  MdlTextfield,
  MdlTooltip,
  MdlMenu,
  MdlMenuItem,
  MdlCard,
  MdlSnackbar,
  MdlSelect,
  MdlDialog,
  MdlTabs,
  MdlTab,
  MdlBadge,
  MdlChip,
  MdlHeaderRow,
  MdlDrawer,
  MdlContent,
  MdlLayoutTab
}

export const directives = {
  Mdl
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
  // components
  MdlCheckbox,
  MdlBadge,
  MdlSwitch,
  MdlRadio,
  MdlIconToggle,
  MdlButton,
  MdlAnchorButton,
  MdlLayout,
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
  MdlDialog,
  MdlTabs,
  MdlTab,
  MdlChip,
  MdlHeaderRow,
  MdlDrawer,
  MdlContent,
  MdlLayoutTab
}
