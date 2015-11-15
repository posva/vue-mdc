<template lang="jade">
label.mdl-checkbox.mdl-js-checkbox(v-bind:for.once='id' v-bind:class='{ "is-disabled": disabled, "is-checked": isChecked }')
  input.mdl-checkbox__input(v-bind:value='value' type='checkbox' v-bind:id.once='id' v-model='checked' v-bind:disabled='disabled')
  span.mdl-checkbox__label
    slot
</template>

<script lang="coffee">
common = require '../mixins/toggle.coffee'
module.exports =
  mixins: [common]
  ready: ->
    componentHandler.upgradeElements @$el
</script>
