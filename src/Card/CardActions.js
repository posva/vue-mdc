import { propsToClasses } from 'src/utils'

export default {
  functional: true,

  props: {
    vertical: Boolean,
  },

  render (h, { data, children, props }) {
    const staticClass = propsToClasses('mdc-card__actions', props)
    data.staticClass = data.staticClass
                     ? `${data.staticClass} ${staticClass}`
                     : staticClass
    children.forEach(child => {
      if (child.tag === 'button') {
        child.data.staticClass += ' mdc-card__action'
      }
    })
    return h('section', {
      ...data,
    }, children)
  },
}
