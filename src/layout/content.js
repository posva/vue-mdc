export default {
  functional: true,
  render (createElement, context) {
    const data = context.data

    data['class'] = data['class'] || {}
    data['class']['mdl-layout__content'] = true

    return createElement('main', data, context.children)
  }
}
