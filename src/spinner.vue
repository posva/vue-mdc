<template lang="jade">
.mdl-spinner.mdl-js-spinner(v-bind:class="{ 'mdl-spinner--single-color': singleColor, 'is-active': active, 'is-upgraded': upgraded }")
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
  data: function () {
    return {
      upgraded: false
    }
  },
  mounted () {
    componentHandler.upgradeElement(this.$el, 'MaterialSpinner')
    this.upgraded = true
  }
}
</script>
