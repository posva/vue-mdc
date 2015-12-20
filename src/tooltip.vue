<template lang="jade">
.mdl-tooltip(v-bind:for='for' v-bind:class='{"mdl-tooltip--large": large}')
  slot
</template>

<script lang="coffee">
propFill = require './mixins/prop-fill.coffee'

module.exports =
  props:
    for:
      required: true
      type: String
    large:
      fill: true
  ready: ->
    componentHandler.upgradeElement @$el, 'MaterialTooltip'
  mixins: [propFill]
</script>
