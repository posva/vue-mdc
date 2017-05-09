<script>
import { propsToClasses } from './utils'

export default {
  functional: true,

  props: {
    mini: Boolean,
    plain: Boolean,
  },

  render (h, { data, props, children }) {
    const staticClass = propsToClasses('mdc-fab', props)
    data.staticClass = data.staticClass
                     ? `${data.staticClass} ${staticClass}`
                     : staticClass
    return h('button', {
      ...data,
    }, children)
  },
}
</script>

<style lang="scss" src="@material/fab/mdc-fab.scss">
</style>
