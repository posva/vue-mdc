import { MDCRipple } from '@material/ripple'
import '@material/ripple/mdc-ripple.scss'

export default {
  bind (el, context) {
    if (!context.modifiers.custom) {
      el.classList.add('mdc-ripple-surface')
    }
    el.mdcRipple_ = MDCRipple.attachTo(el, {
      isUnbounded: context.modifiers.unbounded,
    })
  },
  unbind (el, context) {
    if (el.mdcRipple_) {
      el.mdcRipple_.destroy()
      delete el.mdcRipple_
    }
  },
}
