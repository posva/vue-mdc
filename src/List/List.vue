<script>
import { propsToClasses } from '../utils'

export default {
  functional: true,

  props: {
    tag: {
      type: String,
      default: 'ul',
    },
    dense: Boolean,
    twoLines: Boolean,
  },

  render (h, { data, children, props }) {
    const tag = props.tag
    delete props.tag
    const staticClass = propsToClasses('mdc-list', props)
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
