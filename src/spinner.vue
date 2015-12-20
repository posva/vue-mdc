<template lang="jade">
.mdl-spinner.mdl-js-spinner(v-bind:class='{ "mdl-spinner--single-color": singleColor, "is-active": active }')
</template>

<script lang="coffee">
propFill = require './mixins/prop-fill.coffee'

module.exports =
  props:
    active:
      default: true
      type: Boolean
    singleColor:
      fill: true
  ready: ->
    componentHandler.upgradeElement @$el, 'MaterialSpinner'
  mixins: [propFill]
</script>
