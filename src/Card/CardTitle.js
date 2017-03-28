import { propsToClasses } from '../utils'

export default {
  functional: true,

  props: {
    large: Boolean,
  },

  render (h, { data, children, props, parent }) {
    const staticClass = propsToClasses('mdc-card__title', props)
    data.staticClass = data.staticClass
                     ? `${data.staticClass} ${staticClass}`
                     : staticClass
    return h('h1', {
      ...data,
    }, children)
  },
}
