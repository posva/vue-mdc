export default {
  functional: true,

  render (h, { children, data }) {
    const staticClass = 'mdc-toolbar__row'
    data.staticClass = data.staticClass
      ? `${data.staticClass} ${staticClass}`
                     : staticClass
    return h('div', {
      ...data,
    }, children)
  },
}
