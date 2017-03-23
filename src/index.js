import MdcCard from './Card/Card.vue'
import MdcButton from './Button.vue'
import ripple from './ripple.js'

// import './style.scss'

function plugin (Vue) {
  // Vue.component('mdc-ripple', MdcRipple)
  Vue.component('MdcCard', MdcCard)
  Vue.component('MdcButton', MdcButton)
}

export default plugin
// Export all components too
const version = '__VERSION__'
export {
  MdcButton,
  MdcCard,
  version,
  ripple,
}
