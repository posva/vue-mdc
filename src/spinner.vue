<template lang="jade">
.mdl-spinner.mdl-js-spinner(v-bind:class='{ "mdl-spinner--single-color": singleColor, "is-active": active }')
</template>

<script>
/* global componentHandler*/
import propFill from './mixins/prop-fill'

export default {
  props: {
    active: {
      default: true,
      type: Boolean
    },
    singleColor: {
      fill: true
    }
  },
  ready () {
    componentHandler.upgradeElement(this.$el, 'MaterialSpinner')
  },
  mixins: [propFill]
}
</script>
