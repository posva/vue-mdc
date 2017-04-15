import MDCRippleFoundation from '@material/ripple/foundation'
import { supportsCssVariables, getMatchesProperty } from '@material/ripple/util'
import '@material/ripple/mdc-ripple.scss'

const surfaceClass = 'mdc-ripple-surface'

let MATCHES
function createAdapter (el) {
  MATCHES = MATCHES || getMatchesProperty(HTMLElement.prototype)
  return {
    browserSupportsCssVars: () => supportsCssVariables(window),
    isSurfaceActive: /* istanbul ignore next */ () => el[MATCHES](':active'),
    addClass: (className) => el.classList.add(className),
    removeClass: (className) => el.classList.remove(className),
    registerInteractionHandler: (evtType, handler) => el.addEventListener(evtType, handler),
    deregisterInteractionHandler: (evtType, handler) => el.removeEventListener(evtType, handler),
    registerResizeHandler: (handler) => window.addEventListener('resize', handler),
    deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
    updateCssVariable: (varName, value) => el.style.setProperty(varName, value),
    computeBoundingRect: () => el.getBoundingClientRect(),
    getWindowPageOffset: /* istanbul ignore next */ () => ({ x: window.pageXOffset, y: window.pageYOffset }),
  }
}

export default {
  bind (el, binding) {
    if (!binding.modifiers.custom) {
      el.classList.add(surfaceClass)
    }
    const unbounded = binding.modifiers.unbounded
    el.mdcRipple_ = new MDCRippleFoundation(
      Object.assign(createAdapter(el), {
        isUnbounded: () => unbounded,
      })
    )
    el.mdcRipple_.init()
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
