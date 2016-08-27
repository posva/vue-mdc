export default {
  computed: {
    cssClasses () {
      return {
        'mdl-button--icon': this.icon,
        'mdl-button--accent': this.accent,
        'mdl-button--primary': this.primary,
        'mdl-button--mini-fab': this.miniFab,
        'mdl-button--fab': this.fab || this.miniFab,
        'mdl-button--raised': this.raised,
        'mdl-button--colored': this.colored
      }
    }
  },
  props: {
    disabled: Boolean,
    icon: {
      required: false
    },
    accent: Boolean,
    primary: Boolean,
    miniFab: Boolean,
    fab: Boolean,
    raised: Boolean,
    colored: Boolean
  },
  mounted () {
    componentHandler.upgradeElement(this.$el)
  }
}
