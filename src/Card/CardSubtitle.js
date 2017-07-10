export default {
  functional: true,

  render (h, { data, children }) {
    const staticClass = 'mdc-card__subtitle'
    data.staticClass = data.staticClass
      ? `${data.staticClass} ${staticClass}`
      : staticClass
    return h('h2', {
      ...data,
    }, children)
  },
}
