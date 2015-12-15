<template lang="jade">
.mdl-spinner.mdl-js-spinner(v-bind:class='{ "mdl-spinner--single-color": singleColor, "is-active": active }')
</template>

<script lang="coffee">
module.exports =
  props:
    active:
      default: true
      type: Boolean
    singleColor:
      required: false
  ready: ->
    componentHandler.upgradeElement @$el, 'MaterialSpinner'
</script>
