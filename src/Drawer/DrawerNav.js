import List from '../List/List'

export default {
  functional: true,

  props: {
    tag: {
      type: String,
      default: 'nav',
    },
  },

  render (h, { children, data, props }) {
    return h(List, {
      ...data,
      props,
    }, children)
  },
}
