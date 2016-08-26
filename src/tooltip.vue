<template lang="jade">
.mdl-tooltip(v-bind:for='target' v-bind:class="{'mdl-tooltip--large': large}")
  slot
</template>

<script>
/* global componentHandler*/

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
