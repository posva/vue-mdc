<script>
import { MDCRipple } from '@material/ripple'

export default {
  name: 'MdcRipple',

  render (h) {
    if (this.$slots.default.length !== 1) {
      console.error('must have exactly one child')
    }
    const child = this.$slots.default[0]
    child.data = child.data || {}
    child.data.staticClass =
      child.data.staticClass
      ? child.data.staticClass + ' mdc-ripple-surface mdc-ripple-upgraded'
      : 'mdc-ripple-surface mdc-ripple-upgraded'

    return child
  },

  mounted () {
    this._ripple = new MDCRipple(this.$el)
  }
}
</script>

<style src="@material/ripple/dist/mdc.ripple.css">
</style>
