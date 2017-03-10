<script>
import { propsToClasses } from 'src/utils'

export default {
  name: 'MdcButton',
  functional: true,

  props: {
    dense: Boolean,
    raised: Boolean,
    compact: Boolean,
    primary: Boolean,
    accent: Boolean,
    themeDark: Boolean,
  },

  render (h, { data, props, children }) {
    const staticClass = propsToClasses('mdc-button', props)
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
