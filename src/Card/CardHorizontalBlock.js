export default {
  functional: true,

  render (h, { data, children }) {
    const staticClass = 'mdc-card__horizontal-block'
    data.staticClass = data.staticClass
      ? `${data.staticClass} ${staticClass}`
      : staticClass
    return h('div', {
      ...data,
    }, children)
  },
}
