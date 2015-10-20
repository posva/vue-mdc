<template lang="jade">
label.mdl-checkbox.mdl-js-checkbox.mdl-js-ripple-effect(v-bind:for.once='id' v-bind:class='{ "is-disabled": disabled, "is-checked": isChecked }')
  input.mdl-checkbox__input(v-bind:value='value' type='checkbox' v-bind:id.once='id' v-model='checked' v-bind:disabled='disabled')
  span.mdl-checkbox__label
    slot
</template>

<script lang="coffee">
common = require 'coffee!../mixins/toggle.coffee'
module.exports =
  props:
    id: String
    value:
      required: false
  mixins: [common]
  ready: ->
    componentHandler.upgradeElements @$el
</script>
