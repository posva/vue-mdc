function shouldAddProp ({ hide, badge }) {
  return !hide && badge
}

export default {
  functional: true,
  props: {
    badge: [String, Number],
    overlap: [Boolean, String],
    noBackground: [Boolean, String],
    hide: Boolean
  },
  render (h, context) {
    if (context.children.length !== 1) {
      console.error('MdlBadge must have exactly one child')
    }

    const child = context.children[0]

    if (!child.elm) {
      child.data = child.data || {}

      child.data.staticClass = child.data.staticClass || ''
      child.data.staticClass += ' mdl-badge'
      if (context.props.overlap) child.data.staticClass += ' mdl-badge--overlap'
      if (context.props.noBackground) child.data.staticClass += ' mdl-badge--no-background'

      child.data.attrs = child.data.attrs || {}
      if (shouldAddProp(context.props)) {
        child.data.attrs['data-badge'] = context.props.badge
      }
    } else {
      child.elm.removeAttribute('data-badge')
      if (shouldAddProp(context.props)) {
        child.elm.dataset.badge = context.props.badge
      }

      child.elm.classList.remove('mdl-badge--no-background')
      if (context.props.noBackground) {
        child.elm.classList.add('mdl-badge--no-background')
      }

      child.elm.classList.remove('mdl-badge--overlap')
      if (context.props.overlap) {
        child.elm.classList.add('mdl-badge--overlap')
      }
    }

    return child
  }
}
