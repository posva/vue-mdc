import MdcCard from './Card/Card.vue'
import MdcButton from './Button.vue'
const ripple = typeof window === 'undefined' ? null : require('./ripple.js')

// import './style.scss'

function plugin (Vue) {
  // Vue.component('mdc-ripple', MdcRipple)
  Vue.component('MdcCard', MdcCard)
  Vue.component('MdcButton', MdcButton)
  if (ripple) Vue.directive('ripple', ripple)
}

// Install by default if using the script tag
// istanbul ignore if
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
// Export all components too
const version = 2
export {
  MdcButton,
  MdcCard,
  version,
  ripple,
}
