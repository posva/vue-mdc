export default {
  name: 'MdcCardTitle',
  functional: true,

  props: {
    large: Boolean,
  },

  render (h, { data, children, props, parent }) {
    const staticClass = Object.keys(props).reduce((classes, key) => {
      if (props[key]) classes += ` mdc-card__title--${key}`
      return classes
    }, 'mdc-card__title')
    data.staticClass = data.staticClass
                     ? `${data.staticClass} ${staticClass}`
                     : staticClass
    return h('h1', {
      ...data,
    }, children)
  },
}
