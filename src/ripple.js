import { MDCRipple } from '@material/ripple'
import '@material/ripple/mdc-ripple.scss'

const surfaceClass = 'mdc-ripple-surface'

export default {
  bind (el, binding) {
    if (!binding.modifiers.custom) {
      el.classList.add(surfaceClass)
    }
    el.mdcRipple_ = MDCRipple.attachTo(el, {
      isUnbounded: binding.modifiers.unbounded,
    })
  },

  componentUpdated (el, binding, vnode, oldVnode) {
    // Always recreate for functional components
    if (vnode.functionalContext) {
      el.mdcRipple_.destroy()
      binding.def.bind(el, binding)
    }
  },

  unbind (el, binding) {
    // istanbul ignore else
    if (el.mdcRipple_) {
      el.mdcRipple_.destroy()
      el.classList.remove(surfaceClass)
      delete el.mdcRipple_
    }
  },
}
