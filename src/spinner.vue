<template lang="jade">
.mdl-spinner.mdl-js-spinner(v-bind:class="{ 'mdl-spinner--single-color': singleColor, 'is-active': active }")
</template>

<script>
/* global componentHandler*/

export default {
  props: {
    active: {
      default: true,
      type: Boolean
    },
    singleColor: Boolean
  },
  mounted () {
    componentHandler.upgradeElement(this.$el, 'MaterialSpinner')
  }
}
</script>
