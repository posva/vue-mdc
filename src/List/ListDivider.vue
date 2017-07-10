<script>
export default {
  functional: true,

  render (h, { data }) {
    const staticClass = 'mdc-list-divider'
    data.staticClass = data.staticClass
      ? `${data.staticClass} ${staticClass}`
      : staticClass
    return h('hr', {
      ...data,
    })
  },
}
</script>
