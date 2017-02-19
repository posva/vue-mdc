<script>
export default {
  name: 'MdcButton',
  functional: true,

  props: {
    dense: Boolean,
    raised: Boolean,
    compact: Boolean,
    primary: Boolean,
    accent: Boolean,
  },

  render (h, { data, props, children, parent }) {
    const staticClass = Object.keys(props).reduce((classes, key) => {
      if (props[key]) classes += ` mdc-button--${key}`
      return classes
    }, 'mdc-button')
    return h('button', {
      ...data,
      staticClass,
    }, children)
  },
}
</script>

<style lang="scss" src="@material/button/mdc-button.scss">
</style>
