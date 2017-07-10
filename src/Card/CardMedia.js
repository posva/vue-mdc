export default {
  functional: true,

  props: {
    media: String,
  },

  render (h, { data, children, props }) {
    const staticClass = 'mdc-card__media'
    data.staticClass = data.staticClass
      ? `${data.staticClass} ${staticClass}`
      : staticClass
    data.style = data.style || {}
    data.style['background-image'] = data.style['background-image'] || `url(${props.media})`

    return h('section', {
      ...data,
    }, children)
  },
}
