<template lang="jade">
label.mdl-icon-toggle.mdl-js-icon-toggle(v-bind:for.once='id' v-bind:class='{ "is-disabled": disabled, "is-checked": isChecked }')
  input.mdl-icon-toggle__input(v-bind:value='value' type='checkbox' v-bind:id.once='id' v-model='checked' v-bind:disabled='disabled')
  i.mdl-icon-toggle__label.material-icons {{icon}}
</template>

<script lang="coffee">
common = require '../mixins/toggle.coffee'
module.exports =
  props:
    icon:
      required: true
      type: String
  mixins: [common]
  ready: ->
    componentHandler.upgradeElements @$el
</script>
