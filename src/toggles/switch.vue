<template lang="jade">
label.mdl-switch.mdl-js-switch(v-bind:for.once='id' v-bind:class='{ "is-disabled": disabled, "is-checked": isChecked }')
  input.mdl-switch__input(v-bind:value='value' type='checkbox' v-bind:id.once='id' v-model='checked' v-bind:disabled='disabled')
  span.mdl-switch__label
    slot
</template>

<script lang="coffee">
common = require '../mixins/toggle.coffee'
module.exports =
  mixins: [common]
  ready: ->
    componentHandler.upgradeElements @$el
</script>
