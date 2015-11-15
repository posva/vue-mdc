<template lang="jade">
.mdl-tooltip(v-bind:for='for' v-bind:class='{"mdl-tooltip--large": large}')
  slot
</template>

<script lang="coffee">
module.exports =
  props:
    for:
      required: true
      type: String
    large:
      required: false
  ready: ->
    componentHandler.upgradeElement @$el, 'MaterialTooltip'
</script>
