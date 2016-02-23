<template lang="jade">
.mdl-tooltip(v-bind:for='for' v-bind:class='{"mdl-tooltip--large": large}')
  slot
</template>

<script>
/* global componentHandler*/
import propFill from './mixins/prop-fill'

export default {
  props: {
    for: {
      required: true,
      type: String
    },
    large: {
      fill: true
    }
  },
  ready () {
    componentHandler.upgradeElement(this.$el, 'MaterialTooltip')
  },
  mixins: [propFill]
}
</script>
