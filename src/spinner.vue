<template lang="jade">
.mdl-spinner.mdl-js-spinner(v-bind:class="{ 'mdl-spinner--single-color': singleColor, 'is-active': active }")
</template>

<script>
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
