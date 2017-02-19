export default {
  functional: true,
  render (createElement, context) {
    const data = context.data

    data['class'] = data['class'] || {}
    data['class']['mdl-navigation'] = true

    return createElement('nav', data, context.children)
  }
}

