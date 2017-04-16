<script>
import ListItem from '../List/ListItem'

export default {
  props: {
    selected: Boolean,
  },

  inject: ['mode'],

  // transform into functional once inject works
  render (h) {
    const data = {
      'class': {
        [`mdc-${this.mode}-drawer--selected`]: this.selected,
      },
      props: {
        tag: 'a',
      },
    }
    return h(ListItem, {
      ...data,
    }, this.$slots.default)
  },

  components: { ListItem },
}
</script>
