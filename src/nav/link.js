export default {
  functional: true,
  props: {
    icon: String
  },
  render (createElement, context) {
    const children = context.children
    const data = context.data

    if (context.props.icon) {
      const icon = createElement('i', {
        'class': {
          'material-icons': true
        }
      }, context.props.icon)

      children.unshift(icon)
    }

    data['class'] = data['class'] || {}
    data['class']['mdl-navigation__link'] = true

    return createElement('a', data, children)
  }
}
