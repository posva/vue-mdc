export default {
  functional: true,

  render (h, { data, children }) {
    const staticClass = 'mdc-dialog__header__title'
    data.staticClass = data.staticClass
      ? `${data.staticClass} ${staticClass}`
      : staticClass
    return h('h2', {
      ...data,
    }, children)
  },
}
