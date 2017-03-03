import ripple from './ripple.js'
import MdcCard from './Card.vue'
import MdcButton from './Button.vue'

// import './style.scss'

function plugin (Vue) {
  // Vue.component('mdc-ripple', MdcRipple)
  Vue.component('MdcCard', MdcCard)
  Vue.component('MdcButton', MdcButton)
  Vue.directive('ripple', ripple)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
// Export all components too
const version = 2
export {
  MdcButton,
  version,
  ripple,
}
