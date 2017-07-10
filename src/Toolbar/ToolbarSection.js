export default {
  functional: true,

  props: {
    align: {
      default: 'start',
    },
    shrink: Boolean,
  },

  render (h, {
    children,
    props: {
      align,
      shrink,
    },
    data,
  }) {
    let staticClass = 'mdc-toolbar__section'
    if (align !== 'center') {
      staticClass += ` mdc-toolbar__section--align-${align}`
    }
    if (shrink) staticClass += ' mdc-toolbar__section--shrink-to-fit'
    data.staticClass = data.staticClass
      ? `${data.staticClass} ${staticClass}`
      : staticClass
    return h('section', {
      ...data,
    }, children)
  },
}
