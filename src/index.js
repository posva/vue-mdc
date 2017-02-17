import MdcRipple from './Ripple.vue'
import MdcCard from './Card.vue'
import MdcButton from './Button.vue'

function plugin (Vue) {
  Vue.component('mdc-ripple', MdcRipple)
  Vue.component('mdc-card', MdcCard)
  Vue.component('mdc-button', MdcButton)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
// Export all components too
const version = 2
export {
  version,
  MdcRipple,
}
