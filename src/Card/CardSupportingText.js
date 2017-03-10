export default {
  functional: true,

  render (h, { data, children }) {
    const staticClass = 'mdc-card__supporting-text'
    data.staticClass = data.staticClass
                     ? `${data.staticClass} ${staticClass}`
                     : staticClass
    return h('section', {
      ...data,
    }, children)
  },
}
