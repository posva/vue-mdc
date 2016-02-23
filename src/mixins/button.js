/* global componentHandler*/
import propFill from './prop-fill'

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
    disabled: {
      fill: true
    },
    icon: {
      required: false
    },
    accent: {
      fill: true
    },
    primary: {
      fill: true
    },
    miniFab: {
      fill: true
    },
    fab: {
      fill: true
    },
    raised: {
      fill: true
    },
    colored: {
      fill: true
    }
  },
  mixins: [propFill],
  ready () {
    componentHandler.upgradeElement(this.$el)
  }
}
