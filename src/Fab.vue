<script>
import { propsToClasses } from './utils'

export default {
  functional: true,

  props: {
    mini: Boolean,
    plain: Boolean,
    icon: String,
  },

  render (h, {
    data,
    props: {
      mini,
      plain,
      icon,
    },
    children,
  }) {
    const staticClass = propsToClasses('mdc-fab', { mini, plain })
    data.staticClass = data.staticClass
                     ? `${data.staticClass} ${staticClass}`
                     : staticClass

    if (icon) {
      data.staticClass += ' material-icons'
      children.unshift(h('span', {
        staticClass: 'mdc-fab__icon',
      }, [icon]))
    }

    return h('button', {
      ...data,
    }, children)
  },
}
</script>

<style lang="scss" src="@material/fab/mdc-fab.scss">
</style>
