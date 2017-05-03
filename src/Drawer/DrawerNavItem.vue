<script>
import ListItem from '../List/ListItem'

export default {
  props: {
    selected: Boolean,
    tag: {
      type: String,
      default: 'a',
    },
  },

  inject: ['mode'],

  // transform into functional once inject works
  // Actually it doesn't work yet because since it's used in
  // a slot, therefore its parent it's the container, not the Drawer
  render (h) {
    const data = {
      'class': {
        [`mdc-${this.mode}-drawer--selected`]: this.selected,
      },
    }
    return h(ListItem, {
      ...data,
      props: {
        tag: this.tag,
      },
    }, this.$slots.default)
  },

  components: { ListItem },
}
</script>
