<template lang="jade">
.mdl-tooltip(v-bind:for='target' v-bind:class="{'mdl-tooltip--large': large}")
  slot
</template>

<script>
import propFill from './mixins/prop-fill'

export default {
  props: {
    target: {
      required: true,
      type: String
    },
    large: Boolean
  },
  mounted () {
    componentHandler.upgradeElement(this.$el, 'MaterialTooltip')
  }
}
</script>
