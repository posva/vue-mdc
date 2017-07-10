<script>
export default {
  functional: true,

  props: {
    tag: {
      type: String,
      default: 'li',
    },
  },

  render (h, { data, children, props: { tag }}) {
    const staticClass = 'mdc-list-item'
    data.staticClass = data.staticClass
      ? `${data.staticClass} ${staticClass}`
      : staticClass
    return h(tag, {
      ...data,
    }, children)
  },
}
</script>

<style lang="scss" src="@material/list/mdc-list.scss">
</style>
