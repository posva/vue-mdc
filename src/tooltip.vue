<template lang="jade">
.mdl-tooltip(v-bind:for='target' v-bind:class='cssClasses')
  slot
</template>

<script>
export default {
  props: {
    target: {
      required: true,
      type: String
    },
    large: Boolean,
    left: Boolean,
    right: Boolean,
    top: Boolean,
    bottom: Boolean
  },
  computed: {
    cssClasses () {
      return {
        'mdl-tooltip--large': this.large,
        'mdl-tooltip--left': this.left,
        'mdl-tooltip--right': this.right,
        'mdl-tooltip--top': this.top,
        'mdl-tooltip--bottom': this.bottom
      }
    }
  },
  mounted () {
    componentHandler.upgradeElement(this.$el, 'MaterialTooltip')
  }
}
</script>
