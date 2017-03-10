export default {
  functional: true,

  render (h, { data, children }) {
    const staticClass = 'mdc-card__primary'
    data.staticClass = data.staticClass
                     ? `${data.staticClass} ${staticClass}`
                     : staticClass
    return h('section', {
      ...data,
    }, children)
  },
}
