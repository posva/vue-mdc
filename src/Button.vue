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

  render (h, { data, props, children }) {
    const staticClass = Object.keys(props).reduce((classes, key) => {
      if (props[key]) classes += ` mdc-button--${key}`
      return classes
    }, 'mdc-button')
    data.staticClass = data.staticClass
                     ? `${data.staticClass} ${staticClass}`
                     : staticClass
    return h('button', {
      ...data,
    }, children)
  },
}
</script>

<style lang="scss" src="@material/button/mdc-button.scss">
</style>
