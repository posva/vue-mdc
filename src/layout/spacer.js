export default {
  functional: true,
  render (createElement, context) {
    const data = context.data

    data['class'] = data['class'] || {}
    data['class']['mdl-layout-spacer'] = true

    return createElement('div', data, [])
  }
}
